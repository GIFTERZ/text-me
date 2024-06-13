import React, { Fragment, useEffect, useState } from "react";
import { useCaptureMode } from "../../stores/useCaptureMode";
import { LETTER_PROPS } from "./BackgroundLetterProps";
import BackgroundLetter from "./BackgroundLetter";
import uuid from "react-uuid";
import Head from "next/head";
import PreloadCardLink from "../common/PreloadCardLink";
import { LetterInfo } from "../../types";

interface Props {
  letters: LetterInfo[];
  backgroundImage: string;
  defaultCardImage: string;
  openLetter: (id: string) => void;
}
function Background({
  letters,
  backgroundImage,
  defaultCardImage,
  openLetter,
}: Props) {
  const { isCaptureMode } = useCaptureMode();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let newWidth = window.innerHeight * (1560 / 844);

    if (window.innerWidth > 1560) {
      newWidth = window.innerWidth;
    }

    setWidth(newWidth);

    window.addEventListener("resize", function () {
      setWidth(newWidth);
    });

    return window.removeEventListener("resize", function () {
      setWidth(newWidth);
    });
  }, []);

  const onLetterClick = async (e: any) => {
    const {
      target: {
        parentElement: { id },
      },
    } = e;

    if (!id) {
      return;
    }

    openLetter(id);
  };

  return (
    <>
      <Head>
        <link
          rel="preload"
          fetchpriority="high"
          as="image"
          href={`${backgroundImage}`}
        />
        <PreloadCardLink />
        <link
          rel="preload"
          fetchpriority="high"
          as="image"
          href="/static/images/line-1.webp"
        />
        <link
          rel="preload"
          fetchpriority="high"
          as="image"
          href="/static/images/line-1.webp"
        />
      </Head>
      <svg
        width={isCaptureMode ? width * 0.95 : width}
        height="100%"
        viewBox="10 0 1560 854"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        onClick={onLetterClick}
      >
        <rect
          id="back"
          x="2"
          y="1"
          width="1560"
          height="854"
          fill="url(#pattern0)"
        />
        {LETTER_PROPS.map((p, i) => (
          <Fragment key={uuid()}>
            <BackgroundLetter
              props={p}
              imageUrl={letters[i]?.imageUrl}
              defaultImageUrl={defaultCardImage}
            />
            {i == 20 && (
              <rect
                x="2"
                y="1"
                width="1560"
                height="844"
                fill="url(#pattern21)"
                style={{ pointerEvents: "none" }}
              />
            )}
          </Fragment>
        ))}
        <rect
          x="2"
          width="1560"
          height="844"
          fill="url(#pattern48)"
          style={{ pointerEvents: "none" }}
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_291_1244"
              transform="scale(0.000244145 0.000451264)"
            />
          </pattern>
          <filter
            id="filter0_dii_291_1244"
            x="19"
            y="422"
            width="136.775"
            height="157.892"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern1"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter1_dii_291_1244"
            x="187"
            y="394"
            width="151.326"
            height="168.048"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern3"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern4"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter2_dii_291_1244"
            x="308"
            y="354"
            width="137.466"
            height="158.4"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern5"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern6"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter3_dii_291_1244"
            x="469"
            y="388"
            width="141.743"
            height="161.492"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern7"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern8"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter4_dii_291_1244"
            x="589"
            y="354"
            width="157.341"
            height="171.814"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern9"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern10"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter5_dii_291_1244"
            x="731"
            y="347"
            width="162.764"
            height="174.874"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern11"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern12"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter6_dii_291_1244"
            x="930"
            y="381"
            width="128.238"
            height="151.457"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern13"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern14"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter7_dii_291_1244"
            x="1069"
            y="339"
            width="150.482"
            height="167.495"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern15"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern16"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter8_dii_291_1244"
            x="1221"
            y="366"
            width="157.005"
            height="171.613"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern17"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern18"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter9_dii_291_1244"
            x="1420"
            y="396"
            width="145.171"
            height="163.902"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern19"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern20"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern21"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image3_291_1244"
              transform="translate(-0.126923 -0.143365) scale(0.000938004 0.00170814)"
            />
          </pattern>
          <filter
            id="filter10_dii_291_1244"
            x="0"
            y="202"
            width="137.633"
            height="158.522"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern22"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern23"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter11_dii_291_1244"
            x="116"
            y="249"
            width="120"
            height="145"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern24"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern25"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter12_dii_291_1244"
            x="243"
            y="213"
            width="147.867"
            height="165.749"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern26"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern27"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter13_dii_291_1244"
            x="366"
            y="177"
            width="148.638"
            height="166.269"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern28"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern29"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter14_dii_291_1244"
            x="633"
            y="141"
            width="145.167"
            height="163.899"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern30"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern31"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter15_dii_291_1244"
            x="509"
            y="205"
            width="129.843"
            height="152.688"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern32"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern33"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter16_dii_291_1244"
            x="737"
            y="88"
            width="161.701"
            height="174.305"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern34"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern35"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter17_dii_291_1244"
            x="854"
            y="135"
            width="133.472"
            height="155.437"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern36"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern37"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter18_dii_291_1244"
            x="1021"
            y="100"
            width="153.426"
            height="169.399"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern38"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern39"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter19_dii_291_1244"
            x="1121"
            y="75"
            width="138.122"
            height="158.88"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern40"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern41"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter20_dii_291_1244"
            x="1208"
            y="196"
            width="153.119"
            height="169.204"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern42"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern43"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter21_dii_291_1244"
            x="1334"
            y="217"
            width="131.359"
            height="153.843"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern44"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern45"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <filter
            id="filter22_dii_291_1244"
            x="1420"
            y="175"
            width="149.616"
            height="166.922"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_291_1244"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.241962 0 0 0 0 0.306636 0 0 0 0 0.320833 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_291_1244"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_291_1244"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_291_1244"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0 0.416667 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_291_1244"
              result="effect3_innerShadow_291_1244"
            />
          </filter>
          <pattern
            id="pattern46"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern47"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_291_1244"
              transform="translate(-0.00204082) scale(0.00313776 0.0025)"
            />
          </pattern>
          <pattern
            id="pattern48"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image4_291_1244"
              transform="translate(-0.0839744 -0.106659) scale(0.000721565 0.0013337)"
            />
          </pattern>
          <image
            id="image0_291_1244"
            width="4096"
            height="2216"
            xlinkHref={`${backgroundImage}`}
          />
          <rect id="image1_291_1244" width="320" height="400" fill="#f4f4f4" />
          <image
            id="image3_291_1244"
            height="600"
            xlinkHref={"/static/images/line-1.webp"}
            x="130"
            y="83"
          />
          <image
            id="image4_291_1244"
            height="760"
            xlinkHref={"/static/images/line-2.webp"}
            x="100"
            y="80"
          />
        </defs>
      </svg>
    </>
  );
}

export default Background;
