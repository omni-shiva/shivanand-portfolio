"use client";

import { useEffect } from "react";

export default function HomeInteractions() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".services-home");
    if (!root) return;
    const controller = new AbortController();
    const options = { signal: controller.signal };
    const solutions = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-solution-tab]"));
    const projects = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-work-tab]"));
    const select = root.querySelector<HTMLSelectElement>("#challenge-select")!;
    const email = root.querySelector<HTMLAnchorElement>("#challenge-email")!;
    const status = root.querySelector<HTMLElement>("#challenge-status")!;
    const labels = Object.fromEntries(solutions.map(tab => [tab.dataset.solutionTab, tab.dataset.service]));

    function activate(tabs: HTMLButtonElement[], selectedTab: HTMLButtonElement, focus = false) {
      tabs.forEach(tab => {
        const selected = tab === selectedTab;
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(tab.getAttribute("aria-controls")!);
        if (panel) panel.hidden = !selected;
      });
      if (focus) selectedTab.focus();
    }

    function updateEnquiry() {
      const label = labels[select.value] || "An opportunity to improve our data or operations";
      const body = `Hello Shivanand,\n\nI would like to discuss: ${label}.\n\nOur business / team:\nThe workflow we want to improve:\nOur current tools or data:\nWhat a useful result would look like:\n\nBest time to talk:\n`;
      email.href = `mailto:partner@hetanorai.com?subject=${encodeURIComponent("Project enquiry: " + label)}&body=${encodeURIComponent(body)}`;
      status.textContent = select.value ? `Your email draft will include: ${label}.` : "Opens your email app with a few prompts to describe the challenge.";
    }

    const compact = window.matchMedia("(max-width:800px)");
    const setOrientation = () => root.querySelector(".biz-tabs")?.setAttribute("aria-orientation", compact.matches ? "horizontal" : "vertical");
    setOrientation();
    compact.addEventListener("change", setOrientation, options);

    const reduced = window.matchMedia("(prefers-reduced-motion:reduce)");
    function setMotion(board: HTMLElement, paused: boolean) {
      board.classList.toggle("is-paused", paused);
      const button = board.querySelector<HTMLButtonElement>(".evaluation-motion-toggle")!;
      button.textContent = paused ? "Play" : "Pause";
      button.setAttribute("aria-label", paused ? "Play workflow animation" : "Pause workflow animation");
      button.setAttribute("aria-pressed", String(paused));
    }
    const resetMotion = () => root.querySelectorAll<HTMLElement>("[data-evaluation-motion]").forEach(board => setMotion(board, reduced.matches));
    resetMotion();
    reduced.addEventListener("change", resetMotion, options);
    updateEnquiry();

    root.addEventListener("change", event => { if (event.target === select) updateEnquiry(); }, options);
    root.addEventListener("click", event => {
      const element = event.target instanceof Element ? event.target : null;
      if (!element) return;
      const tab = element.closest<HTMLButtonElement>("[data-solution-tab],[data-work-tab]");
      if (tab) activate(tab.hasAttribute("data-solution-tab") ? solutions : projects, tab);
      const solutionLink = element.closest<HTMLElement>("[data-open-solution]");
      if (solutionLink) {
        const targetTab = solutions.find(item => item.dataset.solutionTab === solutionLink.dataset.openSolution);
        if (targetTab) activate(solutions, targetTab, true);
      }
      const enquiryLink = element.closest<HTMLElement>("[data-discuss-solution]");
      if (enquiryLink) { select.value = enquiryLink.dataset.discussSolution!; updateEnquiry(); }
      const motion = element.closest<HTMLButtonElement>(".evaluation-motion-toggle");
      if (motion) {
        const board = motion.closest<HTMLElement>("[data-evaluation-motion]")!;
        setMotion(board, !board.classList.contains("is-paused"));
      }
      const anchor = element.closest<HTMLAnchorElement>("a");
      if (anchor?.closest(".mobile-nav")) anchor.closest("details")!.open = false;
      const href = anchor?.getAttribute("href");
      if (href?.startsWith("#")) {
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "instant", block: "start" });
        if (anchor!.classList.contains("skip-link")) {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        }
      }
    }, options);

    root.addEventListener("keydown", event => {
      const element = event.target instanceof Element ? event.target : null;
      if (!element) return;
      const tab = element.closest<HTMLButtonElement>("[data-solution-tab],[data-work-tab]");
      if (tab) {
        const tabs = tab.hasAttribute("data-solution-tab") ? solutions : projects;
        const index = tabs.indexOf(tab);
        let next: number | undefined;
        if (["ArrowDown", "ArrowRight"].includes(event.key)) next = (index + 1) % tabs.length;
        if (["ArrowUp", "ArrowLeft"].includes(event.key)) next = (index + tabs.length - 1) % tabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = tabs.length - 1;
        if (next !== undefined) { event.preventDefault(); activate(tabs, tabs[next], true); }
      }
      const menu = element.closest<HTMLDetailsElement>(".mobile-nav");
      if (menu && event.key === "Escape") {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    }, options);

    return () => controller.abort();
  }, []);
  return null;
}
