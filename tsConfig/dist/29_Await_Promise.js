"use strict";
/* Awaited and Promise utils in TS */
async function fetchCount() {
    return 42;
}
async function fetchDetails() {
    return Promise.all([Promise.resolve(24), Promise.resolve("Ben And Jack")]);
}
