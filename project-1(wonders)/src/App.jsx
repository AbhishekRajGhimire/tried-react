import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Eye, Brain, Zap, Mountain, Waves, Bug, TreePine, Globe2 } from 'lucide-react';

const HiddenWondersExplorer = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedWonder, setExpandedWonder] = useState(null);

  const hiddenWonders = [
    {
      id: 1,
      title: "Trees Talk to Each Other",
      category: "nature",
      mindBlown: "🌲 Forest Internet",
      description: "Forests have their own underground internet made of fungal networks called the 'wood wide web' where trees share nutrients, warnings, and even help their competitors survive.",
      details: [
        "Mother trees can recognize their own seedlings and send them more nutrients",
        "Trees warn each other about insect attacks through chemical signals",
        "Dying trees dump their resources into the network for others to use",
        "Different tree species actively cooperate and trade resources"
      ],
      whyAmazing: "Forests aren't just collections of individual trees competing - they're cooperative superorganisms that have been networking for 400 million years, long before humans invented the internet.",
      funFact: "A single handful of forest soil contains more fungal network connections than there are people on Earth."
    },
    {
      id: 2,
      title: "Your Brain Rewrites Memories",
      category: "mind",
      mindBlown: "🧠 Memory Hacker",
      description: "Every time you remember something, your brain literally rewrites that memory. Your most treasured memories are probably quite different from what actually happened.",
      details: [
        "Memories become 'unlocked' and editable when recalled",
        "Each recall can add new details or emotions from the present moment",
        "Confident, vivid memories are often the most inaccurate ones",
        "Your brain fills in gaps with logical guesses you believe are real"
      ],
      whyAmazing: "You're not just remembering the past - you're constantly reauthoring it. Your childhood memories are collaborative fiction between your past and present self.",
      funFact: "The more often you tell a story about your past, the less accurate it becomes."
    },
    {
      id: 3,
      title: "Octopuses Have Distributed Brains",
      category: "nature",
      mindBlown: "🐙 Alien Intelligence",
      description: "Two-thirds of an octopus's neurons are in its arms, not its head. Each arm can taste, touch, and make decisions independently - they're basically eight thinking tentacles with a central coordinator.",
      details: [
        "Each arm has 50-100 million neurons (more than a dog's entire brain)",
        "Arms can react to stimuli even after being severed from the body",
        "They can taste whatever they touch through chemoreceptors",
        "Arms avoid grabbing each other through a chemical 'self-recognition' system"
      ],
      whyAmazing: "Octopuses represent a completely different evolutionary approach to intelligence - distributed, decentralized thinking that's utterly alien to how our brains work.",
      funFact: "An octopus arm will avoid touching the octopus's own skin, but will grab another octopus's arm."
    },
    {
      id: 4,
      title: "Quantum Tunneling Powers the Sun",
      category: "physics",
      mindBlown: "⚡ Impossible Physics",
      description: "The nuclear fusion in our Sun shouldn't actually be possible at the Sun's temperature. It only works because of quantum tunneling - particles literally teleporting through barriers.",
      details: [
        "Protons need 10 times more energy than the Sun provides to fuse normally",
        "Quantum mechanics allows particles to 'tunnel' through energy barriers",
        "Without this 'impossible' effect, stars couldn't exist",
        "The same process happens in radioactive decay and modern electronics"
      ],
      whyAmazing: "The Sun exists because particles can do 'impossible' things that violate classical physics. Reality is fundamentally weirder than our everyday experience suggests.",
      funFact: "Every second, 600 million tons of hydrogen in the Sun converts to helium through quantum impossibility."
    },
    {
      id: 5,
      title: "Humans Glow in the Dark",
      category: "body",
      mindBlown: "✨ Human Bioluminescence",
      description: "Your body literally glows - emitting visible light about 1,000 times dimmer than what your eyes can detect. The glow is strongest around your face and weakest on your chest.",
      details: [
        "The light comes from metabolic reactions involving free radicals",
        "Your glow follows a daily rhythm, dimming in the afternoon",
        "Your face glows brighter than other parts of your body",
        "The light is mainly green and red wavelengths"
      ],
      whyAmazing: "You're a walking, talking light source - just too dim for your own eyes to see. With the right camera, you could photograph your own glow.",
      funFact: "Your glow is about 1/1000th as bright as a candle flame, but it's definitely there."
    },
    {
      id: 6,
      title: "Antarctica Has Flowing Rivers",
      category: "earth",
      mindBlown: "🏔️ Hidden Waterways",
      description: "Under Antarctica's ice sheet lie massive river systems and lakes - some as large as Lake Erie - that have been flowing in complete darkness for millions of years.",
      details: [
        "Lake Vostok is buried under 2.5 miles of ice and has been isolated for 15 million years",
        "Underground rivers carve channels and transport sediment",
        "The water stays liquid due to pressure and geothermal heat",
        "These systems affect ice sheet movement and global sea levels"
      ],
      whyAmazing: "There's an entire hidden hydrological world under the ice - ancient waters that have never seen sunlight, possibly harboring unique forms of life.",
      funFact: "Antarctica's subglacial lakes contain more water than all the world's rivers combined."
    },
    {
      id: 7,
      title: "Your Gut Makes Your Mood",
      category: "body",
      mindBlown: "🦠 Bacterial Emotions",
      description: "The bacteria in your gut produce most of your body's serotonin and directly influence your emotions, decisions, and personality through the gut-brain axis.",
      details: [
        "90% of your serotonin is made in your gut, not your brain",
        "Gut bacteria send signals directly to your brain via the vagus nerve",
        "Different bacterial strains correlate with different personality traits",
        "Probiotics can literally change how you feel and think"
      ],
      whyAmazing: "Your mood and personality are partially controlled by trillions of microorganisms living in your intestines. You're not just you - you're a colony.",
      funFact: "Gut bacteria can influence food cravings to benefit themselves, making you want what feeds them."
    },
    {
      id: 8,
      title: "Sound Can Levitate Objects",
      category: "physics",
      mindBlown: "🔊 Acoustic Levitation",
      description: "Sound waves can create standing wave patterns that trap and levitate small objects in mid-air with no physical contact - it's called acoustic levitation.",
      details: [
        "High-frequency sound waves (above human hearing) work best",
        "Objects get trapped at pressure nodes in standing wave patterns",
        "Can levitate liquids, solids, and even living cells",
        "Used in manufacturing to avoid contamination from physical contact"
      ],
      whyAmazing: "Sound isn't just vibration we hear - it's a physical force that can literally support objects against gravity using nothing but organized air pressure.",
      funFact: "Scientists have used sound to levitate and rotate droplets of water in space-like conditions."
    },
    {
      id: 9,
      title: "Plants Can Count",
      category: "nature",
      mindBlown: "🌱 Mathematical Plants",
      description: "Venus flytraps can count to five. They need to detect multiple trigger hair touches before snapping shut, and they reset their counter if too much time passes between touches.",
      details: [
        "First touch primes the trap, second touch triggers closing",
        "Additional touches (up to 5) determine how tightly to seal",
        "The plant 'remembers' touches for about 20 seconds",
        "Different plants can count different numbers for various behaviors"
      ],
      whyAmazing: "Plants can perform mathematical operations without brains, nervous systems, or any centralized processing - they're distributed biological computers.",
      funFact: "Some plants can even do basic addition and subtraction to allocate resources."
    },
    {
      id: 10,
      title: "Your Eyes Have Blind Spots Right Now",
      category: "perception",
      mindBlown: "👁️ Missing Reality",
      description: "You have a large blind spot in each eye where your optic nerve connects, but your brain seamlessly fills it in with fake visual information so you never notice.",
      details: [
        "The blind spot is about the size of 9 full moons in your visual field",
        "Your brain uses surrounding context to 'paint in' the missing area",
        "You can only notice it with special tests using one eye",
        "Your brain also edits out your nose, which is always visible"
      ],
      whyAmazing: "Right now, your brain is photoshopping your reality in real-time, and you've never noticed. What you think you 'see' is partially fabricated.",
      funFact: "If you close one eye and look at something, part of what you're seeing is a hallucination."
    },
    {
      id: 11,
      title: "Magnetism Affects Your Biology",
      category: "body",
      mindBlown: "🧭 Human Magnetism",
      description: "Humans have a weak magnetic sense similar to birds - we unconsciously orient ourselves using Earth's magnetic field, and magnetic storms can affect our sleep and mood.",
      details: [
        "Human cells contain magnetite crystals that respond to magnetic fields",
        "People navigate slightly better when aligned with magnetic north",
        "Magnetic storms correlate with increased depression and anxiety",
        "Some humans show EEG changes when exposed to magnetic fields"
      ],
      whyAmazing: "You're subtly connected to Earth's magnetic field - a planetary-scale force that influences your biology in ways you never consciously notice.",
      funFact: "Magnetic north has been moving faster recently, and some scientists wonder if it affects human behavior."
    }
  ];

  const categories = {
    all: { icon: Globe2, color: "bg-purple-500", label: "All Wonders" },
    nature: { icon: TreePine, color: "bg-green-500", label: "Living World" },
    mind: { icon: Brain, color: "bg-blue-500", label: "Mind & Memory" },
    physics: { icon: Zap, color: "bg-yellow-500", label: "Hidden Physics" },
    body: { icon: Eye, color: "bg-red-500", label: "Your Body" },
    earth: { icon: Mountain, color: "bg-indigo-500", label: "Planet Earth" },
    perception: { icon: Eye, color: "bg-pink-500", label: "Perception" }
  };

  const filteredWonders = selectedCategory === 'all' 
    ? hiddenWonders 
    : hiddenWonders.filter(wonder => wonder.category === selectedCategory);

  const toggleExpanded = (id) => {
    setExpandedWonder(expandedWonder === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Hidden Wonders of Our World</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Discover the mind-bending phenomena happening all around you that you never knew existed. 
          Reality is far stranger and more wonderful than it appears on the surface.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Explore by Category:</h3>
        <div className="flex flex-wrap gap-3">
          {Object.entries(categories).map(([key, { icon: Icon, color, label }]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedCategory === key
                  ? `${color} text-white shadow-lg`
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Wonders List */}
      <div className="space-y-6">
        {filteredWonders.map((wonder) => {
          const CategoryIcon = categories[wonder.category].icon;
          const isExpanded = expandedWonder === wonder.id;
          
          return (
            <div key={wonder.id} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div
                className="p-6 cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => toggleExpanded(wonder.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${categories[wonder.category].color}`}>
                      <CategoryIcon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{wonder.title}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-2xl">{wonder.mindBlown.split(' ')[0]}</span>
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium">
                          {wonder.mindBlown.split(' ').slice(1).join(' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                  {isExpanded ? <ChevronDown size={24} className="text-slate-400" /> : <ChevronRight size={24} className="text-slate-400" />}
                </div>
              </div>

              {isExpanded && (
                <div className="px-6 pb-6 border-t border-slate-100">
                  <div className="mt-4">
                    <p className="text-slate-700 mb-6 leading-relaxed text-lg">{wonder.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                          <span className="text-blue-500">🔍</span>
                          How It Works:
                        </h4>
                        <ul className="space-y-3">
                          {wonder.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                            <span className="text-purple-500">🤯</span>
                            Why This Blows Your Mind:
                          </h4>
                          <p className="text-slate-700 bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg italic border-l-4 border-purple-300">
                            {wonder.whyAmazing}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                            <span className="text-green-500">💡</span>
                            Mind-Blowing Fact:
                          </h4>
                          <p className="text-slate-700 bg-gradient-to-r from-green-50 to-yellow-50 p-4 rounded-lg font-medium border-l-4 border-green-300">
                            {wonder.funFact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-6 border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">The Hidden Layer of Reality</h3>
        <p className="text-slate-700 text-center max-w-4xl mx-auto leading-relaxed">
          These phenomena are happening all around you, right now. Your body is glowing, your gut bacteria are influencing your thoughts, 
          trees are chatting through underground networks, and quantum particles are tunneling through impossible barriers to keep the Sun burning. 
          Reality is far more magical than it appears on the surface - you just need to know where to look.
        </p>
      </div>
    </div>
  );
};

export default HiddenWondersExplorer;