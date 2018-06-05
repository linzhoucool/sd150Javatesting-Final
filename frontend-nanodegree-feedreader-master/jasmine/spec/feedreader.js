/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('every feed have a url', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            })
        });

        it('every feed have a name', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            })
        });
    })



    describe('The menu', function () {

        it('is hidden by default', () => {
            expect(document.body.className).toContain('menu-hidden');
        });
        it('visibility changes when the menu icon is clicked', () => {
            const menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect(document.body.className).not.toContain('menu-hidden');
            menuIcon.click();
            expect(document.body.className).toContain('menu-hidden');
        });
    });

    describe('Initial Entries', () => {

        beforeEach((done) => {
            loadFeed(0, done);
        });

        it('It is at least a single .entry element within the .feed container', (done) => {
            const entrys = document.querySelectorAll('.feed .entry');
            expect(entrys.length).toBeGreaterThan(0);
            done();
        });
    });

}());