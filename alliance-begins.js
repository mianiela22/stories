// Story Data
const scenes = {
    intro: {
        title: "that one time in Amy's room",
        text: `Bella knocked softly on Amy's door, shifting her weight from one foot to the other, and tried to ignore the way her heart was beating too fast for something this simple.

Their friendship was still new—so new it felt fragile, like a tiny sprout that hadn't quite taken root yet. They'd spoken a few times since the semester started, shared a few laughs in passing, but Bella couldn't shake the feeling that she was still auditioning somehow. Still proving she was worth keeping around.

Amy had texted earlier: Come over tonight! I want you to meet Sammy. I think the three of us could be something special.

Bella already knew Sammy a little. She'd been giving Bella rides to church, and she was one of those rare people who seemed genuinely sweet to everyone she met—not performatively kind, but actually kind, the kind of kindness that came from somewhere deep and true.

But Amy seemed convinced the three of them could form something deeper than casual friendship.

Bella wanted to believe her. God, she wanted to believe her.

But she'd been disappointed before.`,
        choices: [
            { text: "Continue", next: "amys-room" }
        ]
    },

    "amys-room": {
        text: `"Heyyyyyy!" Amy greeted her, grinning as she pulled the door back, and something about her unguarded enthusiasm made Bella's chest loosen slightly. "Sammy isn't here yet, but she's on her way. You can sit anywhere."

Bella stepped inside and immediately took in the controlled chaos of Amy's room.

Two closets overflowed with clothes, boxes, and an assortment of random objects—snacks, shoes, what looked like a pageant tiara catching the light. A wooden desk sat against the wall, buried under a mountain of books and clothes and large CDs stacked haphazardly like a Jenga tower waiting to collapse.

Bella moved a pile of clothes off the desk chair—carefully, apologetically—and set them gently on the desk before sitting down.

Amy barely gave her a second to settle.

"Okay, change of plans—I need to go poop, but you can stay here and wait for Sammy. I'll be right back."

And just like that, she was gone.

Bella sat there, blinking, her eyebrows frozen in amused shock.

Well. This wasn't exactly how she'd imagined the start of their friendship meeting.`,
        choices: [
            { text: "Continue", next: "the-mess" }
        ]
    },

    "the-mess": {
        text: `Her attention wandered back to the room. Amy's walls were half-covered in fake vines, like she'd started a project with great enthusiasm and then gotten distracted halfway through. In the corner, multiple piles of boxes and clothes stacked up to waist height. Makeup scattered across the dresser. A half-eaten bag of chips on the windowsill.

The place was a mess.

But what struck Bella—what really struck her, settling into her chest like something she'd been searching for without knowing it—wasn't the mess itself.

It was that Amy didn't care.

She wasn't scrambling to hide the clutter, wasn't apologizing or making excuses or performing the elaborate dance of "I'm sorry my space isn't perfect." She had invited Bella into her space as it was—unpolished, unfiltered, unapologetically real.

Bella knew she would have been mortified to let anyone see her room in this state. She would have spent hours cleaning, arranging, making sure everything looked effortlessly perfect.

But Amy just... was.

She existed in her space without shame, without performance, without the exhausting work of pretending to be someone she wasn't.

And Bella—Bella who had spent her whole life trying to take up less space, trying to be less messy, less needy, less much—felt something inside her chest crack open with admiration.

I want to be like that, she thought. I want to be that free.`,
        choices: [
            { text: "Continue", next: "sammy-arrives" }
        ]
    },

    "sammy-arrives": {
        text: `A soft knock on the half-open door pulled her from her thoughts.

She glanced up, expecting to see Sammy, but no one walked in.

Frowning, she stood and reached for the door handle. "Hello?"

Silence.

And then—

"BOO!"

Bella screamed—a real scream, undignified and startled—and nearly jumped out of her skin.

Raucous laughter filled the hallway.

Sammy was doubled over, clutching her stomach, laughing so hard that tears were streaming down her face. The sound echoed down the hallway, unrestrained and joyful and completely unbothered by who might hear.

Bella's initial shock melted into a grin, her heart still pounding but now for a different reason.

Of course it was Sammy.

"That was so good!" Bella admitted, catching her breath, pressing a hand to her racing heart. "You really got me!"

She leaned in to hug Sammy, who was still giggling, and felt the warmth of being included in the joke rather than being the butt of it.

Then—suddenly struck with inspiration, with the wild courage of someone who wanted desperately to belong—she pulled back.

"We should get Amy next!"`,
        choices: [
            { text: "Continue", next: "the-prank" }
        ]
    },

    "the-prank": {
        text: `Sammy's eyes widened with pure, delighted mischief. "Ohhh bet!" she whispered, nodding excitedly.

The two of them scurried behind the wall leading into Amy's room like children planning an elaborate heist, pressing themselves against the corner, trying desperately to muffle their giggles.

Bella felt something flutter in her chest—something light and precious and terrifying. This feeling of conspiracy, of shared joy, of belonging.

Amy's shadow appeared in the hallway.

"Okay, ready?" Sammy whispered, barely containing her laughter. "One... two... three—"

"BOO!"

Amy stopped in her tracks. Crossed her arms. Raised an eyebrow.

Her face was completely unimpressed—the expression of a mother indulging the antics of very excitable children who thought they were being clever.

She smirked.

"How were you not surprised?!" Bella laughed, half disappointed, half impressed.

"Please," Amy scoffed, shaking her head like they were adorable idiots. "You guys were being so loud. I could hear you all the way by the bathrooms."

Sammy snorted—actually snorted—with laughter. "Pffffffft, oh right! We didn't even think of that."`,
        choices: [
            { text: "Continue", next: "christmas-break" }
        ]
    },

    "christmas-break": {
        text: `Amy pushed the door open, letting them back into her room. Bella settled back onto the desk chair while Sammy yeeted herself full-speed onto Amy's bed, limbs sprawling dramatically.

Amy plopped down next to her, stretching. "Soooo... how was everybody's Christmas break? I think we should go around sharing."

"Ooooh, I like that!" Sammy grinned.

Bella nodded in agreement, her heart doing that thing again where it beat a little too fast, a little too hopefully.

This was it. This was what she'd been longing for—this casual intimacy, this comfortable sharing, this sense of we are building something here together.

"I'll go first!" Sammy volunteered, sitting up slightly. "This break, I went on a cruise with my friend Josh."

Amy groaned, rolling her eyes. "Bruh. And how was that?"

"I had fun taking photos and eating good food," Sammy said, and then her usually cheerful tone flattened. "But by the end of it, I could barely stand him."

Bella blinked. Sammy? Complaining? She had never heard Sammy say anything bad about anyone before.

Amy grinned. "I KNEW IT! I told you I didn't like him as your friend."`,
        choices: [
            { text: "Continue", next: "josh-story" }
        ]
    },

    "josh-story": {
        text: `"He would not stop farting," Sammy deadpanned, her face completely serious. "And he never apologized. And he refused to dress up even though he said he would. And every time I tried to make conversation, he'd just say, 'Oh, I don't know' instead of actually answering any of my questions!"

Bella burst out laughing—at the absurdity, at how preciously Sammy expressed frustration, at the fact that even annoyed, she was somehow still gracious.

"Oh wow," Bella said, still giggling. "That does sound bad."

"But yeah! That's my update. Who's next?"

"I can go!" Amy hopped off the bed, grabbing a pile of clothes from the floor. "But I'll talk while I finally unpack."

"Do you want help?" Sammy offered.

"Nah, you guys just sit and listen."

Amy began folding clothes, her voice casual. "So, over break, I listened to this crazy podcast about an African ex-warlock who converted to Christianity. It completely changed the way I think about covenant prayer."

Sammy and Bella exchanged glances—a moment of shared what just happened.

Well, that escalated quickly.`,
        choices: [
            { text: "Continue", next: "covenant-prayer" }
        ]
    },

    "covenant-prayer": {
        text: `"Ooo, what's covenant prayer?" Sammy asked, genuinely intrigued.

"It's when people agree to pray together for a certain number of days," Amy explained, stacking clothes into a drawer. "Like, in the podcast, a group of church ladies prayed every single day for 21 days. If one person was late, they had to start over. Apparently, it's super powerful in the spiritual world."

"Oh wow," Bella breathed, feeling something stir in her chest. "That's intense—but really cool."

Amy nodded firmly, turning to look at them with an expression that was both serious and radiant. "Which is why I really believe God put us together. Not just to be friends, but to lift each other up spiritually."

The words landed in Bella's chest like a stone dropping into still water, ripples spreading outward.

God put us together.

Not coincidence. Not chance. Not the random collision of three girls who happened to attend the same church.

Purpose.

Amy's confidence was electric—the way she spoke so certainly about their friendship, as if she had received divine revelation, as if she had always known they belonged together.`,
        choices: [
            { text: "Continue", next: "the-alliance" }
        ]
    },

    "the-alliance": {
        text: `"Aw, I love that!" Bella said, and her voice came out thick with emotion. "Like an alliance!"

Amy laughed—bright and delighted. "That's hilarious—but also accurate."

"We should make a group chat!" Sammy said excitedly, already pulling out her phone. "What should we name it?"

Bella, too overwhelmed with emotion to think creatively, blurted out: "What about just... The Alliance?"

"That works," Amy agreed, pausing her unpacking to smile at them—really smile, the kind that meant something. "We need to look out for each other. And if this works out..."

Her voice softened, grew tender, grew significant.

"I'm looking at my two future bridesmaids."

The words hung in the air.

Sammy's eyes widened—her lips parting in shock, her whole face transforming into something soft and vulnerable and hopeful.

"Wait... actually?" Her voice was barely above a whisper. "Actually?"

Bella's heart swelled—so full she thought it might burst.

Bridesmaids.

The word meant family. It meant you matter to me. It meant I choose you for the most important moments of my life.`,
        choices: [
            { text: "Continue", next: "the-choice" }
        ]
    },

    "the-choice": {
        text: `And for Bella—thousands of miles from home, aching with loneliness, desperately trying to build something that felt like belonging—the word meant you are not alone anymore.

But something in her chest tightened.

She'd been disappointed before. She'd opened her heart before. She'd believed in forever friendships before, only to watch them fade when distance or time or life got in the way.

What if this was the same? What if she let herself believe, let herself hope, let herself need these people—and then they left? What if she became the third wheel, the one they tolerated but didn't really want?

What if she wasn't enough to make them stay?

Her heart was screaming yes, yes, I want this, I choose this, please let me belong.

But her fear was whispering be careful, protect yourself, don't give them the power to hurt you.`,
        choices: [
            { 
                text: "Embrace it fully—let yourself believe", 
                next: "embrace",
                reflection: `"A friend loves at all times, and a brother is born for a time of adversity."

— Proverbs 17:17

"There is no fear in love. But perfect love drives out fear."

— 1 John 4:18`
            },
            { 
                text: "Hold back—protect your heart", 
                next: "protect",
                reflection: `"Whoever isolates himself seeks his own desire; he breaks out against all sound judgment."

— Proverbs 18:1

"The heartfelt counsel of a friend is as sweet as perfume and incense."

— Proverbs 27:9`
            }
        ]
    },

    // PATH A: EMBRACE
    embrace: {
        text: `"I'm super down!" Bella exclaimed, her voice cracking slightly with emotion she couldn't quite hide.

She said it. She meant it. She chose vulnerability over safety, hope over fear, belonging over self-protection.

"Oh, for sure!" Amy beamed, her whole face radiant.

And just like that—without warning, without permission—Sammy burst into tears.

Not delicate tears. Not pretty crying. Real, gut-wrenching sobs that shook her whole body, her face crumpling like she'd been holding something in for too long and it had finally broken free.

Amy laughed—not mockingly, but with pure love—and pulled Sammy into a tight hug. "Okay, first official Alliance group hug! Bella, get over here!"

Bella joined them, wrapping her arms around both of them, and felt something inside her chest settle for the first time since she'd arrived in this country.

This was it.`,
        choices: [
            { text: "Continue", next: "group-hug" }
        ]
    },

    "group-hug": {
        text: `This was what she'd been praying for in the dark, what she'd been aching for through all those lonely nights, what she'd been hoping to find but had been too afraid to name.

Family.

Not by blood. Not by proximity or convenience or accident.

By choice.

They were choosing each other. Claiming each other. Building something intentional and sacred and real in Amy's messy room with its half-hung vines and scattered clothes and unapologetic chaos.

And in that moment—wrapped in the arms of these two women who had somehow become her sisters in the span of a single evening—Bella knew.

This was the start of something beautiful.

This was the answer to every whispered prayer she'd breathed into her pillow on nights when the loneliness felt like dying.

This was home.

Not a place. Not a country.

These people. This love. This fierce, imperfect, unapologetic commitment to showing up for each other.`,
        choices: [
            { text: "Continue", next: "embrace-ending" }
        ]
    },

    "embrace-ending": {
        title: "What happened next",
        text: `The Alliance became real that night.

Not just a group chat name. Not just a casual friendship. But a covenant—an intentional commitment to show up for each other, to pray for each other, to fight for each other when the world tried to pull them apart.

There would be hard days ahead. Days when Bella's body would betray her with sleepless nights. Days when Amy would forget and Bella would have to find her voice. Days when they would hurt each other and have to choose forgiveness over distance.

But they would face those days together.

Because Bella had chosen to believe. She had chosen hope over fear. She had chosen to let herself be loved, even though love always carried the risk of loss.

And in choosing vulnerability that night in Amy's messy room, she had found something she'd been searching for her entire life:

A place to belong.

Not perfect. Not without pain. But real.

And for the first time in eighteen months, Bella let herself believe it might actually last.`,
        choices: [
            { text: "Reflect on this path", next: "embrace-reflection" }
        ]
    },

    "embrace-reflection": {
        title: "Reflection",
        text: `You chose vulnerability.

By embracing the moment fully, Bella:
• Opened herself to the possibility of belonging
• Chose hope over fear
• Gave Amy and Sammy permission to love her
• Created space for genuine connection to grow

Yes, vulnerability always carries risk. Yes, people can disappoint us. Yes, friendships can end and hearts can break.

But the alternative—protecting your heart by keeping everyone at arm's length—isn't really protection at all. It's just a slower, lonelier kind of death.

God designed us for connection. For community. For covenant relationships that sharpen us and sustain us and remind us we were never meant to walk this life alone.

Sometimes the bravest thing you can do is say "I'm super down" when your heart is screaming "what if this doesn't last?"

Because the risk of being hurt is always worth the possibility of being loved.

And sometimes—sometimes—when you dare to believe in belonging, you find that it believes in you right back.`,
        choices: [
            { text: "Start over", next: "intro" },
            { text: "Try the other path", next: "the-choice" }
        ]
    },

    // PATH B: PROTECT
    protect: {
        text: `"Yeah... that would be cool," Bella said, forcing brightness into her voice.

The words came out flat. Lukewarm. Not quite a yes, not quite a no. The tone of someone hedging their bets, keeping one foot out the door.

Amy's smile faltered slightly—just for a moment—but she recovered quickly. "Awesome! This is going to be great."

Sammy still looked emotional, but something in the air had shifted. The moment had cracked slightly, like a bell that had been struck wrong.

They hugged—all three of them—but Bella felt herself holding back. Arms around them but heart protected. Present but not quite there. Participating but not fully surrendered.

It's safer this way, she told herself. Better to hold back now than to shatter later.

But even as she thought it, she felt something precious slipping through her fingers—an invitation she'd been too afraid to fully accept.`,
        choices: [
            { text: "Continue", next: "the-distance" }
        ]
    },

    "the-distance": {
        text: `Over the next few weeks, Amy and Sammy tried to include Bella.

Group chat messages about getting together. Invitations to study sessions. Suggestions for late-night food runs.

But Bella always had a reason.

Not tonight, I have homework.
I'm really tired, maybe next time.
I don't want to impose.

She told herself she was being realistic. Protecting herself. Not getting her hopes up. She'd been burned before by friendships that promised forever and delivered temporary.

But Amy and Sammy didn't understand. To them, it looked like Bella didn't care. Like she wasn't interested. Like maybe she'd never really wanted to be part of The Alliance in the first place.

"Is Bella okay?" Sammy asked Amy one day, her voice concerned. "It feels like she's pulling away."

"I don't know," Amy said, frowning at her phone where another message to Bella had gone unanswered. "Maybe we came on too strong? The bridesmaid thing?"

"Maybe," Sammy said softly. "Or maybe she just doesn't want to be close."`,
        choices: [
            { text: "Continue", next: "the-realization" }
        ]
    },

    "the-realization": {
        text: `Three months later, Bella sat alone in her dorm room on a Friday night, scrolling through Instagram.

Amy had posted a photo—her and Sammy at some event, arms around each other, laughing at something off-camera. The caption read: "my person ❤️"

Bella's chest ached.

She'd been invited to that event. She'd said she was too busy.

She looked at the photo and saw what she'd been too afraid to reach for: the kind of friendship she'd been longing for, now blossoming between Amy and Sammy without her.

They'd moved on. Not out of cruelty, but out of necessity. You can only invite someone in so many times before you stop asking.

Her phone buzzed. A message from her mom, asking how she was doing.

Bella typed back: I'm fine. Classes are good. I have friends.

But it felt like a lie.

She had acquaintances. She had people she knew. But The Alliance—that sacred thing she'd been offered that night in Amy's messy room—she'd let it slip through her fingers because she'd been too afraid to hold on.`,
        choices: [
            { text: "Continue", next: "protect-ending" }
        ]
    },

    "protect-ending": {
        title: "What happened next",
        text: `By the end of the semester, The Alliance still existed—but Bella wasn't really part of it.

She'd protected her heart so well that she'd protected herself right out of belonging.

Amy and Sammy were still kind to her. Still said hello in passing. Still invited her to things occasionally, though less often now. But that moment of chosen family, of covenant friendship, of three becoming one—that had passed her by.

She'd been afraid of being hurt by loving too much.

Instead, she hurt herself by loving too little.

The irony wasn't lost on her: in trying to protect herself from the pain of potential loss, she'd guaranteed the loss itself.

And now, watching from the outside as Amy and Sammy built the kind of friendship she'd always dreamed of, Bella finally understood something.

The risk of vulnerability isn't really a risk at all when the alternative is this—safe, protected, and utterly, devastatingly alone.`,
        choices: [
            { text: "Reflect on this path", next: "protect-reflection" }
        ]
    },

    "protect-reflection": {
        title: "Reflection",
        text: `You chose self-protection.

By holding back, Bella:
• Protected herself from potential pain
• But also blocked herself from potential joy
• Kept her heart safe but kept herself isolated
• Missed the very thing she'd been praying for

Fear disguised as wisdom is still just fear.

God calls us to love boldly, to build community courageously, to risk our hearts for the possibility of connection. Not because relationships are guaranteed to last forever, but because we were never meant to walk through life alone.

The friendships we're afraid to fully embrace are often the very ones God is offering as His answer to our prayers.

Bella prayed for belonging and God sent Amy and Sammy. But when the invitation came—when it required her to be vulnerable, to trust, to hope—she pulled back.

She chose safety over surrender.

And in doing so, she lost the very thing she'd been longing for.

Sometimes the scariest prayer we can pray is: "God, help me love without holding back." Because that prayer requires us to trust Him with our hearts, even when we've been hurt before.

But it's also the only prayer that leads to the belonging we crave.`,
        choices: [
            { text: "Start over", next: "intro" },
            { text: "Try the other path", next: "the-choice" }
        ]
    }
};

// ============================================
// State Management
// ============================================
let currentScene = 'intro';
let choicesHistory = [];

// ============================================
// Get Elements from HTML
// ============================================
const sceneTitle = document.getElementById('scene-title');
const storyText = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices-container');
const resetBtn = document.getElementById('reset-btn');
const reflectionOverlay = document.getElementById('reflection-overlay');
const reflectionText = document.getElementById('reflection-text');

// ============================================
// Functions
// ============================================

function renderScene(sceneName) {
    currentScene = sceneName;
    const scene = scenes[sceneName];
    
    if (scene.title) {
        sceneTitle.textContent = scene.title;
        sceneTitle.style.display = 'block';
    } else {
        sceneTitle.style.display = 'none';
    }
    
    storyText.textContent = scene.text;
    
    choicesContainer.innerHTML = '';
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice.text;
        button.onclick = () => handleChoice(choice);
        choicesContainer.appendChild(button);
    });
    
    if (sceneName !== 'intro') {
        resetBtn.classList.remove('hidden');
    } else {
        resetBtn.classList.add('hidden');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleChoice(choice) {
    choicesHistory.push({
        scene: currentScene,
        choice: choice.text
    });
    
    if (choice.reflection) {
        showReflection(choice.reflection, () => {
            renderScene(choice.next);
        });
    } else {
        renderScene(choice.next);
    }
}

function showReflection(text, callback) {
    reflectionText.innerHTML = text.replace(/\n/g, '<br>');
    
    // Create continue button
    const continueBtn = document.createElement('button');
    continueBtn.textContent = 'Continue';
    continueBtn.className = 'reflection-continue-btn';
    continueBtn.onclick = () => {
        reflectionOverlay.classList.add('hidden');
        const existingBtn = document.querySelector('.reflection-continue-btn');
        if (existingBtn) existingBtn.remove();
        callback();
    };
    
    const reflectionContent = document.querySelector('.reflection-content');
    reflectionContent.appendChild(continueBtn);
    
    reflectionOverlay.classList.remove('hidden');
}

function resetStory() {
    currentScene = 'intro';
    choicesHistory = [];
    renderScene('intro');
}

// ============================================
// Event Listeners
// ============================================
resetBtn.addEventListener('click', resetStory);

// ============================================
// Start the story
// ============================================
renderScene('intro');