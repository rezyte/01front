export const toggleDisplayAndArrow = {
  methods: {
    toggleWrapper(element, arrow, display) {
      const comp = getComputedStyle(element);
      if (comp.display !== "none") {
        element.style.display = "none";
        this.turnArrow(arrow, 270);
      } else {
        element.style.display = display;
        this.turnArrow(arrow, 90);
      }
    },
    turnArrow(arrow, angle) {
      arrow.style.transform = `rotate(${angle}deg)`;
    },
    toggleWrapperMethod(e, display = "block") {
      let arrow = e.target;
      if (arrow.classList.contains("arrow")) {
        arrow = arrow.parentElement;
      }
      const title = arrow.parentElement.parentElement;

      const next = title.nextElementSibling;
      console.log(next, arrow);
      this.toggleWrapper(next, arrow, display);
    },
  },
};
