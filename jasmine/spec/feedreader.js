/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('each feed should return a not empty URL', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each feed should return a not empty name', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {
        const body = document.body;

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('should be hidden by default', function () {
            expect(body.classList.contains('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('should toggle menu visibility when icon was clicked', function () {
            const menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {

<<<<<<< HEAD
=======
        let test;

        beforeEach( function(done) {
            loadFeed(0, done);
        });

>>>>>>> e6e80d6d74deecc4041912b6cdc73e8411554c4e
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        let test;

        beforeEach( function(done) {
            try {
                loadFeed(0, function () {
                    test = document.querySelector('.feed').hasChildNodes();
                    done();
                });
            } catch(e) {
                console.log(e);
            }
            
        });

<<<<<<< HEAD
        it('should contain at least one entry in the feed', function(done) {
            expect(test).toBe(true);
            done();
        });
=======
         it('should contain at least one entry in the feed', function(done) {
            test = document.querySelector('.feed').hasChildNodes();
            expect(test).toBe(true);
            done();
         });
>>>>>>> e6e80d6d74deecc4041912b6cdc73e8411554c4e
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    
    describe('New Feed Selection', function () {

        const feedContainer = document.querySelector('.feed');
        let first;
        let second;
<<<<<<< HEAD
=======

        async function firstLoad() {
            await loadFeed(0);
            first = feedContainer.lastElementChild;
        }

        async function secondLoad() {
            await loadFeed(1);
            second = feedContainer.lastElementChild;
        }

        beforeEach(function(done) {
            firstLoad();
            secondLoad();
            done();
        });
>>>>>>> e6e80d6d74deecc4041912b6cdc73e8411554c4e

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
<<<<<<< HEAD
        beforeEach(function(done) {
            first = feedContainer.innerHTML;
            try {
                loadFeed(1, function () {
                    second = feedContainer.innerHTML;
                    done();
                });
            } catch(e) {
                console.log(e);
            }
            
        });

        it('should change contents when feed was change', function(done) {
            expect(first).not.toBe("");
            expect(second).not.toBe("");
            expect(first).not.toBe(second);
            done();
        });
=======
         it('should change contents when feed was change', function() {
            expect(first).not.toBe(null);
            expect(second).not.toBe(null);
            expect(first).not.toBe(second);
         });
>>>>>>> e6e80d6d74deecc4041912b6cdc73e8411554c4e
    });
    
}());
