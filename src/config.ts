export const SITE = {
  website: "https://khongai.com", // replace this with your deployed domain
  author: "khongai",
  profile: "https://khongai.com",
  desc: "Blog chuyên sâu về tiền số, cloud computing và bảo mật thông tin. Nơi chia sẻ kiến thức và kinh nghiệm trong lĩnh vực công nghệ.",
  title: "khongai.com",
  ogImage: "khongai.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
