export const scrollToSection = (id: string) => {
  const el = document.querySelector(id);
  if (!el) return;

  const navHeight = 120; // height of fixed navbar
  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - navHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
