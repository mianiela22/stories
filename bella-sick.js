// Story Data
const scenes = {
    intro: {
        title: "that one time Bella called off work",
        text: `The alarm screamed at 6:00 AM—a violence of sound that dragged Bella up from the shallow pools where sleep had refused to take her under.

Her body was a stranger's body. Heavy. Wrong. Each limb felt like it belonged to someone else, someone who had been buried and dug up again. Her head spun in slow, nauseating circles, and her stomach clenched with a sickness that had nothing to do with illness and everything to do with bone-deep exhaustion.

She lay there, curled on her side like a child, staring at the weak morning light filtering through her dorm window. The sheets were twisted around her legs—evidence of a night spent thrashing, fighting, pleading with her own body to just stop.

Lord, she thought, and it wasn't even really a prayer, just a word thrown into the void. I don't know how I'm going to do this today.

RA training started in two hours. She was expected. Needed. She had signed up for this, had wanted this—the chance to serve, to matter, to prove she belonged here.

But she couldn't move.`,
        choices: [
            { text: "Continue", next: "the-spasms" }
        ]
    },

    "the-spasms": {
        text: `For weeks now, the spasms had been stealing sleep from her in the cruelest way—waiting until she lay down, until her guard was down, until she dared to hope for rest. Then they would start. Her legs would jerk and twitch, muscles contracting without permission, without mercy.

Her prayers had been soft at first. Hopeful. Whispered into the dark with the kind of faith that still believed in quick answers.

Please, Lord. Just tonight. Just let me sleep tonight.

But as the nights stretched on, as exhaustion piled upon exhaustion, those prayers had changed. They'd become desperate. Bargaining. Begging.

Last night, she had prayed with her whole body trembling. "Lord, I know You love me. I don't hold this against You. But please... let me sleep. Just for a little while."

No peace had come. No sudden stillness. No divine intervention.

Just more spasms. More hours staring at the ceiling. More waiting for mercy that never arrived.

Now she was on the floor. She didn't remember collapsing there, but here she was—her cheek pressed against the cold tile, her body too heavy to lift.`,
        choices: [
            { text: "Continue", next: "the-frustration" }
        ]
    },

    "the-frustration": {
        text: `The frustration bubbled up again, hot and bitter in her throat.

She hated this. Hated feeling weak. Hated that this invisible, unexplainable thing was the reason she had to call off work.

She wasn't the kind of person who skipped responsibilities. She had earned her place at the University of Miami on a full scholarship, had worked harder than anyone she knew, had proven herself again and again. She owed it to everyone who believed in her to be someone worth investing in.

And yet—

Here she was.

Lying on the floor of her dorm room, unable to even make it to the shower.

Her phone buzzed.

She groaned, rolling onto her side to see a message from Amy lighting up the screen.

Amy: Y'all ready for training?

Bella's fingers were slow and clumsy as she typed back.

Bella: I called in sick today. Body spasms have been keeping me from sleeping, and I feel so nauseous.`,
        choices: [
            { text: "Continue", next: "the-offer" }
        ]
    },

    "the-offer": {
        text: `The response came immediately, and something in Bella's chest cracked at the speed of it.

Sammy: Oh my goodness, Bella! I'm so sorry. Let me know if you need anything.

Amy: Do you want me to bring you some breakfast? I really don't mind.

They cared. They actually cared.

And somehow that made it worse—made her feel like she was disappointing them, like she was letting down the people who had chosen to love her.

Bella stared at Amy's message, her thumb hovering over the keyboard.

Do you want me to bring you some breakfast?

Part of her—the exhausted, desperate, aching part—wanted to say yes. Wanted to let someone take care of her, wanted to not be alone in this suffering.

But another part—the part that had learned to be strong, to be self-sufficient, to never be a burden—whispered: You can't ask for more. You've already disappointed them by calling off. Don't make it worse by needing them.`,
        choices: [
            { 
                text: "Let Amy come over", 
                next: "accept-help",
                reflection: `"Carry each other's burdens, and in this way you will fulfill the law of Christ."

— Galatians 6:2

"The prayer of a righteous person is powerful and effective."

— James 5:16`
            },
            { 
                text: "Say no—handle it alone", 
                next: "refuse-help",
                reflection: `"Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up."

— Ecclesiastes 4:9-10`
            }
        ]
    },

    // PATH A: ACCEPT HELP
    "accept-help": {
        text: `Bella's fingers hovered over the keyboard for another moment.

Then, taking a breath that felt like surrender, she typed:

Bella: Actually... yes. If you really don't mind. I think I feel too sick to leave my room.

The reply was instant.

Amy: On my way! Be there in 10 ❤️

Bella set her phone down and forced herself to sit up on the bed. The nausea rolled through her in waves. The weight of fatigue pressed down like physical hands.

But underneath the exhaustion, something else stirred. Something that felt like relief.

She didn't have to do this alone.

Ten minutes later—almost to the second—there was a knock at the door.

Bella barely had the strength to raise her voice. "It's open."`,
        choices: [
            { text: "Continue", next: "amy-arrives" }
        ]
    },

    "amy-arrives": {
        text: `The door creaked, and Amy's head appeared. "Hey," she said softly, stepping inside. "I came to check on you."

Bella blinked as Amy held up a small paper bag. "And I brought you a bagel."

Something inside Bella broke.

She had never—not once in her life—had a friend check up on her when she was sick. Not like this. Not with this kind of tenderness, this quiet insistence that she mattered enough to show up for.

Tears welled up fast and hot, spilling over before she could stop them. She reached out blindly, pulling Amy into a hug that was too tight, too desperate, but she couldn't help it.

"Thank you," Bella whispered, her voice thick and breaking. "You're so sweet. I just..." She exhaled shakily. "I feel so weak, Amy. I'm sorry I'm not more joyful, or energetic. I'm just so exhausted. I feel like not sleeping is breaking me."

Amy's hand rubbed gentle circles on her back. She didn't rush to fill the silence with empty reassurances.`,
        choices: [
            { text: "Continue", next: "confession" }
        ]
    },

    confession: {
        text: `"I've been praying so hard," Bella admitted, and the words tasted like failure. "But God's not answering. I just want the spasms to stop so I can go back to doing normal things. So I can just... live."

Amy pulled back slightly, her eyes searching Bella's face. Then, gently: "Why don't you sit on your bed for a second?"

Bella frowned. "Why?"

Amy smiled—soft, certain. "Because I'm going to pray for you."

If Bella had been fully awake, she might have laughed nervously. Might have deflected. But she was too tired for pride. Too exhausted to pretend she didn't need this.

She sat down.

Amy stepped closer and placed her hand gently on Bella's head, and Bella bowed forward, ready for something quiet. Something simple.

But then Amy began to speak in tongues.`,
        choices: [
            { text: "Continue", next: "the-prayer" }
        ]
    },

    "the-prayer": {
        text: `Bella's breath caught.

The words weren't English. They rose and fell like music, like a language older than language itself—desperate one moment, fierce the next. A plea. A battle cry. A song.

Bella had grown up hearing about this kind of prayer, had seen it from a distance, but this—

This was different.

Something inside her moved.

Tears slipped down her cheeks, silent at first, then harder, faster, until her whole body was shaking. The frustration, the exhaustion, the helplessness she'd been carrying for weeks—it all came pouring out in great, gasping sobs.

Amy was crying too. Bella could hear it in her voice, in the tremor of her prayers.

She didn't know when she reached out, but suddenly she was holding onto Amy like she was drowning and Amy was the only thing keeping her head above water.

And as Amy kept praying, her words wrapping around them like a shield, Bella closed her eyes.`,
        choices: [
            { text: "Continue", next: "the-vision" }
        ]
    },

    "the-vision": {
        text: `She wasn't in her dorm room anymore.

She was somewhere else. Somewhere holy.

She was kneeling before the throne of God—and Jesus—her Jesus, the one who had loved her from before she was born—was standing beside her. His hand was outstretched.

She took it.

The weight lifted.

All of it. The exhaustion. The fear. The crushing certainty that she was too broken to be fixed.

Gone.

She could breathe again.

A gentle pat on her back pulled her back to the present, and when Bella opened her eyes, Amy was looking at her with a quiet certainty that made Bella feel seen.

"Now stay and get some more rest," Amy said firmly, like she had the authority to command it. "I know God will heal you."

Bella wiped at her face with shaking hands. "Thank you," she whispered, her voice hoarse. "I'll... I'll definitely try."

Amy gave her one last smile before slipping out the door—late for work now, undoubtedly, but she didn't seem to care.`,
        choices: [
            { text: "Continue", next: "accept-ending" }
        ]
    },

    "accept-ending": {
        title: "What happened next",
        text: `Bella let out a long, slow breath.

She was still tired. Still weak. Still sick.

But for the first time in weeks—

She didn't feel alone.

She crawled back into bed, pulled the covers up, and closed her eyes. The spasms might come back. Probably would. But right now, in this moment, she felt something she hadn't felt in so long she'd almost forgotten what it was called.

Hope.

Small. Fragile. But there.

And it was enough.

That night, Bella slept. Not perfectly. Not without struggle. But she slept more than she had in weeks.

And when she woke the next morning, she texted Amy:

Bella: Thank you for yesterday. I don't know what you prayed, but I felt it. I really did.

Amy: That wasn't me, that was all God. But I'm so glad I got to be there for it ❤️

Bella smiled through fresh tears.

She had learned something profound in that messy dorm room: sometimes God's answers don't look like miracles we can see. Sometimes they look like friends who show up with bagels and prayers that shake the heavens.`,
        choices: [
            { text: "Reflect on this path", next: "accept-reflection" }
        ]
    },

    "accept-reflection": {
        title: "Reflection",
        text: `You chose vulnerability.

By letting Amy come over, Bella:
• Allowed someone to carry her burden
• Received prayer that brought her into God's presence
• Experienced the power of community in crisis
• Learned that weakness isn't failure—it's an invitation for God to show up

Sometimes the hardest thing to do is admit we need help. We think independence is strength, that asking for support makes us a burden.

But God designed us for community. He gives us people who will show up at our worst moments—not to fix us, but to remind us we're not alone.

Amy didn't heal Bella's body that day. But she brought hope. She brought prayer. She brought the tangible reminder that God sees, God cares, and God sends people.

When you're on the floor of your dorm room, unable to move, exhausted beyond words—that's when you need to let people in. Not because you're weak, but because that's what The Alliance is for.

Iron sharpens iron. And sometimes, one person's faith carries another until they can stand again.`,
        choices: [
            { text: "Start over", next: "intro" },
            { text: "Try the other path", next: "the-offer" }
        ]
    },

    // PATH B: REFUSE HELP
    "refuse-help": {
        text: `Bella stared at Amy's message for a long moment.

Do you want me to bring you some breakfast?

No. She couldn't. She'd already let them down by calling off work. She couldn't ask for more, couldn't be more of a burden than she already was.

She typed quickly, before she could change her mind:

Bella: Nah, it's all good. I think I feel too sick to eat. But I hope training goes well!

The response was immediate:

Amy: Okay, feel better! Let us know if you change your mind ❤️

Bella tossed her phone onto the bedside table and forced herself to sit up on the bed.

She would handle this. Like she always handled things. Alone.`,
        choices: [
            { text: "Continue", next: "alone-struggle" }
        ]
    },

    "alone-struggle": {
        text: `The hours crawled by with excruciating slowness.

Bella lay in bed, staring at the ceiling, her body too exhausted to do anything but exist. The nausea came in waves. The spasms in her legs continued their cruel rhythm, reminding her that sleep—if it came at all—would be shallow and unsatisfying.

She tried to pray, but the words felt hollow. Empty. Like she was shouting into a void that had stopped listening weeks ago.

Around noon, her phone buzzed.

Sammy: How are you feeling? Do you need anything?

Bella: I'm okay. Just resting.

Another lie. Another wall. Another opportunity to let someone in that she chose to close.

By evening, the loneliness had become its own kind of pain—heavier than the exhaustion, sharper than the nausea.

She had people who cared. Who wanted to help. Who had offered.

And she had said no.

Because she was afraid of being too much. Afraid of needing them. Afraid that if she let them see how broken she really was, they'd realize she wasn't worth the effort.`,
        choices: [
            { text: "Continue", next: "the-realization" }
        ]
    },

    "the-realization": {
        text: `That night—another sleepless night—Bella lay in the dark and finally admitted something to herself:

She was drowning.

And she had pushed away the very people God had sent to pull her out.

The next morning, exhausted and hollow, she opened her Bible with shaking hands. The pages fell open to Ecclesiastes, and her eyes landed on a verse that felt like it had been waiting for her:

"Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up."

Bella read it again. And again.

She had fallen. And she'd refused to let anyone help her up.

Not because there was no one to help. But because she'd been too proud—too afraid—to reach for the hands that were already extended.

With trembling fingers, she picked up her phone and typed a message to The Alliance group chat:

Bella: I need help. I'm not okay. And I'm sorry I pretended I was.`,
        choices: [
            { text: "Continue", next: "refuse-ending" }
        ]
    },

    "refuse-ending": {
        title: "What happened next",
        text: `The responses came immediately:

Amy: On my way.

Sammy: Me too. Be there in 5.

Twenty minutes later, both of them were in Bella's room. Amy had brought food. Sammy had brought blankets. And both of them had brought something Bella had desperately needed but been too afraid to ask for:

Presence.

They didn't lecture her for pushing them away. They didn't make her feel guilty for lying. They just showed up.

And when Amy offered to pray—just like she had wanted to do the day before—Bella said yes.

This time, she let herself receive it.

The prayer was powerful. The presence of God was real. But Bella realized something that day:

God had been trying to answer her prayers all along. He'd sent Amy with breakfast. He'd sent Sammy with concern. He'd sent The Alliance with love.

She'd just been too afraid to receive it.

Suffering alone doesn't make you strong. It just makes you alone.

And sometimes the bravest prayer you can pray is: "Help. I need you. Please come."`,
        choices: [
            { text: "Reflect on this path", next: "refuse-reflection" }
        ]
    },

    "refuse-reflection": {
        title: "Reflection",
        text: `You chose independence.

By refusing help, Bella:
• Extended her own suffering unnecessarily
• Missed the divine appointment God had prepared
• Taught her friends that she didn't really need them
• Delayed the breakthrough that was already on its way

Pride doesn't always look like arrogance. Sometimes it looks like self-sufficiency. Like not wanting to be a burden. Like suffering in silence because you don't want to admit you can't handle it alone.

But God never intended for us to handle it alone.

When Bella finally broke and asked for help, Amy and Sammy came running. They would have come the first time too. They wanted to come. They were ready to come.

Bella just had to let them.

The lesson? God often answers our desperate prayers by sending people. And when we refuse those people—when we say "I'm fine" when we're drowning—we're not being strong. We're blocking the very help God is trying to give us.

Community isn't a backup plan for when we can't manage alone. Community is God's plan. Always has been.

So the next time you're on the floor at 6 AM, unable to move, and someone offers to bring you breakfast—say yes.

Say yes and let God work through the hands that are already reaching for you.`,
        choices: [
            { text: "Start over", next: "intro" },
            { text: "Try the other path", next: "the-offer" }
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