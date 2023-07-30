'use strict';

const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#projects',
  '#testimonials',
  '#contact',
];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
const visibleSections = sectionIds.map(() => false);
const options = {};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne;
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    // console.log(entry.target.id);
    // console.log(index);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.99;
    // console.log(entry.target);
    // console.log(entry.isIntersecting);
    // console.log(entry.intersectionRatio);
  });
  console.log(visibleSections);
  console.log(selectLastOne);

  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections);
  console.log(sectionIds[navIndex]);
}

function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}
