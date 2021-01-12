interface thumbTemplateProps {
  name: string | string[];
  cadastur: string | string[];
  email: string | string[];
  day: string | string[];  
  month: string | string[];
  year: string | string[];
  hour: string | string[];
}

export default function getThumbnailTemplate({ name, email, cadastur, day, month, year, hour }: thumbTemplateProps) {
  return `  
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  </head>
  <body>
      <div style="margin: 0 auto;">
        <svg width="570" height="270" viewBox="0 0 570 270" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.50055 0H563.499C562.558 1.25349 562 2.81159 562 4.5C562 8.64214 565.358 12 569.5 12C569.668 12 569.835 11.9945 570 11.9836V17.0164C569.835 17.0055 569.668 17 569.5 17C565.358 17 562 20.3579 562 24.5C562 28.6421 565.358 32 569.5 32C569.668 32 569.835 31.9945 570 31.9836V37.0164C569.835 37.0055 569.668 37 569.5 37C565.358 37 562 40.3579 562 44.5C562 48.6421 565.358 52 569.5 52C569.668 52 569.835 51.9945 570 51.9836V57.0164C569.835 57.0055 569.668 57 569.5 57C565.358 57 562 60.3579 562 64.5C562 68.6421 565.358 72 569.5 72C569.668 72 569.835 71.9945 570 71.9836V77.0164C569.835 77.0055 569.668 77 569.5 77C565.358 77 562 80.3579 562 84.5C562 88.6421 565.358 92 569.5 92C569.668 92 569.835 91.9945 570 91.9836V97.0164C569.835 97.0055 569.668 97 569.5 97C565.358 97 562 100.358 562 104.5C562 108.642 565.358 112 569.5 112C569.668 112 569.835 111.994 570 111.984V117.016C569.835 117.006 569.668 117 569.5 117C565.358 117 562 120.358 562 124.5C562 128.642 565.358 132 569.5 132C569.668 132 569.835 131.994 570 131.984V137.016C569.835 137.006 569.668 137 569.5 137C565.358 137 562 140.358 562 144.5C562 148.642 565.358 152 569.5 152C569.668 152 569.835 151.994 570 151.984V157.016C569.835 157.006 569.668 157 569.5 157C565.358 157 562 160.358 562 164.5C562 168.642 565.358 172 569.5 172C569.581 172 569.662 171.999 569.742 171.996C569.828 171.993 569.914 171.989 570 171.984V177.016C569.835 177.006 569.668 177 569.5 177C565.358 177 562 180.358 562 184.5C562 188.642 565.358 192 569.5 192C569.668 192 569.835 191.994 570 191.984V197.016C569.835 197.006 569.668 197 569.5 197C565.358 197 562 200.358 562 204.5C562 208.642 565.358 212 569.5 212C569.668 212 569.835 211.994 570 211.984V217.016C569.835 217.006 569.668 217 569.5 217C565.358 217 562 220.358 562 224.5C562 228.642 565.358 232 569.5 232C569.575 232 569.65 231.999 569.724 231.997C569.759 231.996 569.794 231.994 569.83 231.993C569.887 231.99 569.943 231.987 570 231.984V237.016C569.835 237.006 569.668 237 569.5 237C565.358 237 562 240.358 562 244.5C562 248.642 565.358 252 569.5 252C569.57 252 569.639 251.999 569.709 251.997C569.806 251.994 569.903 251.99 570 251.984V257.016C569.935 257.012 569.87 257.009 569.804 257.006C569.703 257.002 569.602 257 569.5 257C565.358 257 562 260.358 562 264.5C562 266.673 562.924 268.63 564.401 270H5.59906C7.07584 268.63 8 266.673 8 264.5C8 260.358 4.64215 257 0.5 257C0.332001 257 0.165253 257.005 0 257.016V251.984C0.165253 251.995 0.332001 252 0.5 252C4.64215 252 8 248.642 8 244.5C8 240.358 4.64215 237 0.5 237C0.332001 237 0.165253 237.005 0 237.016V231.984C0.165253 231.995 0.332001 232 0.5 232C4.64215 232 8 228.642 8 224.5C8 220.358 4.64215 217 0.5 217C0.332001 217 0.165253 217.005 0 217.016V211.984C0.165253 211.995 0.332001 212 0.5 212C4.64215 212 8 208.642 8 204.5C8 200.358 4.64215 197 0.5 197C0.421021 197 0.342316 197.001 0.263916 197.004C0.175537 197.006 0.0875549 197.011 0 197.016V191.984C0.165253 191.995 0.332001 192 0.5 192C4.64215 192 8 188.642 8 184.5C8 180.358 4.64215 177 0.5 177C0.332001 177 0.165253 177.005 0 177.016V171.984C0.165253 171.995 0.332001 172 0.5 172C4.64215 172 8 168.642 8 164.5C8 160.358 4.64215 157 0.5 157C0.439514 157 0.379181 157.001 0.319031 157.002L0.253418 157.004L0.211365 157.005L0.147644 157.008C0.11499 157.01 0.0823975 157.011 0.0498657 157.013L0 157.016V151.984C0.165253 151.995 0.332001 152 0.5 152C4.64215 152 8 148.642 8 144.5C8 140.358 4.64215 137 0.5 137C0.332001 137 0.165253 137.005 0 137.016V131.984C0.0801697 131.989 0.160706 131.993 0.241577 131.996C0.327362 131.999 0.413513 132 0.5 132C4.64215 132 8 128.642 8 124.5C8 120.358 4.64215 117 0.5 117C0.417419 117 0.335114 117.001 0.253174 117.004C0.168427 117.007 0.0840149 117.011 0 117.016V111.984C0.165253 111.995 0.332001 112 0.5 112C4.64215 112 8 108.642 8 104.5C8 100.358 4.64215 97 0.5 97C0.332001 97 0.165253 97.0055 0 97.0164V91.9836C0.104828 91.9905 0.210266 91.9952 0.316254 91.9978C0.377319 91.9993 0.438568 92 0.5 92C4.64215 92 8 88.6421 8 84.5C8 80.3579 4.64215 77 0.5 77C0.332001 77 0.165253 77.0055 0 77.0164V71.9836C0.165253 71.9945 0.332001 72 0.5 72C4.64215 72 8 68.6421 8 64.5C8 60.3579 4.64215 57 0.5 57C0.332001 57 0.165253 57.0055 0 57.0164V51.9836C0.165253 51.9945 0.332001 52 0.5 52C4.64215 52 8 48.6421 8 44.5C8 40.3579 4.64215 37 0.5 37C0.332001 37 0.165253 37.0055 0 37.0164V31.9836C0.165253 31.9945 0.332001 32 0.5 32C4.64215 32 8 28.6421 8 24.5C8 20.3579 4.64215 17 0.5 17C0.332001 17 0.165253 17.0055 0 17.0164V11.9836C0.165253 11.9945 0.332001 12 0.5 12C4.64215 12 8 8.64209 8 4.5C8 2.81165 7.44208 1.25354 6.50055 0ZM569.5 12C569.668 12 569.835 11.9945 570 11.9836V17.0164C569.835 17.0055 569.668 17 569.5 17C565.358 17 562 20.3579 562 24.5C562 28.6421 565.358 32 569.5 32C569.668 32 569.835 31.9945 570 31.9836V37.0164C569.835 37.0055 569.668 37 569.5 37C565.358 37 562 40.3579 562 44.5C562 48.6421 565.358 52 569.5 52C569.668 52 569.835 51.9945 570 51.9836V57.0164C569.835 57.0055 569.668 57 569.5 57C565.358 57 562 60.3579 562 64.5C562 68.6421 565.358 72 569.5 72C569.668 72 569.835 71.9945 570 71.9836V77.0164C569.835 77.0055 569.668 77 569.5 77C565.358 77 562 80.3579 562 84.5C562 88.6421 565.358 92 569.5 92C569.668 92 569.835 91.9945 570 91.9836V97.0164C569.835 97.0055 569.668 97 569.5 97C565.358 97 562 100.358 562 104.5C562 108.642 565.358 112 569.5 112C569.668 112 569.835 111.994 570 111.984V117.016C569.835 117.006 569.668 117 569.5 117C565.358 117 562 120.358 562 124.5C562 128.642 565.358 132 569.5 132C569.668 132 569.835 131.994 570 131.984V137.016C569.835 137.006 569.668 137 569.5 137C565.358 137 562 140.358 562 144.5C562 148.642 565.358 152 569.5 152C569.668 152 569.835 151.994 570 151.984V157.016C569.835 157.006 569.668 157 569.5 157C565.358 157 562 160.358 562 164.5C562 168.642 565.358 172 569.5 172C569.668 172 569.835 171.994 570 171.984V177.016C569.835 177.006 569.668 177 569.5 177C565.358 177 562 180.358 562 184.5C562 188.642 565.358 192 569.5 192C569.668 192 569.835 191.994 570 191.984V197.016C569.835 197.006 569.668 197 569.5 197C565.358 197 562 200.358 562 204.5C562 208.642 565.358 212 569.5 212C569.668 212 569.835 211.994 570 211.984V217.016C569.835 217.006 569.668 217 569.5 217C565.358 217 562 220.358 562 224.5C562 228.642 565.358 232 569.5 232C569.668 232 569.835 231.994 570 231.984V237.016C569.928 237.012 569.855 237.008 569.783 237.005C569.689 237.002 569.595 237 569.5 237C565.358 237 562 240.358 562 244.5C562 248.642 565.358 252 569.5 252C569.668 252 569.835 251.994 570 251.984V257.016C569.835 257.006 569.668 257 569.5 257C565.358 257 562 260.358 562 264.5C562 266.673 562.924 268.63 564.401 270H368V0H563.499C562.558 1.25349 562 2.81159 562 4.5C562 8.64214 565.358 12 569.5 12Z" fill="#00457C"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M569.5 12C569.668 12 569.835 11.9945 570 11.9836V17.0164C569.835 17.0055 569.668 17 569.5 17C565.358 17 562 20.3579 562 24.5C562 28.6421 565.358 32 569.5 32C569.668 32 569.835 31.9945 570 31.9836V37.0164C569.835 37.0055 569.668 37 569.5 37C565.358 37 562 40.3579 562 44.5C562 48.6421 565.358 52 569.5 52C569.668 52 569.835 51.9945 570 51.9836V57.0164C569.835 57.0055 569.668 57 569.5 57C565.358 57 562 60.3579 562 64.5C562 68.6421 565.358 72 569.5 72C569.668 72 569.835 71.9945 570 71.9836V77.0164C569.835 77.0055 569.668 77 569.5 77C565.358 77 562 80.3579 562 84.5C562 88.6421 565.358 92 569.5 92C569.668 92 569.835 91.9945 570 91.9836V97.0164C569.835 97.0055 569.668 97 569.5 97C565.358 97 562 100.358 562 104.5C562 108.642 565.358 112 569.5 112C569.668 112 569.835 111.994 570 111.984V117.016C569.835 117.006 569.668 117 569.5 117C565.358 117 562 120.358 562 124.5C562 128.642 565.358 132 569.5 132C569.668 132 569.835 131.994 570 131.984V137.016C569.835 137.006 569.668 137 569.5 137C565.358 137 562 140.358 562 144.5C562 148.642 565.358 152 569.5 152C569.668 152 569.835 151.994 570 151.984V157.016C569.835 157.006 569.668 157 569.5 157C565.358 157 562 160.358 562 164.5C562 168.642 565.358 172 569.5 172C569.668 172 569.835 171.994 570 171.984V177.016C569.835 177.006 569.668 177 569.5 177C565.358 177 562 180.358 562 184.5C562 188.642 565.358 192 569.5 192C569.668 192 569.835 191.994 570 191.984V197.016C569.835 197.006 569.668 197 569.5 197C565.358 197 562 200.358 562 204.5C562 208.642 565.358 212 569.5 212C569.668 212 569.835 211.994 570 211.984V217.016C569.835 217.006 569.668 217 569.5 217C565.358 217 562 220.358 562 224.5C562 228.642 565.358 232 569.5 232C569.668 232 569.835 231.994 570 231.984V237.016C569.928 237.012 569.855 237.008 569.783 237.005C569.689 237.002 569.595 237 569.5 237C565.358 237 562 240.358 562 244.5C562 248.642 565.358 252 569.5 252C569.668 252 569.835 251.994 570 251.984V257.016C569.835 257.006 569.668 257 569.5 257C565.358 257 562 260.358 562 264.5C562 266.673 562.924 268.63 564.401 270H368V0H563.499C562.558 1.25349 562 2.81159 562 4.5C562 8.64214 565.358 12 569.5 12Z" fill="url(#paint0_linear)"/>
        <path d="M45.958 57.1131C39.6782 56.314 36.9413 66.5444 36 73H72.4138C71.7697 70.7809 69.679 65.9492 66.4687 64.3757C62.4557 62.4087 62.753 69.8226 56.8079 69.52C50.8628 69.2174 53.0922 58.0209 45.958 57.1131Z" fill="#FCB302"/>
        <path d="M66.3874 64.2839C62.3197 62.2848 60.2332 68.688 54.2069 68.3804C56.6174 71.8494 68.1451 73.2343 72.4138 72.9679C71.7609 70.7125 69.6416 65.8832 66.3874 64.2839Z" fill="#42B7A5"/>
        <path d="M86.5005 37.0722C86.2619 36.6787 85.9321 36.3766 85.5111 36.1658C85.1041 35.955 84.62 35.8497 84.0586 35.8497C83.0201 35.8497 82.1992 36.1869 81.5957 36.8614C81.0063 37.5359 80.7116 38.4423 80.7116 39.5806C80.7116 40.8593 81.0274 41.836 81.6589 42.5105C82.3044 43.171 83.2377 43.5012 84.4586 43.5012C85.904 43.5012 86.9355 42.8477 87.553 41.5409H83.4061V38.5688H91.1105V42.5737C90.7877 43.3607 90.3106 44.0984 89.6791 44.787C89.0616 45.4755 88.2757 46.0447 87.3214 46.4943C86.3672 46.93 85.2796 47.1478 84.0586 47.1478C82.5711 47.1478 81.2519 46.8316 80.1012 46.1992C78.9644 45.5528 78.0803 44.6605 77.4488 43.5223C76.8313 42.37 76.5226 41.0561 76.5226 39.5806C76.5226 38.1191 76.8313 36.8193 77.4488 35.681C78.0803 34.5287 78.9644 33.6364 80.1012 33.004C81.2379 32.3576 82.55 32.0344 84.0376 32.0344C85.904 32.0344 87.4477 32.4841 88.6687 33.3835C89.8896 34.2828 90.6474 35.5124 90.9421 37.0722H86.5005Z" fill="white"/>
        <path d="M97.0012 32.182V40.8031C97.0012 41.6041 97.1836 42.2224 97.5485 42.658C97.9274 43.0937 98.4957 43.3115 99.2535 43.3115C100.011 43.3115 100.58 43.0937 100.959 42.658C101.352 42.2084 101.548 41.5901 101.548 40.8031V32.182H105.674V40.8031C105.674 42.1662 105.386 43.3326 104.811 44.3022C104.235 45.2577 103.45 45.9814 102.453 46.4733C101.471 46.9511 100.376 47.1899 99.1693 47.1899C97.9625 47.1899 96.8819 46.9511 95.9276 46.4733C94.9873 45.9814 94.2436 45.2577 93.6962 44.3022C93.163 43.3466 92.8963 42.1803 92.8963 40.8031V32.182H97.0012Z" fill="white"/>
        <path d="M112.071 32.182V47.0424H107.946V32.182H112.071Z" fill="white"/>
        <path d="M123.809 44.6184H118.547L117.747 47.0424H113.411L118.821 32.182H123.578L128.967 47.0424H124.609L123.809 44.6184ZM122.778 41.4566L121.178 36.6506L119.599 41.4566H122.778Z" fill="white"/>
        <path d="M140.214 32.182C141.771 32.182 143.133 32.4982 144.298 33.1305C145.476 33.7488 146.382 34.6201 147.013 35.7443C147.645 36.8685 147.96 38.1542 147.96 39.6016C147.96 41.035 147.638 42.3138 146.992 43.4379C146.36 44.5621 145.455 45.4474 144.276 46.0939C143.112 46.7262 141.757 47.0424 140.214 47.0424H134.341V32.182H140.214ZM139.898 43.3958C141.105 43.3958 142.052 43.0656 142.74 42.4051C143.427 41.7446 143.771 40.8102 143.771 39.6016C143.771 38.3791 143.427 37.4376 142.74 36.7771C142.052 36.1026 141.105 35.7653 139.898 35.7653H138.467V43.3958H139.898Z" fill="white"/>
        <path d="M153.946 35.4913V37.9154H158.682V41.0561H153.946V43.7331H159.314V47.0424H149.82V32.182H159.314V35.4913H153.946Z" fill="white"/>
        <path d="M88.2056 49.6471V52.9354H84.2481V64.5075H80.1222V52.9354H76.2068V49.6471H88.2056Z" fill="white"/>
        <path d="M93.7737 49.6471V58.2683C93.7737 59.0692 93.9561 59.6875 94.321 60.1232C94.6999 60.5588 95.2683 60.7766 96.0261 60.7766C96.7839 60.7766 97.3523 60.5588 97.7312 60.1232C98.1241 59.6735 98.3206 59.0552 98.3206 58.2683V49.6471H102.446V58.2683C102.446 59.6313 102.159 60.7977 101.583 61.7673C101.008 62.7229 100.222 63.4466 99.2257 63.9384C98.2434 64.4162 97.1488 64.6551 95.9419 64.6551C94.735 64.6551 93.6544 64.4162 92.7001 63.9384C91.7599 63.4466 91.0161 62.7229 90.4688 61.7673C89.9355 60.8117 89.6689 59.6454 89.6689 58.2683V49.6471H93.7737Z" fill="white"/>
        <path d="M112.233 64.5075L109.286 59.0271H108.844V64.5075H104.718V49.6471H111.223C112.416 49.6471 113.426 49.8579 114.254 50.2795C115.082 50.687 115.706 51.2561 116.127 51.9868C116.548 52.7035 116.759 53.5115 116.759 54.4109C116.759 55.4226 116.478 56.315 115.917 57.0879C115.37 57.8467 114.563 58.3877 113.496 58.7109L116.843 64.5075H112.233ZM108.844 56.2026H110.886C111.447 56.2026 111.868 56.0691 112.149 55.8021C112.43 55.5351 112.57 55.1486 112.57 54.6427C112.57 54.165 112.423 53.7926 112.128 53.5256C111.847 53.2445 111.433 53.104 110.886 53.104H108.844V56.2026Z" fill="white"/>
        <path d="M122.761 49.6471V64.5075H118.635V49.6471H122.761Z" fill="white"/>
        <path d="M130.71 64.6551C128.984 64.6551 127.567 64.2476 126.458 63.4325C125.349 62.6034 124.753 61.423 124.669 59.8913H129.068C129.11 60.4112 129.265 60.7907 129.531 61.0296C129.798 61.2684 130.142 61.3879 130.563 61.3879C130.942 61.3879 131.25 61.2965 131.489 61.1139C131.741 60.9171 131.868 60.6501 131.868 60.3129C131.868 59.8773 131.664 59.54 131.257 59.3011C130.85 59.0622 130.191 58.7952 129.279 58.5001C128.31 58.1769 127.524 57.8678 126.921 57.5727C126.332 57.2635 125.812 56.8209 125.363 56.2447C124.928 55.6545 124.711 54.8887 124.711 53.9471C124.711 52.9916 124.949 52.1765 125.426 51.502C125.904 50.8135 126.563 50.2935 127.405 49.9422C128.247 49.5909 129.201 49.4152 130.268 49.4152C131.994 49.4152 133.369 49.8228 134.394 50.6378C135.432 51.4388 135.987 52.57 136.057 54.0315H131.573C131.559 53.5818 131.419 53.2445 131.152 53.0197C130.899 52.7948 130.57 52.6824 130.163 52.6824C129.854 52.6824 129.601 52.7738 129.405 52.9564C129.208 53.1391 129.11 53.3991 129.11 53.7364C129.11 54.0174 129.215 54.2633 129.426 54.4741C129.65 54.6708 129.924 54.8465 130.247 55.0011C130.57 55.1416 131.047 55.3243 131.678 55.5491C132.619 55.8723 133.39 56.1955 133.994 56.5187C134.611 56.8279 135.138 57.2705 135.573 57.8467C136.022 58.4088 136.246 59.1255 136.246 59.9967C136.246 60.882 136.022 61.676 135.573 62.3786C135.138 63.0812 134.499 63.6363 133.657 64.0438C132.829 64.4513 131.847 64.6551 130.71 64.6551Z" fill="white"/>
        <path d="M155.489 49.6471V64.5075H151.363V56.3079L148.563 64.5075H145.111L142.29 56.2447V64.5075H138.164V49.6471H143.153L146.879 59.3011L150.521 49.6471H155.489Z" fill="white"/>
        <path d="M164.952 64.6551C163.563 64.6551 162.286 64.3319 161.121 63.6855C159.956 63.025 159.03 62.1186 158.343 60.9663C157.669 59.8 157.332 58.4861 157.332 57.0246C157.332 55.5632 157.669 54.2563 158.343 53.104C159.03 51.9376 159.956 51.0313 161.121 50.3849C162.286 49.7384 163.563 49.4152 164.952 49.4152C166.356 49.4152 167.633 49.7384 168.784 50.3849C169.948 51.0313 170.868 51.9376 171.541 53.104C172.215 54.2563 172.552 55.5632 172.552 57.0246C172.552 58.4861 172.215 59.8 171.541 60.9663C170.868 62.1186 169.948 63.025 168.784 63.6855C167.619 64.3319 166.342 64.6551 164.952 64.6551ZM164.952 60.8188C166.005 60.8188 166.833 60.4745 167.436 59.7859C168.054 59.0973 168.363 58.1769 168.363 57.0246C168.363 55.8442 168.054 54.9168 167.436 54.2422C166.833 53.5537 166.005 53.2094 164.952 53.2094C163.886 53.2094 163.051 53.5537 162.447 54.2422C161.844 54.9168 161.542 55.8442 161.542 57.0246C161.542 58.191 161.844 59.1184 162.447 59.807C163.051 60.4815 163.886 60.8188 164.952 60.8188Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M56.4827 61.6207C60.1156 61.6207 69.3793 48.863 69.3793 41.7959C69.3793 34.7289 63.6053 29 56.4827 29C49.3602 29 43.5862 34.7289 43.5862 41.7959C43.5862 48.863 52.8499 61.6207 56.4827 61.6207ZM56.2977 45.2898C58.5797 45.2898 60.4296 43.4439 60.4296 41.1669C60.4296 38.8898 58.5797 37.0439 56.2977 37.0439C54.0158 37.0439 52.1659 38.8898 52.1659 41.1669C52.1659 43.4439 54.0158 45.2898 56.2977 45.2898Z" fill="#8DC022"/>
        <path d="M82.7362 72.9553L81.4637 71.0938H80.5148V72.9553H80V68.4992H81.5446C82.1183 68.4992 82.5523 68.6182 82.8465 68.8562C83.1456 69.0942 83.2952 69.4066 83.2952 69.7934C83.2952 70.1164 83.1873 70.3926 82.9715 70.6221C82.7607 70.8474 82.4469 70.994 82.03 71.062L83.354 72.9553H82.7362ZM80.5148 70.7305H81.552C81.954 70.7305 82.2556 70.6455 82.4567 70.4755C82.6626 70.3055 82.7656 70.0781 82.7656 69.7934C82.7656 69.5001 82.6675 69.2749 82.4714 69.1176C82.2752 68.9561 81.9663 68.8754 81.5446 68.8754H80.5148V70.7305Z" fill="white"/>
        <path d="M87.774 68.4992V72.9553H87.2591V68.4992H87.774Z" fill="white"/>
        <path d="M94.1916 73C93.716 73 93.2845 72.9043 92.8971 72.7131C92.5097 72.5176 92.2032 72.2477 91.9777 71.9035C91.757 71.555 91.6467 71.1618 91.6467 70.7241C91.6467 70.2864 91.757 69.8954 91.9777 69.5511C92.2032 69.2026 92.5097 68.9327 92.8971 68.7415C93.2845 68.546 93.716 68.4482 94.1916 68.4482C94.6722 68.4482 95.1061 68.546 95.4935 68.7415C95.8809 68.9327 96.1849 69.2026 96.4056 69.5511C96.6262 69.8954 96.7366 70.2864 96.7366 70.7241C96.7366 71.1618 96.6262 71.555 96.4056 71.9035C96.1849 72.2477 95.8809 72.5176 95.4935 72.7131C95.1061 72.9043 94.6722 73 94.1916 73ZM94.1916 72.6111C94.5741 72.6111 94.9174 72.5346 95.2214 72.3816C95.5254 72.2286 95.7657 72.0097 95.9422 71.725C96.1187 71.436 96.207 71.1023 96.207 70.7241C96.207 70.3459 96.1187 70.0144 95.9422 69.7296C95.7657 69.4449 95.5254 69.226 95.2214 69.073C94.9174 68.92 94.5741 68.8435 94.1916 68.8435C93.8091 68.8435 93.4659 68.92 93.1619 69.073C92.8578 69.226 92.6176 69.4449 92.441 69.7296C92.2645 70.0144 92.1763 70.3459 92.1763 70.7241C92.1763 71.1023 92.2645 71.436 92.441 71.725C92.6176 72.0097 92.8578 72.2286 93.1619 72.3816C93.4659 72.5346 93.8091 72.6111 94.1916 72.6111Z" fill="white"/>
        <path d="M107.104 68.4992C107.673 68.4992 108.161 68.5885 108.568 68.767C108.975 68.9455 109.286 69.2026 109.502 69.5384C109.718 69.8741 109.825 70.2736 109.825 70.7369C109.825 71.1958 109.718 71.5932 109.502 71.929C109.286 72.2605 108.975 72.5155 108.568 72.694C108.161 72.8682 107.673 72.9553 107.104 72.9553H105.581V68.4992H107.104ZM107.104 72.5856C107.82 72.5856 108.364 72.4241 108.737 72.1011C109.114 71.7738 109.303 71.3191 109.303 70.7369C109.303 70.1504 109.114 69.6935 108.737 69.3662C108.364 69.0347 107.82 68.869 107.104 68.869H106.096V72.5856H107.104Z" fill="white"/>
        <path d="M114.232 68.8626V70.5265H116.181V70.8962H114.232V72.5856H116.402V72.9553H113.717V68.4929H116.402V68.8626H114.232Z" fill="white"/>
        <path d="M127.695 68.4992V71.8716C127.695 72.2116 127.574 72.4857 127.334 72.694C127.094 72.898 126.773 73 126.371 73C125.954 73 125.62 72.8916 125.37 72.6748C125.125 72.4538 125.002 72.1563 125.002 71.7823H125.525C125.53 72.0246 125.598 72.2222 125.731 72.3752C125.868 72.5282 126.081 72.6047 126.371 72.6047C126.645 72.6047 126.849 72.5346 126.981 72.3943C127.113 72.2541 127.18 72.0798 127.18 71.8716V68.4992H127.695Z" fill="white"/>
        <path d="M134.91 71.8971H132.571L132.123 72.9553H131.578L133.454 68.5566H134.035L135.903 72.9553H135.359L134.91 71.8971ZM134.756 71.5273L133.741 69.1176L132.726 71.5273H134.756Z" fill="white"/>
        <path d="M143.548 72.9553H143.033L140.187 69.2069V72.9553H139.672V68.4992H140.187L143.033 72.2413V68.4992H143.548V72.9553Z" fill="white"/>
        <path d="M148.171 68.8626V70.5265H150.12V70.8962H148.171V72.5856H150.341V72.9553H147.656V68.4929H150.341V68.8626H148.171Z" fill="white"/>
        <path d="M154.813 68.4992V72.9553H154.298V68.4992H154.813Z" fill="white"/>
        <path d="M161.657 72.9553L160.384 71.0938H159.436V72.9553H158.921V68.4992H160.465C161.039 68.4992 161.473 68.6182 161.767 68.8562C162.066 69.0942 162.216 69.4066 162.216 69.7934C162.216 70.1164 162.108 70.3926 161.892 70.6221C161.681 70.8474 161.368 70.994 160.951 71.062L162.275 72.9553H161.657ZM159.436 70.7305H160.473C160.875 70.7305 161.176 70.6455 161.377 70.4755C161.583 70.3055 161.686 70.0781 161.686 69.7934C161.686 69.5001 161.588 69.2749 161.392 69.1176C161.196 68.9561 160.887 68.8754 160.465 68.8754H159.436V70.7305Z" fill="white"/>
        <path d="M168.489 73C168.014 73 167.582 72.9043 167.195 72.7131C166.807 72.5176 166.501 72.2477 166.275 71.9035C166.055 71.555 165.944 71.1618 165.944 70.7241C165.944 70.2864 166.055 69.8954 166.275 69.5511C166.501 69.2026 166.807 68.9327 167.195 68.7415C167.582 68.546 168.014 68.4482 168.489 68.4482C168.97 68.4482 169.404 68.546 169.791 68.7415C170.179 68.9327 170.483 69.2026 170.703 69.5511C170.924 69.8954 171.034 70.2864 171.034 70.7241C171.034 71.1618 170.924 71.555 170.703 71.9035C170.483 72.2477 170.179 72.5176 169.791 72.7131C169.404 72.9043 168.97 73 168.489 73ZM168.489 72.6111C168.872 72.6111 169.215 72.5346 169.519 72.3816C169.823 72.2286 170.063 72.0097 170.24 71.725C170.416 71.436 170.505 71.1023 170.505 70.7241C170.505 70.3459 170.416 70.0144 170.24 69.7296C170.063 69.4449 169.823 69.226 169.519 69.073C169.215 68.92 168.872 68.8435 168.489 68.8435C168.107 68.8435 167.764 68.92 167.46 69.073C167.156 69.226 166.915 69.4449 166.739 69.7296C166.562 70.0144 166.474 70.3459 166.474 70.7241C166.474 71.1023 166.562 71.436 166.739 71.725C166.915 72.0097 167.156 72.2286 167.46 72.3816C167.764 72.5346 168.107 72.6111 168.489 72.6111Z" fill="white"/>
        <circle cx="367.5" cy="266.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="257.5" r="3.5" fill="#023762"/>
        <ellipse cx="367.5" cy="203" rx="3.5" ry="4" fill="#023762"/>
        <circle cx="367.5" cy="148.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="94.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="230.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="175.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="121.5" r="3.5" fill="#023762"/>
        <ellipse cx="367.5" cy="67" rx="3.5" ry="4" fill="#023762"/>
        <circle cx="367.5" cy="30.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="248.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="193.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="139.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="85.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="221.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="166.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="112.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="57.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="21.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="239.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="184.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="130.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="76.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="39.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="212.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="157.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="103.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="48.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="12.5" r="3.5" fill="#023762"/>
        <circle cx="367.5" cy="3.5" r="3.5" fill="#023762"/>
        <path d="M426.455 49.005H422.285L421.595 51H419.39L423.155 40.515H425.6L429.365 51H427.145L426.455 49.005ZM425.885 47.325L424.37 42.945L422.855 47.325H425.885ZM432.977 42.555C433.597 42.555 434.142 42.68 434.612 42.93C435.082 43.17 435.452 43.485 435.722 43.875V42.69H437.837V51.06C437.837 51.83 437.682 52.515 437.372 53.115C437.062 53.725 436.597 54.205 435.977 54.555C435.357 54.915 434.607 55.095 433.727 55.095C432.547 55.095 431.577 54.82 430.817 54.27C430.067 53.72 429.642 52.97 429.542 52.02H431.627C431.737 52.4 431.972 52.7 432.332 52.92C432.702 53.15 433.147 53.265 433.667 53.265C434.277 53.265 434.772 53.08 435.152 52.71C435.532 52.35 435.722 51.8 435.722 51.06V49.77C435.452 50.16 435.077 50.485 434.597 50.745C434.127 51.005 433.587 51.135 432.977 51.135C432.277 51.135 431.637 50.955 431.057 50.595C430.477 50.235 430.017 49.73 429.677 49.08C429.347 48.42 429.182 47.665 429.182 46.815C429.182 45.975 429.347 45.23 429.677 44.58C430.017 43.93 430.472 43.43 431.042 43.08C431.622 42.73 432.267 42.555 432.977 42.555ZM435.722 46.845C435.722 46.335 435.622 45.9 435.422 45.54C435.222 45.17 434.952 44.89 434.612 44.7C434.272 44.5 433.907 44.4 433.517 44.4C433.127 44.4 432.767 44.495 432.437 44.685C432.107 44.875 431.837 45.155 431.627 45.525C431.427 45.885 431.327 46.315 431.327 46.815C431.327 47.315 431.427 47.755 431.627 48.135C431.837 48.505 432.107 48.79 432.437 48.99C432.777 49.19 433.137 49.29 433.517 49.29C433.907 49.29 434.272 49.195 434.612 49.005C434.952 48.805 435.222 48.525 435.422 48.165C435.622 47.795 435.722 47.355 435.722 46.845ZM446.563 46.665C446.563 46.965 446.543 47.235 446.503 47.475H440.428C440.478 48.075 440.688 48.545 441.058 48.885C441.428 49.225 441.883 49.395 442.423 49.395C443.203 49.395 443.758 49.06 444.088 48.39H446.353C446.113 49.19 445.653 49.85 444.973 50.37C444.293 50.88 443.458 51.135 442.468 51.135C441.668 51.135 440.948 50.96 440.308 50.61C439.678 50.25 439.183 49.745 438.823 49.095C438.473 48.445 438.298 47.695 438.298 46.845C438.298 45.985 438.473 45.23 438.823 44.58C439.173 43.93 439.663 43.43 440.293 43.08C440.923 42.73 441.648 42.555 442.468 42.555C443.258 42.555 443.963 42.725 444.583 43.065C445.213 43.405 445.698 43.89 446.038 44.52C446.388 45.14 446.563 45.855 446.563 46.665ZM444.388 46.065C444.378 45.525 444.183 45.095 443.803 44.775C443.423 44.445 442.958 44.28 442.408 44.28C441.888 44.28 441.448 44.44 441.088 44.76C440.738 45.07 440.523 45.505 440.443 46.065H444.388ZM451.651 42.57C452.641 42.57 453.441 42.885 454.051 43.515C454.661 44.135 454.966 45.005 454.966 46.125V51H452.866V46.41C452.866 45.75 452.701 45.245 452.371 44.895C452.041 44.535 451.591 44.355 451.021 44.355C450.441 44.355 449.981 44.535 449.641 44.895C449.311 45.245 449.146 45.75 449.146 46.41V51H447.046V42.69H449.146V43.725C449.426 43.365 449.781 43.085 450.211 42.885C450.651 42.675 451.131 42.57 451.651 42.57ZM455.373 46.815C455.373 45.975 455.538 45.23 455.868 44.58C456.208 43.93 456.668 43.43 457.248 43.08C457.828 42.73 458.473 42.555 459.183 42.555C459.723 42.555 460.238 42.675 460.728 42.915C461.218 43.145 461.608 43.455 461.898 43.845V39.9H464.028V51H461.898V49.77C461.638 50.18 461.273 50.51 460.803 50.76C460.333 51.01 459.788 51.135 459.168 51.135C458.468 51.135 457.828 50.955 457.248 50.595C456.668 50.235 456.208 49.73 455.868 49.08C455.538 48.42 455.373 47.665 455.373 46.815ZM461.913 46.845C461.913 46.335 461.813 45.9 461.613 45.54C461.413 45.17 461.143 44.89 460.803 44.7C460.463 44.5 460.098 44.4 459.708 44.4C459.318 44.4 458.958 44.495 458.628 44.685C458.298 44.875 458.028 45.155 457.818 45.525C457.618 45.885 457.518 46.315 457.518 46.815C457.518 47.315 457.618 47.755 457.818 48.135C458.028 48.505 458.298 48.79 458.628 48.99C458.968 49.19 459.328 49.29 459.708 49.29C460.098 49.29 460.463 49.195 460.803 49.005C461.143 48.805 461.413 48.525 461.613 48.165C461.813 47.795 461.913 47.355 461.913 46.845ZM464.489 46.815C464.489 45.975 464.654 45.23 464.984 44.58C465.324 43.93 465.779 43.43 466.349 43.08C466.929 42.73 467.574 42.555 468.284 42.555C468.904 42.555 469.444 42.68 469.904 42.93C470.374 43.18 470.749 43.495 471.029 43.875V42.69H473.144V51H471.029V49.785C470.759 50.175 470.384 50.5 469.904 50.76C469.434 51.01 468.889 51.135 468.269 51.135C467.569 51.135 466.929 50.955 466.349 50.595C465.779 50.235 465.324 49.73 464.984 49.08C464.654 48.42 464.489 47.665 464.489 46.815ZM471.029 46.845C471.029 46.335 470.929 45.9 470.729 45.54C470.529 45.17 470.259 44.89 469.919 44.7C469.579 44.5 469.214 44.4 468.824 44.4C468.434 44.4 468.074 44.495 467.744 44.685C467.414 44.875 467.144 45.155 466.934 45.525C466.734 45.885 466.634 46.315 466.634 46.815C466.634 47.315 466.734 47.755 466.934 48.135C467.144 48.505 467.414 48.79 467.744 48.99C468.084 49.19 468.444 49.29 468.824 49.29C469.214 49.29 469.579 49.195 469.919 49.005C470.259 48.805 470.529 48.525 470.729 48.165C470.929 47.795 471.029 47.355 471.029 46.845ZM484.465 42.57C485.485 42.57 486.305 42.885 486.925 43.515C487.555 44.135 487.87 45.005 487.87 46.125V51H485.77V46.41C485.77 45.76 485.605 45.265 485.275 44.925C484.945 44.575 484.495 44.4 483.925 44.4C483.355 44.4 482.9 44.575 482.56 44.925C482.23 45.265 482.065 45.76 482.065 46.41V51H479.965V46.41C479.965 45.76 479.8 45.265 479.47 44.925C479.14 44.575 478.69 44.4 478.12 44.4C477.54 44.4 477.08 44.575 476.74 44.925C476.41 45.265 476.245 45.76 476.245 46.41V51H474.145V42.69H476.245V43.695C476.515 43.345 476.86 43.07 477.28 42.87C477.71 42.67 478.18 42.57 478.69 42.57C479.34 42.57 479.92 42.71 480.43 42.99C480.94 43.26 481.335 43.65 481.615 44.16C481.885 43.68 482.275 43.295 482.785 43.005C483.305 42.715 483.865 42.57 484.465 42.57ZM496.538 46.665C496.538 46.965 496.518 47.235 496.478 47.475H490.403C490.453 48.075 490.663 48.545 491.033 48.885C491.403 49.225 491.858 49.395 492.398 49.395C493.178 49.395 493.733 49.06 494.063 48.39H496.328C496.088 49.19 495.628 49.85 494.948 50.37C494.268 50.88 493.433 51.135 492.443 51.135C491.643 51.135 490.923 50.96 490.283 50.61C489.653 50.25 489.158 49.745 488.798 49.095C488.448 48.445 488.273 47.695 488.273 46.845C488.273 45.985 488.448 45.23 488.798 44.58C489.148 43.93 489.638 43.43 490.268 43.08C490.898 42.73 491.623 42.555 492.443 42.555C493.233 42.555 493.938 42.725 494.558 43.065C495.188 43.405 495.673 43.89 496.013 44.52C496.363 45.14 496.538 45.855 496.538 46.665ZM494.363 46.065C494.353 45.525 494.158 45.095 493.778 44.775C493.398 44.445 492.933 44.28 492.383 44.28C491.863 44.28 491.423 44.44 491.063 44.76C490.713 45.07 490.498 45.505 490.418 46.065H494.363ZM501.626 42.57C502.616 42.57 503.416 42.885 504.026 43.515C504.636 44.135 504.941 45.005 504.941 46.125V51H502.841V46.41C502.841 45.75 502.676 45.245 502.346 44.895C502.016 44.535 501.566 44.355 500.996 44.355C500.416 44.355 499.956 44.535 499.616 44.895C499.286 45.245 499.121 45.75 499.121 46.41V51H497.021V42.69H499.121V43.725C499.401 43.365 499.756 43.085 500.186 42.885C500.626 42.675 501.106 42.57 501.626 42.57ZM508.333 44.415V48.435C508.333 48.715 508.398 48.92 508.528 49.05C508.668 49.17 508.898 49.23 509.218 49.23H510.193V51H508.873C507.103 51 506.218 50.14 506.218 48.42V44.415H505.228V42.69H506.218V40.635H508.333V42.69H510.193V44.415H508.333ZM514.343 51.135C513.543 51.135 512.823 50.96 512.183 50.61C511.543 50.25 511.038 49.745 510.668 49.095C510.308 48.445 510.128 47.695 510.128 46.845C510.128 45.995 510.313 45.245 510.683 44.595C511.063 43.945 511.578 43.445 512.228 43.095C512.878 42.735 513.603 42.555 514.403 42.555C515.203 42.555 515.928 42.735 516.578 43.095C517.228 43.445 517.738 43.945 518.108 44.595C518.488 45.245 518.678 45.995 518.678 46.845C518.678 47.695 518.483 48.445 518.093 49.095C517.713 49.745 517.193 50.25 516.533 50.61C515.883 50.96 515.153 51.135 514.343 51.135ZM514.343 49.305C514.723 49.305 515.078 49.215 515.408 49.035C515.748 48.845 516.018 48.565 516.218 48.195C516.418 47.825 516.518 47.375 516.518 46.845C516.518 46.055 516.308 45.45 515.888 45.03C515.478 44.6 514.973 44.385 514.373 44.385C513.773 44.385 513.268 44.6 512.858 45.03C512.458 45.45 512.258 46.055 512.258 46.845C512.258 47.635 512.453 48.245 512.843 48.675C513.243 49.095 513.743 49.305 514.343 49.305Z" fill="white"/>
        <path d="M243.424 46L241.348 42.496H239.8V46H238.96V37.612H241.48C242.416 37.612 243.124 37.836 243.604 38.284C244.092 38.732 244.336 39.32 244.336 40.048C244.336 40.656 244.16 41.176 243.808 41.608C243.464 42.032 242.952 42.308 242.272 42.436L244.432 46H243.424ZM239.8 41.812H241.492C242.148 41.812 242.64 41.652 242.968 41.332C243.304 41.012 243.472 40.584 243.472 40.048C243.472 39.496 243.312 39.072 242.992 38.776C242.672 38.472 242.168 38.32 241.48 38.32H239.8V41.812ZM248.643 38.296V41.428H251.823V42.124H248.643V45.304H252.183V46H247.803V37.6H252.183V38.296H248.643ZM260.546 37.612V38.308H258.218V46H257.378V38.308H255.038V37.612H260.546ZM264.512 37.612V46H263.672V37.612H264.512ZM272.679 46L270.603 42.496H269.055V46H268.215V37.612H270.735C271.671 37.612 272.379 37.836 272.859 38.284C273.347 38.732 273.591 39.32 273.591 40.048C273.591 40.656 273.415 41.176 273.063 41.608C272.719 42.032 272.207 42.308 271.527 42.436L273.687 46H272.679ZM269.055 41.812H270.747C271.403 41.812 271.895 41.652 272.223 41.332C272.559 41.012 272.727 40.584 272.727 40.048C272.727 39.496 272.567 39.072 272.247 38.776C271.927 38.472 271.423 38.32 270.735 38.32H269.055V41.812ZM281.918 44.008H278.102L277.37 46H276.482L279.542 37.72H280.49L283.538 46H282.65L281.918 44.008ZM281.666 43.312L280.01 38.776L278.354 43.312H281.666ZM289.17 37.612C290.098 37.612 290.894 37.78 291.558 38.116C292.222 38.452 292.73 38.936 293.082 39.568C293.434 40.2 293.61 40.952 293.61 41.824C293.61 42.688 293.434 43.436 293.082 44.068C292.73 44.692 292.222 45.172 291.558 45.508C290.894 45.836 290.098 46 289.17 46H286.686V37.612H289.17ZM289.17 45.304C290.338 45.304 291.226 45 291.834 44.392C292.45 43.776 292.758 42.92 292.758 41.824C292.758 40.72 292.45 39.86 291.834 39.244C291.226 38.62 290.338 38.308 289.17 38.308H287.526V45.304H289.17ZM301.818 44.008H298.002L297.27 46H296.382L299.442 37.72H300.39L303.438 46H302.55L301.818 44.008ZM301.566 43.312L299.91 38.776L298.254 43.312H301.566ZM241.444 48.612C242.372 48.612 243.168 48.78 243.832 49.116C244.496 49.452 245.004 49.936 245.356 50.568C245.708 51.2 245.884 51.952 245.884 52.824C245.884 53.688 245.708 54.436 245.356 55.068C245.004 55.692 244.496 56.172 243.832 56.508C243.168 56.836 242.372 57 241.444 57H238.96V48.612H241.444ZM241.444 56.304C242.612 56.304 243.5 56 244.108 55.392C244.724 54.776 245.032 53.92 245.032 52.824C245.032 51.72 244.724 50.86 244.108 50.244C243.5 49.62 242.612 49.308 241.444 49.308H239.8V56.304H241.444ZM250.073 49.296V52.428H253.253V53.124H250.073V56.304H253.613V57H249.233V48.6H253.613V49.296H250.073ZM261.527 52.8C261.527 51.976 261.711 51.24 262.079 50.592C262.455 49.936 262.963 49.428 263.603 49.068C264.251 48.7 264.975 48.516 265.775 48.516C266.711 48.516 267.531 48.756 268.235 49.236C268.939 49.716 269.431 50.38 269.711 51.228H267.779C267.587 50.828 267.315 50.528 266.963 50.328C266.619 50.128 266.219 50.028 265.763 50.028C265.275 50.028 264.839 50.144 264.455 50.376C264.079 50.6 263.783 50.92 263.567 51.336C263.359 51.752 263.255 52.24 263.255 52.8C263.255 53.352 263.359 53.84 263.567 54.264C263.783 54.68 264.079 55.004 264.455 55.236C264.839 55.46 265.275 55.572 265.763 55.572C266.219 55.572 266.619 55.472 266.963 55.272C267.315 55.064 267.587 54.76 267.779 54.36H269.711C269.431 55.216 268.939 55.884 268.235 56.364C267.539 56.836 266.719 57.072 265.775 57.072C264.975 57.072 264.251 56.892 263.603 56.532C262.963 56.164 262.455 55.656 262.079 55.008C261.711 54.36 261.527 53.624 261.527 52.8ZM278.082 55.404H274.746L274.194 57H272.43L275.442 48.612H277.398L280.41 57H278.634L278.082 55.404ZM277.626 54.06L276.414 50.556L275.202 54.06H277.626ZM287.656 57L285.808 53.736H285.016V57H283.336V48.624H286.48C287.128 48.624 287.68 48.74 288.136 48.972C288.592 49.196 288.932 49.504 289.156 49.896C289.388 50.28 289.504 50.712 289.504 51.192C289.504 51.744 289.344 52.244 289.024 52.692C288.704 53.132 288.228 53.436 287.596 53.604L289.6 57H287.656ZM285.016 52.476H286.42C286.876 52.476 287.216 52.368 287.44 52.152C287.664 51.928 287.776 51.62 287.776 51.228C287.776 50.844 287.664 50.548 287.44 50.34C287.216 50.124 286.876 50.016 286.42 50.016H285.016V52.476ZM298.523 48.624V49.98H296.291V57H294.611V49.98H292.379V48.624H298.523ZM303.229 49.98V52.08H306.049V53.412H303.229V55.632H306.409V57H301.549V48.612H306.409V49.98H303.229ZM311.416 48.624V57H309.736V48.624H311.416ZM319.196 57L317.348 53.736H316.556V57H314.876V48.624H318.02C318.668 48.624 319.22 48.74 319.676 48.972C320.132 49.196 320.472 49.504 320.696 49.896C320.928 50.28 321.044 50.712 321.044 51.192C321.044 51.744 320.884 52.244 320.564 52.692C320.244 53.132 319.768 53.436 319.136 53.604L321.14 57H319.196ZM316.556 52.476H317.96C318.416 52.476 318.756 52.368 318.98 52.152C319.204 51.928 319.316 51.62 319.316 51.228C319.316 50.844 319.204 50.548 318.98 50.34C318.756 50.124 318.416 50.016 317.96 50.016H316.556V52.476ZM329.499 55.404H326.163L325.611 57H323.847L326.859 48.612H328.815L331.827 57H330.051L329.499 55.404ZM329.043 54.06L327.831 50.556L326.619 54.06H329.043Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear" x1="368" y1="0" x2="570" y2="270" gradientUnits="userSpaceOnUse">
        <stop offset="0.342332" stop-color="#00457C"/>
        <stop offset="1" stop-color="#006FC8"/>
        </linearGradient>
        </defs>
        </svg>          

            <div style="margin-top: -220px; margin-left: 355px; font-size: 50px;
              line-height: 1px; letter-spacing: -4px; font-family: 'Poppins', sans-serif;
              font-weight: 600; text-align: center; color: #F0F0F5;">
              <p>${day}</p>
              <p style="text-transform: uppercase;">${month}</p>
              <p style="font-size: 15px; font-weight: normal; margin-top: -20px; letter-spacing: 0px;">${year}</p>
              <p style="font-size: 20px; letter-spacing: 0; margin-top: 40px;">${hour}</p>
            </div>

            <div>
              <p style="font-weight: 600; font-family: 'Poppins', sans-serif; position: absolute; margin-top: -30px; margin-left: 40px; color: #F0F0F5;">${name}</p>
              <p style="font-family: 'Poppins', sans-serif; position: absolute; margin-top: -10px; margin-left: 40px; font-size: 10px; color: #F0F0F5;">${cadastur}</p>
            </div>
        </div>
  </body>
  </html>  
  `;
}