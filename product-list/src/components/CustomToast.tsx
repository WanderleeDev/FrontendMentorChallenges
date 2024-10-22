interface Props {
  message: string;
}

export default function CustomToast({ message }: Props) {
  return (
    <figure className="flex flex-col gap-4 rounded-xl p-4 bg-background max-w-sm w-full shadow-md shadow-text-clr-primary border-[.1rem] border-text-clr-primary-light">
      <figcaption>
        <svg height="25" width="175" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="nonzero">
            <g fill="currentColor">
              <path d="M43.174 3.884a.278.278 0 0 1-.205.074h-6.455c-.062 0-.094.031-.094.093v3.951c0 .062.031.093.094.093h4.396c.086 0 .154.025.203.074.05.05.074.118.074.204v.983a.274.274 0 0 1-.074.204.271.271 0 0 1-.203.074h-4.396c-.062 0-.094.031-.094.093v5.398a.272.272 0 0 1-.074.204.271.271 0 0 1-.203.074h-1.225a.276.276 0 0 1-.205-.074.275.275 0 0 1-.073-.204V2.695c0-.086.024-.154.073-.204a.28.28 0 0 1 .205-.074h8.051c.087 0 .154.025.205.074a.28.28 0 0 1 .074.204v.983a.28.28 0 0 1-.074.206zM50.168 6.073c.135.074.186.192.148.353l-.26 1.206c-.014.124-.074.186-.186.186a.458.458 0 0 1-.148-.019 1.989 1.989 0 0 0-.631-.093 1.57 1.57 0 0 0-.279.019c-.581.025-1.061.226-1.438.604-.377.377-.565.869-.565 1.475v5.324a.272.272 0 0 1-.074.204.275.275 0 0 1-.204.074h-1.225a.271.271 0 0 1-.203-.074c-.051-.049-.074-.117-.074-.204V6.24c0-.086.023-.154.074-.203a.271.271 0 0 1 .203-.074h1.225c.086 0 .154.024.204.074.05.049.074.117.074.203v.854c0 .05.009.078.028.084.018.006.039-.01.064-.047.557-.841 1.311-1.261 2.264-1.261.372 0 .706.067 1.003.203zM53.701 14.858c-.674-.464-1.147-1.11-1.419-1.939-.223-.667-.334-1.422-.334-2.263 0-.878.104-1.62.315-2.227.271-.816.748-1.456 1.428-1.92.681-.464 1.49-.695 2.431-.695.891 0 1.667.231 2.329.695.66.464 1.134 1.098 1.418 1.901.223.631.334 1.373.334 2.227 0 .865-.111 1.626-.334 2.281-.271.829-.742 1.476-1.409 1.939-.668.464-1.454.695-2.356.695-.928.001-1.729-.23-2.403-.694zm3.701-1.262c.371-.278.637-.671.798-1.179.136-.47.204-1.051.204-1.743 0-.692-.062-1.268-.186-1.726-.161-.507-.427-.899-.798-1.178-.371-.279-.823-.418-1.354-.418-.508 0-.945.14-1.316.418-.371.278-.638.671-.799 1.178-.136.433-.203 1.008-.203 1.726 0 .717.067 1.299.203 1.743.148.508.412.9.789 1.179.377.279.832.417 1.363.417a2.1 2.1 0 0 0 1.299-.417zM69.609 6.713c.594.588.891 1.382.891 2.384v6.029a.276.276 0 0 1-.074.204.276.276 0 0 1-.205.074h-1.224a.272.272 0 0 1-.204-.074.272.272 0 0 1-.074-.204V9.45c0-.618-.18-1.119-.538-1.503-.358-.383-.835-.575-1.429-.575-.531 0-.98.158-1.345.474-.365.315-.579.739-.64 1.271v6.011a.276.276 0 0 1-.074.204.276.276 0 0 1-.205.074h-1.225a.271.271 0 0 1-.203-.074.272.272 0 0 1-.074-.204V6.24c0-.086.024-.154.074-.203a.271.271 0 0 1 .203-.074h1.225c.087 0 .155.024.205.074a.275.275 0 0 1 .074.203v.52c0 .037.012.062.037.074.023.013.043.007.055-.019.52-.655 1.299-.982 2.338-.982 1.014 0 1.819.293 2.412.88zM78.087 7.353a.275.275 0 0 1-.204.074H75.99c-.062 0-.092.031-.092.093v4.842c0 .532.113.909.343 1.132.229.223.597.334 1.104.334h.445c.087 0 .155.025.204.074a.28.28 0 0 1 .074.204v.965c0 .174-.093.272-.278.297l-.761.019c-.952 0-1.664-.167-2.133-.501-.471-.334-.705-.958-.705-1.874V7.52c0-.062-.031-.093-.094-.093h-1.02a.274.274 0 0 1-.204-.074.272.272 0 0 1-.074-.204V6.24c0-.086.024-.154.074-.203a.274.274 0 0 1 .204-.074h1.02c.062 0 .094-.031.094-.093V3.792c0-.087.024-.154.074-.204a.271.271 0 0 1 .203-.074h1.15c.087 0 .154.024.205.074.049.05.074.117.074.204V5.87c0 .062.03.093.092.093h1.893c.086 0 .154.024.204.074.05.049.074.117.074.203v.909a.268.268 0 0 1-.073.204zM86.714 12.863c.062-.111.13-.167.204-.167.062 0 .117.019.166.056l.762.464c.099.062.148.143.148.241l-.037.148a3.627 3.627 0 0 1-1.42 1.429c-.611.347-1.326.52-2.143.52-.878 0-1.62-.194-2.227-.584-.605-.39-1.063-.949-1.372-1.68-.31-.754-.464-1.639-.464-2.652 0-.903.068-1.589.204-2.06.223-.854.667-1.527 1.335-2.022.668-.494 1.479-.741 2.431-.741 1.175 0 2.071.306 2.69.918.618.612 1.02 1.5 1.205 2.662.062.458.105 1.015.131 1.67 0 .186-.094.278-.279.278h-5.861c-.062 0-.094.03-.094.093.025.47.068.804.131 1.001.135.495.408.885.816 1.169.408.285.914.427 1.521.427 1.002-.013 1.72-.403 2.153-1.17zm-3.738-5.12c-.341.26-.572.619-.696 1.076a4.33 4.33 0 0 0-.166 1.039c0 .062.03.093.092.093h4.212c.062 0 .093-.031.093-.093-.025-.408-.062-.711-.111-.909a2.107 2.107 0 0 0-.732-1.159c-.365-.291-.82-.437-1.364-.437-.544 0-.989.13-1.328.39zM97.658 6.713c.594.588.891 1.382.891 2.384v6.029a.272.272 0 0 1-.074.204.271.271 0 0 1-.203.074h-1.225a.274.274 0 0 1-.204-.074.272.272 0 0 1-.074-.204V9.45c0-.618-.18-1.119-.538-1.503-.359-.383-.835-.575-1.429-.575-.532 0-.979.158-1.345.474-.366.316-.578.739-.641 1.271v6.011a.272.272 0 0 1-.074.204.271.271 0 0 1-.203.074h-1.225a.272.272 0 0 1-.204-.074.272.272 0 0 1-.074-.204V6.24c0-.086.024-.154.074-.203a.272.272 0 0 1 .204-.074h1.225c.086 0 .154.024.203.074.05.049.074.117.074.203v.52c0 .037.013.062.037.074.025.013.043.007.057-.019.52-.655 1.299-.982 2.337-.982 1.015 0 1.818.293 2.411.88zM107.381 2.493a.275.275 0 0 1 .203-.074h1.225a.28.28 0 0 1 .204.074c.05.05.074.118.074.204v12.43a.272.272 0 0 1-.074.204.275.275 0 0 1-.204.074h-1.225a.271.271 0 0 1-.203-.074c-.051-.049-.074-.117-.074-.204v-.482c0-.037-.014-.062-.037-.074-.025-.012-.051-.006-.074.019-.273.31-.592.548-.956.715-.364.166-.764.25-1.196.25-.891 0-1.63-.22-2.217-.658-.588-.439-1.018-1.061-1.289-1.865-.223-.618-.334-1.409-.334-2.374 0-.903.092-1.651.277-2.245.26-.816.689-1.453 1.289-1.911.6-.457 1.357-.686 2.273-.686.433 0 .832.08 1.196.241.364.16.683.396.956.704.023.025.049.034.074.028.023-.006.037-.028.037-.065V2.699c.001-.088.024-.157.075-.206zm-.094 8.181c0-1.015-.16-1.806-.482-2.375-.358-.631-.884-.946-1.576-.946-.718 0-1.268.297-1.651.891-.396.619-.594 1.435-.594 2.449 0 .952.155 1.719.464 2.3.358.681.952 1.021 1.781 1.021.705 0 1.242-.334 1.613-1.002.297-.545.445-1.324.445-2.338zM116.656 15.331a.272.272 0 0 1-.074-.204V2.697c0-.086.024-.154.074-.204a.275.275 0 0 1 .203-.074h1.244c.148 0 .26.062.334.186l3.116 4.972c.037.074.074.074.111 0l3.136-4.972a.366.366 0 0 1 .334-.186h1.242a.28.28 0 0 1 .204.074c.05.05.074.118.074.204v12.43a.272.272 0 0 1-.074.204.275.275 0 0 1-.204.074h-1.225a.271.271 0 0 1-.203-.074c-.051-.049-.074-.117-.074-.204V5.703c0-.05-.014-.077-.037-.084-.025-.006-.051.01-.074.047l-2.523 4.118a.365.365 0 0 1-.334.186h-.594a.365.365 0 0 1-.334-.186l-2.504-4.118c-.025-.037-.051-.053-.074-.047-.025.007-.037.034-.037.084v9.424a.276.276 0 0 1-.074.204.278.278 0 0 1-.205.074h-1.225a.275.275 0 0 1-.203-.074zM136.061 12.863c.062-.111.131-.167.205-.167a.27.27 0 0 1 .166.056l.761.464c.099.062.148.143.148.241l-.037.148a3.631 3.631 0 0 1-1.419 1.429c-.612.347-1.326.52-2.143.52-.879 0-1.621-.194-2.227-.584-.606-.39-1.064-.949-1.373-1.68-.309-.754-.463-1.639-.463-2.652 0-.903.067-1.589.203-2.06.223-.854.668-1.527 1.336-2.022.668-.494 1.479-.741 2.43-.741 1.176 0 2.072.306 2.691.918.617.612 1.02 1.5 1.205 2.662a17.8 17.8 0 0 1 .13 1.67c0 .186-.093.278-.278.278h-5.862c-.062 0-.093.03-.093.093.025.47.068.804.13 1.001.136.495.408.885.816 1.169.408.285.915.427 1.521.427 1.002-.013 1.72-.403 2.153-1.17zm-3.739-5.12c-.34.26-.572.619-.695 1.076a4.325 4.325 0 0 0-.167 1.039c0 .062.03.093.093.093h4.211c.062 0 .094-.031.094-.093-.025-.408-.062-.711-.111-.909a2.114 2.114 0 0 0-.733-1.159c-.364-.291-.819-.437-1.364-.437-.545 0-.988.13-1.328.39zM147.006 6.713c.594.588.891 1.382.891 2.384v6.029a.272.272 0 0 1-.074.204.271.271 0 0 1-.203.074h-1.225a.274.274 0 0 1-.204-.074.272.272 0 0 1-.074-.204V9.45c0-.618-.18-1.119-.538-1.503-.359-.383-.835-.575-1.429-.575-.532 0-.979.158-1.345.474-.366.316-.578.739-.641 1.271v6.011a.272.272 0 0 1-.074.204.271.271 0 0 1-.203.074h-1.225a.272.272 0 0 1-.204-.074.272.272 0 0 1-.074-.204V6.24c0-.086.024-.154.074-.203a.272.272 0 0 1 .204-.074h1.225c.086 0 .154.024.203.074.05.049.074.117.074.203v.52c0 .037.013.062.037.074.025.013.043.007.057-.019.52-.655 1.299-.982 2.337-.982 1.014 0 1.818.293 2.411.88zM155.484 7.353a.272.272 0 0 1-.204.074h-1.892c-.062 0-.094.031-.094.093v4.842c0 .532.115.909.344 1.132.229.223.596.334 1.104.334h.445a.28.28 0 0 1 .204.074c.05.05.074.118.074.204v.965c0 .174-.093.272-.278.297l-.761.019c-.952 0-1.663-.167-2.134-.501-.47-.334-.705-.958-.705-1.874V7.52c0-.062-.03-.093-.092-.093h-1.021a.272.272 0 0 1-.204-.074.272.272 0 0 1-.074-.204V6.24c0-.086.024-.154.074-.203a.272.272 0 0 1 .204-.074h1.021c.062 0 .092-.031.092-.093V3.792c0-.087.025-.154.074-.204a.276.276 0 0 1 .205-.074h1.15c.086 0 .154.024.203.074.05.05.074.117.074.204V5.87c0 .062.031.093.094.093h1.892c.087 0 .155.024.204.074a.275.275 0 0 1 .074.203v.909a.268.268 0 0 1-.073.204zM159.463 14.858c-.674-.464-1.146-1.11-1.418-1.939-.223-.667-.334-1.422-.334-2.263 0-.878.104-1.62.314-2.227.271-.816.748-1.456 1.429-1.92.681-.464 1.49-.695 2.431-.695.891 0 1.666.231 2.328.695.661.464 1.135 1.098 1.419 1.901.223.631.334 1.373.334 2.227 0 .865-.111 1.626-.334 2.281-.272.829-.742 1.476-1.409 1.939-.668.464-1.454.695-2.357.695-.928.001-1.729-.23-2.403-.694zm3.701-1.262c.371-.278.637-.671.799-1.179.135-.47.203-1.051.203-1.743 0-.692-.062-1.268-.186-1.726-.16-.507-.426-.899-.797-1.178-.371-.279-.823-.418-1.355-.418-.507 0-.945.14-1.316.418-.371.278-.637.671-.798 1.178-.136.433-.204 1.008-.204 1.726 0 .717.068 1.299.204 1.743.148.508.411.9.788 1.179.377.279.832.417 1.363.417a2.1 2.1 0 0 0 1.299-.417zM173.888 6.073c.136.074.186.192.148.353l-.26 1.206c-.013.124-.074.186-.186.186a.458.458 0 0 1-.148-.019 1.989 1.989 0 0 0-.631-.093c-.124 0-.216.007-.278.019-.582.025-1.061.226-1.438.604-.377.377-.566.869-.566 1.475v5.324a.272.272 0 0 1-.074.204.271.271 0 0 1-.203.074h-1.225a.272.272 0 0 1-.204-.074.272.272 0 0 1-.074-.204V6.24c0-.086.024-.154.074-.203a.272.272 0 0 1 .204-.074h1.225c.086 0 .154.024.203.074.05.049.074.117.074.203v.854c0 .05.01.078.028.084.018.006.04-.01.065-.047.557-.841 1.311-1.261 2.263-1.261.372 0 .706.067 1.003.203z"></path>
            </g>
            <path
              d="M24.762 12.167a.756.756 0 0 1-.307-.065l-6.438-2.883a.751.751 0 0 1 0-1.37l6.438-2.873a.752.752 0 0 1 .991.379.752.752 0 0 1-.38.991l-4.905 2.189 4.906 2.197a.75.75 0 0 1-.305 1.435z"
              fill="#67BECE"
            ></path>
            <path
              d="M15.988 22.626c-7.078 0-13.266-4.778-15.045-11.62a.749.749 0 1 1 1.451-.378 14.044 14.044 0 0 0 13.594 10.498.75.75 0 0 1 0 1.5z"
              fill="#3F54A3"
            ></path>
            <path
              d="M13.404 16.398a.75.75 0 0 1-.75-.75V1.391a.75.75 0 0 1 1.5 0v14.257a.75.75 0 0 1-.75.75z"
              fill="#67BECE"
            ></path>
            <g fill="#F9C7C5">
              <path d="M41.71 24.798a.744.744 0 0 1-.53-.22l-3.273-3.274-3.273 3.273a.75.75 0 1 1-1.061-1.061l3.804-3.804a.749.749 0 0 1 1.06 0l3.804 3.805a.75.75 0 0 1-.531 1.281z"></path>
              <path d="M49.316 24.798a.746.746 0 0 1-.53-.22l-3.273-3.274-3.272 3.273a.75.75 0 1 1-1.061-1.061l3.803-3.804a.773.773 0 0 1 1.061 0l3.804 3.805a.75.75 0 0 1-.532 1.281z"></path>
              <path d="M56.924 24.798a.746.746 0 0 1-.531-.22l-3.272-3.274-3.273 3.273a.75.75 0 1 1-1.061-1.061l3.804-3.804a.75.75 0 0 1 1.06 0l3.803 3.805a.75.75 0 0 1-.53 1.281z"></path>
              <path d="M64.529 24.798a.744.744 0 0 1-.529-.22l-3.273-3.274-3.273 3.273a.75.75 0 1 1-1.061-1.061l3.803-3.804a.773.773 0 0 1 1.061 0l3.805 3.805a.75.75 0 0 1-.533 1.281z"></path>
              <path d="M72.137 24.798a.746.746 0 0 1-.53-.22l-3.274-3.274-3.271 3.273a.75.75 0 1 1-1.061-1.061l3.803-3.804a.773.773 0 0 1 1.061 0l3.804 3.805a.75.75 0 0 1-.532 1.281z"></path>
              <g>
                <path d="M79.743 24.798a.744.744 0 0 1-.53-.22l-3.273-3.274-3.272 3.273a.75.75 0 1 1-1.061-1.061l3.803-3.804a.773.773 0 0 1 1.061 0l3.804 3.805a.75.75 0 0 1-.532 1.281z"></path>
                <path d="M87.35 24.798a.746.746 0 0 1-.53-.22l-3.273-3.274-3.272 3.273a.75.75 0 1 1-1.061-1.061l3.803-3.804a.773.773 0 0 1 1.061 0l3.804 3.805a.75.75 0 0 1-.532 1.281z"></path>
                <path d="M94.957 24.798a.746.746 0 0 1-.531-.22l-3.272-3.274-3.273 3.273a.75.75 0 1 1-1.061-1.061l3.804-3.804a.75.75 0 0 1 1.06 0l3.803 3.805a.75.75 0 0 1-.53 1.281z"></path>
                <path d="M102.562 24.798a.744.744 0 0 1-.529-.22l-3.273-3.274-3.273 3.273a.75.75 0 1 1-1.061-1.061l3.804-3.804a.749.749 0 0 1 1.06 0l3.804 3.805a.75.75 0 0 1-.532 1.281z"></path>
                <path d="M110.17 24.798a.746.746 0 0 1-.53-.22l-3.273-3.274-3.272 3.273a.75.75 0 1 1-1.061-1.061l3.803-3.804a.75.75 0 0 1 1.06 0l3.804 3.805a.75.75 0 0 1-.531 1.281z"></path>
              </g>
            </g>
          </g>
        </svg>
        <span className="sr-only">Front End Mentor</span>
      </figcaption>
      <div className="bg-re bg-accent-clr-light py-2 px-4 rounded-lg text-white">
        {message}
      </div>
    </figure>
  );
}
