import { Scenarios } from './scenarios.model';

export const SCENARIOS: Scenarios[] = [
  new Scenarios("You get to the theater and notify the theater staff that someone is going to attempt to assassinate Lincoln but risk them not taking you seriously.", "Mission Incomplete. The theater staff didn't take you seriously and Abraham Lincoln was assassinated.", 1),
  new Scenarios("You get into the theater and try to stop Booth yourself but you run the risk of not stopping the assassination from happening.", "Mission Complete! You stopped Abraham Lincoln from being assassinated!", 2)
];
