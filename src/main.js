import {createTripInfoTemplate} from "./components/trip-info.js";
import {createTripControlsTemplate} from "./components/controls.js";
import {createTripFilterTemplate} from "./components/filter.js";
import {createTripEventsSortTemplate} from "./components/events-sort.js";
import {createTripEventsDayAddTemplate} from "./components/events-day-add.js";
import {createTripEventsDayTemplate} from "./components/events-day.js";
import {createTripEventsDaySingleEventTemplate} from "./components/events-day-single-event.js";

const TASK_COUNT = 3;
const tripInfoHeaderElement = document.querySelector(`.trip-main`);
const tripEventsElement = document.querySelector(`.trip-events`);

const render = (container, template, place = `beforeend`) => container.insertAdjacentHTML(place, template);

render(tripInfoHeaderElement, createTripInfoTemplate());
render(tripInfoHeaderElement, createTripControlsTemplate());
render(tripInfoHeaderElement, createTripFilterTemplate());
render(tripEventsElement, createTripEventsSortTemplate());
render(tripEventsElement, createTripEventsDayAddTemplate());
render(tripEventsElement, createTripEventsDayTemplate());

const tripEventsListElement = tripEventsElement.querySelector(`.trip-events__list`);
for (let i = 0; i < TASK_COUNT; i++) {
  render(tripEventsListElement, createTripEventsDaySingleEventTemplate());
}
