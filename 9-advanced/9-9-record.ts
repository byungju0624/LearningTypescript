{
  //함께 묶을 수 있는 것
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";
  const nav: Record<Page, PageInfo> = {
    home: { title: "home" },
    about: { title: "About" },
    contact: { title: "Contack" },
  };
}
