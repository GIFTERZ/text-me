import { AxiosError, InternalAxiosRequestConfig } from "axios";
import { PATH } from "../constants/api";
import { deleteRefreshToken, getRefreshToken, setRefreshToken } from "./utils";
import visitorApi from "./visitorApi";
import { CustomError } from "../types/api";
import { debounce } from "lodash";

const ACCESS_TOKEN_TIME = 1800_000;

const refreshTokenRotation = () => {
  let accessToken: string = null;
  let expirationTime: number = null;

  const setAccessToken = (token: string, createdAt: string) => {
    accessToken = token;
    expirationTime = new Date(createdAt).getTime() + ACCESS_TOKEN_TIME;
  };

  const isExpired = () => {
    const now = new Date().getTime();
    return expirationTime < now;
  };

  const getNewTokens = async function () {
    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      return;
    }

    return await visitorApi.post(PATH.USER.REFRESH, {
      refreshToken,
    });
  };

  return {
    setAuthHeader: async function (
      config: InternalAxiosRequestConfig
    ): Promise<InternalAxiosRequestConfig> {
      if (!accessToken || isExpired()) {
        await getNewTokens()
          .then((res) => {
            const {
              data: { accessToken, createdAt, refreshToken },
            } = res;
            setAccessToken(accessToken, createdAt);
            setRefreshToken(refreshToken);

            config.headers.Authorization = `Bearer ${accessToken}`;
          })
          .catch((err: AxiosError<CustomError>) => {
            setAccessToken(null, null);
            deleteRefreshToken();
            debounce(() => alert("로그인이 만료되었습니다."), 500);
          });

        return config;
      }

      config.headers.Authorization = `Bearer ${accessToken}`;

      return config;
    },
    setAccessToken: (at: string, createdAt: string) => {
      accessToken = at;
      expirationTime = new Date(createdAt).getTime() + ACCESS_TOKEN_TIME;
    },
    deleteAccessToken: () => {
      accessToken = null;
      expirationTime = null;
    },
  };
};

export { refreshTokenRotation };
