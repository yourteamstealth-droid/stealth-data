// ============================================================================
// STEALTH SPORTS PREMIUM — stealth-app.js v7.0
// © 2026 Stealth Pro IPTV
// ============================================================================

const PASS     = "stealth1949a";
const SHEET    = "1Ghnu7b647kksvXeKn8xNtBBa4CjYfZXwlfc-cdnCQS8";
const TK       = "385560"; // TSDB API key

// ============================================================================
// i18n
// ============================================================================
const T = {
  en:{
    access:"ACCESS GUIDE", err:"Invalid access code",
    srch:"Search events, teams, leagues, sports, channels...",
    setLbl:"Settings", sTtl:"⚙️ Settings",
    vSched:"Schedule", vLive:"Live Now", vSoon:"Starting Soon", vRes:"Results",
    all:"ALL", my:"MY SPORTS",
    loading:"Loading live data...", noEv:"No events found.",
    at:"AT", live:"LIVE", final:"FINAL", prog:"IN PROGRESS",
    watch:"STEALTH PRO", box:"Box Score & Stats",
    annLbl:"ANNOUNCEMENT", beLbl:"🔥 Big Events",
    whereWatch:"WHERE TO WATCH", venue:"Venue",
    actions:"Actions", share:"Share", standings:"Standings",
    leaguePg:"League Page", highlights:"Highlights",
    today:"Today", yesterday:"Yesterday",
    tvProg:"📺 Programming",
    stApp:"🎨 Appearance", stNet:"📺 Networks", stSpt:"🏆 Sports",
    stLg:"🏅 Leagues", stTm:"⭐ Teams",
    darkMode:"Dark Mode", darkSub:"Switch to dark theme",
    tickerLbl:"Live Ticker", tickerSub:"Show live scores banner",
    notifLbl:"Notifications", notifSub:"Alerts for favourite teams",
    tmIntro:"Add favourite teams. Their games float to the top.",
    tmSrch:"Search team...", cancel:"Cancel", save:"Save",
    sgDisp:"Display", sgMain:"Main Sports", sgCombat:"Combat & Wrestling",
    sgMotor:"Motorsport", sgOther:"Other Sports",
    noChannel:"See league site for broadcast info",
    stealthNote:"Available on Stealth Pro day-of"
  },
  fr:{
    access:"ACCÉDER AU GUIDE", err:"Code d'accès invalide",
    srch:"Rechercher événements, équipes, ligues, sports...",
    setLbl:"Paramètres", sTtl:"⚙️ Paramètres",
    vSched:"Horaire", vLive:"En direct", vSoon:"Bientôt", vRes:"Résultats",
    all:"TOUS", my:"MES SPORTS",
    loading:"Chargement...", noEv:"Aucun événement trouvé.",
    at:"À", live:"EN DIRECT", final:"FINAL", prog:"EN COURS",
    watch:"STEALTH PRO", box:"Fiche & Stats",
    annLbl:"ANNONCE", beLbl:"🔥 Grands Événements",
    whereWatch:"OÙ REGARDER", venue:"Lieu",
    actions:"Actions", share:"Partager", standings:"Classement",
    leaguePg:"Site de la ligue", highlights:"Faits saillants",
    today:"Auj.", yesterday:"Hier",
    tvProg:"📺 Émission",
    stApp:"🎨 Affichage", stNet:"📺 Chaînes", stSpt:"🏆 Sports",
    stLg:"🏅 Ligues", stTm:"⭐ Équipes",
    darkMode:"Mode sombre", darkSub:"Passer au thème sombre",
    tickerLbl:"Bandeau en direct", tickerSub:"Afficher les scores",
    notifLbl:"Notifications", notifSub:"Alertes pour vos équipes",
    tmIntro:"Ajoutez vos équipes favorites.",
    tmSrch:"Rechercher une équipe...", cancel:"Annuler", save:"Sauvegarder",
    sgDisp:"Affichage", sgMain:"Sports principaux",
    sgCombat:"Combat et catch", sgMotor:"Motorsport", sgOther:"Autres sports",
    noChannel:"Consultez le site de la ligue",
    stealthNote:"Disponible sur Stealth Pro le jour J"
  }
};

// ============================================================================
// SPORT ICONS
// ============================================================================
const SI = {
  "NHL":"🏒","AHL":"🏒","ECHL":"🏒","WHL":"🏒","OHL":"🏒",
  "QMJHL":"🏒","LHJMQ":"🏒","USHL":"🏒","SPHL":"🏒","NAHL":"🏒",
  "CJHL":"🏒","CCHL":"🏒","MJHL":"🏒","OJHL":"🏒","KHL":"🏒",
  "SHL":"🏒","Liiga":"🏒","DEL":"🏒","IIHF":"🏒","NLA":"🏒",
  "MLB":"⚾","NPB":"⚾","KBO":"⚾",
  "NBA":"🏀","NCAAB":"🏀","G-League":"🏀","WNBA":"🏀","EuroLeague":"🏀",
  "NFL":"🏈","CFL":"🏈","NCAAF":"🏈","XFL":"🏈","USFL":"🏈",
  "MLS":"⚽","CPL":"⚽","English Premier League":"⚽",
  "EFL Championship":"⚽","UEFA Champions League":"⚽",
  "UEFA Europa League":"⚽","Liga MX":"⚽","USL Championship":"⚽",
  "UEFA Europa Conference League":"⚽",
  "UFC":"🥊","Boxing":"🥊","WWE":"🤼","AEW":"🤼","TNA":"🤼",
  "Formula 1":"🏎️","NASCAR":"🏎️","IndyCar":"🏎️","MotoGP":"🏎️",
  "Formula 2":"🏎️","Formula E":"🏎️","IMSA":"🏎️","NHRA":"🏎️",
  "ATP World Tour":"🎾","WTA":"🎾","Davis Cup":"🎾","Australian Open":"🎾",
  "French Open":"🎾","Wimbledon":"🎾","US Open Tennis":"🎾",
  "PGA Tour":"⛳","LPGA Tour":"⛳","LIV Golf":"⛳","DP World Tour":"⛳",
  "Masters Tournament":"⛳","The Open Championship":"⛳",
  "US Open Golf":"⛳","PGA Championship":"⛳","Korn Ferry Tour":"⛳",
  "Curling":"🥌","NLL":"🥍","PLL":"🥍","AFL":"🏉",
  "Rugby Union":"🏉","Rugby League":"🏉","NRL":"🏉",
  "Cycling":"🚴","Athletics":"🏃","Darts":"🎯","Snooker":"🎱",
  "Volleyball":"🏐","Beach Volleyball":"🏐","Cricket":"🏏",
  "Horse Racing":"🏇","Alpine Ski":"⛷️","Biathlon":"🎿",
  "Ice Skating":"⛸️","Figure Skating":"⛸️","Speed Skating":"⛸️",
  "Esport":"🎮","Handball":"🤾","Field Hockey":"🏑",
  "Wrestling":"🤼","College Wrestling":"🤼",
  "College Hockey":"🏒","College Basketball":"🏀",
  "College Football":"🏈","College Baseball":"⚾",
  "College Lacrosse":"🥍","College Soccer":"⚽",
  "Track & Field":"🏃","Cross Country":"🏃",
  "Swimming":"🏊","Gymnastics":"🤸","Softball":"🥎",
  "FloSports":"📡","FLSP":"📡",
  "default":"🏆"
};

// ============================================================================
// COMPREHENSIVE KNOWLEDGE DATABASE
// Every sport → leagues, tabs, keywords, teams
// ============================================================================
const KB = {
  sports: {
    hockey: {
      label:"Hockey", icon:"🏒",
      tsdbLeagues:["NHL","AHL","ECHL","WHL","OHL","QMJHL","USHL",
                   "KHL","SHL","Liiga","DEL","IIHF"],
      tabs:["NHL","SN+","TSN+","ESPN+","FLSP","BTN+","DAZN"],
      keywords:["hockey","hky","nhl","ahl","echl","whl","ohl","qmjhl",
                "lhjmq","ushl","sphl","nahl","cjhl","cchl","mjhl","ojhl",
                "khl","shl","liiga","del","iihf","calder cup","memorial cup",
                "j. ross robertson","stanley cup","world juniors","wjc",
                "nla","swiss hockey","czech extraliga","ohl championship",
                "flohockey","flo hockey"]
    },
    baseball: {
      label:"Baseball", icon:"⚾",
      tsdbLeagues:["MLB","NPB","KBO"],
      tabs:["MLB","ESPN+","SN+","TSN+","DAZN","FLSP"],
      keywords:["baseball","mlb","npb","kbo","college baseball","ncaa baseball",
                "world series","nlcs","alcs","nlds","alds","spring training",
                "minor league","triple-a","double-a","high-a","single-a",
                "flobaseball","flo baseball","softball","flosoftball"]
    },
    basketball: {
      label:"Basketball", icon:"🏀",
      tsdbLeagues:["NBA","NCAAB","EuroLeague","WNBA","G-League"],
      tabs:["NBA","ESPN+","TSN+","SN+","BTN+","FLSP"],
      keywords:["basketball","nba","ncaa","march madness","ncaab","euroleague",
                "wnba","g-league","nba g league","college basketball",
                "big ten tournament","acc tournament","sec tournament",
                "pac-12 tournament","big 12 tournament","nit","frozen four",
                "flobasketball","flo basketball","nbl","cbl"]
    },
    football: {
      label:"Football", icon:"🏈",
      tsdbLeagues:["NFL","CFL","NCAAF","XFL","USFL"],
      tabs:["NFL","ESPN+","TSN+","DAZN","BTN+","FLSP"],
      keywords:["football","nfl","cfl","ncaaf","xfl","usfl","college football",
                "superbowl","super bowl","grey cup","rose bowl","orange bowl",
                "sugar bowl","cotton bowl","fiesta bowl","peach bowl",
                "flofootball","flo football","fcs","division ii football",
                "division iii football"]
    },
    soccer: {
      label:"Soccer", icon:"⚽",
      tsdbLeagues:["MLS","CPL","English Premier League","EFL Championship",
                   "UEFA Champions League","UEFA Europa League",
                   "CONCACAF Champions Cup","Liga MX","USL Championship",
                   "MLS Next Pro","UEFA Europa Conference League"],
      tabs:["MLS","ESPN+","TSN+","SN+","DAZN","FLSP"],
      keywords:["soccer","football","mls","cpl","epl","premier league",
                "champions league","europa league","liga mx","concacaf",
                "usl","mls next pro","canadian premier league",
                "bundesliga","serie a","ligue 1","la liga",
                "world cup","copa america","euro","flosoccer","flo soccer",
                "usls","women's soccer","nwsl"]
    },
    tennis: {
      label:"Tennis", icon:"🎾",
      tsdbLeagues:["ATP World Tour","WTA","Davis Cup",
                   "Billie Jean King Cup","Australian Open",
                   "French Open","Wimbledon","US Open Tennis"],
      tabs:["ESPN+","TSN+","FLSP"],
      keywords:["tennis","atp","wta","grand slam","wimbledon","australian open",
                "french open","roland garros","us open","davis cup",
                "masters 1000","atp 500","atp 250","wta 1000","wta 500",
                "college tennis","flotennis","flo tennis",
                // Current top players
                "alcaraz","sinner","djokovic","medvedev","zverev","rublev",
                "fritz","de minaur","hurkacz","ruud","shelton","tiafoe",
                "swiatek","sabalenka","gauff","rybakina","pegula","keys",
                "navarro","andreeva","paolini","muchova","wozniacki"]
    },
    golf: {
      label:"Golf", icon:"⛳",
      tsdbLeagues:["PGA Tour","LPGA Tour","LIV Golf","DP World Tour",
                   "Korn Ferry Tour","Masters Tournament",
                   "The Open Championship","US Open Golf","PGA Championship"],
      tabs:["ESPN+","TSN+","VICTORY+","FLSP"],
      keywords:["golf","pga","lpga","liv","masters","the open","british open",
                "us open","pga championship","ryder cup","presidents cup",
                "fedex cup","tour championship","bmw championship",
                "dp world tour","european tour","korn ferry",
                "college golf","flogolf","flo golf",
                // Current top players
                "scheffler","mcilroy","rahm","morikawa","thomas","spieth",
                "cantlay","hovland","burns","lowry","fleetwood","fitzpatrick",
                "koepka","bryson","dustin johnson","brooks koepka",
                "rose zhang","nelly korda","ko","henderson","park","kim"]
    },
    motorsport: {
      label:"Motorsport", icon:"🏎️",
      tsdbLeagues:["Formula 1","NASCAR","IndyCar","MotoGP","Formula 2",
                   "Formula E","IMSA","NHRA"],
      tabs:["ESPN+","TSN+","VICTORY+","FLSP"],
      keywords:["formula 1","formula one","f1","nascar","indycar","motogp",
                "formula 2","f2","formula e","imsa","nhra","supercars",
                "wec","le mans","daytona 500","indy 500","monaco","spa",
                "silverstone","monza","suzuka","abu dhabi","bahrain",
                "floracing","flo racing","cars tour","dirt track",
                "late model","sprint car","chili bowl",
                // F1 drivers
                "verstappen","hamilton","leclerc","norris","sainz",
                "russell","alonso","stroll","perez","piastri",
                "gasly","ocon","bottas","zhou","tsunoda","magnussen",
                "albon","sargeant","hulkenberg","ricciardo","de vries",
                // NASCAR drivers
                "hendrick","gibbs","penske","earnhardt","gordon",
                "kyle busch","chase elliott","denny hamlin","martin truex",
                "kevin harvick","joey logano","brad keselowski","william byron"]
    },
    mma: {
      label:"MMA / UFC", icon:"🥊",
      tsdbLeagues:["UFC","Bellator","ONE Championship","PFL","Rizin"],
      tabs:["PPV UFC","ESPN+","DAZN","TSN+"],
      keywords:["ufc","mma","bellator","one championship","pfl","rizin",
                "mixed martial arts","octagon","cage","prelims","main card",
                "ppv","ufc fight night","dana white",
                // Notable fighters
                "jones","cormier","stipe","ngannou","adesanya","pereira",
                "poirier","mcgregor","volkanovski","holloway","makhachev",
                "islam","oliveira","gaethje","pimblett","topuria",
                "zhang","namajunas","shevchenko","nunes","aldana"]
    },
    boxing: {
      label:"Boxing", icon:"🥊",
      tsdbLeagues:["Boxing"],
      tabs:["PPV BOXING","ESPN+","DAZN","TSN+"],
      keywords:["boxing","wbc","wba","ibf","wbo","heavyweight","middleweight",
                "lightweight","welterweight","super","junior","championship",
                "title fight","world title","ppv","pay-per-view","fight night",
                // Notable boxers
                "canelo","crawford","davis","garcia","tank","haney",
                "usyk","fury","joshua","wilder","bivol","beterbiev",
                "boots","benavidez","charlo","derevyanchenko",
                "loma","lomachenko","ryan garcia","gervonta"]
    },
    wrestling_wwe: {
      label:"WWE / Wrestling", icon:"🤼",
      tsdbLeagues:["WWE","AEW","TNA","NXT"],
      tabs:["PPV NETFLIX","PPV EVENTS","ESPN+","FLSP"],
      keywords:["wwe","raw","smackdown","aew","tna","nxt","wrestlemania",
                "royal rumble","summerslam","survivor series","hell in a cell",
                "monday night raw","friday night smackdown",
                "dynamite","rampage","collision",
                "wrestling","college wrestling","ncaa wrestling",
                "freestyle wrestling","greco-roman","flowrestling",
                "flo wrestling","usa wrestling","uww"]
    },
    curling: {
      label:"Curling", icon:"🥌",
      tsdbLeagues:["Curling"],
      tabs:["TSN+","SN+","CBC PPV"],
      keywords:["curling","brier","scotties","tim hortons brier",
                "world curling","olympic curling","curling canada",
                "grand slam of curling","players championship",
                "masters curling","shoot-out","canada cup",
                "continental cup","mixed doubles","junior curling",
                "world juniors curling","pan continental",
                // Notable teams/players
                "gushue","mcewan","koe","jacobs","edin","mouat",
                "homan","einarson","carey","fleury","silvernagle",
                "jones jennifer","scott","sweeting","peterman"]
    },
    lacrosse: {
      label:"Lacrosse", icon:"🥍",
      tsdbLeagues:["NLL","PLL"],
      tabs:["FLSP","ESPN+","TSN+"],
      keywords:["lacrosse","nll","pll","national lacrosse league",
                "premier lacrosse league","box lacrosse","field lacrosse",
                "college lacrosse","ncaa lacrosse","flolacrosse",
                "flo lacrosse","iroquois","world lacrosse",
                "mill","chaos","atlas","cannons","chrome","redwoods",
                "waterdogs","whipsnakes","archers","bandits","seals",
                "rush","mammoth","rock","swarm","roughnecks","warriors",
                "stealth","thunder","wings","knighthawks","panther city"]
    },
    rugby: {
      label:"Rugby", icon:"🏉",
      tsdbLeagues:["Rugby Union","Rugby League","NRL","Super Rugby",
                   "Six Nations","Top 14","Gallagher Premiership"],
      tabs:["ESPN+","TSN+","FLSP"],
      keywords:["rugby","rugby union","rugby league","nrl","super rugby",
                "six nations","rugby world cup","premiership rugby",
                "top 14","pro 14","united rugby","bledisloe cup",
                "tri nations","the rugby championship","florugby"]
    },
    cycling: {
      label:"Cycling", icon:"🚴",
      tsdbLeagues:["Cycling"],
      tabs:["FLSP","ESPN+","TSN+"],
      keywords:["cycling","tour de france","giro d'italia","vuelta a espana",
                "paris-roubaix","milan-sanremo","ronde van vlaanderen",
                "liege-bastogne-liege","world championship cycling",
                "uci","velodrome","bmx","mountain bike","flobikes",
                "flo bikes","criterium","gran fondo","gran premio"]
    },
    athletics: {
      label:"Athletics / Track", icon:"🏃",
      tsdbLeagues:["Athletics"],
      tabs:["FLSP","ESPN+","TSN+"],
      keywords:["athletics","track","field","track and field","marathon",
                "boston marathon","new york marathon","chicago marathon",
                "world athletics","diamond league","ncaa track",
                "indoor track","outdoor track","cross country",
                "flotrack","flo track","sprint","hurdles","pole vault",
                "high jump","long jump","shot put","discus","javelin",
                "decathlon","heptathlon","steeplechase","road race"]
    },
    other: {
      label:"Other Sports", icon:"🏆",
      tsdbLeagues:["Darts","Snooker","Volleyball","Cricket","Handball",
                   "AFL","Horse Racing","Alpine Ski","Biathlon"],
      tabs:["ESPN+","FLSP","VICTORY+","PEACOCK","PARAMOUNT","BTN+"],
      keywords:["darts","snooker","volleyball","beach volleyball","cricket",
                "handball","aussie rules","afl","horse racing","thoroughbred",
                "kentucky derby","preakness","belmont","cheltenham","royal ascot",
                "alpine ski","skiing","biathlon","cross-country ski","ski jumping",
                "ice skating","figure skating","speed skating","water polo",
                "gymnastics","swimming","weightlifting","archery","shooting",
                "fencing","climbing","triathlon","rowing","sailing","equestrian",
                "kabaddi","gaa","hurling","table tennis","squash","padel",
                "badminton","netball","field hockey","esport","esports","gaming"]
    }
  }
};

// ============================================================================
// NAVIGATION CATEGORIES
// ============================================================================
const NAV_CATS = [
  { id:"ALL",  label_en:"ALL",       label_fr:"TOUS",    icon:"📺", sport:null },
  { id:"MY",   label_en:"MY SPORTS", label_fr:"MES SPORTS", icon:"⭐", sport:null },
  { id:"NHL",  label_en:"NHL",       label_fr:"LNH",     icon:"🏒", sport:"hockey",     lgFilter:["NHL"] },
  { id:"MLB",  label_en:"MLB",       label_fr:"MLB",     icon:"⚾", sport:"baseball",   lgFilter:["MLB"] },
  { id:"NBA",  label_en:"NBA",       label_fr:"NBA",     icon:"🏀", sport:"basketball", lgFilter:["NBA"] },
  { id:"NFL",  label_en:"NFL",       label_fr:"NFL",     icon:"🏈", sport:"football",   lgFilter:["NFL"] },
  { id:"MLS",  label_en:"MLS",       label_fr:"MLS",     icon:"⚽", sport:"soccer",     lgFilter:["MLS"] }
];

const NAV_OTHER = [
  { id:"HK",   label_en:"Hockey (All)",      label_fr:"Hockey (Tous)", icon:"🏒", sport:"hockey" },
  { id:"BB",   label_en:"Baseball (All)",    label_fr:"Baseball (Tous)", icon:"⚾", sport:"baseball" },
  { id:"BK",   label_en:"Basketball (All)",  label_fr:"Basket (Tous)", icon:"🏀", sport:"basketball" },
  { id:"FB",   label_en:"Football (All)",    label_fr:"Football (Tous)", icon:"🏈", sport:"football" },
  { id:"SC",   label_en:"Soccer (All)",      label_fr:"Soccer (Tous)", icon:"⚽", sport:"soccer" },
  { id:"TN",   label_en:"Tennis",            label_fr:"Tennis", icon:"🎾", sport:"tennis" },
  { id:"GL",   label_en:"Golf",              label_fr:"Golf", icon:"⛳", sport:"golf" },
  { id:"MOT",  label_en:"Motorsport",        label_fr:"Motorsport", icon:"🏎️", sport:"motorsport" },
  { id:"MMA",  label_en:"MMA / UFC",         label_fr:"MMA / UFC", icon:"🥊", sport:"mma" },
  { id:"BOX",  label_en:"Boxing",            label_fr:"Boxe", icon:"🥊", sport:"boxing" },
  { id:"WWE",  label_en:"WWE / Wrestling",   label_fr:"Catch / Lutte", icon:"🤼", sport:"wrestling_wwe" },
  { id:"CUR",  label_en:"Curling",           label_fr:"Curling", icon:"🥌", sport:"curling" },
  { id:"LAX",  label_en:"Lacrosse",          label_fr:"Crosse", icon:"🥍", sport:"lacrosse" },
  { id:"RUG",  label_en:"Rugby",             label_fr:"Rugby", icon:"🏉", sport:"rugby" },
  { id:"CYC",  label_en:"Cycling",           label_fr:"Cyclisme", icon:"🚴", sport:"cycling" },
  { id:"ATH",  label_en:"Athletics / Track", label_fr:"Athlétisme", icon:"🏃", sport:"athletics" },
  { id:"FLO",  label_en:"FloSports",         label_fr:"FloSports", icon:"📡", sport:null, tabs:["FLSP"] },
  { id:"OTH",  label_en:"Other Sports",      label_fr:"Autres Sports", icon:"🏆", sport:"other" }
];

// ============================================================================
// FLSP SPORT PREFIX MAP — Verified from flosports.tv
// ============================================================================
const FLSP_MAP = {
  "flowrestling":   { sport:"Wrestling",      icon:"🤼", leagues:["NCAA Wrestling","NWCA","UWW","USA Wrestling"] },
  "flohockey":      { sport:"Ice Hockey",     icon:"🏒", leagues:["AHL","ECHL","OHL","QMJHL","USHL","SPHL","NAHL","CJHL","CCHL","MJHL","OJHL"] },
  "flobaseball":    { sport:"Baseball",       icon:"⚾", leagues:["NCAA Baseball","College Baseball","Independent League Baseball"] },
  "flobasketball":  { sport:"Basketball",     icon:"🏀", leagues:["NCAA Basketball","College Basketball"] },
  "flovolleyball":  { sport:"Volleyball",     icon:"🏐", leagues:["NCAA Volleyball","College Volleyball","AVP","Beach Volleyball"] },
  "floracing":      { sport:"Racing",         icon:"🏎️", leagues:["Lucas Oil Late Model Dirt Series","High Limit Racing","CARS Tour","Sprint Cars","Dirt Track Racing"] },
  "flobikes":       { sport:"Cycling",        icon:"🚴", leagues:["Road Cycling","Cyclocross","Mountain Bike","BMX"] },
  "flofootball":    { sport:"Football",       icon:"🏈", leagues:["FCS Football","NCAA Division II Football","NCAA Division III Football"] },
  "flosoftball":    { sport:"Softball",       icon:"🥎", leagues:["NCAA Softball","College Softball"] },
  "flolive":        { sport:"Live Sports",    icon:"🏆", leagues:[] },
  "flogolf":        { sport:"Golf",           icon:"⛳", leagues:["College Golf","Amateur Golf"] },
  "flotennis":      { sport:"Tennis",         icon:"🎾", leagues:["College Tennis","USTA","ITF"] },
  "floswimming":    { sport:"Swimming",       icon:"🏊", leagues:["NCAA Swimming","College Swimming","USA Swimming"] },
  "flotrack":       { sport:"Track & Field",  icon:"🏃", leagues:["NCAA Track & Field","Road Racing","Marathon","USATF"] },
  "flogymnastics":  { sport:"Gymnastics",     icon:"🤸", leagues:["NCAA Gymnastics","College Gymnastics","USA Gymnastics"] },
  "flolacrosse":    { sport:"Lacrosse",       icon:"🥍", leagues:["NLL","PLL","College Lacrosse","Box Lacrosse"] },
  "flocheer":       { sport:"Cheerleading",   icon:"📣", leagues:["UCA Nationals","UDA Nationals","College Cheer","NCA"] },
  "flotrack":       { sport:"Track & Field",  icon:"🏃", leagues:["NCAA Track","Road Races","Marathons"] },
  "flocollege":     { sport:"College Sports", icon:"🎓", leagues:["NCAA Division I","NCAA Division II","NCAA Division III","NAIA"] },
  "flofightnet":    { sport:"Combat Sports",  icon:"🥊", leagues:["MMA","BJJ","Kickboxing","Muay Thai"] },
  "flofight":       { sport:"Combat Sports",  icon:"🥊", leagues:["MMA","BJJ","Combat Sports"] },
  "florugby":       { sport:"Rugby",          icon:"🏉", leagues:["College Rugby","USA Rugby","Rugby Canada"] },
  "flosoccer":      { sport:"Soccer",         icon:"⚽", leagues:["USL League One","USL League Two","College Soccer","NISA"] },
  "flomartialarts": { sport:"Martial Arts",   icon:"🥋", leagues:["BJJ","Judo","Karate","Taekwondo"] },
  "flodance":       { sport:"Dance",          icon:"💃", leagues:["College Dance","UDA"] }
};

// ============================================================================
// COMPREHENSIVE TEAM DATABASE
// Every team mapped to their league and sport category
// ============================================================================
const TEAMS = {};

// NHL Teams
const NHL_TEAMS = [
  "Anaheim Ducks","Boston Bruins","Buffalo Sabres","Calgary Flames",
  "Carolina Hurricanes","Chicago Blackhawks","Colorado Avalanche",
  "Columbus Blue Jackets","Dallas Stars","Detroit Red Wings",
  "Edmonton Oilers","Florida Panthers","Los Angeles Kings",
  "Minnesota Wild","Montréal Canadiens","Montreal Canadiens",
  "Nashville Predators","New Jersey Devils","New York Islanders",
  "New York Rangers","Ottawa Senators","Philadelphia Flyers",
  "Pittsburgh Penguins","San Jose Sharks","Seattle Kraken",
  "St. Louis Blues","Tampa Bay Lightning","Toronto Maple Leafs",
  "Utah Hockey Club","Vancouver Canucks","Vegas Golden Knights",
  "Washington Capitals","Winnipeg Jets"
];
NHL_TEAMS.forEach(t => TEAMS[t.toLowerCase()] = {lg:"NHL",sport:"hockey",icon:"🏒"});

// Team nicknames for fuzzy matching
const NICKNAMES = {
  "Ducks":"Anaheim Ducks","Bruins":"Boston Bruins","Sabres":"Buffalo Sabres",
  "Flames":"Calgary Flames","Hurricanes":"Carolina Hurricanes","Canes":"Carolina Hurricanes",
  "Blackhawks":"Chicago Blackhawks","Hawks":"Chicago Blackhawks",
  "Avalanche":"Colorado Avalanche","Avs":"Colorado Avalanche",
  "Blue Jackets":"Columbus Blue Jackets","Stars":"Dallas Stars",
  "Red Wings":"Detroit Red Wings","Wings":"Detroit Red Wings",
  "Oilers":"Edmonton Oilers","Panthers":"Florida Panthers",
  "Kings":"Los Angeles Kings","Wild":"Minnesota Wild",
  "Canadiens":"Montréal Canadiens","Habs":"Montréal Canadiens",
  "Predators":"Nashville Predators","Preds":"Nashville Predators",
  "Devils":"New Jersey Devils","Islanders":"New York Islanders","Isles":"New York Islanders",
  "Rangers":"New York Rangers","Senators":"Ottawa Senators","Sens":"Ottawa Senators",
  "Flyers":"Philadelphia Flyers","Penguins":"Pittsburgh Penguins","Pens":"Pittsburgh Penguins",
  "Sharks":"San Jose Sharks","Kraken":"Seattle Kraken","Blues":"St. Louis Blues",
  "Lightning":"Tampa Bay Lightning","Bolts":"Tampa Bay Lightning",
  "Maple Leafs":"Toronto Maple Leafs","Leafs":"Toronto Maple Leafs",
  "Utah HC":"Utah Hockey Club","Canucks":"Vancouver Canucks",
  "Golden Knights":"Vegas Golden Knights","Knights":"Vegas Golden Knights",
  "Capitals":"Washington Capitals","Caps":"Washington Capitals",
  "Jets":"Winnipeg Jets",
  // MLB
  "D-backs":"Arizona Diamondbacks","Diamondbacks":"Arizona Diamondbacks",
  "Braves":"Atlanta Braves","Orioles":"Baltimore Orioles",
  "Red Sox":"Boston Red Sox","Sox":"Boston Red Sox",
  "Cubs":"Chicago Cubs","White Sox":"Chicago White Sox",
  "Reds":"Cincinnati Reds","Guardians":"Cleveland Guardians",
  "Rockies":"Colorado Rockies","Tigers":"Detroit Tigers",
  "Astros":"Houston Astros","Royals":"Kansas City Royals",
  "Angels":"Los Angeles Angels","Dodgers":"Los Angeles Dodgers",
  "Marlins":"Miami Marlins","Brewers":"Milwaukee Brewers",
  "Twins":"Minnesota Twins","Mets":"New York Mets",
  "Yankees":"New York Yankees","Athletics":"Oakland Athletics",
  "A's":"Oakland Athletics","Phillies":"Philadelphia Phillies",
  "Pirates":"Pittsburgh Pirates","Padres":"San Diego Padres",
  "Giants":"San Francisco Giants","Mariners":"Seattle Mariners",
  "Cardinals":"St. Louis Cardinals","Rays":"Tampa Bay Rays",
  "Rangers":"Texas Rangers","Blue Jays":"Toronto Blue Jays","Jays":"Toronto Blue Jays",
  "Nationals":"Washington Nationals","Nats":"Washington Nationals",
  // NBA
  "Hawks":"Atlanta Hawks","Celtics":"Boston Celtics","Nets":"Brooklyn Nets",
  "Hornets":"Charlotte Hornets","Bulls":"Chicago Bulls",
  "Cavaliers":"Cleveland Cavaliers","Cavs":"Cleveland Cavaliers",
  "Mavericks":"Dallas Mavericks","Mavs":"Dallas Mavericks",
  "Nuggets":"Denver Nuggets","Pistons":"Detroit Pistons",
  "Warriors":"Golden State Warriors","Dubs":"Golden State Warriors",
  "Rockets":"Houston Rockets","Pacers":"Indiana Pacers",
  "Clippers":"Los Angeles Clippers","Lakers":"Los Angeles Lakers",
  "Grizzlies":"Memphis Grizzlies","Grizz":"Memphis Grizzlies",
  "Heat":"Miami Heat","Bucks":"Milwaukee Bucks",
  "Timberwolves":"Minnesota Timberwolves","Wolves":"Minnesota Timberwolves",
  "Pelicans":"New Orleans Pelicans","Pels":"New Orleans Pelicans",
  "Knicks":"New York Knicks","Thunder":"Oklahoma City Thunder","OKC":"Oklahoma City Thunder",
  "Magic":"Orlando Magic","76ers":"Philadelphia 76ers","Sixers":"Philadelphia 76ers",
  "Suns":"Phoenix Suns","Trail Blazers":"Portland Trail Blazers","Blazers":"Portland Trail Blazers",
  "Kings":"Sacramento Kings","Spurs":"San Antonio Spurs",
  "Raptors":"Toronto Raptors","Jazz":"Utah Jazz",
  "Wizards":"Washington Wizards",
  // NFL
  "Cardinals":"Arizona Cardinals","Falcons":"Atlanta Falcons",
  "Ravens":"Baltimore Ravens","Bills":"Buffalo Bills",
  "Panthers":"Carolina Panthers","Bears":"Chicago Bears",
  "Bengals":"Cincinnati Bengals","Browns":"Cleveland Browns",
  "Cowboys":"Dallas Cowboys","Broncos":"Denver Broncos",
  "Lions":"Detroit Lions","Packers":"Green Bay Packers",
  "Texans":"Houston Texans","Colts":"Indianapolis Colts",
  "Jaguars":"Jacksonville Jaguars","Jags":"Jacksonville Jaguars",
  "Chiefs":"Kansas City Chiefs","Raiders":"Las Vegas Raiders",
  "Chargers":"Los Angeles Chargers","Rams":"Los Angeles Rams",
  "Dolphins":"Miami Dolphins","Fins":"Miami Dolphins",
  "Vikings":"Minnesota Vikings","Patriots":"New England Patriots","Pats":"New England Patriots",
  "Saints":"New Orleans Saints","Giants":"New York Giants",
  "Jets":"New York Jets","Eagles":"Philadelphia Eagles",
  "Steelers":"Pittsburgh Steelers","49ers":"San Francisco 49ers","Niners":"San Francisco 49ers",
  "Seahawks":"Seattle Seahawks","Hawks":"Seattle Seahawks",
  "Buccaneers":"Tampa Bay Buccaneers","Bucs":"Tampa Bay Buccaneers",
  "Titans":"Tennessee Titans","Commanders":"Washington Commanders",
  // MLS
  "Atlanta United":"Atlanta United","Austin FC":"Austin FC",
  "Charlotte FC":"Charlotte FC","Chicago Fire":"Chicago Fire",
  "FC Cincinnati":"FC Cincinnati","Colorado Rapids":"Colorado Rapids",
  "Columbus Crew":"Columbus Crew","DC United":"D.C. United",
  "FC Dallas":"FC Dallas","Houston Dynamo":"Houston Dynamo",
  "Inter Miami":"Inter Miami","LA Galaxy":"LA Galaxy",
  "LAFC":"LAFC","Minnesota United":"Minnesota United",
  "CF Montréal":"CF Montréal","Nashville SC":"Nashville SC",
  "New England Revolution":"New England Revolution","Revs":"New England Revolution",
  "NYCFC":"New York City FC","Red Bulls":"New York Red Bulls",
  "Orlando City":"Orlando City","Philadelphia Union":"Philadelphia Union",
  "Portland Timbers":"Portland Timbers","Timbers":"Portland Timbers",
  "Real Salt Lake":"Real Salt Lake","RSL":"Real Salt Lake",
  "San Jose Earthquakes":"San Jose Earthquakes","Quakes":"San Jose Earthquakes",
  "Seattle Sounders":"Seattle Sounders","Sounders":"Seattle Sounders",
  "Sporting KC":"Sporting Kansas City","St. Louis City":"St. Louis City SC",
  "Toronto FC":"Toronto FC","TFC":"Toronto FC",
  "Vancouver Whitecaps":"Vancouver Whitecaps","Whitecaps":"Vancouver Whitecaps",
  // CFL
  "Alouettes":"Montréal Alouettes","Als":"Montréal Alouettes",
  "Tiger-Cats":"Hamilton Tiger-Cats","Ticats":"Hamilton Tiger-Cats",
  "Blue Bombers":"Winnipeg Blue Bombers","Bombers":"Winnipeg Blue Bombers",
  "Roughriders":"Saskatchewan Roughriders","Riders":"Saskatchewan Roughriders",
  "Eskimos":"Edmonton Elks","Elks":"Edmonton Elks",
  "Stampeders":"Calgary Stampeders","Stamps":"Calgary Stampeders",
  "Lions":"BC Lions","Argonauts":"Toronto Argonauts","Argos":"Toronto Argonauts",
  "Redblacks":"Ottawa Redblacks",
  // QMJHL/LHJMQ Teams
  "Drakkar":"Baie-Comeau Drakkar","Baie-Comeau":"Baie-Comeau Drakkar",
  "Armada":"Blainville-Boisbriand Armada","Blainville":"Blainville-Boisbriand Armada",
  "Boisbriand":"Blainville-Boisbriand Armada",
  "Eagles":"Cape Breton Eagles","Cape Breton":"Cape Breton Eagles",
  "Saguenéens":"Chicoutimi Saguenéens","Chicoutimi":"Chicoutimi Saguenéens",
  "Voltigeurs":"Drummondville Voltigeurs","Drummondville":"Drummondville Voltigeurs",
  "Olympiques":"Gatineau Olympiques","Gatineau":"Gatineau Olympiques",
  "Mooseheads":"Halifax Mooseheads","Halifax":"Halifax Mooseheads",
  "Wildcats":"Moncton Wildcats","Moncton":"Moncton Wildcats",
  "Océanic":"Rimouski Océanic","Rimouski":"Rimouski Océanic",
  "Huskies":"Rouyn-Noranda Huskies","Rouyn-Noranda":"Rouyn-Noranda Huskies",
  "Sea Dogs":"Saint John Sea Dogs","Saint John":"Saint John Sea Dogs",
  "Cataractes":"Shawinigan Cataractes","Shawinigan":"Shawinigan Cataractes",
  "Phoenix":"Sherbrooke Phoenix","Sherbrooke":"Sherbrooke Phoenix",
  "Foreurs":"Val-d'Or Foreurs","Val-d'Or":"Val-d'Or Foreurs",
  "Tigres":"Victoriaville Tigres","Victoriaville":"Victoriaville Tigres",
  "Islanders":"Charlottetown Islanders","Charlottetown":"Charlottetown Islanders",
  // AHL Teams (selected)
  "Marlies":"Toronto Marlies","Laval Rocket":"Laval Rocket","Rocket":"Laval Rocket",
  "Belleville Senators":"Belleville Senators","Abbotsford Canucks":"Abbotsford Canucks",
  "Manitoba Moose":"Manitoba Moose","Moose":"Manitoba Moose",
  "Tucson Roadrunners":"Tucson Roadrunners","Roadrunners":"Tucson Roadrunners",
  "Grand Rapids Griffins":"Grand Rapids Griffins","Griffins":"Grand Rapids Griffins",
  "Charlotte Checkers":"Charlotte Checkers","Checkers":"Charlotte Checkers",
  "Milwaukee Admirals":"Milwaukee Admirals","Admirals":"Milwaukee Admirals",
  "Hershey Bears":"Hershey Bears","Bears":"Hershey Bears",
  "Providence Bruins":"Providence Bruins","P-Bruins":"Providence Bruins",
  // Tennis players (current top ATP/WTA)
  "Alcaraz":"Carlos Alcaraz","Sinner":"Jannik Sinner",
  "Djokovic":"Novak Djokovic","Medvedev":"Daniil Medvedev",
  "Zverev":"Alexander Zverev","Fritz":"Taylor Fritz",
  "De Minaur":"Alex de Minaur","Hurkacz":"Hubert Hurkacz",
  "Rublev":"Andrey Rublev","Shelton":"Ben Shelton",
  "Swiatek":"Iga Swiatek","Sabalenka":"Aryna Sabalenka",
  "Gauff":"Coco Gauff","Rybakina":"Elena Rybakina",
  "Pegula":"Jessica Pegula","Keys":"Madison Keys",
  // Golf players
  "Scheffler":"Scottie Scheffler","McIlroy":"Rory McIlroy",
  "Rahm":"Jon Rahm","Morikawa":"Collin Morikawa",
  "Thomas":"Justin Thomas","Spieth":"Jordan Spieth",
  "Cantlay":"Patrick Cantlay","Hovland":"Viktor Hovland",
  "Burns":"Sam Burns","Lowry":"Shane Lowry",
  "Koepka":"Brooks Koepka","Bryson":"Bryson DeChambeau",
  "Nelly Korda":"Nelly Korda","Rose Zhang":"Rose Zhang",
  // F1 Drivers
  "Verstappen":"Max Verstappen","Hamilton":"Lewis Hamilton",
  "Leclerc":"Charles Leclerc","Norris":"Lando Norris",
  "Sainz":"Carlos Sainz","Russell":"George Russell",
  "Alonso":"Fernando Alonso","Perez":"Sergio Perez",
  "Piastri":"Oscar Piastri","Gasly":"Pierre Gasly",
  // Boxing
  "Canelo":"Canelo Alvarez","Crawford":"Terence Crawford",
  "Davis":"Gervonta Davis","Tank":"Gervonta Davis",
  "Fury":"Tyson Fury","Joshua":"Anthony Joshua",
  "Usyk":"Oleksandr Usyk","Wilder":"Deontay Wilder",
  "Bivol":"Dmitry Bivol","Beterbiev":"Artur Beterbiev"
};

// ============================================================================
// TV SHOW KEYWORDS — Mark as programming not a game
// ============================================================================
const TV_SHOWS = [
  "sportscenter","sportscentre","sc with","sportsnet central",
  "tonight","morning show","breakfast television","highlights",
  "recap","best of","analysis","magazine","beyond the game",
  "off the record","the reporters","insider","roundtable",
  "countdown","pregame","postgame","press conference",
  "media availability","draft special","awards","ceremony",
  "feature","documentary","classic game","rebroadcast",
  "sportsday","sportsline","sports desk","panel","discuss"
];

// ============================================================================
// STALE EVENT DETECTION
// Hide events that are clearly over based on start time + sport duration
// ============================================================================
const SPORT_DURATION_MS = {
  "NHL":    3*3600000, "AHL":    3*3600000, "ECHL":   3*3600000,
  "OHL":    3*3600000, "QMJHL":  3*3600000, "USHL":   3*3600000,
  "MLB":    4*3600000, "NBA":    3*3600000, "NFL":    4*3600000,
  "MLS":    3*3600000, "CFL":    3*3600000, "CPL":    3*3600000,
  "English Premier League":   2.5*3600000,
  "EFL Championship":         2.5*3600000,
  "UEFA Champions League":    2.5*3600000,
  "Liga MX":                  2.5*3600000,
  "PGA Tour":  9*3600000, "LPGA Tour":  9*3600000, "LIV Golf":  9*3600000,
  "DP World Tour":            9*3600000,
  "Masters Tournament":       9*3600000,
  "ATP World Tour":           4*3600000, "WTA":    4*3600000,
  "Formula 1":    3*3600000, "NASCAR":  5*3600000, "IndyCar":  5*3600000,
  "MotoGP":   3*3600000,
  "UFC":      6*3600000, "Boxing":   6*3600000,
  "WWE":      4*3600000, "AEW":      4*3600000,
  "Curling":  4*3600000,
  "NLL":      3*3600000, "PLL":      3*3600000,
  "default":  4*3600000
};

function isStale(event, now) {
  if (!event.ms || event.ms === Infinity) return false;
  if (event.isLive || event.isFin) return false;
  const dur = SPORT_DURATION_MS[event.lg] || SPORT_DURATION_MS.default;
  return (event.ms + dur) < now;
}

// ============================================================================
// VERIFIED BROADCAST RIGHTS — Updated 2025-26
// Source: official team sites, league sites, sportsmediawatch.com
// ============================================================================
const LOCAL_RIGHTS = {
  NHL:{
    "Anaheim Ducks":         {US:["KCOP-13","Victory+"]},
    "Boston Bruins":         {US:["NESN","NESN+"]},
    "Buffalo Sabres":        {US:["MSG Buffalo"]},
    "Calgary Flames":        {CA:["Sportsnet West","Sportsnet One"]},
    "Carolina Hurricanes":   {US:["FanDuel Sports Network South"]},
    "Chicago Blackhawks":    {US:["CHSN Chicago"]},
    "Colorado Avalanche":    {US:["Altitude Sports","Altitude 2"]},
    "Columbus Blue Jackets": {US:["FanDuel Sports Network Ohio"]},
    "Dallas Stars":          {US:["Victory+"]},
    "Detroit Red Wings":     {US:["FanDuel Sports Network Detroit"]},
    "Edmonton Oilers":       {CA:["Sportsnet West","Sportsnet One"]},
    "Florida Panthers":      {US:["FanDuel Sports Network Sun","WSFL-TV"]},
    "Los Angeles Kings":     {US:["KCOP-13","FanDuel Sports Network West"]},
    "Minnesota Wild":        {US:["FanDuel Sports Network North"]},
    "Montréal Canadiens":    {CA:["RDS","TVA Sports","TSN2"]},
    "Montreal Canadiens":    {CA:["RDS","TVA Sports","TSN2"]},
    "Nashville Predators":   {US:["FanDuel Sports Network South"]},
    "New Jersey Devils":     {US:["MSG Sportsnet"]},
    "New York Islanders":    {US:["MSG Sportsnet"]},
    "New York Rangers":      {US:["MSG Network"]},
    "Ottawa Senators":       {CA:["TSN5","RDS2"]},
    "Philadelphia Flyers":   {US:["NBC Sports Philadelphia"]},
    "Pittsburgh Penguins":   {US:["SportsNet Pittsburgh"]},
    "San Jose Sharks":       {US:["NBC Sports California"]},
    "Seattle Kraken":        {US:["ROOT Sports Northwest"]},
    "St. Louis Blues":       {US:["FanDuel Sports Network Midwest"]},
    "Tampa Bay Lightning":   {US:["FanDuel Sports Network Sun"]},
    "Toronto Maple Leafs":   {CA:["Sportsnet Ontario","TSN4"]},
    "Utah Hockey Club":      {US:["KJZZ","Utah 16"]},
    "Vancouver Canucks":     {CA:["Sportsnet Pacific","Sportsnet One"]},
    "Vegas Golden Knights":  {US:["KTNV"]},
    "Washington Capitals":   {US:["Monumental Sports Network"]},
    "Winnipeg Jets":         {CA:["TSN3","Sportsnet West"]}
  },
  MLB:{
    "Arizona Diamondbacks":  {US:["Arizona Family TV"]},
    "Atlanta Braves":        {US:["FanDuel Sports Network South"]},
    "Baltimore Orioles":     {US:["MASN","MASN2"]},
    "Boston Red Sox":        {US:["NESN","NESN+"]},
    "Chicago Cubs":          {US:["Marquee Sports Network"]},
    "Chicago White Sox":     {US:["CHSN Chicago"]},
    "Cincinnati Reds":       {US:["FanDuel Sports Network Ohio"]},
    "Cleveland Guardians":   {US:["FanDuel Sports Network Great Lakes"]},
    "Colorado Rockies":      {US:["Altitude Sports"]},
    "Detroit Tigers":        {US:["FanDuel Sports Network Detroit"]},
    "Houston Astros":        {US:["Space City Home Network"]},
    "Kansas City Royals":    {US:["FanDuel Sports Network Kansas City"]},
    "Los Angeles Angels":    {US:["KTLA-5","FanDuel Sports Network West"]},
    "Los Angeles Dodgers":   {US:["SportsNet LA","KCAL-9"]},
    "Miami Marlins":         {US:["FanDuel Sports Network Sun"]},
    "Milwaukee Brewers":     {US:["FanDuel Sports Network Wisconsin"]},
    "Minnesota Twins":       {US:["FanDuel Sports Network North"]},
    "New York Mets":         {US:["SNY"]},
    "New York Yankees":      {US:["YES Network"]},
    "Oakland Athletics":     {US:["NBC Sports California"]},
    "Philadelphia Phillies": {US:["NBC Sports Philadelphia"]},
    "Pittsburgh Pirates":    {US:["SportsNet Pittsburgh"]},
    "San Diego Padres":      {US:["FanDuel Sports Network West"]},
    "San Francisco Giants":  {US:["NBC Sports Bay Area"]},
    "Seattle Mariners":      {US:["ROOT Sports Northwest"]},
    "St. Louis Cardinals":   {US:["FanDuel Sports Network Midwest"]},
    "Tampa Bay Rays":        {US:["FanDuel Sports Network Sun"]},
    "Texas Rangers":         {US:["Victory+","Rangers Sports Network"]},
    "Toronto Blue Jays":     {CA:["Sportsnet","TSN"]},
    "Washington Nationals":  {US:["MASN","MASN2"]}
  },
  NBA:{
    "Atlanta Hawks":          {US:["FanDuel Sports Network Southeast"]},
    "Boston Celtics":         {US:["NBC Sports Boston"]},
    "Brooklyn Nets":          {US:["YES Network"]},
    "Charlotte Hornets":      {US:["FanDuel Sports Network Southeast"]},
    "Chicago Bulls":          {US:["CHSN Chicago"]},
    "Cleveland Cavaliers":    {US:["FanDuel Sports Network Ohio"]},
    "Dallas Mavericks":       {US:["FanDuel Sports Network Southwest"]},
    "Denver Nuggets":         {US:["Altitude Sports"]},
    "Detroit Pistons":        {US:["FanDuel Sports Network Detroit"]},
    "Golden State Warriors":  {US:["NBC Sports Bay Area"]},
    "Houston Rockets":        {US:["Space City Home Network"]},
    "Indiana Pacers":         {US:["FanDuel Sports Network Indiana"]},
    "Los Angeles Clippers":   {US:["KCOP-13","FanDuel Sports Network SoCal"]},
    "Los Angeles Lakers":     {US:["Spectrum SportsNet","KCOP-13"]},
    "Memphis Grizzlies":      {US:["FanDuel Sports Network Southeast"]},
    "Miami Heat":             {US:["FanDuel Sports Network Sun"]},
    "Milwaukee Bucks":        {US:["FanDuel Sports Network Wisconsin"]},
    "Minnesota Timberwolves": {US:["FanDuel Sports Network North"]},
    "New Orleans Pelicans":   {US:["FanDuel Sports Network New Orleans"]},
    "New York Knicks":        {US:["MSG Network"]},
    "Oklahoma City Thunder":  {US:["FanDuel Sports Network Oklahoma"]},
    "Orlando Magic":          {US:["FanDuel Sports Network Sun"]},
    "Philadelphia 76ers":     {US:["NBC Sports Philadelphia"]},
    "Phoenix Suns":           {US:["Arizona Family TV","FanDuel Sports Network Arizona"]},
    "Portland Trail Blazers": {US:["ROOT Sports Northwest"]},
    "Sacramento Kings":       {US:["NBC Sports California"]},
    "San Antonio Spurs":      {US:["FanDuel Sports Network Southwest"]},
    "Toronto Raptors":        {CA:["TSN","Sportsnet"]},
    "Utah Jazz":              {US:["KJZZ","Utah 16"]},
    "Washington Wizards":     {US:["Monumental Sports Network"]}
  }
};

// National broadcast rights fallback
const NAT_RIGHTS = {
  "NHL":      {CA:["TSN","Sportsnet","CBC"],US:["ABC","ESPN","TNT","TBS","NHL Network"],UK:[],FR:[],AU:[],NZ:[]},
  "MLB":      {CA:["Sportsnet","TSN"],US:["ESPN","FOX","FS1","MLB Network","Apple TV+"],UK:[],FR:[],AU:[],NZ:[]},
  "NBA":      {CA:["TSN","Sportsnet"],US:["ESPN","ABC","TNT","TBS","NBA TV"],UK:["Sky Sports Arena"],FR:[],AU:["ESPN AU"],NZ:[]},
  "NFL":      {CA:["TSN","CTV","RDS","DAZN Canada"],US:["ESPN","CBS","FOX","NBC","NFL Network","Amazon Prime Video","Peacock","Paramount+"],UK:["Sky Sports NFL","BBC","ITV"],FR:["DAZN France"],AU:["ESPN AU"],NZ:["Sky Sport NZ"]},
  "MLS":      {CA:["TSN","Sportsnet","Apple TV+"],US:["Apple TV+","FOX","FS1"],UK:["Apple TV+"],FR:[],AU:[],NZ:[]},
  "CFL":      {CA:["TSN","TSN2","TSN3","TSN4","TSN5","RDS"],US:["ESPN+"],UK:[],FR:[],AU:[],NZ:[]},
  "English Premier League":{CA:["Sportsnet","DAZN Canada"],US:["NBC","Peacock","USA Network"],UK:["Sky Sports","TNT Sports","BBC","ITV4"],FR:["Canal+","beIN Sports"],AU:["Optus Sport"],NZ:["Sky Sport NZ"]},
  "EFL Championship":{CA:["DAZN Canada"],US:["ESPN+"],UK:["Sky Sports","TNT Sports"],FR:[],AU:[],NZ:[]},
  "UEFA Champions League":{CA:["DAZN Canada"],US:["Paramount+","CBS","UniMás"],UK:["TNT Sports","Channel 4"],FR:["Canal+","TF1","M6"],AU:["Paramount+ AU"],NZ:["Sky Sport NZ"]},
  "Formula 1":{CA:["TSN","RDS"],US:["ESPN","ABC","ESPN+"],UK:["Sky Sports F1","Channel 4"],FR:["Canal+","TF1"],AU:["Fox Sports AU","Network 10"],NZ:["Sky Sport NZ"]},
  "NASCAR":{CA:["TSN","RDS"],US:["FOX","FS1","NBC","USA Network","TNT"],UK:["Sky Sports"],FR:[],AU:[],NZ:[]},
  "IndyCar":{CA:["TSN"],US:["NBC","Peacock","FOX"],UK:["Sky Sports"],FR:[],AU:[],NZ:[]},
  "PGA Tour":{CA:["TSN","Golf Channel Canada"],US:["Golf Channel","CBS","NBC","ESPN+"],UK:["Sky Sports Golf"],FR:["Canal+ Sport","Eurosport"],AU:["Fox Sports AU"],NZ:["Sky Sport NZ"]},
  "LPGA Tour":{CA:["TSN"],US:["Golf Channel","CBS","Peacock"],UK:["Sky Sports Golf"],FR:[],AU:[],NZ:[]},
  "LIV Golf":{CA:["CTV","TSN"],US:["CW Network","ESPN+"],UK:["Sky Sports Golf"],FR:[],AU:[],NZ:[]},
  "Masters Tournament":{CA:["TSN","CTV"],US:["CBS","ESPN","ESPN+"],UK:["Sky Sports Golf"],FR:["France TV","Eurosport"],AU:["Fox Sports AU"],NZ:["Sky Sport NZ"]},
  "ATP World Tour":{CA:["TSN","Sportsnet"],US:["Tennis Channel","ESPN"],UK:["Amazon Prime Video","Sky Sports Tennis","BBC"],FR:["Canal+","Eurosport"],AU:["Nine Network"],NZ:["Sky Sport NZ"]},
  "WTA":{CA:["TSN","Sportsnet"],US:["Tennis Channel","ESPN"],UK:["Amazon Prime Video","Sky Sports Tennis"],FR:["Canal+","Eurosport"],AU:[],NZ:[]},
  "UFC":{CA:["TSN","RDS","UFC Fight Pass"],US:["ESPN","ESPN+","UFC Fight Pass"],UK:["TNT Sports","BT Sport Box Office"],FR:["Canal+","beIN Sports"],AU:["ESPN AU"],NZ:["Sky Sport NZ"]},
  "Boxing":{CA:["TSN","DAZN Canada"],US:["ESPN","FOX","DAZN USA"],UK:["Sky Sports Boxing","TNT Sports","DAZN UK"],FR:["Canal+","DAZN France"],AU:["ESPN AU"],NZ:[]},
  "WWE":{CA:["TSN","CTV"],US:["Netflix","USA Network"],UK:["TNT Sports","Netflix"],FR:["Netflix"],AU:["Netflix"],NZ:["Netflix"]},
  "AEW":{CA:["TSN"],US:["TNT","TBS","Max"],UK:["TNT Sports"],FR:[],AU:[],NZ:[]},
  "Curling":{CA:["TSN","TSN2","TSN3","TSN4","TSN5","Sportsnet 360","CBC"],US:["Olympic Channel","ESPN+"],UK:[],FR:[],AU:[],NZ:[]},
  "NLL":{CA:["TSN"],US:["ESPN+"],UK:[],FR:[],AU:[],NZ:[]},
  "Rugby Union":{CA:["TSN","Sportsnet"],US:["NBC","Peacock"],UK:["ITV","Channel 4","Sky Sports","TNT Sports","BBC"],FR:["Canal+","France 2","France 3","beIN Sports"],AU:["Stan Sport","Fox Sports AU","Network 10"],NZ:["Sky Sport NZ","Spark Sport NZ"]},
  "AFL":{CA:[],US:[],UK:["Sky Sports"],FR:[],AU:["Seven Network","Fox Sports AU","Kayo Sports"],NZ:["Sky Sport NZ"]},
  "NCAAB":{CA:["TSN"],US:["CBS","ESPN","ESPN2","ABC","TNT","TBS","TruTV","CBS Sports Network","FS1"],UK:[],FR:[],AU:[],NZ:[]},
  "NCAAF":{CA:["TSN"],US:["ABC","ESPN","ESPN2","FOX","FS1","CBS","NBC","Peacock"],UK:[],FR:[],AU:[],NZ:[]},
  "MotoGP":{CA:["TSN"],US:["NBC","Peacock"],UK:["TNT Sports"],FR:["Canal+","France 4"],AU:["Fox Sports AU"],NZ:["Sky Sport NZ"]}
};

const LEAGUE_URLS = {
  "NHL":"https://www.nhl.com/scores","MLB":"https://www.mlb.com/scores",
  "NBA":"https://www.nba.com/games","NFL":"https://www.nfl.com/scores",
  "MLS":"https://www.mlssoccer.com","CFL":"https://www.cfl.ca",
  "PGA Tour":"https://www.pgatour.com","LPGA Tour":"https://www.lpga.com",
  "LIV Golf":"https://www.livgolf.com","Masters Tournament":"https://www.masters.com",
  "ATP World Tour":"https://www.atptour.com/scores",
  "WTA":"https://www.wtatennis.com/scores",
  "Formula 1":"https://www.formula1.com","NASCAR":"https://www.nascar.com",
  "IndyCar":"https://www.indycar.com",
  "UFC":"https://www.ufc.com/events","Boxing":"https://www.espn.com/boxing",
  "WWE":"https://www.wwe.com","AEW":"https://www.allelitewrestling.com",
  "English Premier League":"https://www.premierleague.com/results",
  "UEFA Champions League":"https://www.uefa.com/uefachampionsleague",
  "NCAAB":"https://www.ncaa.com/sports/basketball-men/d1",
  "NCAAF":"https://www.ncaa.com/sports/football/fbs",
  "NLL":"https://www.nll.com","PLL":"https://www.premierlacrosseleague.com",
  "Curling":"https://www.curling.ca"
};

// ============================================================================
// STATE
// ============================================================================
let S = {
  lang:       localStorage.getItem('sl') || 'en',
  auth:       sessionStorage.getItem('sa') === '1',
  tz:         localStorage.getItem('stz') || Intl.DateTimeFormat().resolvedOptions().timeZone,
  dark:       localStorage.getItem('dark') === '1',
  ticker:     localStorage.getItem('ticker') !== '0',
  cat:        'ALL',
  view:       'sched',
  search:     '',
  dateStr:    '',
  dateObj:    new Date(),
  rawSh:      [],
  rawTs:      [],
  tvCache:    {},
  beIdx:      0,
  beTimer:    null,
  beEvents:   [],
  prefs: {
    nets:   JSON.parse(localStorage.getItem('p_nets') || '[]'),
    sports: JSON.parse(localStorage.getItem('p_spts') || '[]'),
    lgs:    JSON.parse(localStorage.getItem('p_lgs')  || '[]'),
    teams:  JSON.parse(localStorage.getItem('p_tms')  || '[]')
  }
};

// ============================================================================
// BOOT
// ============================================================================
function boot() {
  if (S.dark) document.documentElement.setAttribute('data-theme','dark');
  applyLang();
  buildTZ();
  startClock();
  calcDate();
  buildNav();
  buildDates();
  buildSettings();

  if (S.auth) {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('app').style.display = 'flex';
    fetchAnn();
    fetchAll();
    if (S.ticker) document.getElementById('ticker').style.display = 'flex';
  }

  const srch = document.getElementById('srch');
  srch.addEventListener('input', e => {
    S.search = e.target.value.toLowerCase().trim();
    document.getElementById('srchX').style.display = S.search ? 'block' : 'none';
    render();
  });
  document.addEventListener('keydown', e => {
    if (e.key==='Enter' && !S.auth) doLogin();
    if (e.key==='Escape') { closeM(); closeSettings(); }
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('#nav-other'))
      document.getElementById('navOtherMenu')?.classList.remove('open');
  });

  setInterval(() => { if (S.auth) fetchLive().then(() => { updateTicker(); render(); }); }, 120000);
  setInterval(() => { if (S.auth) fetchAll(); }, 600000); // Full refresh every 10 min
}

// ============================================================================
// AUTH
// ============================================================================
function doLogin() {
  if (document.getElementById('pwd').value === PASS) {
    sessionStorage.setItem('sa','1'); S.auth = true;
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('app').style.display = 'flex';
    fetchAnn(); fetchAll();
    if (S.ticker) document.getElementById('ticker').style.display = 'flex';
  } else {
    document.getElementById('lErr').textContent = T[S.lang].err;
    document.getElementById('pwd').value = '';
  }
}

// ============================================================================
// LANGUAGE
// ============================================================================
function setLang(l) {
  S.lang = l; localStorage.setItem('sl',l);
  ['en','fr'].forEach(x =>
    document.getElementById('ll-'+x).className = 'll'+(x===l?' on':''));
  applyLang();
  if (S.auth) { buildNav(); buildDates(); fetchAnn(); render(); }
}
function toggleLang() { setLang(S.lang==='en'?'fr':'en'); }

function applyLang() {
  const d = T[S.lang]; const fr = S.lang==='fr';
  document.getElementById('hLang').textContent     = fr?'EN':'FR';
  document.getElementById('lBtn').textContent      = d.access;
  document.getElementById('setLbl').textContent    = d.setLbl;
  document.getElementById('sTtl').textContent      = d.sTtl;
  document.getElementById('annLbl').textContent    = d.annLbl;
  document.getElementById('beLbl').textContent     = d.beLbl;
  document.getElementById('vt-s-lbl').textContent  = d.vSched;
  document.getElementById('vt-l-lbl').textContent  = d.vLive;
  document.getElementById('vt-n-lbl').textContent  = d.vSoon;
  document.getElementById('vt-r-lbl').textContent  = d.vRes;
  document.getElementById('srch').placeholder      = d.srch;
  document.getElementById('sTtl').textContent      = d.sTtl;
  document.getElementById('stl-app').textContent   = d.stApp;
  document.getElementById('stl-net').textContent   = d.stNet;
  document.getElementById('stl-spt').textContent   = d.stSpt;
  document.getElementById('stl-lg').textContent    = d.stLg;
  document.getElementById('stl-tm').textContent    = d.stTm;
  document.getElementById('tl-dk').textContent     = d.darkMode;
  document.getElementById('ts-dk').textContent     = d.darkSub;
  document.getElementById('tl-tk').textContent     = d.tickerLbl;
  document.getElementById('ts-tk').textContent     = d.tickerSub;
  document.getElementById('tl-nt').textContent     = d.notifLbl;
  document.getElementById('ts-nt').textContent     = d.notifSub;
  document.getElementById('tm-intro').textContent  = d.tmIntro;
  document.getElementById('tSrch').placeholder     = d.tmSrch;
  document.getElementById('sCan').textContent      = d.cancel;
  document.getElementById('sSav').textContent      = d.save;
  document.getElementById('sg-disp').textContent   = d.sgDisp;
  document.getElementById('sg-ms').textContent     = d.sgMain;
  document.getElementById('sg-cs').textContent     = d.sgCombat;
  document.getElementById('sg-mt').textContent     = d.sgMotor;
  document.getElementById('sg-os').textContent     = d.sgOther;
}

// ============================================================================
// TIMEZONE + CLOCK
// ============================================================================
function buildTZ() {
  const sel = document.getElementById('tzSel');
  const zones = [
    {v:"America/New_York",    l:"Montréal / Toronto / NY (ET)"},
    {v:"America/Chicago",     l:"Chicago (CT)"},
    {v:"America/Denver",      l:"Calgary / Denver (MT)"},
    {v:"America/Phoenix",     l:"Phoenix (MST)"},
    {v:"America/Los_Angeles", l:"Vancouver / LA (PT)"},
    {v:"America/Halifax",     l:"Halifax (AT)"},
    {v:"America/St_Johns",    l:"St. John's (NT)"},
    {v:"Europe/London",       l:"London (UK)"},
    {v:"Europe/Paris",        l:"Paris (FR)"},
    {v:"Australia/Sydney",    l:"Sydney (AU)"},
    {v:"Pacific/Auckland",    l:"Auckland (NZ)"}
  ];
  const local = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let h = '';
  if (!zones.find(z=>z.v===local))
    h += `<option value="${local}"${local===S.tz?' selected':''}>Local Time</option>`;
  zones.forEach(z =>
    h += `<option value="${z.v}"${z.v===S.tz?' selected':''}>${z.l}</option>`);
  sel.innerHTML = h;
}
function startClock() {
  setInterval(() => {
    const fr = S.lang==='fr';
    document.getElementById('clock').textContent =
      new Intl.DateTimeFormat(fr?'fr-CA':'en-CA',
        {timeZone:S.tz,hour:'numeric',minute:'2-digit',second:'2-digit',hour12:!fr})
      .format(new Date());
  }, 1000);
}
function changeTz() {
  S.tz = document.getElementById('tzSel').value;
  localStorage.setItem('stz',S.tz);
  calcDate(); buildDates(); fetchAll();
}
function calcDate() {
  const p = new Intl.DateTimeFormat('en-CA',
    {year:'numeric',month:'2-digit',day:'2-digit',timeZone:S.tz})
    .formatToParts(new Date());
  S.dateStr = `${p.find(x=>x.type==='year').value}-${p.find(x=>x.type==='month').value}-${p.find(x=>x.type==='day').value}`;
  S.dateObj = new Date(S.dateStr+'T12:00:00');
}

// ============================================================================
// TIME CONVERSION
// ============================================================================
function utcToLocal(uD, uT) {
  if (!uT) return {str:'TBD',ms:Infinity,ds:''};
  try {
    const d = new Date(`${uD}T${uT}Z`);
    const fr = S.lang==='fr';
    const str = new Intl.DateTimeFormat(fr?'fr-CA':'en-CA',
      {hour:'numeric',minute:'2-digit',timeZoneName:'short',
       timeZone:S.tz,hour12:!fr}).format(d);
    const p = new Intl.DateTimeFormat('en-CA',
      {year:'numeric',month:'2-digit',day:'2-digit',timeZone:S.tz})
      .formatToParts(d);
    const ds = `${p.find(x=>x.type==='year').value}-${p.find(x=>x.type==='month').value}-${p.find(x=>x.type==='day').value}`;
    return {str,ms:d.getTime(),ds};
  } catch(e) { return {str:uT,ms:Infinity,ds:''}; }
}
function etToLocal(raw) {
  if (!raw||raw==='N/A') return {str:'TBD',ms:Infinity};
  try {
    const m = raw.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!m) return {str:raw,ms:Infinity};
    let h=parseInt(m[1]),mn=parseInt(m[2]),ap=m[3].toUpperCase();
    if(ap==='PM'&&h<12)h+=12; if(ap==='AM'&&h===12)h=0;
    const d = new Date(`${S.dateStr}T${('0'+h).slice(-2)}:${('0'+mn).slice(-2)}:00-04:00`);
    const fr = S.lang==='fr';
    const str = new Intl.DateTimeFormat(fr?'fr-CA':'en-CA',
      {hour:'numeric',minute:'2-digit',timeZoneName:'short',
       timeZone:S.tz,hour12:!fr}).format(d);
    return {str,ms:d.getTime()};
  } catch(e) { return {str:raw,ms:Infinity}; }
}

// ============================================================================
// NAVIGATION
// ============================================================================
function buildNav() {
  const nav = document.getElementById('nav');
  let h = NAV_CATS.map(c =>
    `<div class="ni${S.cat===c.id?' on':''}" onclick="setCat('${c.id}')">
       ${c.icon} ${c[S.lang==='fr'?'label_fr':'label_en']}
     </div>`).join('');

  const otherOn = NAV_OTHER.some(x=>x.id===S.cat);
  h += `<div class="n-dd" id="nav-other">
    <div class="n-dd-btn${otherOn?' on':''}" onclick="toggleOtherDd()">
      ➕ ${S.lang==='fr'?'AUTRE ▾':'OTHER ▾'}
    </div>
    <div class="n-dd-menu" id="navOtherMenu">
      ${NAV_OTHER.map(c=>
        `<div class="n-dd-item${S.cat===c.id?' on':''}" onclick="setCatDD('${c.id}')">
           ${c.icon} ${c[S.lang==='fr'?'label_fr':'label_en']}
         </div>`).join('')}
    </div>
  </div>`;
  nav.innerHTML = h;
}
function toggleOtherDd() {
  document.getElementById('navOtherMenu').classList.toggle('open');
}
function setCatDD(id) {
  document.getElementById('navOtherMenu').classList.remove('open');
  setCat(id);
}
function setCat(id) { S.cat=id; S.search=''; document.getElementById('srch').value=''; buildNav(); render(); }

// ============================================================================
// DATES
// ============================================================================
function buildDates() {
  const fr = S.lang==='fr';
  let h = '';
  const base = new Date();
  for (let i=0; i<7; i++) {
    const d = new Date(base); d.setDate(base.getDate()+i);
    const ds = d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);
    const name = i===0 ? T[S.lang].today :
      d.toLocaleDateString(fr?'fr-CA':'en-CA',{weekday:'short'});
    h += `<div class="d-box${S.dateStr===ds?' on':''}" onclick="pickDate('${ds}')">
        <div class="d-day">${name}</div>
        <div class="d-num">${d.getDate()}</div>
      </div>`;
  }
  document.getElementById('dRow').innerHTML = h;
}
function pickDate(ds) {
  S.dateStr = ds; S.dateObj = new Date(ds+'T12:00:00');
  buildDates(); fetchAll();
}

// ============================================================================
// VIEW MODES
// ============================================================================
function setView(v) {
  S.view = v;
  ['sched','live','soon','res'].forEach(x => {
    document.getElementById('vt-'+x).className =
      'vt'+(x==='live'?' live-tab':'')+(x===v?' on':'');
  });
  render();
}

// ============================================================================
// SEARCH ENGINE — Gold Standard
// Understands sports, leagues, teams, channels, providers
// ============================================================================
function searchMatches(ev, query) {
  if (!query) return true;
  const q = query.toLowerCase();

  // Build searchable text corpus for this event
  const corpus = [];

  // Event title / team names
  if (ev.src==='ts') {
    corpus.push((ev.a||'').toLowerCase());
    corpus.push((ev.h||'').toLowerCase());
    // Also add nicknames
    const aN = NICKNAMES[ev.a]||ev.a;
    const hN = NICKNAMES[ev.h]||ev.h;
    if (aN) corpus.push(aN.toLowerCase());
    if (hN) corpus.push(hN.toLowerCase());
  } else {
    corpus.push((ev.ti||'').toLowerCase());
    corpus.push((ev.cleanTitle||'').toLowerCase());
    corpus.push((ev.sportLabel||'').toLowerCase());
    if (ev.collegeInfo) {
      corpus.push(ev.collegeInfo.sport.toLowerCase());
      corpus.push((ev.collegeInfo.conf||'').toLowerCase());
    }
  }

  // League
  corpus.push((ev.lg||'').toLowerCase());
  corpus.push((ev.tab||'').toLowerCase());

  // Sport icon/name
  corpus.push((SI[ev.lg]||'').toLowerCase());

  // Stealth channels
  (ev.stChs||[]).forEach(c => corpus.push((c.ch||'').toLowerCase()));

  // FLSP data
  if (ev.flspData) {
    corpus.push(ev.flspData.sport.toLowerCase());
    ev.flspData.leagues.forEach(l => corpus.push(l.toLowerCase()));
  }

  const combined = corpus.join(' ');

  // Direct match
  if (combined.includes(q)) return true;

  // Sport knowledge lookup
  for (const [sKey, sData] of Object.entries(KB.sports)) {
    if (!sData.keywords.some(kw => q.includes(kw) || kw.includes(q))) continue;

    // Query matches this sport — check if event belongs to this sport
    if (sData.tsdbLeagues && sData.tsdbLeagues.some(l => l.toLowerCase() === (ev.lg||'').toLowerCase())) return true;
    if (sData.tabs && sData.tabs.includes(ev.tab||'')) return true;
    if (sData.keywords.some(kw => combined.includes(kw))) return true;
  }

  // Nickname lookup
  for (const [nick, fullName] of Object.entries(NICKNAMES)) {
    if (q.includes(nick.toLowerCase()) || nick.toLowerCase().includes(q)) {
      if (combined.includes(fullName.toLowerCase()) || combined.includes(nick.toLowerCase())) return true;
    }
  }

  // Provider aliases
  if ((q.includes('flosports')||q.includes('flo sports')||q==='flo'||q==='flsp') && ev.tab==='FLSP') return true;
  if (q.includes('espn+') && ev.tab==='ESPN+') return true;
  if ((q.includes('tsn')||q.includes('tsn+')) && ev.tab==='TSN+') return true;
  if ((q.includes('sportsnet')||q.includes('sn+')) && ev.tab==='SN+') return true;
  if (q.includes('dazn') && ev.tab==='DAZN') return true;
  if ((q.includes('peacock')) && ev.tab==='PEACOCK') return true;
  if ((q.includes('paramount')) && ev.tab==='PARAMOUNT') return true;

  return false;
}

// ============================================================================
// CATEGORY FILTER
// ============================================================================
function catMatches(ev) {
  if (S.cat==='ALL') return true;

  // MY SPORTS — filter by saved preferences
  if (S.cat==='MY') {
    if (S.prefs.lgs.length && !S.prefs.lgs.includes(ev.lg||'')) return false;
    if (S.prefs.sports.length) {
      const evSport = getEvSport(ev);
      if (!S.prefs.sports.some(s => s.toLowerCase().includes(evSport.toLowerCase()))) return false;
    }
    return true;
  }

  // Specific league filter (NHL, MLB, etc.)
  const navCat = NAV_CATS.find(c=>c.id===S.cat);
  if (navCat && navCat.lgFilter) {
    return navCat.lgFilter.includes(ev.lg||'') ||
           navCat.lgFilter.includes(ev.tab||'');
  }

  // OTHER dropdown categories
  const otherCat = NAV_OTHER.find(c=>c.id===S.cat);
  if (!otherCat) return true;

  // FloSports tab filter
  if (otherCat.tabs) return otherCat.tabs.includes(ev.tab||'');

  // Sport-based filter
  if (otherCat.sport) {
    const sData = KB.sports[otherCat.sport];
    if (!sData) return true;

    // Check TSDB league
    if (ev.src==='ts' && sData.tsdbLeagues && sData.tsdbLeagues.includes(ev.lg)) return true;

    // Check tab
    if (sData.tabs && sData.tabs.includes(ev.tab||'')) {
      // For hockey categories, further check sport label
      const ti = (ev.ti||ev.cleanTitle||'').toLowerCase();
      const sl = (ev.sportLabel||'').toLowerCase();
      const sport = otherCat.sport;

      if (sport==='hockey') {
        if (ev.tab==='FLSP') return (ev.flspData?.sport||'').toLowerCase().includes('hockey');
        return true;
      }
      if (sport==='wrestling_wwe') {
        if (ev.tab==='FLSP') return (ev.flspData?.sport||'').toLowerCase().includes('wrestling');
        return true;
      }
      if (sport==='golf') {
        if (ev.tab==='FLSP') return (ev.flspData?.sport||'').toLowerCase().includes('golf');
        if (ev.tab==='ESPN+') return sData.keywords.some(kw=>ti.includes(kw)||sl.includes(kw));
        return true;
      }
      if (sport==='tennis') {
        if (ev.tab==='FLSP') return (ev.flspData?.sport||'').toLowerCase().includes('tennis');
        if (ev.tab==='ESPN+') return sData.keywords.some(kw=>ti.includes(kw)||sl.includes(kw));
        return true;
      }
      // For other sports check keywords in title
      if (sData.keywords) {
        return sData.keywords.some(kw =>
          ti.includes(kw) || sl.includes(kw) ||
          (ev.a||'').toLowerCase().includes(kw) ||
          (ev.h||'').toLowerCase().includes(kw));
      }
      return true;
    }
    return false;
  }
  return true;
}

function getEvSport(ev) {
  if (ev.src==='ts') {
    for (const [sKey, sData] of Object.entries(KB.sports)) {
      if (sData.tsdbLeagues && sData.tsdbLeagues.includes(ev.lg)) return sData.label;
    }
  }
  if (ev.flspData) return ev.flspData.sport;
  if (ev.collegeInfo) return ev.collegeInfo.sport;
  if (ev.sportLabel) return ev.sportLabel;
  return ev.tab||'';
}

// ============================================================================
// DATA FETCHING
// ============================================================================
function fetchAll() {
  document.getElementById('sched').innerHTML =
    `<div class="no-ev"><div class="spinner"></div><br><br>${T[S.lang].loading}</div>`;
  Promise.all([fetchSheet(), fetchTSDB()])
    .then(() => {
      buildBigEvents();
      fetchLive().then(() => { updateTicker(); render(); });
    });
}

function fetchSheet() {
  return new Promise(resolve => {
    const p = new Intl.DateTimeFormat('en-CA',
      {year:'numeric',month:'2-digit',day:'2-digit',timeZone:S.tz})
      .formatToParts(new Date());
    const today = `${p.find(x=>x.type==='year').value}-${p.find(x=>x.type==='month').value}-${p.find(x=>x.type==='day').value}`;

    if (S.dateStr !== today) { S.rawSh = []; return resolve(); }

    const tabs = ["NHL","MLB","NBA","NFL","MLS","ESPN+","TSN+","SN+",
                  "PARAMOUNT","PEACOCK","FLSP","BTN+","VICTORY+","DAZN",
                  "PPV UFC","PPV BOXING","PPV EVENTS","PPV NETFLIX","CBC PPV"];
    let done = 0; S.rawSh = [];

    tabs.forEach(tab => {
      fetch(`https://docs.google.com/spreadsheets/d/${SHEET}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tab)}`)
      .then(r=>r.text()).then(txt=>{
        try {
          const j = JSON.parse(txt.substring(txt.indexOf('{'),txt.lastIndexOf('}')+1));
          j.table?.rows?.forEach(r => {
            const ch = r.c?.[0]?.v||'';
            const ti = r.c?.[1]?.v||'';
            if (!ch||ch==='Channel #'||!ti) return;

            // Parse FLSP prefix
            let flspData = null;
            let cleanTitle = ti;
            if (tab==='FLSP') {
              const fm = ti.match(/^(flo\w+):\s*/i);
              if (fm) {
                const pfx = fm[1].toLowerCase();
                flspData = FLSP_MAP[pfx] || {sport:pfx.replace('flo','').replace(/^\w/,c=>c.toUpperCase()),icon:'🏆',leagues:[]};
                cleanTitle = ti.replace(/^flo\w+:\s*/i,'').replace(/_/g,' ');
              }
            }

            // Detect college sport
            let collegeInfo = null;
            if (['ESPN+','BTN+','VICTORY+'].includes(tab)) {
              collegeInfo = detectCollege(ti, tab);
            }

            // TV show detection
            const isShow = TV_SHOWS.some(kw => ti.toLowerCase().includes(kw));

            const tm = (r.c?.[3]?.v||'').replace(/^'/,'');

            S.rawSh.push({
              src:'sh', tab, ch, ti, cleanTitle, tm,
              flspData, collegeInfo, isShow, used:false,
              lg: tab // fallback league = tab name
            });
          });
        } catch(e) {}
      }).finally(() => { done++; if(done===tabs.length) resolve(); });
    });
  });
}

function fetchTSDB() {
  return new Promise(resolve => {
    const d2 = new Date(S.dateObj); d2.setDate(d2.getDate()+1);
    const str2 = d2.getFullYear()+'-'+('0'+(d2.getMonth()+1)).slice(-2)+'-'+('0'+d2.getDate()).slice(-2);

    // Include one day before for timezone edge cases
    const d0 = new Date(S.dateObj); d0.setDate(d0.getDate()-1);
    const str0 = d0.getFullYear()+'-'+('0'+(d0.getMonth()+1)).slice(-2)+'-'+('0'+d0.getDate()).slice(-2);

    const dates = [str0, S.dateStr, str2];

    const lgs = [
      "NHL","MLB","NBA","NFL","MLS","CFL",
      "English Premier League","EFL Championship","UEFA Champions League",
      "UEFA Europa League","Liga MX",
      "Formula 1","IndyCar","NASCAR","MotoGP",
      "ATP World Tour","WTA",
      "PGA Tour","LPGA Tour","LIV Golf","Masters Tournament",
      "UFC","Boxing","WWE","AEW",
      "Curling","NLL","AFL","Rugby Union","Rugby League",
      "NCAAB","NCAAF"
    ];

    let done = 0; S.rawTs = [];
    const total = lgs.length * dates.length;

    lgs.forEach(l => {
      dates.forEach(d => {
        fetch(`https://www.thesportsdb.com/api/v1/json/${TK}/eventsday.php?d=${d}&l=${encodeURIComponent(l)}`)
        .then(r=>r.json()).then(data=>{
          if (!data.events) return;
          data.events.forEach(e => {
            // Skip null events completely
            const away = e.strAwayTeam;
            const home = e.strHomeTeam;
            const evName = e.strEvent;
            if (!evName || evName.toLowerCase().includes('null')) return;
            if (away && away.toLowerCase()==='null') return;
            if (home && home.toLowerCase()==='null') return;

            const tl = utcToLocal(e.dateEvent, e.strTime);
            if (!tl.ds) return; // Bad date
            // Accept if event falls on selected date (check local date)
            if (tl.ds !== S.dateStr) return;

            S.rawTs.push({
              src:'ts', id:e.idEvent, lg:l,
              a:away||'', h:home||'',
              evName: evName,
              aB:e.strAwayTeamBadge, hB:e.strHomeTeamBadge,
              aS:e.intAwayScore, hS:e.intHomeScore,
              stat:e.strStatus||'', uD:e.dateEvent, uT:e.strTime,
              vn:e.strVenue, desc:e.strDescriptionEN,
              progress:e.strProgress||'', tl,
              isTeamSport: !!(away && home)
            });
          });
        }).catch(()=>{})
        .finally(() => { done++; if(done===total) resolve(); });
      });
    });
    // Also resolve if TSDB takes too long
    setTimeout(() => { if(done < total) resolve(); }, 12000);
  });
}

function fetchLive() {
  const sports = ["Ice_Hockey","Baseball","Basketball","American_Football","Soccer","Tennis","Golf","Motorsport"];
  return Promise.all(sports.map(s =>
    fetch(`https://www.thesportsdb.com/api/v1/json/${TK}/livescore.php?s=${s}`)
    .then(r=>r.json()).then(data=>{
      if (!data.events) return;
      data.events.forEach(ls => {
        const idx = S.rawTs.findIndex(e => e.id === ls.idEvent);
        if (idx !== -1) {
          S.rawTs[idx].aS       = ls.intAwayScore;
          S.rawTs[idx].hS       = ls.intHomeScore;
          S.rawTs[idx].stat     = ls.strStatus||'';
          S.rawTs[idx].progress = ls.strProgress||'';
        }
      });
    }).catch(()=>{})
  ));
}

function fetchTVData(id) {
  if (S.tvCache[id]) return Promise.resolve(S.tvCache[id]);
  return fetch(`https://www.thesportsdb.com/api/v1/json/${TK}/lookuptv.php?id=${id}`)
  .then(r=>r.json()).then(data=>{
    const res = {};
    if (data.tvstation) {
      data.tvstation.forEach(tv => {
        const c = tv.strCountry||'US';
        if (!res[c]) res[c] = [];
        if (tv.strChannel && !tv.strChannel.toLowerCase().includes('null'))
          res[c].push({name:tv.strChannel,logo:tv.strChannelThumb,lang:tv.strLanguage});
      });
    }
    S.tvCache[id] = res;
    return res;
  }).catch(()=>({}));
}

// ============================================================================
// COLLEGE SPORT DETECTION
// ============================================================================
const CONF_MAP = {
  "ACC":["acc","atlantic coast","boston college","duke","florida state","georgia tech","louisville","miami","nc state","north carolina","notre dame","pittsburgh","syracuse","virginia","virginia tech","wake forest","clemson"],
  "Big Ten":["big ten","big 10","b1g","michigan","ohio state","penn state","indiana","illinois","iowa","minnesota","nebraska","northwestern","purdue","rutgers","maryland","wisconsin","michigan state","usc","ucla","oregon","washington"],
  "Big 12":["big 12","texas","oklahoma","kansas","baylor","tcu","iowa state","west virginia","oklahoma state","texas tech","k-state","kansas state","cincinnati","houston","byu","ucf","arizona","arizona state","colorado","utah"],
  "SEC":["sec","southeastern","alabama","georgia","florida","tennessee","auburn","lsu","ole miss","mississippi","arkansas","missouri","kentucky","vanderbilt","south carolina","texas a&m","oklahoma","texas"],
  "Pac-12":["pac-12","pac 12","stanford","cal","washington state","oregon state"],
  "CUSA":["conference usa","c-usa","fau","florida atlantic","charlotte","western kentucky","uab","utsa","utep","rice","north texas","louisiana tech","middle tennessee","old dominion","marshall"],
  "MWC":["mountain west","boise state","air force","nevada","utah state","wyoming","sdsu","san diego state","fresno state","colorado state","unlv","new mexico","hawaii","san jose state"],
  "MAC":["mid-american","mac","toledo","ohio","bowling green","western michigan","central michigan","eastern michigan","kent state","akron","ball state","buffalo","miami ohio","northern illinois"],
  "Sun Belt":["sun belt","sunbelt","louisiana","app state","appalachian","coastal carolina","georgia southern","georgia state","south alabama","troy","arkansas state","texas state","southern miss","southern mississippi","old dominion","marshall"],
  "CAA":["caa","colonial","hofstra","towson","william mary","richmond","delaware","elon","campbell","hampton","monmouth","stony brook","northeastern","maine"],
  "OVC":["ohio valley","belmont","tsu","tennessee state","eastern illinois","lindenwood","little rock","se missouri","southern indiana","tennessee tech","ut martin","eastern kentucky","austin peay"],
  "SWAC":["swac","southern","alcorn","grambling","jackson state","prairie view","southern university","texas southern","florida a&m","alabama state","alabama a&m","bethune","arkansas pine bluff"],
  "MEAC":["meac","mid-eastern","howard","morgan state","norfolk state","nc a&t","coppin state","delaware state","maryland eastern shore","sc state","south carolina state","savannah state"],
  "WCC":["wcc","west coast","gonzaga","saint mary","byu","san francisco","portland","loyola marymount","santa clara","pacific","pepperdine","san diego"],
  "A-10":["atlantic 10","a-10","a10","vcu","dayton","richmond","george washington","saint louis","duquesne","fordham","george mason","la salle","loyola chicago","massachusetts","umass","rhode island","st bonaventure"],
  "LHJMQ":["lhjmq","qmjhl","baie-comeau","blainville","chicoutimi","drummondville","gatineau","halifax","moncton","rimouski","rouyn-noranda","saint john","shawinigan","sherbrooke","val-d'or","victoriaville","cape breton","charlottetown"],
  "OHL":["ohl","ontario hockey league","barrie","belleville","erie","flint","guelph","hamilton","kingston","kitchener","london","mississauga","niagara","north bay","oshawa","ottawa","owen sound","peterborough","saginaw","sarnia","sault ste. marie","sudbury","windsor"],
  "WHL":["whl","western hockey league","brandon","calgary hitmen","edmonton oil kings","everett","kamloops","kelowna","lethbridge","medicine hat","moose jaw","portland winterhawks","prince albert","prince george","red deer","regina","saskatoon","seattle thunderbirds","spokane","swift current","tri-city","vancouver giants","victoria","winnipeg ice"],
  "AHL":["ahl","american hockey league","abbotsford","belleville","bridgeport","charlotte","chicago wolves","cleveland","colorado eagles","coachella valley","grand rapids","hartford","hershey","laval","lehigh","manitoba","milwaukee","montreal","ontario reign","providence","rochester","rockford","san diego gulls","san jose barracuda","springfield","stockton","syracuse","toronto marlies","tucson","utica","wilkes-barre"],
  "USPORTS":["usports","u sports","ontario university","ontario tech","queens","mcmaster","ottawa","carleton","brock","guelph","western","windsor","york","laurier","waterloo","toronto","nipissing","laurentian","rmc","royal military"],
  "RSEQ":["rseq","laval","sherbrooke","mcgill","bishop","concordia","uqam","montreal rouge et or"]
};

function detectCollege(title, tab) {
  const t = title.toLowerCase();

  // Detect sport from keywords
  let sport = null;
  if (t.includes('hockey')||t.includes('hky')) sport = {label:'College Hockey',icon:'🏒'};
  else if (t.includes('basketball')||t.includes('bball')) sport = {label:'College Basketball',icon:'🏀'};
  else if (t.includes('baseball')) sport = {label:'College Baseball',icon:'⚾'};
  else if (t.includes('softball')) sport = {label:'College Softball',icon:'🥎'};
  else if (t.includes('football')) sport = {label:'College Football',icon:'🏈'};
  else if (t.includes('soccer')||t.includes('futbol')) sport = {label:'College Soccer',icon:'⚽'};
  else if (t.includes('lacrosse')) sport = {label:'College Lacrosse',icon:'🥍'};
  else if (t.includes('volleyball')) sport = {label:'College Volleyball',icon:'🏐'};
  else if (t.includes('wrestling')) sport = {label:'College Wrestling',icon:'🤼'};
  else if (t.includes('tennis')) sport = {label:'College Tennis',icon:'🎾'};
  else if (t.includes('track')||t.includes('cross country')) sport = {label:'Track & Field',icon:'🏃'};
  else if (t.includes('swimming')) sport = {label:'College Swimming',icon:'🏊'};
  else if (t.includes('gymnastics')) sport = {label:'College Gymnastics',icon:'🤸'};
  else if (t.includes('golf')) sport = {label:'College Golf',icon:'⛳'};

  // If no sport detected and has # ranking, assume basketball for ESPN+
  if (!sport && /^#\d+\s/.test(title)) sport = {label:'College Basketball',icon:'🏀'};
  if (!sport && (t.includes(' at ')||t.includes(' vs ')||t.includes(' @ '))) {
    if (tab==='BTN+') sport = {label:'College Sports (Big Ten)',icon:'🎓'};
    else sport = {label:'College Sports',icon:'🎓'};
  }
  if (!sport) return null;

  // Detect conference
  let conf = '';
  if (tab==='BTN+') conf = 'Big Ten';
  else {
    for (const [c, kws] of Object.entries(CONF_MAP)) {
      if (kws.some(kw => t.includes(kw))) { conf = c; break; }
    }
  }

  return {sport:sport.label, icon:sport.icon, conf};
}

// ============================================================================
// FUZZY TEAM MATCH
// ============================================================================
function fuzzyMatch(sheetTitle, tsAway, tsHome) {
  if (!sheetTitle||!tsAway||!tsHome) return false;
  const s = sheetTitle.toLowerCase();

  function teamTokens(name) {
    const nick = NICKNAMES[name] || '';
    const words = name.toLowerCase().split(/\s+/).filter(w=>w.length>2);
    const nickWords = nick.toLowerCase().split(/\s+/).filter(w=>w.length>2);
    return [...new Set([name.toLowerCase(), nick.toLowerCase(), ...words, ...nickWords])];
  }

  const aT = teamTokens(tsAway);
  const hT = teamTokens(tsHome);
  const aHit = aT.some(t => t.length>2 && s.includes(t));
  const hHit = hT.some(t => t.length>2 && s.includes(t));
  return aHit && hHit;
}

// ============================================================================
// GET STEALTH CHANNELS — Scan all relevant tabs
// ============================================================================
function getStealthChannels(tsEvent) {
  const relevantTabs = getRelevantTabs(tsEvent.lg);
  const found = [];
  S.rawSh.forEach(se => {
    if (!relevantTabs.includes(se.tab)) return;
    if (se.used) return;
    let match = false;
    if (tsEvent.isTeamSport) {
      match = fuzzyMatch(se.ti, tsEvent.a, tsEvent.h) ||
              fuzzyMatch(se.ti, tsEvent.a, tsEvent.h);
    } else {
      // Individual sport — match on event name keywords
      const evWords = (tsEvent.evName||'').toLowerCase().split(/\s+/).filter(w=>w.length>3);
      const ti = se.ti.toLowerCase();
      match = evWords.length > 0 && evWords.filter(w=>ti.includes(w)).length >= 2;
    }
    if (match) { found.push({ch:se.ch,tab:se.tab}); se.used=true; }
  });
  return found;
}

function getRelevantTabs(lg) {
  // Find sport for this league
  for (const sData of Object.values(KB.sports)) {
    if (sData.tsdbLeagues && sData.tsdbLeagues.includes(lg)) return sData.tabs;
  }
  return ["ESPN+","FLSP","BTN+","VICTORY+","PEACOCK","PARAMOUNT","TSN+","SN+","DAZN"];
}

// ============================================================================
// BIG EVENTS
// ============================================================================
const BIG_KW = ["playoff","championship","final","cup","bowl","tournament","grand prix",
                "grand slam","open","masters","classic","invitational","series","500",
                "ppv","title fight","world title","ncaa","march madness","frozen four",
                "super bowl","grey cup","world series","stanley cup","calder cup","memorial cup"];

function buildBigEvents() {
  const now = Date.now();
  const events = [];

  // PPV from sheet
  S.rawSh.filter(se=>['PPV UFC','PPV BOXING','PPV EVENTS','PPV NETFLIX'].includes(se.tab))
  .forEach(se=>{
    const t = etToLocal(se.tm);
    if (t.ms < now - 8*3600000) return; // Skip if over 8 hours ago
    events.push({
      sport:se.tab, icon:SI[se.tab]||'🎟️',
      title:se.cleanTitle||se.ti,
      time:t.str, venue:'', stCh:se.ch,
      desc:'', tsEv:null
    });
  });

  // TSDB noteworthy events
  S.rawTs.forEach(te=>{
    if (te.aS===null && te.hS===null && !te.isTeamSport===false) return; // Individual sport events always included
    const title = te.isTeamSport ? `${te.a} vs ${te.h}` : te.evName;
    if (!title || title.toLowerCase().includes('null')) return;

    const isNoteworthy =
      BIG_KW.some(kw=>title.toLowerCase().includes(kw)) ||
      (te.evName||'').toLowerCase().includes('grand prix') ||
      (te.evName||'').toLowerCase().includes('masters') ||
      ['PGA Tour','LPGA Tour','LIV Golf','Masters Tournament',
       'Formula 1','NASCAR','IndyCar','UFC','Boxing','WWE',
       'ATP World Tour','WTA'].includes(te.lg);

    if (!isNoteworthy) return;
    events.push({
      sport:te.lg, icon:SI[te.lg]||'🏆',
      title, time:te.tl?.str||'',
      venue:te.vn||'', stCh:'',
      desc:te.desc||'', tsEv:te
    });
  });

  S.beEvents = events;

  if (!events.length) { document.getElementById('beBox').style.display='none'; return; }
  document.getElementById('beBox').style.display='block';
  document.getElementById('beCnt').textContent = events.length+' event'+(events.length!==1?'s':'');

  const track = document.getElementById('beTrack');
  const dots  = document.getElementById('beDots');

  track.innerHTML = events.map((ev,i)=>{
    const stHtml = ev.stCh ? `<span class="be-ch">${escH(ev.stCh)}</span>` : '';
    const natCA  = ev.tsEv ? (NAT_RIGHTS[ev.sport]?.CA||[]).slice(0,2)
                               .map(c=>`<span class="be-ch n">${escH(c)}</span>`).join('') : '';
    return `<div class="be-c" onclick="openBeModal(${i})">
      <div class="be-sport">${ev.icon} ${escH(ev.sport)}</div>
      <div class="be-title">${escH(ev.title)}</div>
      <div class="be-meta">
        ${ev.time?`<span>🕐 ${escH(ev.time)}</span>`:''}
        ${ev.venue?`<span>📍 ${escH(ev.venue)}</span>`:''}
      </div>
      ${stHtml||natCA?`<div class="be-watch">${stHtml}${natCA}</div>`:''}
    </div>`;
  }).join('');

  dots.innerHTML = events.map((_,i)=>
    `<div class="be-dot${i===0?' on':''}" onclick="goBe(${i})"></div>`).join('');

  if (S.beTimer) clearInterval(S.beTimer);
  if (events.length>1) {
    S.beTimer = setInterval(()=>{ S.beIdx=(S.beIdx+1)%events.length; goBe(S.beIdx); }, 5000);
  }
}

function goBe(idx) {
  S.beIdx=idx;
  document.getElementById('beTrack').style.transform=`translateX(-${idx*100}%)`;
  document.querySelectorAll('.be-dot').forEach((d,i)=>d.className='be-dot'+(i===idx?' on':''));
}

function openBeModal(idx) {
  const ev = S.beEvents[idx]; if (!ev) return;
  const d = T[S.lang];

  document.getElementById('mSpt').textContent = (ev.icon||'🏆')+' '+ev.sport;
  document.getElementById('mTtl').textContent = ev.title;
  document.getElementById('mStl').textContent = (ev.time?ev.time:'') + (ev.venue?' · '+ev.venue:'');

  let body = '';
  body += `<div class="m-s"><div class="m-st">📺 ${d.whereWatch}</div><div class="m-wg" id="mwBe">`;
  if (ev.stCh) {
    body += `<div class="m-rg"><div class="m-rl">🔥 STEALTH PRO</div>
      <div class="m-cl"><span class="m-ch sp">${escH(ev.stCh)}</span></div></div>`;
  }
  const nat = NAT_RIGHTS[ev.sport];
  if (nat) {
    [['CA','🍁 Canada'],['US','🇺🇸 USA'],['UK','🇬🇧 UK'],['FR','🇫🇷 France'],['AU','🇦🇺 AU/NZ']].forEach(([k,lbl])=>{
      const chs = nat[k];
      if (chs&&chs.length) body += `<div class="m-rg"><div class="m-rl">${lbl}</div>
        <div class="m-cl">${chs.map(c=>`<span class="m-ch${k==='CA'?' ca':k==='FR'?' fr':''}">${escH(c)}</span>`).join('')}</div></div>`;
    });
  }
  body += `</div></div>`;
  if (ev.venue) body += `<div class="m-s"><div class="m-st">📍 ${d.venue}</div><p style="font-size:13px;color:var(--TX);">${escH(ev.venue)}</p></div>`;
  if (ev.desc) body += `<div class="m-s"><div class="m-st">📰 INFO</div><p style="font-size:13px;color:var(--TX);line-height:1.6;">${escH(ev.desc)}</p></div>`;
  const lu = LEAGUE_URLS[ev.sport];
  if (lu) body += `<div class="m-s"><div class="m-acts"><a href="${lu}" target="_blank" rel="noopener" class="m-act">🏆 ${d.leaguePg}</a></div></div>`;

  document.getElementById('mBody').innerHTML = body;
  document.getElementById('movl').style.display = 'flex';

  if (ev.tsEv?.id) {
    fetchTVData(ev.tsEv.id).then(tvData=>{
      const el=document.getElementById('mwBe'); if(!el) return;
      el.innerHTML += buildTSDBwatch(tvData, ev.sport, []);
    });
  }
}

// ============================================================================
// LIVE TICKER
// ============================================================================
function updateTicker() {
  const naLeagues = ["NHL","MLB","NBA","NFL","MLS","CFL","NASCAR","PGA Tour","ATP World Tour","WTA"];
  const now = Date.now();

  let items = '';

  // Scheduled games (not yet started)
  S.rawTs
    .filter(te => naLeagues.includes(te.lg) &&
            (!te.stat||te.stat==='Not Started'||te.stat==='NS') &&
            te.tl?.ms > now && te.tl?.ms < now+24*3600000)
    .sort((a,b)=>a.tl.ms-b.tl.ms)
    .slice(0,8)
    .forEach(te=>{
      const icon = SI[te.lg]||'🏆';
      const title = te.isTeamSport
        ? `${NICKNAMES[te.a]||te.a} @ ${NICKNAMES[te.h]||te.h}`
        : te.evName;
      items += `<span class="ti">${icon} ${escH(te.lg)}<span class="ti-sep">·</span>${escH(title)}<span class="ti-sep">·</span><span class="ti-st">${escH(te.tl.str)}</span></span>`;
    });

  // Live games
  S.rawTs
    .filter(te => naLeagues.includes(te.lg) &&
            te.stat && !['Not Started','NS','Match Finished','FT','AET','PEN',''].includes(te.stat) &&
            te.aS!==null && te.hS!==null)
    .forEach(te=>{
      const aS=te.aS??0; const hS=te.hS??0;
      const aLd=aS>hS; const hLd=hS>aS;
      const icon=SI[te.lg]||'🏆';
      const aN=NICKNAMES[te.a]||te.a;
      const hN=NICKNAMES[te.h]||te.h;
      const prog=te.progress?` · ${te.progress}`:'';
      items+=`<span class="ti">🔴 ${icon} ${escH(te.lg)}<span class="ti-sep">·</span><span class="${aLd?'ti-ld':''}">${escH(aN)}</span><span class="ti-sc"> ${aS} - ${hS} </span><span class="${hLd?'ti-ld':''}">${escH(hN)}</span><span class="ti-st">${prog}</span></span>`;
    });

  if (!items) { document.getElementById('ticker').style.display='none'; return; }
  if (!S.ticker) return;
  document.getElementById('ticker').style.display='flex';
  const inner = document.getElementById('tInner');
  inner.innerHTML = items+items; // Double for seamless loop
}

// ============================================================================
// ANNOUNCEMENTS
// ============================================================================
function fetchAnn() {
  const EN = "🔥 Welcome to Stealth Sports Premium! Enjoy this weekend's action — NHL, MLB, NBA & more. Never miss a game!";
  const FR = "🔥 Bienvenue sur Stealth Sports Premium! Profitez de l'action — LNH, MLB, NBA et plus. Ne manquez aucun match!";

  fetch(`https://docs.google.com/spreadsheets/d/${SHEET}/gviz/tq?tqx=out:json&sheet=ANNOUNCEMENTS&headers=1`)
  .then(r=>r.text()).then(txt=>{
    try {
      const j=JSON.parse(txt.substring(txt.indexOf('{'),txt.lastIndexOf('}')+1));
      const row=j.table?.rows?.[0];
      const en=row?.c?.[0]?.v||EN;
      const url=row?.c?.[1]?.v||'';
      const btnEn=row?.c?.[2]?.v||'';
      const fr=row?.c?.[3]?.v||FR;
      const btnFr=row?.c?.[4]?.v||btnEn;
      showAnn(en,fr,url,btnEn,btnFr);
    } catch(e){showAnn(EN,FR,'','','');}
  }).catch(()=>showAnn(EN,FR,'','',''));
}
function showAnn(en,fr,url,btnEn,btnFr) {
  const box=document.getElementById('annBox');
  box.style.display='block';
  document.getElementById('annTxt').textContent = S.lang==='fr'?fr:en;
  const btn=document.getElementById('annBtn');
  if (url&&(btnEn||btnFr)) {
    btn.style.display='inline-block'; btn.href=url;
    btn.textContent = S.lang==='fr'?btnFr:btnEn;
  } else { btn.style.display='none'; }
}

// ============================================================================
// RENDER
// ============================================================================
function render() {
  const sc = document.getElementById('sched');
  const d  = T[S.lang];
  const now = Date.now();
  const soon = now + 2*3600000;

  // Reset used flags
  S.rawSh.forEach(se=>se.used=false);

  let merged = [];
  let seenTs = new Set();

  // 1. TSDB events
  S.rawTs.forEach(te=>{
    const uid = te.lg+'|'+(te.a||te.evName)+'|'+(te.h||'')+'|'+te.uD;
    if (seenTs.has(uid)) return; seenTs.add(uid);

    const isFin  = ['Match Finished','FT','AET','PEN','Post','Postponed'].includes(te.stat);
    const isLive = te.stat &&
      !['Not Started','NS','','Post','Postponed'].includes(te.stat) && !isFin;
    const tms = te.tl?.ms||Infinity;

    // View mode filter
    if (S.view==='live'    && !isLive) return;
    if (S.view==='soon'    && (tms<now||tms>soon)) return;
    if (S.view==='results' && !isFin) return;
    if (S.view==='sched'   && isFin) return;

    // Hide stale events from schedule view
    if (S.view==='sched' && !isLive && !isFin) {
      const dur = SPORT_DURATION_MS[te.lg]||SPORT_DURATION_MS.default;
      if (tms !== Infinity && tms + dur < now) return;
    }

    // Category filter
    const evForFilter = {...te, src:'ts', tab:te.lg};
    if (!catMatches(evForFilter)) return;

    // Search filter
    const stChs = getStealthChannels(te);
    const evFull = {...te, src:'ts', tab:te.lg, stChs};
    if (S.search && !searchMatches(evFull, S.search)) return;

    const isFav = S.prefs.teams.some(t=>
      (te.a||'').includes(t)||(te.h||'').includes(t)||(te.evName||'').includes(t));

    merged.push({
      src:'ts', id:te.id, lg:te.lg, tab:te.lg,
      a:te.a, h:te.h, evName:te.evName,
      aB:te.aB, hB:te.hB,
      aS:te.aS, hS:te.hS, stat:te.stat,
      isLive, isFin, tStr:te.tl?.str||'', ms:te.tl?.ms||Infinity,
      stChs, vn:te.vn, desc:te.desc,
      progress:te.progress, isFav,
      isTeamSport:te.isTeamSport
    });
  });

  // 2. Sheet-only events
  S.rawSh.forEach(se=>{
    if (se.used) return;
    if (S.view==='results'||S.view==='live') return;

    const t = etToLocal(se.tm);

    // Hide TV shows that are over
    if (se.isShow && t.ms<(now-3*3600000)) return;

    // Hide stale non-show events
    if (!se.isShow && t.ms!==Infinity) {
      const dur = SPORT_DURATION_MS.default;
      if (t.ms + dur < now) return;
    }

    if (S.view==='soon' && (t.ms<now||t.ms>soon)) return;

    // Category filter
    if (!catMatches(se)) return;

    // Search filter
    if (S.search && !searchMatches(se, S.search)) return;

    const isFav = S.prefs.teams.some(tm=>
      (se.ti||'').includes(tm)||(se.cleanTitle||'').includes(tm));

    merged.push({
      src:'sh', tab:se.tab, lg:se.tab,
      ti:se.cleanTitle||se.ti, rawTi:se.ti,
      flspData:se.flspData, collegeInfo:se.collegeInfo,
      isShow:se.isShow,
      tStr:t.str, ms:t.ms,
      stChs:[{ch:se.ch,tab:se.tab}],
      isFin:false, isLive:false, isFav
    });
  });

  // Sort: favourites first, then by time
  merged.sort((a,b)=>a.ms-b.ms);
  merged.sort((a,b)=>(b.isFav?1:0)-(a.isFav?1:0));

  if (!merged.length) {
    sc.innerHTML = `<div class="no-ev">${d.noEv}</div>`;
    return;
  }

  // Group by time slot (15-min buckets) — chronological sport-tv-guide.live style
  sc.innerHTML = merged.map(ev=>buildRow(ev,d)).join('');
}

// ============================================================================
// BUILD EVENT ROW
// ============================================================================
function buildRow(ev, d) {
  const isFin=ev.isFin, isLive=ev.isLive;
  const now=Date.now();

  // Time box
  let tCls, tTxt;
  if (isLive) { tCls='t-box lv'; tTxt=d.live; }
  else if (isFin) { tCls='t-box fn'; tTxt=d.final; }
  else if (ev.ms<now&&ev.ms!==Infinity) { tCls='t-box ip'; tTxt=ev.tStr; }
  else { tCls='t-box'; tTxt=ev.tStr; }

  const prog = isLive&&ev.progress
    ? `<div class="t-prog lv">${escH(ev.progress)}</div>` : '';

  // Sport tag
  let sportTag = '';
  if (ev.src==='ts') {
    sportTag=`<div class="ev-sport">${SI[ev.lg]||'🏆'} ${escH(ev.lg)}</div>`;
  } else if (ev.flspData) {
    const conf = ev.flspData.leagues.length ? ` · ${ev.flspData.leagues[0]}` : '';
    sportTag=`<div class="ev-sport">${ev.flspData.icon||'📡'} FloSports — ${escH(ev.flspData.sport)}${escH(conf)}</div>`;
  } else if (ev.collegeInfo) {
    const conf = ev.collegeInfo.conf ? ` · ${ev.collegeInfo.conf}` : '';
    sportTag=`<div class="ev-sport">${ev.collegeInfo.icon||'🎓'} ${escH(ev.collegeInfo.sport)}${escH(conf)}</div>`;
  } else if (ev.isShow) {
    sportTag=`<div class="ev-sport">📺 ${escH(ev.tab)}</div>`;
  } else {
    sportTag=`<div class="ev-sport">${SI[ev.tab]||'📡'} ${escH(ev.tab)}</div>`;
  }

  // Match display
  let matchHtml='';
  let rowCls='ev-row';
  if (isLive) rowCls+=' live-row';

  if (ev.src==='ts') {
    const aS=ev.aS??0; const hS=ev.hS??0;
    if (ev.isTeamSport&&ev.a&&ev.h) {
      const aL=ev.aB?`<img src="${ev.aB}/tiny" class="e-tl" loading="lazy" onerror="this.style.display='none'">`:'';
      const hL=ev.hB?`<img src="${ev.hB}/tiny" class="e-tl" loading="lazy" onerror="this.style.display='none'">`:'';
      const aN=NICKNAMES[ev.a]||ev.a;
      const hN=NICKNAMES[ev.h]||ev.h;
      const aFav=S.prefs.teams.includes(ev.a)?' fv':'';
      const hFav=S.prefs.teams.includes(ev.h)?' fv':'';
      const sc=(isLive||isFin)
        ?`<div class="e-sb"><div class="e-sc">${aS} - ${hS}</div></div>`
        :`<div class="e-sb"><div class="e-vs">${d.at}</div></div>`;
      matchHtml=`<div class="ev-mu">
        <div class="e-tw aw"><span class="e-tn${aFav}">${escH(aN)}</span>${aL}</div>
        ${sc}
        <div class="e-tw">${hL}<span class="e-tn${hFav}">${escH(hN)}</span></div>
      </div>`;
    } else {
      // Individual sport event
      matchHtml=`<div class="ev-mu">
        <div class="e-tw"><span class="e-tn">${escH(ev.evName||ev.lg)}</span></div>
      </div>`;
      if (ev.vn) matchHtml+=`<div class="ev-sub">📍 ${escH(ev.vn)}</div>`;
    }
  } else {
    // Sheet event
    const showCls = ev.isShow ? ' tv-show' : '';
    matchHtml=`<div class="ev-mu">
      <div class="e-tw"><span class="e-tn${showCls?''  :''}">${escH(ev.ti||ev.rawTi||'')}</span></div>
    </div>`;
  }

  // Channel display (compact)
  let chanHtml='';
  const stChs=ev.stChs||[];
  if (isFin&&ev.src==='ts') {
    const q=encodeURIComponent(`box score ${ev.a||ev.evName||''} vs ${ev.h||''} ${ev.lg} ${S.dateStr}`);
    chanHtml=`<a href="https://www.google.com/search?q=${q}" target="_blank" rel="noopener" class="bx-btn">📊 ${d.box}</a>`;
  } else if (stChs.length) {
    const chList=stChs.map(x=>escH(x.ch)).join('<br>');
    chanHtml=`<div class="s-badge">🔥 ${d.watch}<div class="s-chs">${chList}</div></div>`;
    // Also show top national
    const nat=NAT_RIGHTS[ev.lg];
    if (nat) {
      const ca=(nat.CA||[]).slice(0,1).map(c=>`<span class="c-chip ca">${escH(c)}</span>`).join('');
      const us=(nat.US||[]).slice(0,1).map(c=>`<span class="c-chip">${escH(c)}</span>`).join('');
      if (ca||us) chanHtml+=`<div class="ch-chips">${ca}${us}</div>`;
    }
  } else if (ev.src==='ts') {
    const nat=NAT_RIGHTS[ev.lg];
    if (nat) {
      const ca=(nat.CA||[]).slice(0,2).map(c=>`<span class="c-chip ca">${escH(c)}</span>`).join('');
      const us=(nat.US||[]).slice(0,2).map(c=>`<span class="c-chip">${escH(c)}</span>`).join('');
      if (ca||us) chanHtml=`<div class="ch-chips">${ca}${us}</div>`;
    }
    if (!chanHtml) chanHtml=`<div class="no-ch">${d.noChannel}</div>`;
  } else if (stChs.length===0&&ev.src==='sh') {
    chanHtml=`<div class="no-ch">${escH(ev.tab)}</div>`;
  }

  const evJ = JSON.stringify(ev).replace(/"/g,'&quot;');
  return `<div class="${rowCls}" onclick="openModal(${evJ})">
    <div class="ev-t"><div class="${tCls}">${tTxt}</div>${prog}</div>
    <div class="ev-m">${sportTag}${matchHtml}</div>
    <div class="ev-c">${chanHtml}</div>
  </div>`;
}

// ============================================================================
// EVENT MODAL
// ============================================================================
function openModal(ev) {
  const d=T[S.lang];
  const lg=ev.lg||ev.tab||'';
  const isFin=ev.isFin, isLive=ev.isLive;

  document.getElementById('mSpt').textContent=(SI[lg]||'🏆')+' '+lg;

  if (ev.src==='ts') {
    if (ev.isTeamSport) {
      document.getElementById('mTtl').textContent=`${NICKNAMES[ev.a]||ev.a} ${d.at} ${NICKNAMES[ev.h]||ev.h}`;
    } else {
      document.getElementById('mTtl').textContent=ev.evName||lg;
    }
    document.getElementById('mStl').textContent=ev.vn||'';
  } else {
    document.getElementById('mTtl').textContent=ev.ti||ev.rawTi||'';
    let sub='';
    if (ev.flspData) sub=`FloSports · ${ev.flspData.sport}${ev.flspData.leagues[0]?' · '+ev.flspData.leagues[0]:''}`;
    else if (ev.collegeInfo) sub=ev.collegeInfo.sport+(ev.collegeInfo.conf?' · '+ev.collegeInfo.conf:'');
    else sub=ev.tab||'';
    document.getElementById('mStl').textContent=sub;
  }

  let body='';

  // Score block
  if (ev.src==='ts'&&ev.isTeamSport) {
    const aS=ev.aS??0; const hS=ev.hS??0;
    const aL=ev.aB?`<img src="${ev.aB}/small" class="m-tl" onerror="this.style.display='none'">`:'';
    const hL=ev.hB?`<img src="${ev.hB}/small" class="m-tl" onerror="this.style.display='none'">`:'';
    const ss=isLive?(ev.progress||ev.stat||d.live):isFin?d.final:ev.tStr;
    body+=`<div class="m-s"><div class="m-scr">
      <div class="m-tm">${aL}<div class="m-tn">${escH(NICKNAMES[ev.a]||ev.a)}</div></div>
      <div>
        ${(isLive||isFin)?`<div class="m-sc">${aS} - ${hS}</div>`:`<div class="m-sc" style="font-size:20px;">${d.at}</div>`}
        <div class="m-ss">${escH(ss)}</div>
      </div>
      <div class="m-tm">${hL}<div class="m-tn">${escH(NICKNAMES[ev.h]||ev.h)}</div></div>
    </div></div>`;
  }

  // Where to watch — async
  body+=`<div class="m-s"><div class="m-st">📺 ${d.whereWatch}</div>
    <div class="m-wg" id="mWatch"><div style="color:var(--MU);font-size:12px;">Loading...</div></div>
  </div>`;

  // Actions
  let acts='';
  if (isFin&&ev.src==='ts') {
    const q=encodeURIComponent(`box score ${ev.a||ev.evName} vs ${ev.h||''} ${lg} ${S.dateStr}`);
    acts+=`<a href="https://www.google.com/search?q=${q}" target="_blank" rel="noopener" class="m-act">📊 ${d.box}</a>`;
  }
  if (isLive&&ev.src==='ts') {
    const lu=LEAGUE_URLS[lg];
    if (lu) acts+=`<a href="${lu}" target="_blank" rel="noopener" class="m-act">📊 ${d.leaguePg} Live</a>`;
  }
  const lu=LEAGUE_URLS[lg];
  if (lu) acts+=`<a href="${lu}" target="_blank" rel="noopener" class="m-act sc">🏆 ${d.standings}</a>`;
  if (navigator.share) {
    const st=ev.src==='ts'?(ev.a||ev.evName)+' vs '+(ev.h||''):''+ev.ti;
    acts+=`<button class="m-act sc" onclick="shareEv('${escH(st)}')">📤 ${d.share}</button>`;
  }
  if (acts) body+=`<div class="m-s"><div class="m-st">🔗 ${d.actions}</div><div class="m-acts">${acts}</div></div>`;

  document.getElementById('mBody').innerHTML=body;
  document.getElementById('movl').style.display='flex';

  buildModalWatch(ev).then(html=>{
    const el=document.getElementById('mWatch');
    if (el) el.innerHTML=html;
  });
}

async function buildModalWatch(ev) {
  const d=T[S.lang];
  const lg=ev.lg||ev.tab||'';
  let html='';

  // 1. Stealth Pro channels
  const stChs=ev.stChs||[];
  if (stChs.length) {
    html+=`<div class="m-rg"><div class="m-rl">🔥 STEALTH PRO</div>
      <div class="m-cl">${stChs.map(x=>`<span class="m-ch sp">${escH(x.ch)}</span>`).join('')}</div></div>`;
  }

  // 2. Team local rights
  const lr=LOCAL_RIGHTS[lg];
  if (lr&&ev.src==='ts'&&ev.isTeamSport) {
    const lrCA=[],lrUS=[];
    [ev.a,ev.h].forEach(t=>{
      const tr=lr[t]; if(!tr) return;
      if(tr.CA) lrCA.push(...tr.CA);
      if(tr.US) lrUS.push(...tr.US);
    });
    const uCA=[...new Set(lrCA)], uUS=[...new Set(lrUS)];
    if(uCA.length) html+=`<div class="m-rg"><div class="m-rl">🍁 Canada (Local)</div>
      <div class="m-cl">${uCA.map(c=>`<span class="m-ch ca">${escH(c)}</span>`).join('')}</div></div>`;
    if(uUS.length) html+=`<div class="m-rg"><div class="m-rl">🇺🇸 USA (Local)</div>
      <div class="m-cl">${uUS.map(c=>`<span class="m-ch">${escH(c)}</span>`).join('')}</div></div>`;
  }

  // 3. TSDB lookuptv
  if (ev.id) {
    const tvData=await fetchTVData(ev.id);
    html+=buildTSDBwatch(tvData,lg,stChs);
  }

  // 4. National fallback
  if (!html) {
    const nat=NAT_RIGHTS[lg];
    if (nat) {
      [['CA','🍁 Canada'],['US','🇺🇸 USA'],['UK','🇬🇧 UK'],['FR','🇫🇷 France'],['AU','🇦🇺 AU/NZ']].forEach(([k,lbl])=>{
        const chs=nat[k];
        if(chs&&chs.length) html+=`<div class="m-rg"><div class="m-rl">${lbl}</div>
          <div class="m-cl">${chs.map(c=>`<span class="m-ch${k==='CA'?' ca':k==='FR'?' fr':''}">${escH(c)}</span>`).join('')}</div></div>`;
      });
    }
  }
  if (!html) html=`<p style="font-size:12px;color:var(--MU);">${d.noChannel}</p>`;
  return html;
}

function buildTSDBwatch(tvData,lg,alreadyShown) {
  if(!tvData||!Object.keys(tvData).length) return '';
  const shown=new Set(alreadyShown.map(x=>(x.ch||'').toLowerCase()));
  const cMap={'Canada':'CA','United States':'US','United Kingdom':'UK',
              'France':'FR','Australia':'AU','New Zealand':'NZ','USA':'US','Ireland':'UK'};
  const regions=[['CA','🍁 Canada'],['US','🇺🇸 USA'],['UK','🇬🇧 UK'],['FR','🇫🇷 France'],['AU','🇦🇺 AU/NZ']];
  const grp={};
  Object.entries(tvData).forEach(([c,chs])=>{
    const k=cMap[c]||c;
    if(!grp[k]) grp[k]=[];
    chs.forEach(ch=>{ if(ch.name&&!ch.name.toLowerCase().includes('null')&&!shown.has(ch.name.toLowerCase())) grp[k].push(ch.name); });
  });
  let html='';
  regions.forEach(([k,lbl])=>{
    const chs=grp[k]; if(!chs||!chs.length) return;
    const isFr=k==='FR'||(k==='CA'&&S.lang==='fr');
    html+=`<div class="m-rg"><div class="m-rl">${lbl}</div>
      <div class="m-cl">${chs.map(c=>`<span class="m-ch${isFr?' fr':k==='CA'?' ca':''}">${escH(c)}</span>`).join('')}</div></div>`;
  });
  return html;
}

function closeMOvl(e) { if(e.target===document.getElementById('movl')) closeM(); }
function closeM() { document.getElementById('movl').style.display='none'; }
function shareEv(t) { if(navigator.share) navigator.share({title:'Stealth Sports',text:t,url:window.location.href}); }

// ============================================================================
// SETTINGS
// ============================================================================
const NET_DATA = {
  ca:["TSN","TSN2","TSN3","TSN4","TSN5","Sportsnet Ontario","Sportsnet One","Sportsnet Pacific","Sportsnet West","Sportsnet East","Sportsnet 360","RDS","RDS2","RDS Info","TVA Sports","TVA Sports 2","CBC","CityTV","CTV","Noovo","DAZN Canada"],
  usn:["ABC","ESPN","ESPN2","FOX","FS1","FS2","CBS","NBC","TNT","TBS","TruTV","USA Network","NHL Network","NBA TV","MLB Network","NFL Network","Golf Channel","Tennis Channel","CBS Sports Network","NFL RedZone","Olympic Channel","The CW"],
  usr:["MSG Network","MSG Sportsnet","YES Network","SNY","NESN","NESN+","NBC Sports Boston","NBC Sports Philadelphia","NBC Sports Bay Area","NBC Sports California","FanDuel Sports Network Detroit","FanDuel Sports Network Ohio","FanDuel Sports Network Sun","FanDuel Sports Network South","FanDuel Sports Network Southeast","FanDuel Sports Network Great Lakes","FanDuel Sports Network Wisconsin","FanDuel Sports Network North","FanDuel Sports Network Indiana","FanDuel Sports Network Kansas City","FanDuel Sports Network Oklahoma","FanDuel Sports Network Arizona","FanDuel Sports Network Midwest","FanDuel Sports Network Southwest","FanDuel Sports Network West","FanDuel Sports Network SoCal","FanDuel Sports Network New Orleans","ROOT Sports Northwest","Marquee Sports Network","CHSN Chicago","Altitude Sports","Victory+","Space City Home Network","SportsNet LA","Spectrum SportsNet","Monumental Sports Network","SportsNet Pittsburgh","MASN","MASN2","KCOP-13","KTLA-5","KTNV","KJZZ","WSFL-TV","Arizona Family TV","Rangers Sports Network"],
  uss:["ESPN+","Peacock","Paramount+","Apple TV+","Amazon Prime Video","DAZN USA","fuboTV","Hulu + Live TV","YouTube TV","DirecTV Stream","Max","NBA League Pass","MLB.TV","NHL.TV","UFC Fight Pass","FloSports","Tennis Channel Plus"],
  uk:["Sky Sports Main Event","Sky Sports Premier League","Sky Sports Football","Sky Sports Arena","Sky Sports F1","Sky Sports Golf","Sky Sports Cricket","Sky Sports News","TNT Sports 1","TNT Sports 2","TNT Sports 3","TNT Sports 4","BBC Sport","ITV Sport","ITV4","Channel 4 Sport","Premier Sports","DAZN UK","Amazon Prime Video UK"],
  fr:["Canal+","Canal+ Sport","beIN Sports 1","beIN Sports 2","beIN Sports 3","DAZN France","TF1","M6","France 2","France 3","France 4","L'Équipe","Eurosport 1","Eurosport 2","RMC Sport","Amazon Prime Video FR"],
  au:["Fox Sports 1","Fox Sports 2","Fox Sports 3","Kayo Sports","ESPN AU","Stan Sport","Network 10","Seven Network","Nine Network","beIN Sports AU","Optus Sport","Paramount+ AU","Sky Sport NZ","Spark Sport NZ","Sky Sport 1 NZ","Sky Sport 2 NZ"]
};

const STEALTH_GROUPS = {
  "NHL (01-16)":"NHL","MLB (01-17)":"MLB","NBA (01-15)":"NBA",
  "NFL (01-16)":"NFL","MLS (01-35)":"MLS",
  "ESPN+ (001-600)":"ESPN+","FloSports FLSP (001-399)":"FLSP",
  "TSN+ Canada (001-100)":"TSN+","Sportsnet+ (001-100)":"SN+",
  "DAZN Canada (001-100)":"DAZN","BTN+ (01-50)":"BTN+",
  "Victory+ (001-100)":"VICTORY+","Peacock (01-100)":"PEACOCK",
  "Paramount+ (01-100)":"PARAMOUNT","UFC PPV (00-06)":"PPV UFC",
  "Boxing PPV (00-06)":"PPV BOXING","PPV Events (01-34)":"PPV EVENTS",
  "WWE Netflix (01-04)":"PPV NETFLIX","CBC PPV Canada (01-50)":"CBC PPV"
};

const LG_PREFS = {
  "Hockey":["NHL","AHL","ECHL","WHL","OHL","QMJHL","USHL","KHL","SHL","Liiga","IIHF"],
  "Baseball":["MLB","Triple-A","Double-A","NPB","KBO","College Baseball"],
  "Basketball":["NBA","G-League","NCAAB","EuroLeague","WNBA"],
  "Football":["NFL","CFL","NCAAF","XFL","USFL"],
  "Soccer":["MLS","CPL","English Premier League","EFL Championship","UEFA Champions League","UEFA Europa League","CONCACAF","Liga MX"],
  "Tennis":["ATP World Tour","WTA","Davis Cup"],
  "Golf":["PGA Tour","LPGA Tour","LIV Golf","DP World Tour","Masters Tournament"],
  "MMA / UFC":["UFC","Bellator","ONE Championship","PFL"],
  "Boxing":["Boxing"],
  "Motorsport":["Formula 1","NASCAR","IndyCar","MotoGP","Formula 2"],
  "Rugby":["Rugby Union","Rugby League","NRL","Super Rugby"],
  "Curling":["Curling"],"Lacrosse":["NLL","PLL"]
};

function buildSettings() {
  buildSGrid('sg-ca', NET_DATA.ca, 'net');
  buildSGrid('sg-usn', NET_DATA.usn, 'net');
  buildSGrid('sg-usr', NET_DATA.usr, 'net');
  buildSGrid('sg-uss', NET_DATA.uss, 'net');
  buildSGrid('sg-uk', NET_DATA.uk, 'net');
  buildSGrid('sg-fr', NET_DATA.fr, 'net');
  buildSGrid('sg-au', NET_DATA.au, 'net');

  const spEl=document.getElementById('sg-sp');
  spEl.innerHTML=Object.entries(STEALTH_GROUPS).map(([k,v])=>{
    const id='st_'+v.replace(/\W/g,'_');
    const chk=S.prefs.nets.includes('st:'+v)?'checked':'';
    return `<div class="s-row"><input type="checkbox" id="${id}" value="st:${v}" data-pt="net" ${chk}><label for="${id}">${k}</label></div>`;
  }).join('');

  buildSGrid('sg-spm',["Ice Hockey","Baseball","Basketball","Football (American)","Soccer","Tennis","Golf","Lacrosse","Curling","Softball","CFL"],'spt');
  buildSGrid('sg-spc',["UFC / MMA","Boxing","Pro Wrestling / WWE","Kickboxing","Combat Sports"],'spt');
  buildSGrid('sg-spmo',["Formula 1","NASCAR","IndyCar","MotoGP","Formula 2","Formula E","IMSA","NHRA"],'spt');
  buildSGrid('sg-spo',["Rugby Union","Rugby League","AFL","Darts","Snooker","Cycling","Athletics","Volleyball","Handball","Cricket","Gymnastics","Swimming","Alpine Skiing","Ice Skating","Horse Racing","Esports","Futsal","Water Polo","Triathlon","Biathlon","Ski Jumping","Cross-Country Skiing","Climbing","Fencing","Netball","Field Hockey","Table Tennis","Squash / Padel","Badminton","Beach Soccer","Bowling","Equestrian","GAA"],'spt');

  document.getElementById('tog-dk').checked=S.dark;
  document.getElementById('tog-tk').checked=S.ticker;
  renderChips();
}

function buildSGrid(id,items,pt) {
  const el=document.getElementById(id); if(!el) return;
  const stored=pt==='net'?S.prefs.nets:pt==='spt'?S.prefs.sports:S.prefs.lgs;
  el.innerHTML=items.map(item=>{
    const sid=pt+'_'+item.replace(/\W/g,'_');
    const chk=stored.includes(item)?'checked':'';
    return `<div class="s-row"><input type="checkbox" id="${sid}" value="${item}" data-pt="${pt}" ${chk}><label for="${sid}">${item}</label></div>`;
  }).join('');
}

function buildLgSection() {
  const cont=document.getElementById('lg-cont');
  const selSports=S.prefs.sports.length?S.prefs.sports:Object.keys(LG_PREFS);
  let html='';
  selSports.forEach(sp=>{
    const lgs=LG_PREFS[sp]; if(!lgs) return;
    html+=`<div class="s-grp"><div class="s-gt">🏅 ${sp}</div><div class="s-grid">`;
    lgs.forEach(lg=>{
      const sid='lg_'+lg.replace(/\W/g,'_');
      const chk=S.prefs.lgs.includes(lg)?'checked':'';
      html+=`<div class="s-row"><input type="checkbox" id="${sid}" value="${lg}" data-pt="lg" ${chk}><label for="${sid}">${lg}</label></div>`;
    });
    html+='</div></div>';
  });
  cont.innerHTML=html||`<p style="color:var(--MU);padding:16px;font-size:12px;">Select sports in the Sports tab first.</p>`;
}

let curSTab='app';
function setSTab(t) {
  curSTab=t;
  document.querySelectorAll('.s-tab').forEach(el=>el.className='s-tab');
  document.getElementById('st-'+t).className='s-tab on';
  document.querySelectorAll('.s-sec').forEach(el=>el.className='s-sec');
  document.getElementById('ss-'+t).className='s-sec on';
  if(t==='lg') buildLgSection();
  if(t==='tm') renderChips();
}
function openSettings(){document.getElementById('sovl').style.display='flex';}
function closeSettings(){document.getElementById('sovl').style.display='none';}
function closeSovl(e){if(e.target===document.getElementById('sovl'))closeSettings();}
function saveSettings() {
  S.prefs.nets=[];S.prefs.sports=[];S.prefs.lgs=[];
  document.querySelectorAll('[data-pt="net"]:checked').forEach(cb=>S.prefs.nets.push(cb.value));
  document.querySelectorAll('[data-pt="spt"]:checked').forEach(cb=>S.prefs.sports.push(cb.value));
  document.querySelectorAll('[data-pt="lg"]:checked').forEach(cb=>S.prefs.lgs.push(cb.value));
  localStorage.setItem('p_nets',JSON.stringify(S.prefs.nets));
  localStorage.setItem('p_spts',JSON.stringify(S.prefs.sports));
  localStorage.setItem('p_lgs',JSON.stringify(S.prefs.lgs));
  localStorage.setItem('p_tms',JSON.stringify(S.prefs.teams));
  closeSettings(); render();
}
function toggleDark(){S.dark=document.getElementById('tog-dk').checked;localStorage.setItem('dark',S.dark?'1':'0');document.documentElement.setAttribute('data-theme',S.dark?'dark':'');}
function toggleTicker(){S.ticker=document.getElementById('tog-tk').checked;localStorage.setItem('ticker',S.ticker?'1':'0');document.getElementById('ticker').style.display=S.ticker?'flex':'none';}
function toggleNotif(){if(document.getElementById('tog-nt').checked&&'Notification'in window)Notification.requestPermission();}

function renderChips(){
  document.getElementById('tChips').innerHTML=S.prefs.teams.map(t=>
    `<div class="t-chip">${t} <span class="tc-x" onclick="rmTeam('${escH(t)}')">×</span></div>`).join('');
}
function filterTeams(){
  const q=document.getElementById('tSrch').value.toLowerCase().trim();
  const res=document.getElementById('tRes');
  if(!q||q.length<2){res.innerHTML='';return;}
  const all=Object.keys(NICKNAMES).concat(Object.values(NICKNAMES)).concat(Object.keys(TEAMS).map(t=>t.charAt(0).toUpperCase()+t.slice(1)));
  const matches=[...new Set(all.filter(t=>t.toLowerCase().includes(q)&&!S.prefs.teams.includes(t)))].slice(0,10);
  res.innerHTML=matches.map(t=>`<div class="s-row" style="cursor:pointer;margin-bottom:4px;" onclick="addTeam('${escH(t)}')"><label style="cursor:pointer;">${t}</label></div>`).join('');
}
function addTeam(t){if(!S.prefs.teams.includes(t)){S.prefs.teams.push(t);renderChips();localStorage.setItem('p_tms',JSON.stringify(S.prefs.teams));}document.getElementById('tSrch').value='';document.getElementById('tRes').innerHTML='';}
function rmTeam(t){S.prefs.teams=S.prefs.teams.filter(x=>x!==t);renderChips();localStorage.setItem('p_tms',JSON.stringify(S.prefs.teams));}

// ============================================================================
// UTILITIES
// ============================================================================
function escH(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function clearSrch(){S.search='';document.getElementById('srch').value='';document.getElementById('srchX').style.display='none';render();}

window.onload = boot;
