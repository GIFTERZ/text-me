import React, { useEffect } from "react";
import { useAdminLetters } from "../../../stores/dku/danfesta/useAdminLetters";
import { usePatchLetterStatus } from "../../../stores/dku/danfesta/usePatchLetterStatus";

const Admin = () => {
  const { letters, getLetters } = useAdminLetters();
  const { patchLetterStatus } = usePatchLetterStatus();

  useEffect(() => {
    getLetters();
  }, []);

  return (
    <div>
      <table>
        {letters.map(({ id, contents, contactInfo, status }) => (
          <tr key={id}>
            <td>{contents}</td>
            <td>{contactInfo}</td>
            <td>{status}</td>
            {status === "ACTIVATE" && (
              <td>
                <button
                  onClick={() => patchLetterStatus(id, "deleted", getLetters)}
                >
                  삭제
                </button>
              </td>
            )}
            {(status === "DELETED" || status === "DEACTIVATED") && (
              <td>
                <button
                  onClick={() => patchLetterStatus(id, "activate", getLetters)}
                >
                  활성화
                </button>
              </td>
            )}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Admin;
