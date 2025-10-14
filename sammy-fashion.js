// Story Data
const scenes = {
    intro: {
        title: "that one with the spontaneous fashion show",
        text: `Bella had grown to love going to church with Sammy every Sunday, but what she loved most—what made her chest ache with something too big for words—was sitting next to her during worship.

There was something about watching Sammy stand there with her eyes closed, hands raised toward a God she couldn't see but believed in anyway, that made Bella feel like she had family again. Like she wasn't quite so far from home.

They weren't just friends in those moments—they were sisters, both reaching for the same Father, both held by the same impossible love.

Even though Bella missed her real family with an ache that sometimes made it hard to breathe, having Sammy beside her each Sunday morning filled a small corner of that cavernous emptiness.`,
        choices: [
            { text: "Continue", next: "loneliness" }
        ]
    },

    loneliness: {
        text: `But the post-church routine—that was something Bella was still learning to navigate in this strange country where everything felt wrong.

Back home, life had flowed like water. People moved in and out of each other's homes without announcement or apology. Families gathered for meals that stretched into evenings that stretched into nights. Friends simply existed together through the mundane sacredness of ordinary life.

Here in the United States, everything felt compartmentalized. Scheduled. Americans seemed to live in separate boxes, each person busy with their own pursuits, meeting only for planned activities before returning to their isolated spheres.

The loneliness of it had nearly killed her those first eighteen months.

She remembered one Sunday afternoon with painful clarity—trudging back to her empty dorm after church, sharing an elevator with Sammy and Amy when they weren't yet her friends. Amy had been describing how Sammy had accompanied her to three different grocery stores just to find the specific brand of coffee creamer Amy insisted on.

Something about their easy companionship had left Bella aching with a homesickness so profound she'd barely made it to her room before the tears came.`,
        choices: [
            { text: "Continue", next: "prayer" }
        ]
    },

    prayer: {
        text: `That night, she'd whispered a prayer into her pillow like a secret, like a confession:

"Lord, I miss how we did life back home. I just want a friend like Sammy. Someone who understands that friendship isn't scheduled meetings to check off a list. Someone who knows that love is just... being. Together. In the boring parts. In the nothing parts."

Now, months later, God had answered that prayer with a specificity that sometimes took her breath away.

He hadn't just given her a friend like Sammy.

He'd given her Sammy herself.

"Wanna grab lunch?" Sammy asked as they pulled into the campus parking lot, the question so casual it might have seemed insignificant to anyone else.

But Bella heard what it really meant: Stay with me. Keep existing beside me. Don't leave yet.

"Yes! I'd love to," Bella replied, and her smile was genuine because this—this—was the answer to that whispered prayer.`,
        choices: [
            { text: "Continue", next: "studying" }
        ]
    },

    studying: {
        text: `They claimed their usual table by the window in the dining hall. As they finished eating, Bella began the mental preparation for goodbye—the practiced casualness of "see you later" that would precede her Sunday afternoon solitude.

But Sammy surprised her.

"What are you doing now?" Sammy asked. "Do you have plans? Do you want to study together?"

The question hung in the air between them. This wasn't a scheduled event. This was an invitation into ordinary time—into that sacred, coveted space of just existing together.

"Sure!" Bella said. "Let's find a study room."

They settled into one of the quieter corners of the library. As the hours passed, Bella found herself relaxing. The silence between them felt like a gift. It all felt so easy. So natural. So much like home that Bella's chest ached with gratitude.

They studied until well past dinner, the hours slipping away unnoticed.

"I think my brain officially gave up about an hour ago," Sammy declared.

"Same," Bella agreed. "Thank you for today. I didn't realize how much I needed this."

"Me too." Sammy pulled her into a hug that lasted longer than usual. "See you tomorrow?"

"Definitely."`,
        choices: [
            { text: "Continue", next: "bedtime" }
        ]
    },

    bedtime: {
        text: `Back in her dorm room, Bella changed into her pajamas with a contentment she hadn't felt in weeks. She brushed her teeth. Settled into bed. Closed her eyes with a grateful heart.

For once, the transition from social time to solitude felt natural instead of jarring.

But as she lay there, ready for sleep, poised on the edge of rest—

She felt the familiar twitch in her right foot.

No.

Not tonight.

Please, not tonight.

The twitching intensified, spreading up her leg like wildfire. Within minutes, any hope of sleep had been incinerated. Bella tried everything—changing positions, stretching, the breathing exercises. Nothing worked.

Nothing ever worked.`,
        choices: [
            { text: "Continue", next: "despair" }
        ]
    },

    despair: {
        text: `As the hours crawled by with excruciating slowness, the physical discomfort transformed into something much worse.

The loneliness she had forgotten during the day came rushing back like a tidal wave, drowning her.

The twitching seemed to mock her, seemed to whisper: Despite the wonderful day with Sammy, despite everything, you are still alone with this. Your body still betrays you every night. You still have to face the darkness by yourself. You will always be alone in this. Always.

Tears leaked onto her pillow—slow at first, then faster, then uncontrollable.

She had been so happy just hours ago. Why couldn't she have one good night? Just one? Was that too much to ask?

The weight of everything crashed down on her all at once: being thousands of miles from home, missing her family with an ache that felt like dying, dealing with this mysterious condition that doctors couldn't explain, trying to maintain her grades and scholarship when she was running on two hours of sleep a night.

She pressed her face into her pillow and sobbed quietly, careful even in her breakdown not to be a burden.

But then—through her despair—she remembered something.

She didn't have to be alone anymore.`,
        choices: [
            { text: "Continue", next: "the-choice" }
        ]
    },

    "the-choice": {
        text: `With shaking hands, she reached for her phone, the screen too bright in the darkness.

Her fingers hovered over Sammy's name.

It was late. Sammy had her own life. Sammy was probably already asleep. This was too much to ask. This was—

But she could still hear Sammy's voice from earlier: "See you tomorrow?"

She could still feel that hug that lasted longer than usual.

She stared at her phone, tears blurring the screen.`,
        choices: [
            { 
                text: "Text Sammy for help", 
                next: "texting",
                reflection: `"Carry each other's burdens, and in this way you will fulfill the law of Christ."

— Galatians 6:2

"Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up."

— Ecclesiastes 4:9-10`
            },
            { 
                text: "Don't reach out—handle it alone", 
                next: "alone",
                reflection: `"Pride goes before destruction, a haughty spirit before a fall."

— Proverbs 16:18

"Therefore confess your sins to each other and pray for each other so that you may be healed."

— James 5:16`
            }
        ]
    },

    // PATH A: TEXT SAMMY
    texting: {
        text: `Bella: Hey, any chance you could come over? I'm having a moment. The twitching is really bad tonight and I can't sleep...

She stared at the message before hitting send, already preparing herself for disappointment.

But the response came almost immediately.

Sammy: Oh honey :( I'll be right there. Do you need anything? Water? Snacks? A distraction?

Bella's breath caught. She wiped her face with her sleeve.

Bella: Just you

Sammy: Coming ❤️

Within five minutes—five minutes—there was a gentle knock on her door.`,
        choices: [
            { text: "Continue", next: "sammy-arrives" }
        ]
    },

    "sammy-arrives": {
        text: `Bella wiped her face quickly, trying to make herself presentable. She opened the door expecting to see Sammy in her usual pajamas, maybe looking a little sleepy.

Instead, she was greeted by a figure wrapped in what appeared to be every blanket Sammy owned, wearing mismatched fuzzy slippers (one shaped like a taco, the other like a slice of pizza), and sporting what looked suspiciously like Amy's oversized sunglasses.

At 2 a.m.

"Daaaaarling!" Sammy announced in an exaggerated British accent, sweeping dramatically into the room. "I have arrived to banish your sorrows with the power of... fashion?"

Despite everything—despite the exhaustion and the pain and the despair that had been suffocating her moments before—Bella felt her lips twitch upward.

Sammy struck a pose, nearly tripping over the trailing blankets. "I know this look says 'I raided a thrift store in the dark,' but I call it 'Comfort Meets Chaos.' It's very avant-garde."

A small laugh escaped Bella's throat—surprised, reluctant, real.

"Ah! A smile!" Sammy gasped theatrically. "My work here is... well, actually, not quite done."

She dropped the accent. Her expression softened.

"Come here, you."`,
        choices: [
            { text: "Continue", next: "opening-up" }
        ]
    },

    "opening-up": {
        text: `Bella fell into Sammy's arms—blankets and all—and the tears started again. But this time they felt different. Less desperate. More like finally being allowed to let go.

"I don't know what's wrong with me," Bella whispered into Sammy's shoulder. "The doctors can't figure it out. Some nights are okay, and others... I just can't stop twitching. And I feel so alone when it happens."

Sammy pulled back slightly, studying Bella's face with an intensity that made her feel truly seen.

"You know what? Scratch the fashion show for a second," Sammy said. "Let's try something else first."

She began unwrapping herself from the blanket fortress, revealing ridiculous mismatched pajamas underneath—heart-print pants and a shirt that proclaimed "I Woke Up Like This: Tired."

"First," Sammy said, spreading the largest blanket on the floor, "we make a nest. Then we're going to try something my mom used to do when I couldn't sleep as a kid."

"What's that?"

"We're going to tell God exactly how mad we are about this situation, and then we're going to ask Him to help anyway." She patted the blanket. "And if your legs want to twitch, they can twitch. We'll just be twitchy together."`,
        choices: [
            { text: "Continue", next: "vulnerability" }
        ]
    },

    vulnerability: {
        text: `Bella sank down beside her friend, and some of the terrible tension in her shoulders finally released.

"You don't have to stay," Bella said quietly. "It could be hours before I fall asleep. If I fall asleep at all."

"Bella." Sammy's voice was firm but gentle. "Remember how you felt when I asked you to study today? Like maybe you were imposing?"

"Yeah..."

"And how did it actually feel once we were together?"

Bella thought about the easy comfort of their shared silence, the natural rhythm they'd found. "Like it was exactly what I needed."

"Exactly. So stop trying to protect me from being your friend." Sammy grabbed Bella's hands. "Besides, you think I'm just going to leave you here to suffer alone? Please. I didn't spend twenty minutes figuring out how to wear three blankets as a cape just to abandon you now."

That got a real laugh out of Bella.

"You're ridiculous," Bella said, but it sounded like I love you.

"I'm committed to the bit," Sammy grinned. Then her expression grew serious. "But for real, Bella. You don't have to carry this alone anymore."`,
        choices: [
            { text: "Continue", next: "talking" }
        ]
    },

    talking: {
        text: `"Now," Sammy continued, settling back against the pillows, "tell me what's really going on. Not just the twitching. What's eating at you?"

And so Bella talked.

For the next hour, she poured it all out—the homesickness that felt like a physical wound, the pressure to succeed on her scholarship, the feeling that her body was betraying her, the fear that this would never get better, that she'd always be tired, always be struggling, always be broken.

Sammy listened without trying to fix anything. When Bella's legs started twitching again—violent, involuntary, humiliating—Sammy didn't flinch. Didn't look away.

She just adjusted her position so Bella could stretch out more comfortably.

"Okay," Sammy finally said, standing up with theatrical purpose. "What do you usually do when this happens?"

"Everything," Bella said, defeat in her voice. "Stretching, hot showers, meditation apps. Sometimes I just end up crying until I'm too exhausted to stay awake."

Sammy's eyes lit up with mischief. "I have an idea. But you have to promise not to laugh."

"After that entrance? I think we're past that point."`,
        choices: [
            { text: "Continue", next: "fashion-show" }
        ]
    },

    "fashion-show": {
        text: `For the next twenty minutes, Sammy paraded around Bella's small dorm room in different ridiculous combinations of blankets, narrating each "look" in an exaggerated runway announcer voice.

"And here we have the 'Burrito Supreme,'" she proclaimed, wrapped so tightly in a yellow blanket that only her face showed. "Perfect for those chilly winter evenings when you want to be both fashionable and completely immobile."

Bella laughed as Sammy shuffled across the room, nearly tripping over the trailing fabric.

"Next, we have the 'Superhero Gone Wrong,'" Sammy continued, draping a blue blanket around her shoulders like a cape. "She fights crime! She saves cats from trees! She occasionally gets caught in revolving doors!"

With each absurd outfit and commentary, Bella found herself laughing harder. The twitching was still there, but somehow it didn't feel as all-consuming.

But when Sammy unveiled her "final look"—all three blankets precariously balanced on her head like a towering hat—something inside Bella cracked.

Her laughter suddenly dissolved into tears. Not the gentle kind. The kind that came from somewhere deep and broken.`,
        choices: [
            { text: "Continue", next: "breakdown" }
        ]
    },

    breakdown: {
        text: `"Hey, hey," Sammy said quickly, dropping the blankets and rushing to Bella's side. "What's wrong?"

Bella shook her head, trying to catch her breath between sobs. "It's not you. It's just—I'm so tired, Sammy. I'm so tired of this."

Sammy wrapped an arm around her shoulders, all the theatrical energy gone.

"I know," she said simply. Not it'll get better or just have faith. Just: I know.

"I've been praying for months," Bella whispered, and the admission felt like betrayal. "Every night. Asking God to take this away, to let me sleep, to give me some relief. And nothing changes." Her voice cracked. "I'm starting to think He's not listening. Or worse—that He doesn't care."

The words tasted like poison, like the truth she'd been too afraid to speak.

Sammy was quiet for a long moment, gently rubbing Bella's back.

"You know what?" she finally said. "It's okay that you feel that way. You don't have to pretend you don't."

Bella looked up in surprise.`,
        choices: [
            { text: "Continue", next: "faith-talk" }
        ]
    },

    "faith-talk": {
        text: `"Seriously," Sammy continued. "Being angry at God, questioning Him—that's in the Bible too. Look at Job. Look at David in the Psalms. 'How long, O Lord? Will you forget me forever?'" She squeezed Bella's shoulder. "God can handle your anger. He's big enough for your doubt."

"But I feel like I'm failing," Bella admitted. "Like if I just had more faith..."

"Bella, listen to me." Sammy turned to face her fully. "You're not failing. You're human. And right now, if your faith is shaky, that's okay—because I have enough for both of us."

"What do you mean?"

"I mean that I am absolutely, one hundred percent certain that God is going to pull through for you," Sammy said with conviction that felt like bedrock. "I don't know how. I don't know when. It probably won't look like what you're expecting. But I know He hasn't abandoned you."

"How can you be so sure?"

"Because He put me in your life, didn't He?" Sammy smiled gently. "And I'm pretty awesome."

Despite everything, Bella found herself smiling back.`,
        choices: [
            { text: "Continue", next: "revelation" }
        ]
    },

    revelation: {
        text: `"Look," Sammy continued, her voice softening. "Maybe the answer isn't taking away the twitching. Maybe it's giving you people who show up at 2 a.m. with questionable fashion choices to make you laugh through it. Maybe it's changing how you carry this burden, not removing it."

Bella wiped her eyes, something shifting in her chest. "That's... actually profound."

"I know, right? Sometimes I surprise myself." Sammy squeezed her hand. "But seriously—I've got enough faith for both of us right now. Let me carry that for you until you find yours again."

The words settled over Bella like a blessing, like permission, like grace.

Let me carry that for you.

Around 3:30 a.m., Sammy finally gathered her collection of blankets.

"I should probably head back before my roommate thinks I've been kidnapped," she said.

"Thank you for coming over," Bella said softly. "For the fashion show. For what you said about faith. For everything."

"That's what friends are for." Sammy pulled her into a tight hug. "Text me if it gets bad again, okay? I mean it. Day or night."

"Even at 3 a.m.?"

"Especially at 3 a.m." Sammy winked. "Remember—I've got enough faith for both of us. You're never alone in this, Bella. Never."`,
        choices: [
            { text: "Continue", next: "peace" }
        ]
    },

    peace: {
        title: "What happened next",
        text: `After Sammy left, Bella lay back in her bed, staring at the ceiling.

The twitching was still there. The exhaustion was still there. Nothing about her circumstances had changed.

But somehow—somehow—it didn't feel as overwhelming as before.

Something about Sammy's visit—her ridiculous fashion show, her unwavering faith, her willingness to just show up—had shifted something fundamental in Bella's heart.

She thought about what Sammy had said about God's answer looking different than expected.

Maybe Sammy herself was part of that answer.

As Bella closed her eyes, a verse she'd memorized years ago surfaced: "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up."

Tonight, she had fallen.

And Sammy had helped her up—not by fixing her condition, not by taking away the burden, but by reminding her she didn't have to face it alone.

The twitching continued. Her legs jerked through the night.

But the despair—that suffocating, all-consuming despair—did not.`,
        choices: [
            { text: "Reflect on this path", next: "reach-out-reflection" }
        ]
    },

    "reach-out-reflection": {
        title: "Reflection",
        text: `You chose vulnerability.

By reaching out to Sammy, Bella:
• Let someone else carry her burden
• Received the help God was trying to give her through community
• Discovered that her pain didn't have to be faced alone
• Learned that asking for help is an act of faith, not weakness

Sometimes God's answer to our prayers doesn't look like we expect. Sometimes He doesn't remove the hardship—He sends people to walk through it with us.

Bella prayed for healing. God sent Sammy with blankets and a British accent and enough faith for both of them.

That night, in a dorm room thousands of miles from home, Bella learned that chosen family can be just as real as blood family. That sometimes the bravest thing you can do is admit you can't do it alone.

And for now, in this dark room, held by chosen family—

That was enough.

That was more than enough.

That was everything.`,
        choices: [
            { text: "Start over", next: "intro" },
            { text: "Try the other path", next: "the-choice" }
        ]
    },

    // PATH B: DON'T REACH OUT
    alone: {
        text: `Bella stared at her phone for a long moment, Sammy's name glowing on the screen.

Then she put it down.

No. She couldn't. It was too late. Too much to ask. Sammy had already given her so much today—lunch, hours of studying, her time, her presence. She couldn't ask for more.

She would handle this herself. Like she always did.

Bella pulled her pillow over her face and cried as quietly as she could, legs twitching violently beneath the covers. The night stretched on endlessly—two hours, three hours, four. Every time she checked the clock, only minutes had passed.

The loneliness felt like drowning. Like suffocating. Like dying very slowly.

By the time pale light started creeping through her window, Bella had maybe slept an hour. Her body ached. Her head pounded. Her heart felt bruised and hollow.

She dragged herself out of bed and got ready for class on autopilot, moving like a ghost through her own life.`,
        choices: [
            { text: "Continue", next: "morning-after" }
        ]
    },

    "morning-after": {
        text: `At lunch, Sammy texted.

Sammy: Hey! Want to grab food together?

Bella stared at the message. Part of her wanted to say yes, wanted to be near Sammy's warmth and light. But another part—the tired, hurt, resentful part—couldn't bear it.

Bella: Can't today, sorry. Swamped with work.

It wasn't a lie, exactly. She was behind on work. Because she couldn't sleep. Because she was suffering alone.

Sammy: No worries! Tomorrow then? ❤️

Bella: Maybe.

She put her phone away and ate her sandwich alone, tasting nothing, feeling everything.

A small voice whispered: You could have texted her last night. She would have come.

But the louder voice said: You can't keep being a burden. You have to be strong. You have to handle this yourself.`,
        choices: [
            { text: "Continue", next: "pattern" }
        ]
    },

    pattern: {
        text: `The pattern continued for weeks.

Sammy would invite her places. Bella would make excuses. The twitching continued every night. The exhaustion accumulated. The loneliness grew teeth and claws and learned to feast on her heart.

She told herself she was being considerate. Mature. Self-sufficient.

But really, she was just scared. Scared of being too much. Scared of needing someone. Scared of the vulnerability required to admit she couldn't do this alone.

So she suffered in silence. Night after night after night.

And slowly, imperceptibly, she started pulling away from Sammy. From Amy. From everyone.

It was easier this way, she told herself. Safer. She couldn't be disappointed if she didn't expect anything from anyone.

She couldn't be a burden if she never let anyone close enough to carry her.`,
        choices: [
            { text: "Continue", next: "sammy-notices" }
        ]
    },

    "sammy-notices": {
        text: `Three weeks after that night when she'd almost texted, Sammy cornered her after church.

"Bella," Sammy said gently, but there was steel underneath. "What's going on? And don't say nothing. I know you."

Bella forced a smile. "I'm fine. Just busy with—"

"You're not fine." Sammy's eyes were sad. "You're pulling away. You barely respond to my texts. You haven't hung out with me in weeks. Did I... did I do something wrong?"

The hurt in Sammy's voice made Bella's chest ache.

"No," Bella said quickly. "No, you didn't do anything."

"Then what is it?" Sammy asked. "Because I miss you. I miss my friend. And I'm worried about you."

Bella opened her mouth to say I'm fine again, but the words stuck in her throat.

Because she wasn't fine. She was drowning. She had been drowning for weeks.

And she'd been too proud, too afraid, too convinced of her own self-sufficiency to reach for the hand that had been extended all along.`,
        choices: [
            { text: "Continue", next: "realization" }
        ]
    },

    realization: {
        title: "What happened next",
        text: `"I'm drowning," Bella finally whispered, and saying it out loud made it real. "The twitching—it's every night, Sammy. I can't sleep. I can barely function. And I've been trying so hard to handle it myself because I didn't want to be a burden and—"

Her voice broke. Tears spilled over.

Sammy pulled her into a fierce hug right there in the parking lot.

"You absolute idiot," Sammy said, but her voice was thick with emotion. "You beautiful, stubborn idiot. When are you going to learn that you're not a burden? That I want to carry this with you?"

"I didn't want to ask for too much," Bella sobbed into Sammy's shoulder.

"There's no such thing as too much when you love someone," Sammy said fiercely. "Do you understand? You're my sister. That means when you hurt, I hurt. When you suffer alone, you're taking away my chance to love you."

The words hit Bella like a revelation.

By trying to protect Sammy from her pain, she'd been pushing away the very help God had sent.`,
        choices: [
            { text: "Reflect on this path", next: "alone-reflection" }
        ]
    },

    "alone-reflection": {
        title: "Reflection",
        text: `You chose isolation.

By not reaching out, Bella:
• Missed the help God was offering through community
• Let pride masquerade as self-sufficiency
• Hurt not just herself, but the friend who wanted to help
• Learned the hard way that suffering alone doesn't make you strong—it makes you alone

There's a difference between independence and isolation. Between being strong and refusing to be vulnerable. Between protecting others and pushing them away.

God never intended for us to carry our burdens alone. That's why He gave us community. That's why He gave us the Body of Christ. That's why He sent people who will show up at 2 a.m. with blankets and British accents and enough faith for both of you.

Sometimes the bravest thing you can do isn't handling it yourself.

Sometimes the bravest thing you can do is text "I need help" at 2 a.m.

Because when you refuse to let others carry you, you're not just rejecting their help.

You're rejecting the way God wants to love you through them.`,
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
        // Remove the button
        const existingBtn = document.querySelector('.reflection-continue-btn');
        if (existingBtn) existingBtn.remove();
        callback();
    };
    
    // Add button to reflection content
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