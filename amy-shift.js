// Story Data - All your scenes go here
const scenes = {
    intro: {
        title: "that time Amy lost track of time",
        text: `Bella was running on fumes.

No—that wasn't quite right. Fumes implied there was something left to burn. Bella was running on the memory of fumes, on the ghost of energy that had abandoned her body days ago and left only a hollow shell behind.

She hadn't slept more than two hours a night for the past week. The spasms had been relentless—cruel, even—her body staging a mutiny against her every time she dared to lie down. Even now, sitting upright in bed at 7:30 AM, her limbs felt like they were made of lead. Her head pounded with the kind of ache that made her eyes water, made her wonder if maybe this was just how life was going to be now: pain and exhaustion as her only constants.

Her phone had buzzed late last night. Zane, asking if she could cover his 8 AM desk shift so he could attend a men's church retreat.

She should have said no. Should have protected herself. Should have remembered that she was barely holding herself together with tape and prayer and sheer stubborn will.

But she hadn't.

No problem. I'll cover for you.`,
        choices: [
            { text: "Continue", next: "morning" }
        ]
    },
    
    morning: {
        text: `She'd typed the words without hesitation, even though she'd known—known—what tomorrow would bring. More exhaustion. More pain. More dragging herself through the day on willpower alone, pretending she was fine when everything inside her was screaming for mercy.

Some things were worth the sacrifice, she'd told herself. Even when your body was begging you to stop.

Now, forcing herself out of bed and stumbling through getting dressed, she wondered if this was one of those things. Or if she'd just made another mistake in a long line of them.

By the time she arrived at the dorm's front desk, the building was tomb-quiet. The night security manager barely grunted a goodbye before making his escape, and Bella couldn't blame him. The air still held that heavy pre-dawn stillness—the kind that made you question every life choice that had led you to being awake at such an ungodly hour.

She sank into the desk chair and let her head drop into her hands.

No one was here. No one was going to be here.`,
        choices: [
            { text: "Continue", next: "temptation" }
        ]
    },

    temptation: {
        text: `Her stomach growled—loud, angry, insistent. She'd barely been conscious long enough to think about food before she'd had to rush down here. Maybe she should have grabbed something. A banana. Anything.

Her eyes drifted toward the elevator.

She could go back upstairs. Just for thirty minutes. Set an alarm. The security cameras were still down—had been since last week's incident with the shaving cream and fire extinguisher. Warren wouldn't arrive until nine. No one would know.

The thought was so, so tempting.

She shifted in her chair, already picturing the warmth of her bed, the blessed relief of horizontal existence—

No.

She sat up straighter, even though it hurt.

It wasn't about whether anyone was watching. It was about who she wanted to be when no one was there to see. It was about integrity. About choosing excellence even when it would be so much easier to choose survival.

She sighed and glanced at the clock. 8:07 AM.

Only one hour and fifty-three minutes to go.

She could do this.`,
        choices: [
            { text: "Continue", next: "waiting" }
        ]
    },

    waiting: {
        text: `YouTube became her lifeline—Try Not to Laugh videos playing on the front desk computer while she answered questions from early risers about weekend events and package deliveries. The mundane tasks kept her mind off the gnawing hunger, off the bone-deep fatigue that threatened to pull her under with every breath.

When Warren finally emerged from his office, she glanced at the clock: 9:58 AM.

Her stomach growled again, loud enough that Warren raised an eyebrow.

Finally.

Relief washed over her like a wave. She grabbed her things, already dreaming of a warm bagel and maybe—maybe—a short nap before her afternoon class.

But she couldn't leave yet. Not until the next person arrived.

She glanced at the shift schedule on the wall.

Amy.

Perfect. She'd get to leave and see Amy.

Bella spun in her chair, waiting for the door to swing open any second, for Amy's bright energy to fill the space—

But it didn't.

10:00 AM.

Amy was late.`,
        choices: [
            { text: "Continue", next: "veryLate" }
        ]
    },

    veryLate: {
        text: `Bella pulled out her phone.

Bella: Girl, where are you at? Trying not to die of starvation here.

A few minutes passed. No response.

More residents trickled in with their questions about lost keys and broken air conditioning. Bella helped them on autopilot, but worry was starting to creep in at the edges.

10:15 AM. Still no Amy.

Warren appeared again. "Bella? You're still here? I thought your shift ended."

Bella hesitated, not wanting to throw Amy under the bus but also not wanting to lie. "Yeah, I texted Amy. I think she'll be here soon."

Warren frowned. "She's already fifteen minutes late. That's not like her."

"She's normally really good about communicating," Bella agreed, her own concern growing. "Maybe she had an emergency?"

"Hmm." Warren didn't look convinced, but he retreated to his office.

Bella turned back to her phone.

Bella: AMYYYYYY GET YOUR BUTT OVER HERE NOW, WARREN NOTICED YOU'RE MISSING.

Nothing.

She called. No answer.

10:30 AM.

Three missed calls later. Still—nothing.`,
        choices: [
            { text: "Continue", next: "growing-worry" }
        ]
    },

    "growing-worry": {
        text: `The hunger had transformed into something sharper now, an ache that radiated from her stomach to her chest. But more than that, she was worried. Amy wasn't this late. Sure, punctuality wasn't her greatest strength, but she always communicated. Always.

What if something was wrong?

By 11:45 AM, Bella was still at the desk. Two hours into what should have been Amy's shift. She'd messaged Sammy, who hadn't heard from Amy either. The exhaustion had settled into her bones now, a permanent resident. She felt like she might cry or scream or simply cease to exist.

Warren emerged again, his expression serious.

"Alright," he said, crossing his arms. "This is officially concerning. Amy is nearly two hours late to a two-hour shift. I tried calling her—no answer."

"Me neither," Bella said quietly.

Warren's jaw tightened. "I'm going to key into her room. Make sure she's okay."

Bella's eyes widened. "You're going to what?"

"I need to make sure she's safe," Warren said, already heading for the door. "What if she's sick? Or hurt?"`,
        choices: [
            { text: "Continue", next: "warrenChecks" }
        ]
    },

    warrenChecks: {
        text: `Bella's fingers flew across her phone screen.

Bella: OH MY GOODNESS AMY.
Bella: I KID YOU NOT, WARREN IS ABOUT TO KEY INTO YOUR ROOM
Bella: ALXKHLKSKJHSKJHSHSDKJHSLK
Bella: IF YOU ARE PLAYING A WEIRD PRANK ON ME, THIS IS THE TIME FOR YOU TO STOP AND SPAWN HERE IN THE NEXT 30 SECONDS AAAAA

Five frantic calls.

Nothing.

She watched Warren disappear down the hallway, her heart pounding. What would he find? Amy passed out? Hurt? Or worse—

Warren returned minutes later, alone.

"Did you find her? Is Amy okay?" Bella blurted, the words tumbling out before she could stop them.

"She wasn't in her room." Warren ran a hand through his hair, looking genuinely troubled. "I don't know what to do. Hopefully she'll turn up soon." He glanced at Bella, something like sympathy crossing his face. "I'm sorry you had to stay an extra two hours. I'll make sure Amy takes your next shift to make up for it."

"Oh, it's okay, don't worry about it," Bella heard herself say, the automatic response of someone who had learned to make herself small, to not be a burden. "Things happen. I'm sure she had a good reason."

But even as she said it, something inside her twisted. Did she mean it? Or was she just too tired to know what she felt anymore?

Her phone buzzed.

Amy: Oh my goodness I fully forgottttt
Amy: Running over. THANK YOU SOOO MUCH FOR COVERINGGGG`,
        choices: [
            { text: "Continue", next: "the-realization" }
        ]
    },

    "the-realization": {
        text: `Bella stared at her phone.

She forgot.

After everything. After all the times Bella had covered for her, had taken on extra work despite her own exhaustion, had defended her to Warren. Amy had just... forgotten.

Something cold and hard settled in Bella's chest. She didn't get angry easily—anger felt like a luxury she couldn't afford, something that required more energy than she usually had. But something about the casualness of Amy's texts—all those extra letters, like this was just a minor inconvenience, like Bella's time and suffering and bone-deep exhaustion didn't matter—

It made her blood boil.

Amy burst through the door five minutes later, face flushed, hair wild, wearing what looked like last night's clothes. She'd clearly sprinted the whole way.

"Bella, I'm so sorry," Amy said, arms already reaching for a hug that Bella's body refused to return. "I was with Jake and completely lost track of time. We fell asleep watching a movie and my phone died and—"

She stopped.

Must have noticed the way Bella was looking at her. Or not looking at her. Bella's eyes were fixed somewhere over Amy's shoulder, because if she looked directly at her friend, she might say something she'd regret.

"What's wrong?" Amy asked, and she actually sounded confused. Like she couldn't understand why Bella might be upset.`,
        choices: [
            { 
                text: "Tell Amy the truth about feeling hurt", 
                next: "truthPath",
                reflection: `"Instead, speaking the truth in love, we will grow to become in every respect the mature body of him who is the head, that is, Christ."

— Ephesians 4:15`
            },
            { 
                text: "Brush it off and say everything's fine", 
                next: "brushOffPath",
                reflection: `"Therefore each of you must put off falsehood and speak truthfully to your neighbor, for we are all members of one body."

— Ephesians 4:25

"An honest answer is like a kiss on the lips."

— Proverbs 24:26`
            }
        ]
    },

    // PATH A: TRUTH
    truthPath: {
        text: `"What's wrong?" Bella repeated, her voice quiet but edged with something sharp. Something unfamiliar. "Amy, I've been here for nearly four hours. I'm exhausted. I haven't eaten. I was worried about you."

Amy's smile faltered. "I know, and I'm really sorry—"

"Warren keyed into your room," Bella continued, and each word felt like she was pulling it from somewhere deep inside, somewhere she usually kept locked away. "He thought something had happened to you."

Amy's eyes widened. "He what?"

"Yeah. Because you weren't answering your phone. Because no one knew where you were. Because—" Bella's voice cracked slightly, and she had to pause to steady it. "This isn't just about being late, Amy. This is about respect."

The word hung in the air between them, heavy and undeniable.

Amy stared at her, and Bella watched the realization slowly dawn on her friend's face. This wasn't just a small mistake. This was bigger.`,
        choices: [
            { text: "Continue", next: "warrenOffice" }
        ]
    },

    warrenOffice: {
        text: `Warren's voice cut through the moment like a knife. "Well, look who finally showed up." He stood in his office doorway, arms crossed, expression unreadable. "Amy. My office. Now."

Amy glanced back at Bella, her expression pleading—hoping for what? Rescue? Reassurance?—but Bella just shook her head slightly.

This is your mess to clean up.

When they disappeared into Warren's office, Bella finally let herself leave. Her body felt like it weighed a thousand pounds as she trudged toward the dining hall. The relief of finally being able to eat was overshadowed by the knot in her stomach, the uncomfortable newness of what she'd just done.

She'd confronted Amy. Actually confronted her.

It wasn't like her. Bella was the peacemaker, the one who absorbed everyone else's mistakes with grace, who never complained, who sacrificed without keeping score.

But something about this—about the expectation that she would just understand, would just cover, would just give and give and give without ever asking for anything in return—

It had finally hit a nerve.`,
        choices: [
            { text: "Continue", next: "textConvo" }
        ]
    },

    textConvo: {
        text: `Halfway through her sandwich—cardboard-tasting but desperately needed—her phone buzzed.

Amy: Hey... I'm on probation. One more late shift and I lose my job. Warren said it would have been worse if you hadn't covered for me so well. I'm so sorry, Bella. I really messed up.

Bella stared at the message. Part of her wanted to immediately smooth things over, to rush back with reassurances that everything was fine, that she understood, that it wasn't a big deal.

That would be easier.

But would it be honest?

Would it be friendship?

She typed carefully.

Bella: I'm glad it was just probation. That must have been scary.

Three dots appeared. Disappeared. Appeared again.

Amy: Are you mad at me? I feel terrible. I swear this won't happen again.

Bella took a deep breath.

Bella: I'm not mad. I'm hurt. I stayed when I was exhausted because that's what friends do. But it felt like my time wasn't as important as yours.

The truth tasted bitter going out but clean coming through.`,
        choices: [
            { text: "Continue", next: "dinner" }
        ]
    },

    dinner: {
        text: `Amy: You're right. I was selfish. There's no excuse for it. I'm really sorry, Bella.

Amy: Can I bring you dinner tonight? I want to make this right.

Bella hesitated, her sandwich forgotten.

Bella: Dinner would be nice. But Amy... I need you to know that I can't always be the one who covers, who understands, who sacrifices. I want to be there for you, but it has to go both ways.

The response came fast.

Amy: I know. I promise I'll do better. I've taken you for granted and that's not fair. You deserve more than that.

Something in Bella's chest loosened slightly.

Bella: Thanks. I'll see you tonight.

Amy: Bella?

Bella: Yeah?

Amy: You were right to call me out. That's what iron sharpening iron looks like. Thank you for caring enough to tell me the truth.

Bella set down her phone and let herself breathe.

The exhaustion was still there. The spasms would probably come back tonight, stealing sleep she desperately needed. But something had shifted.

She had found her voice.`,
        choices: [
            { text: "Continue", next: "truthEnding" }
        ]
    },

    truthEnding: {
        title: "What happened next",
        text: `That evening, a knock came at her door. When Bella opened it, Amy stood there holding not just dinner, but a small gift bag, her eyes red-rimmed like she'd been crying.

"I brought Italian," Amy said quietly. "And this."

Bella took the bag. Inside was a small wooden plaque, the words burned into the surface with careful, deliberate strokes: As iron sharpens iron, so one friend sharpens another. Proverbs 27:17

"I made it in that woodburning class I've been taking," Amy explained, her voice thick. "I was going to give it to you for your birthday, but... it felt right for today."

Bella looked at her friend—this messy, bold, sometimes frustrating, always loving person who had become such an important part of her life. Who had prayed over her trembling body at 2 AM. Who had brought her a bagel when she was too sick to ask for one. Who had loved her fiercely and imperfectly and humanly.

"It's perfect," Bella said softly.

Amy's eyes filled with tears. "I'm so sorry, Bella."

"I know." Bella opened her arms. "Come here."`,
        choices: [
            { text: "Reflect on this path", next: "truthReflection" }
        ]
    },

    truthReflection: {
        title: "Reflection",
        text: `As they hugged, Bella realized something important. The Alliance wasn't about being perfect friends. It was about being real ones—speaking truth even when it was hard, setting boundaries even when it felt uncomfortable, forgiving failures without pretending they didn't hurt, and growing together through it all.

Iron sharpening iron didn't always feel good.

It hurt sometimes. Sparked. Left marks.

But it made both blades stronger.

And that—that was worth every uncomfortable conversation, every moment of vulnerability, every risk of saying "this hurt me" instead of "it's fine."

That was worth everything.`,
        choices: [
            { text: "Start over", next: "intro" },
            { text: "Try the other path", next: "the-realization" }
        ]
    },

    // PATH B: BRUSH IT OFF
    brushOffPath: {
        text: `"What's wrong?" Amy asked, searching Bella's face.

Bella forced a smile. The words were right there—I'm hurt, I'm exhausted, I needed you—but something held them back. Maybe it was the genuine concern in Amy's eyes. Maybe it was not wanting to make things awkward. Maybe it was the exhaustion making it easier to just... let it go.

"Nothing," Bella heard herself say. "It's fine. I'm just tired."

Amy's expression brightened with relief. "Oh good! I was so worried you were mad. Thank you SO much for covering. You're literally the best."

She pulled Bella into a tight hug.

Bella hugged back, but something felt off. Like she was watching herself from outside her body, playing a part.

"Seriously, I owe you big time," Amy continued. "Next time you need anything, just say the word!"`,
        choices: [
            { text: "Continue", next: "brushOff2" }
        ]
    },

    brushOff2: {
        text: `Warren appeared in the doorway. "Amy. My office. Now."

Amy winced. "Yikes. Wish me luck?"

Bella nodded, watching Amy disappear into Warren's office.

She gathered her things slowly, that uncomfortable feeling still sitting in her chest like a stone.

It's fine, she told herself. Amy didn't mean to hurt you. She apologized. Let it go.

But as Bella finally trudged toward the dining hall, she couldn't shake the heaviness. She'd been at that desk for nearly four hours. She'd worried. She'd defended Amy to Warren. She'd stayed when every part of her wanted to collapse.

And Amy had... forgotten.

Just forgotten.`,
        choices: [
            { text: "Continue", next: "lunchAlone" }
        ]
    },

    lunchAlone: {
        text: `Bella sat alone in the dining hall, mechanically eating her sandwich. The food tasted like cardboard.

Her phone buzzed.

Amy: Warren put me on probation but it's fine! One more strike and I'm out tho 😬 Thanks again for covering, you're a lifesaver! ❤️

Bella stared at the message. Part of her wanted to type back: Do you understand what you did? Do you know how hard that was for me?

But she didn't.

Bella: Glad it worked out. Get some rest!

She put her phone face-down on the table and took another bite of tasteless sandwich.

It's fine. She's your friend. Let it go.

But the stone in her chest grew heavier.`,
        choices: [
            { text: "Continue", next: "weekLater" }
        ]
    },

    weekLater: {
        text: `A week later, Bella was back at the front desk for her regular shift. Amy burst through the door, ten minutes late, hair still wet from the shower.

"Sorry sorry sorry!" she called cheerfully, dumping her bag behind the desk. "Overslept again. But hey, at least I'm here this time, right?"

She grinned at Bella like it was a joke they were both in on.

Bella forced a laugh. "Yeah. At least."

Amy didn't notice the flatness in her voice. She was already scrolling through her phone, chatting about weekend plans with Jake.

That stone in Bella's chest grew a little heavier.

---

Two weeks later, Amy texted asking if Bella could cover another shift—she wanted to go to a concert with Jake.`,
        choices: [
            { text: "Continue", next: "anotherCover" }
        ]
    },

    anotherCover: {
        text: `Amy: Heyyy so I know this is last minute but any chance you could take my Thursday shift? Jake surprised me with concert tickets! 🎵

Bella stared at the message. She had an exam Friday morning. She needed Thursday evening to study.

But Amy had asked. And Bella had said everything was fine, right? Friends helped each other out.

Bella: Sure, no problem.

Amy: OMG YOU'RE THE BEST!!! I'll make it up to you I promise! ❤️

Bella put down her phone and stared at her textbook. The words blurred together.

The stone in her chest had become a boulder.

And she was starting to realize: saying "it's fine" when it wasn't fine didn't make it fine.

It just made the hurt grow in silence.`,
        choices: [
            { text: "See what you learned", next: "brushOffEnding" }
        ]
    },

    brushOffEnding: {
        title: "What happened next",
        text: `Over the next month, the pattern continued.

Amy ran late. Bella covered. Amy apologized cheerfully. Bella said it was fine.

And slowly, the resentment built.

It wasn't just about the shifts anymore. It was about every time Amy talked about Jake for thirty minutes without asking how Bella was doing. Every time she borrowed something and forgot to return it. Every time she made plans and cancelled at the last minute.

Each time, Bella smiled and said, "It's okay."

Each time, the distance between them grew.

Eventually, Sammy noticed.

"Hey," she said gently after church one Sunday. "Are you and Amy okay? You seem... I don't know, different around her."

Bella opened her mouth to say "We're fine," but the words caught in her throat.

Because they weren't fine.

And they hadn't been fine since that morning at the front desk, when Bella had chosen comfort over honesty.`,
        choices: [
            { text: "Reflect on this path", next: "brushOffReflection" }
        ]
    },

    brushOffReflection: {
        title: "Reflection",
        text: `You chose comfort over honesty.

By brushing off her hurt, Bella:
• Avoided an uncomfortable conversation
• Protected Amy from facing the consequences
• Let resentment grow in silence
• Taught Amy that Bella's time and energy didn't really matter

The irony? Bella thought she was being a good friend by not making things awkward.

But real friendship can't grow in the gap between what we feel and what we say.

By not speaking up, Bella didn't avoid conflict—she just delayed it. And the longer the truth stayed buried, the heavier it became to carry.

Sometimes the kindest thing you can do is tell someone they hurt you.

Because that gives them the chance to do better.

And it gives both of you the chance to build something real.`,
        choices: [
            { text: "Start over", next: "intro" },
            { text: "Try the other path", next: "the-realization" }
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

// Show a scene on the page
function renderScene(sceneName) {
    currentScene = sceneName;
    const scene = scenes[sceneName];
    
    // Update title (if scene has one)
    if (scene.title) {
        sceneTitle.textContent = scene.title;
        sceneTitle.style.display = 'block';
    } else {
        sceneTitle.style.display = 'none';
    }
    
    // Update story text
    storyText.textContent = scene.text;
    
    // Clear old buttons and create new ones
    choicesContainer.innerHTML = '';
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice.text;
        button.onclick = () => handleChoice(choice);
        choicesContainer.appendChild(button);
    });
    
    // Show/hide reset button
    if (sceneName !== 'intro') {
        resetBtn.classList.remove('hidden');
    } else {
        resetBtn.classList.add('hidden');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// When user clicks a choice button
function handleChoice(choice) {
    // Save choice to history
    choicesHistory.push({
        scene: currentScene,
        choice: choice.text
    });
    
    // Show reflection message if this choice has one
    if (choice.reflection) {
        showReflection(choice.reflection, () => {
            renderScene(choice.next);
        });
    } else {
        renderScene(choice.next);
    }
}

// Show the reflection overlay message
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

// Reset story to beginning
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
// Start the story when page loads
// ============================================
renderScene('intro');