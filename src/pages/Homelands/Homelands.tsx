import PageSection from '../../utils/PageSection';
import Carousel from '../../utils/Carousel';

const Homelands = () => (
    <main>
        <h1>Homeland: A Running RPG</h1>
        <PageSection
            backgroundColor="white"
            images={[{ src: '/homelands/Title.png', alt: 'Homeland Title', style: { maxWidth: 200, margin: '0 auto' } }]}
            layout="ImageOnRight"
            imageLayout="Vertical"
            text={
                <>
                    <p>A few years ago I started working on this game, which until recently was just called "MapGame" (hey, I needed a name). Recently I found it in me to hunker down and work on this, a bit at a time. Now it's nearly at a point where I can show it to the world. Hopefully the world likes it! The current "running" title is "Homeland: A Running RPG".</p>
                    <p>The concept is simple: It's a simple RPG that rewards you for exploring the area outside your house. This can be a daily run, or a daily walk, or even a bike ride. As you explore, you will discover permanent Landmarks such as shops or harvest points. The game offers multiple systems of RPG-style progression to keep you busy! There are lots and lots of systems which will be described below.</p>
                </>
            }
            style={{ marginBottom: 0 }}
        />
        <PageSection
            title="World Map"
            backgroundColor="lightgray"
            images={[{ src: '/homelands/Exploration_edited.jpg', alt: 'Exploration', style: { maxWidth: 300 } }]}
            layout="ImageOnRight"
            imageLayout="Vertical"
            text={
                <>
                    <h2>The World Map Is Right Outside</h2>
                    <p>My inspiration for this game was one day when I was bored out of my mind while jogging around the neighborhood. I had an app to track my run, but I felt it could be doing so much more to motivate me to run.</p>
                    <blockquote>"Wouldn't it be cool if you went running and randomly discovered a shop that sold items?"</blockquote>
                    <p>I remember thinking. And that day I went home and played around with a prototype project using the MapBox API. With that, the earliest prototype of this idea was born. The image to the right shows the current look of the procedural map. This one is the area around my house. I walked around and found the Mysterious Stone Pillar.</p>
                </>
            }
            style={{ marginBottom: 0 }}
        />
        <PageSection
            backgroundColor="lightgray"
            images={[
                { src: '/homelands/VisualLandmark.png', alt: 'Visual Landmark', style: { maxWidth: 300 } },
            ]}
            layout="ImageOnLeft"
            imageLayout="Horizontal"
            text={
                <>
                    <h2>Discover Landmarks</h2>
                    <p>As you explore, you will discover an array of fantastical landmarks, ranging from cozy villages with shops to mushroom caves where you can harvest resources, and even majestic formations that grant large EXP bonuses.</p>
                    <p>One of the major inspirations for this game was giving the player a variety of whimsical, interesting locations to discover. The art for these is indeed AI generated... but wait, hear me out! As I was playing around with AI art I realized that one thing it was VERY good at doing was generating interesting, whimsical and mysterious landscapes. It's one area where being a little "off" actually added to the charm. In fact, seeing how impressive these turned out was a major motivator for me to actually continue this game.</p>
                </>
            }
        />
        <PageSection
            backgroundColor="lightgray"
            images={[
                { src: '/homelands/PickQuest.png', alt: 'Pick Quest', style: { maxWidth: 300 } },
                { src: '/homelands/QuestCompletion.png', alt: 'Quest Completion', style: { maxWidth: 300 } },
            ]}
            layout="ImageOnRight"
            imageLayout="Horizontal"
            text={
                <>
                    <h2>Go on Quests</h2>
                    <p>To motivate you on where to go next, quests will guide you to various landmarks and points of interest throughout the world. Every quest has specific completion rewards.</p>
                    <p>Every day will provide a different assortment of quests, to encourage you to leave the house daily! Need mushrooms? Wednesdays have a special quest for that!</p>
                </>
            }
        />
        <PageSection
            title="Landmarks"
            backgroundColor="white"
            images={[
                { src: '/homelands/Landmark1.png', alt: 'Landmark 1', style: { maxWidth: 220 } },
                { src: '/homelands/Landmark2.png', alt: 'Landmark 2', style: { maxWidth: 220 } },
                { src: '/homelands/Landmark3.png', alt: 'Landmark 3', style: { maxWidth: 220 } },
            ]}
            layout="ImageOnRight"
            imageLayout="Horizontal"
            text={
                <>
                    <p>As you (literally) explore the world you'll run into dozens of unique landmarks. The landmarks include potion shops, wizard towers, and a hideout in a grotto. By discovering these locations you'll gain experience, acquire items, obtain daily resources, and unlock places to buy and sell items. These landmarks will exist in your game world forever and can be visited whenever you walk near their location in real life. Need more wood for construction? Go outside and visit the Lumberyard each day!</p>
                </>
            }
        />
        <PageSection
            title="The Town"
            backgroundColor="lightgray"
            images={[
                { src: '/homelands/Town.png', alt: 'Town', style: { maxWidth: 250 } },
            ]}
            layout="ImageOnLeft"
            imageLayout="Horizontal"
            text={
                <>
                    <p>Any RPG needs a home base! Especially one called Homeland. In this game, when you're not exploring or in combat encounters (more on that later) you are managing your character in town. Here you can do multiple things:</p>
                    <ul style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto 1.5em auto', paddingLeft: 24 }}>
                        <li>Check your inventory</li>
                        <li>Buy and sell goods</li>
                        <li>Change or upgrade equipment</li>
                        <li>Build or upgrade buildings</li>
                        <li>Craft potions</li>
                        <li>Look through your explored landmarks</li>
                        <li>Check level-up rewards</li>
                        <li>Choose combat encounters</li>
                        <li>Clear a daily bounty to gain rewards</li>
                        <li>Pick a quest from the quest board (that is, prepare to explore outside)</li>
                    </ul>
                </>
            }
        />
        <PageSection
            title="Using Your Resources"
            backgroundColor="white"
            text={
                <>
                    <p>Resources you gather (or purchase!) in the world can be used for many purposes:</p>
                    <ul style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto 1.5em auto', paddingLeft: 24 }}>
                        <li>Crafting</li>
                        <li>Building</li>
                        <li>Upgrading</li>
                        <li>Selling</li>
                    </ul>
                    <p>In fact, it's possible to profit from buying goods from certain vendors and selling them to other shops for a profit! Note how the Shop Info tab on the left displays information about this shop's preferences. I wanted to add this element to Homeland as it has always been a personal favorite feature from games like Mount and Blade. Find a shop selling something for cheap? Buy it and sell it elsewhere! Establish trade routes, which require you to actually move physically! Shop inventory refreshes each day.</p>
                    <Carousel
                        images={[
                            { src: '/homelands/TownCarousel/Alchemist.png', title: 'Alchemist', alt: 'Alchemist' },
                            { src: '/homelands/TownCarousel/Armor.png', title: 'Armor', alt: 'Armor' },
                            { src: '/homelands/TownCarousel/Carpenter.png', title: 'Carpenter', alt: 'Carpenter' },
                            { src: '/homelands/TownCarousel/DailyBounties.png', title: 'Daily Bounties', alt: 'Daily Bounties' },
                            { src: '/homelands/TownCarousel/Discoveries.png', title: 'Discoveries', alt: 'Discoveries' },
                            { src: '/homelands/TownCarousel/ExplorerGuild.png', title: 'Explorer Guild', alt: 'Explorer Guild' },
                            { src: '/homelands/TownCarousel/FighterGuild.png', title: 'Fighter Guild', alt: 'Fighter Guild' },
                            { src: '/homelands/TownCarousel/Inventory.png', title: 'Inventory', alt: 'Inventory' },
                            { src: '/homelands/TownCarousel/Milestones.png', title: 'Milestones', alt: 'Milestones' },
                            { src: '/homelands/TownCarousel/Progress.png', title: 'Progress', alt: 'Progress' },
                            { src: '/homelands/TownCarousel/QuestBoard.png', title: 'Quest Board', alt: 'Quest Board' },
                            { src: '/homelands/TownCarousel/Shop.png', title: 'Shop', alt: 'Shop' },
                            { src: '/homelands/TownCarousel/ShopInfo.png', title: 'Shop Info', alt: 'Shop Info' },
                            { src: '/homelands/TownCarousel/Smithy.png', title: 'Smithy', alt: 'Smithy' },
                            { src: '/homelands/TownCarousel/Tavern.png', title: 'Tavern', alt: 'Tavern' },
                            { src: '/homelands/TownCarousel/Weapons.png', title: 'Weapons', alt: 'Weapons' },
                        ]}
                    />
                </>
            }
        />
        <PageSection
            title="Combat Encounters"
            backgroundColor="lightgray"
            images={[
                { src: '/homelands/CombatMap_edited.jpg', alt: 'Combat Map', style: { maxWidth: 250 } },
            ]}
            layout="ImageOnLeft"
            imageLayout="Horizontal"
            text={
                <>
                    <h2>What's An RPG Without Some Combat?</h2>
                    <p>After all that effort gathering resources, it's good to have a challenge out there to justify building up your character. In Homeland, there are several combat challenges waiting for you! The mechanics are rather simple, though you will need to progress in order to defeat some of the more challenging encounters.</p>
                    <ul style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto 1.5em auto', paddingLeft: 24 }}>
                        <li>You fight multiple waves of enemies in a 3x3 grid</li>
                        <li>You take turns, though your character can make multiple moves per turn</li>
                        <li>Tap a button to attack with one of two equipped weapons</li>
                        <li>There are 20 weapons to pick from, each belonging to a weapon class of Axe, Sword, Bow, Spear or Dagger. These can be discovered, purchased and upgraded</li>
                        <li>Different weapons affect different enemy positions, target different enemies, require more actions, etc.. Pick and choose your favorite!</li>
                        <li>Use potions/items to heal yourself, buff yourself, or damage the enemy</li>
                        <li>Fight until you win. Or lose! There are no stakes, so experiment as needed with different strategies</li>
                    </ul>
                </>
            }
        />
        <PageSection
            backgroundColor="lightgray"
            images={[
                { src: '/homelands/Combat_gif.gif', alt: 'Combat GIF', style: { maxWidth: 800 } },
                { src: '/homelands/DragonCombat_gif.gif', alt: 'Dragon Combat GIF', style: { maxWidth: 800 } },
            ]}
            imageLayout="Vertical"
        />
        <PageSection
            title="Tutorials"
            backgroundColor="white"
            images={[
                { src: '/homelands/InteractiveTutorials_edited.jpg', alt: 'Interactive Tutorials', style: { maxWidth: 200 } },
                { src: '/homelands/InteractiveTutorials2_edited.jpg', alt: 'Interactive Tutorials 2', style: { maxWidth: 200 } },
            ]}
            layout="ImageOnRight"
            imageLayout="Horizontal"
            text={
                <>
                    <h2>A Good Set Of Starting Tutorials</h2>
                    <p>I know that inherently there's nothing too impressive about a game having tutorials, but I found a way to make some pretty neat interactive tutorials that go beyond just having walls of text. These highlight the stuff you need to press so you can familiarize yourself with the UI.</p>
                    <p>The tutorials are also built into the (currently somewhat light) game narrative, featuring a colorful set of characters that each give tutorials about specific parts of the game.</p>
                </>
            }
        />
        <PageSection
            title="How Do I Play This Game?"
            backgroundColor="lightgray"
            text={
                <>
                    <p>This game is not yet released. I'm in the process of finding people to test it in order to publish it to the Android Play store (for free!). They require 12 testers to play this game. If you are interested in helping me with this, I would massively appreciate it! For this, you'd need to contact me directly.</p>
                    <p>However, you can download and try out the game on your own if you want. I made the aab file available <a href="https://d11lfgg55j46yw.cloudfront.net/homelands_release.aab" target="_blank" rel="noopener noreferrer">here</a>. It's only available for Android right now (but I've been working on porting it to iOS as well). If you get this file from your phone you'll be able to install the game (though you must give "special" approval since it's not from the Google Play store).</p>
                </>
            }
        />
    </main>
);

export default Homelands;
