exports.browser = [
    [ new RegExp("^(Opera)/(\\d+)\\.(\\d+) \\(Nintendo Wii"), "Wii", 0, 0, 0 ]
  , [ new RegExp("(SeaMonkey|Camino)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Pale[Mm]oon)/(\\d+)\\.(\\d+)\\.?(\\d+)?"), "Pale Moon (Firefox Variant)", 0, 0, 0 ]
  , [ new RegExp("(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)"), "Firefox Mobile", 0, 0, 0 ]
  , [ new RegExp("(Fennec)/(\\d+)\\.(\\d+)(pre)"), "Firefox Mobile", 0, 0, 0 ]
  , [ new RegExp("(Fennec)/(\\d+)\\.(\\d+)"), "Firefox Mobile", 0, 0, 0 ]
  , [ new RegExp("Mobile.*(Firefox)/(\\d+)\\.(\\d+)"), "Firefox Mobile", 0, 0, 0 ]
  , [ new RegExp("(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?)"), "Firefox ($1)", 0, 0, 0 ]
  , [ new RegExp("(Firefox)/(\\d+)\\.(\\d+)(a\\d+[a-z]*)"), "Firefox Alpha", 0, 0, 0 ]
  , [ new RegExp("(Firefox)/(\\d+)\\.(\\d+)(b\\d+[a-z]*)"), "Firefox Beta", 0, 0, 0 ]
  , [ new RegExp("(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(a\\d+[a-z]*)"), "Firefox Alpha", 0, 0, 0 ]
  , [ new RegExp("(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(b\\d+[a-z]*)"), "Firefox Beta", 0, 0, 0 ]
  , [ new RegExp("(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?"), "Firefox ($1)", 0, 0, 0 ]
  , [ new RegExp("(Firefox).*Tablet browser (\\d+)\\.(\\d+)\\.(\\d+)"), "MicroB", 0, 0, 0 ]
  , [ new RegExp("(MozillaDeveloperPreview)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?"), 0, 0, 0, 0 ]
  , [ new RegExp("(Flock)/(\\d+)\\.(\\d+)(b\\d+?)"), 0, 0, 0, 0 ]
  , [ new RegExp("(RockMelt)/(\\d+)\\.(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Navigator)/(\\d+)\\.(\\d+)\\.(\\d+)"), "Netscape", 0, 0, 0 ]
  , [ new RegExp("(Navigator)/(\\d+)\\.(\\d+)([ab]\\d+)"), "Netscape", 0, 0, 0 ]
  , [ new RegExp("(Netscape6)/(\\d+)\\.(\\d+)\\.(\\d+)"), "Netscape", 0, 0, 0 ]
  , [ new RegExp("(MyIBrow)/(\\d+)\\.(\\d+)"), "My Internet Browser", 0, 0, 0 ]
  , [ new RegExp("(Opera Tablet).*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?"), 0, 0, 0, 0 ]
  , [ new RegExp("(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)"), "Opera Mobile", 0, 0, 0 ]
  , [ new RegExp("Opera Mobi"), "Opera Mobile", 0, 0, 0 ]
  , [ new RegExp("(Opera Mini)/(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Opera Mini)/att/(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?"), 0, 0, 0, 0 ]
  , [ new RegExp("(webOSBrowser)/(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(webOS)/(\\d+)\\.(\\d+)"), "webOSBrowser", 0, 0, 0 ]
  , [ new RegExp("(wOSBrowser).+TouchPad/(\\d+)\\.(\\d+)"), "webOS TouchPad", 0, 0, 0 ]
  , [ new RegExp("(luakit)"), "LuaKit", 0, 0, 0 ]
  , [ new RegExp("(Lightning)/(\\d+)\\.(\\d+)([ab]?\\d+[a-z]*)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?) \\(Swiftfox\\)"), "Swiftfox", 0, 0, 0 ]
  , [ new RegExp("(Firefox)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)? \\(Swiftfox\\)"), "Swiftfox", 0, 0, 0 ]
  , [ new RegExp("(rekonq)/(\\d+)\\.(\\d+) Safari"), "Rekonq", 0, 0, 0 ]
  , [ new RegExp("rekonq"), "Rekonq", 0, 0, 0 ]
  , [ new RegExp("(conkeror|Conkeror)/(\\d+)\\.(\\d+)\\.?(\\d+)?"), "Conkeror", 0, 0, 0 ]
  , [ new RegExp("(konqueror)/(\\d+)\\.(\\d+)\\.(\\d+)"), "Konqueror", 0, 0, 0 ]
  , [ new RegExp("(WeTab)-Browser"), 0, 0, 0, 0 ]
  , [ new RegExp("(Comodo_Dragon)/(\\d+)\\.(\\d+)\\.(\\d+)"), "Comodo Dragon", 0, 0, 0 ]
  , [ new RegExp("(YottaaMonitor|BrowserMob|HttpMonitor|YandexBot|Slurp|BingPreview|PagePeeker|ThumbShotsBot|WebThumb|URL2PNG|ZooShot|GomezA|Catchpoint bot|Willow Internet Crawler|Google SketchUp|Read%20Later)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Symphony) (\\d+).(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Minimo)"), 0, 0, 0, 0 ]
  , [ new RegExp("(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)"), "Chrome Mobile", 0, 0, 0 ]
  , [ new RegExp("(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)"), "Chrome Mobile iOS", 0, 0, 0 ]
  , [ new RegExp("(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile"), "Chrome Mobile", 0, 0, 0 ]
  , [ new RegExp("(chromeframe)/(\\d+)\\.(\\d+)\\.(\\d+)"), "Chrome Frame", 0, 0, 0 ]
  , [ new RegExp("(UC Browser)(\\d+)\\.(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(SLP Browser)/(\\d+)\\.(\\d+)"), "Tizen Browser", 0, 0, 0 ]
  , [ new RegExp("(Epiphany)/(\\d+)\\.(\\d+).(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(SE 2\\.X) MetaSr (\\d+)\\.(\\d+)"), "Sogou Explorer", 0, 0, 0 ]
  , [ new RegExp("(FlyFlow)/(\\d+)\\.(\\d+)"), "Baidu Explorer", 0, 0, 0 ]
  , [ new RegExp("(Pingdom.com_bot_version_)(\\d+)\\.(\\d+)"), "PingdomBot", 0, 0, 0 ]
  , [ new RegExp("(facebookexternalhit)/(\\d+)\\.(\\d+)"), "FacebookBot", 0, 0, 0 ]
  , [ new RegExp("(Twitterbot)/(\\d+)\\.(\\d+)"), "TwitterBot", 0, 0, 0 ]
  , [ new RegExp("(PyAMF)/(\\d+)\\.(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(AdobeAIR|Chromium|FireWeb|Jasmine|ANTGalio|Midori|Fresco|Lobo|PaleMoon|Maxthon|Lynx|OmniWeb|Dillo|Camino|Demeter|Fluid|Fennec|Shiira|Sunrise|Chrome|Flock|Netscape|Lunascape|WebPilot|Vodafone|NetFront|Netfront|Konqueror|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|Opera Mini|iCab|NetNewsWire|ThunderBrowse|Iris|UP\\.Browser|Bunjaloo|Google Earth|Raven for Mac)/(\\d+)\\.(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Bolt|Jasmine|IceCat|Skyfire|Midori|Maxthon|Lynx|Arora|IBrowse|Dillo|Camino|Shiira|Fennec|Phoenix|Chrome|Flock|Netscape|Lunascape|Epiphany|WebPilot|Opera Mini|Opera|Vodafone|NetFront|Netfront|Konqueror|Googlebot|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|iCab|NetNewsWire|Space Bison|Stainless|Orca|Dolfin|BOLT|Minimo|Tizen Browser|Polaris|Abrowser)/(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(iRider|Crazy Browser|SkipStone|iCab|Lunascape|Sleipnir|Maemo Browser) (\\d+)\\.(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(iCab|Lunascape|Opera|Android|Jasmine|Polaris|BREW) (\\d+)\\.(\\d+)\\.?(\\d+)?"), 0, 0, 0, 0 ]
  , [ new RegExp("(Kindle)/(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Android) Donut"), 0, "1", "2", 0 ]
  , [ new RegExp("(Android) Eclair"), 0, "2", "1", 0 ]
  , [ new RegExp("(Android) Froyo"), 0, "2", "2", 0 ]
  , [ new RegExp("(Android) Gingerbread"), 0, "2", "3", 0 ]
  , [ new RegExp("(Android) Honeycomb"), 0, "3", 0, 0 ]
  , [ new RegExp("(IEMobile)[ /](\\d+)\\.(\\d+)"), "IE Mobile", 0, 0, 0 ]
  , [ new RegExp("(MSIE) (\\d+)\\.(\\d+).*XBLWP7"), "IE Large Screen", 0, 0, 0 ]
  , [ new RegExp("(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*)?"), 0, 0, 0, 0 ]
  , [ new RegExp("(Obigo)InternetBrowser"), 0, 0, 0, 0 ]
  , [ new RegExp("(Obigo)\\-Browser"), 0, 0, 0, 0 ]
  , [ new RegExp("(Obigo|OBIGO)[^\\d]*(\\d+)(?:.(\\d+))?"), 0, 0, 0, 0 ]
  , [ new RegExp("(MAXTHON|Maxthon) (\\d+)\\.(\\d+)"), "Maxthon", 0, 0, 0 ]
  , [ new RegExp("(Maxthon|MyIE2|Uzbl|Shiira)"), 0, "0", 0, 0 ]
  , [ new RegExp("(PLAYSTATION) (\\d+)"), "PlayStation", 0, 0, 0 ]
  , [ new RegExp("(PlayStation Portable)[^\\d]+(\\d+).(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(BrowseX) \\((\\d+)\\.(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(POLARIS)/(\\d+)\\.(\\d+)"), "Polaris", 0, 0, 0 ]
  , [ new RegExp("(Embider)/(\\d+)\\.(\\d+)"), "Polaris", 0, 0, 0 ]
  , [ new RegExp("(BonEcho)/(\\d+)\\.(\\d+)\\.(\\d+)"), "Bon Echo", 0, 0, 0 ]
  , [ new RegExp("(iPod).+Version/(\\d+)\\.(\\d+)\\.(\\d+)"), "Mobile Safari", 0, 0, 0 ]
  , [ new RegExp("(iPod).*Version/(\\d+)\\.(\\d+)"), "Mobile Safari", 0, 0, 0 ]
  , [ new RegExp("(iPhone).*Version/(\\d+)\\.(\\d+)\\.(\\d+)"), "Mobile Safari", 0, 0, 0 ]
  , [ new RegExp("(iPhone).*Version/(\\d+)\\.(\\d+)"), "Mobile Safari", 0, 0, 0 ]
  , [ new RegExp("(iPad).*Version/(\\d+)\\.(\\d+)\\.(\\d+)"), "Mobile Safari", 0, 0, 0 ]
  , [ new RegExp("(iPad).*Version/(\\d+)\\.(\\d+)"), "Mobile Safari", 0, 0, 0 ]
  , [ new RegExp("(iPod|iPhone|iPad);.*CPU.*OS (\\d+)(?:_\\d+)?_(\\d+).*Mobile"), "Mobile Safari", 0, 0, 0 ]
  , [ new RegExp("(iPod|iPhone|iPad)"), "Mobile Safari", 0, 0, 0 ]
  , [ new RegExp("(AvantGo) (\\d+).(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Avant)"), 0, "1", 0, 0 ]
  , [ new RegExp("(QtCarBrowser)"), 0, "1", 0, 0 ]
  , [ new RegExp("^(Nokia)"), "Nokia Services (WAP) Browser", 0, 0, 0 ]
  , [ new RegExp("(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(NokiaBrowser)/(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(BrowserNG)/(\\d+)\\.(\\d+).(\\d+)"), "NokiaBrowser", 0, 0, 0 ]
  , [ new RegExp("(Series60)/5\\.0"), "NokiaBrowser", "7", "0", 0 ]
  , [ new RegExp("(Series60)/(\\d+)\\.(\\d+)"), "Nokia OSS Browser", 0, 0, 0 ]
  , [ new RegExp("(S40OviBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)"), "Nokia Series 40 Ovi Browser", 0, 0, 0 ]
  , [ new RegExp("(Nokia)[EN]?(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(BB10);"), "Blackberry WebKit", 0, 0, 0 ]
  , [ new RegExp("(PlayBook).+RIM Tablet OS (\\d+)\\.(\\d+)\\.(\\d+)"), "Blackberry WebKit", 0, 0, 0 ]
  , [ new RegExp("(Black[bB]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)"), "Blackberry WebKit", 0, 0, 0 ]
  , [ new RegExp("(Black[bB]erry)\\s?(\\d+)"), "Blackberry", 0, 0, 0 ]
  , [ new RegExp("(OmniWeb)/v(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Blazer)/(\\d+)\\.(\\d+)"), "Palm Blazer", 0, 0, 0 ]
  , [ new RegExp("(Pre)/(\\d+)\\.(\\d+)"), "Palm Pre", 0, 0, 0 ]
  , [ new RegExp("(Links) \\((\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(QtWeb) Internet Browser/(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?"), "Amazon Silk", 0, 0, 0 ]
  , [ new RegExp("(AppleWebKit)/(\\d+)\\.?(\\d+)?\\+ .* Safari"), "WebKit Nightly", 0, 0, 0 ]
  , [ new RegExp("(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*Safari/"), "Safari", 0, 0, 0 ]
  , [ new RegExp("(Safari)/\\d+"), 0, 0, 0, 0 ]
  , [ new RegExp("(OLPC)/Update(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(OLPC)/Update()\\.(\\d+)"), 0, "0", 0, 0 ]
  , [ new RegExp("(SEMC\\-Browser)/(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Teleca)"), "Teleca Browser", 0, 0, 0 ]
  , [ new RegExp("(MSIE) (\\d+)\\.(\\d+)"), "IE", 0, 0, 0 ]
  , [ new RegExp("(Nintendo 3DS).* Version/(\\d+)\\.(\\d+)(?:\\.(\\w+))"), 0, 0, 0, 0 ]
  , [ new RegExp("(python-requests)/(\\d+)\\.(\\d+)"), "Python Requests", 0, 0, 0 ]
  , [ new RegExp("(Thunderbird)/(\\d+)\\.(\\d+)\\.?(\\d+)?"), 0, 0, 0, 0 ]
  , [ new RegExp("(Wget)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)"), 0, 0, 0, 0 ]
  , [ new RegExp("(curl)/(\\d+)\\.(\\d+)\\.(\\d+)"), "cURL", 0, 0, 0 ]
];

exports.device = [
    [ new RegExp("HTC ([A-Z][a-z0-9]+) Build"), "HTC $1", 0, 0, 0 ]
  , [ new RegExp("HTC ([A-Z][a-z0-9 ]+) \\d+\\.\\d+\\.\\d+\\.\\d+"), "HTC $1", 0, 0, 0 ]
  , [ new RegExp("HTC_Touch_([A-Za-z0-9]+)"), "HTC Touch ($1)", 0, 0, 0 ]
  , [ new RegExp("USCCHTC(\\d+)"), "HTC $1 (US Cellular)", 0, 0, 0 ]
  , [ new RegExp("Sprint APA(9292)"), "HTC $1 (Sprint)", 0, 0, 0 ]
  , [ new RegExp("HTC ([A-Za-z0-9]+ [A-Z])"), "HTC $1", 0, 0, 0 ]
  , [ new RegExp("HTC-([A-Za-z0-9]+)"), "HTC $1", 0, 0, 0 ]
  , [ new RegExp("HTC_([A-Za-z0-9]+)"), "HTC $1", 0, 0, 0 ]
  , [ new RegExp("HTC ([A-Za-z0-9]+)"), "HTC $1", 0, 0, 0 ]
  , [ new RegExp("(ADR[A-Za-z0-9]+)"), "HTC $1", 0, 0, 0 ]
  , [ new RegExp("(HTC)"), 0, 0, 0, 0 ]
  , [ new RegExp("(QtCarBrowser)"), "Tesla Model S", 0, 0, 0 ]
  , [ new RegExp("(SamsungSGHi560)"), "Samsung SGHi560", 0, 0, 0 ]
  , [ new RegExp("SonyEricsson([A-Za-z0-9]+)/"), "Ericsson $1", 0, 0, 0 ]
  , [ new RegExp("(KFOT Build)"), "Kindle Fire", 0, 0, 0 ]
  , [ new RegExp("(KFTT Build)"), "Kindle Fire HD", 0, 0, 0 ]
  , [ new RegExp("(KFJWI Build)"), "Kindle Fire HD 8.9\" WiFi", 0, 0, 0 ]
  , [ new RegExp("(KFJWA Build)"), "Kindle Fire HD 8.9\" 4G", 0, 0, 0 ]
  , [ new RegExp("(Kindle Fire)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Kindle)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?"), "Kindle Fire", 0, 0, 0 ]
  , [ new RegExp("Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; WOWMobile (.+) Build"), 0, 0, 0, 0 ]
  , [ new RegExp("Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"), 0, 0, 0, 0 ]
  , [ new RegExp("Android[\\- ][\\d]+\\.[\\d]+\\-update1\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"), 0, 0, 0, 0 ]
  , [ new RegExp("Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"), 0, 0, 0, 0 ]
  , [ new RegExp("Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; (.+) Build"), 0, 0, 0, 0 ]
  , [ new RegExp("NokiaN([0-9]+)"), "Nokia N$1", 0, 0, 0 ]
  , [ new RegExp("Nokia([A-Za-z0-9\\v-]+)"), "Nokia $1", 0, 0, 0 ]
  , [ new RegExp("NOKIA ([A-Za-z0-9\\-]+)"), "Nokia $1", 0, 0, 0 ]
  , [ new RegExp("Nokia ([A-Za-z0-9\\-]+)"), "Nokia $1", 0, 0, 0 ]
  , [ new RegExp("Lumia ([A-Za-z0-9\\-]+)"), "Lumia $1", 0, 0, 0 ]
  , [ new RegExp("Symbian"), "Nokia", 0, 0, 0 ]
  , [ new RegExp("BB10; ([A-Za-z0-9\\- ]+)\\)"), "BlackBerry $1", 0, 0, 0 ]
  , [ new RegExp("(PlayBook).+RIM Tablet OS"), "Blackberry Playbook", 0, 0, 0 ]
  , [ new RegExp("(Black[Bb]erry [0-9]+);"), 0, 0, 0, 0 ]
  , [ new RegExp("Black[Bb]erry([0-9]+)"), "BlackBerry $1", 0, 0, 0 ]
  , [ new RegExp("(Pre)/(\\d+)\\.(\\d+)"), "Palm Pre", 0, 0, 0 ]
  , [ new RegExp("(Pixi)/(\\d+)\\.(\\d+)"), "Palm Pixi", 0, 0, 0 ]
  , [ new RegExp("(Touchpad)/(\\d+)\\.(\\d+)"), "HP Touchpad", 0, 0, 0 ]
  , [ new RegExp("HPiPAQ([A-Za-z0-9]+)/(\\d+).(\\d+)"), "HP iPAQ $1", 0, 0, 0 ]
  , [ new RegExp("Palm([A-Za-z0-9]+)"), "Palm $1", 0, 0, 0 ]
  , [ new RegExp("Treo([A-Za-z0-9]+)"), "Palm Treo $1", 0, 0, 0 ]
  , [ new RegExp("webOS.*(P160UNA)/(\\d+).(\\d+)"), "HP Veer", 0, 0, 0 ]
  , [ new RegExp("(PlayStation Portable)"), 0, 0, 0, 0 ]
  , [ new RegExp("(PlayStation Vita)"), 0, 0, 0, 0 ]
  , [ new RegExp("(AppleTV)"), "AppleTV", 0, 0, 0 ]
  , [ new RegExp("(iPad) Simulator;"), 0, 0, 0, 0 ]
  , [ new RegExp("(iPad);"), 0, 0, 0, 0 ]
  , [ new RegExp("(iPod);"), 0, 0, 0, 0 ]
  , [ new RegExp("(iPhone) Simulator;"), 0, 0, 0, 0 ]
  , [ new RegExp("(iPhone);"), 0, 0, 0, 0 ]
  , [ new RegExp("acer_([A-Za-z0-9]+)_"), "Acer $1", 0, 0, 0 ]
  , [ new RegExp("acer_([A-Za-z0-9]+)_"), "Acer $1", 0, 0, 0 ]
  , [ new RegExp("Amoi\\-([A-Za-z0-9]+)"), "Amoi $1", 0, 0, 0 ]
  , [ new RegExp("AMOI\\-([A-Za-z0-9]+)"), "Amoi $1", 0, 0, 0 ]
  , [ new RegExp("Asus\\-([A-Za-z0-9]+)"), "Asus $1", 0, 0, 0 ]
  , [ new RegExp("ASUS\\-([A-Za-z0-9]+)"), "Asus $1", 0, 0, 0 ]
  , [ new RegExp("BIRD\\-([A-Za-z0-9]+)"), "Bird $1", 0, 0, 0 ]
  , [ new RegExp("BIRD\\.([A-Za-z0-9]+)"), "Bird $1", 0, 0, 0 ]
  , [ new RegExp("BIRD ([A-Za-z0-9]+)"), "Bird $1", 0, 0, 0 ]
  , [ new RegExp("Dell ([A-Za-z0-9]+)"), "Dell $1", 0, 0, 0 ]
  , [ new RegExp("DoCoMo/2\\.0 ([A-Za-z0-9]+)"), "DoCoMo $1", 0, 0, 0 ]
  , [ new RegExp("([A-Za-z0-9]+)_W\\;FOMA"), "DoCoMo $1", 0, 0, 0 ]
  , [ new RegExp("([A-Za-z0-9]+)\\;FOMA"), "DoCoMo $1", 0, 0, 0 ]
  , [ new RegExp("vodafone([A-Za-z0-9]+)"), "Huawei Vodafone $1", 0, 0, 0 ]
  , [ new RegExp("i\\-mate ([A-Za-z0-9]+)"), "i-mate $1", 0, 0, 0 ]
  , [ new RegExp("Kyocera\\-([A-Za-z0-9]+)"), "Kyocera $1", 0, 0, 0 ]
  , [ new RegExp("KWC\\-([A-Za-z0-9]+)"), "Kyocera $1", 0, 0, 0 ]
  , [ new RegExp("Lenovo\\-([A-Za-z0-9]+)"), "Lenovo $1", 0, 0, 0 ]
  , [ new RegExp("Lenovo_([A-Za-z0-9]+)"), "Lenovo $1", 0, 0, 0 ]
  , [ new RegExp("LG/([A-Za-z0-9]+)"), "LG $1", 0, 0, 0 ]
  , [ new RegExp("LG-LG([A-Za-z0-9]+)"), "LG $1", 0, 0, 0 ]
  , [ new RegExp("LGE-LG([A-Za-z0-9]+)"), "LG $1", 0, 0, 0 ]
  , [ new RegExp("LGE VX([A-Za-z0-9]+)"), "LG $1", 0, 0, 0 ]
  , [ new RegExp("LG ([A-Za-z0-9]+)"), "LG $1", 0, 0, 0 ]
  , [ new RegExp("LGE LG\\-AX([A-Za-z0-9]+)"), "LG $1", 0, 0, 0 ]
  , [ new RegExp("LG\\-([A-Za-z0-9]+)"), "LG $1", 0, 0, 0 ]
  , [ new RegExp("LGE\\-([A-Za-z0-9]+)"), "LG $1", 0, 0, 0 ]
  , [ new RegExp("LG([A-Za-z0-9]+)"), "LG $1", 0, 0, 0 ]
  , [ new RegExp("(KIN)\\.One (\\d+)\\.(\\d+)"), "Microsoft $1", 0, 0, 0 ]
  , [ new RegExp("(KIN)\\.Two (\\d+)\\.(\\d+)"), "Microsoft $1", 0, 0, 0 ]
  , [ new RegExp("(Motorola)\\-([A-Za-z0-9]+)"), 0, 0, 0, 0 ]
  , [ new RegExp("MOTO\\-([A-Za-z0-9]+)"), "Motorola $1", 0, 0, 0 ]
  , [ new RegExp("MOT\\-([A-Za-z0-9]+)"), "Motorola $1", 0, 0, 0 ]
  , [ new RegExp("Philips([A-Za-z0-9]+)"), "Philips $1", 0, 0, 0 ]
  , [ new RegExp("Philips ([A-Za-z0-9]+)"), "Philips $1", 0, 0, 0 ]
  , [ new RegExp("SAMSUNG-([A-Za-z0-9\\-]+)"), "Samsung $1", 0, 0, 0 ]
  , [ new RegExp("SAMSUNG\\; ([A-Za-z0-9\\-]+)"), "Samsung $1", 0, 0, 0 ]
  , [ new RegExp("Softbank/1\\.0/([A-Za-z0-9]+)"), "Softbank $1", 0, 0, 0 ]
  , [ new RegExp("Softbank/2\\.0/([A-Za-z0-9]+)"), "Softbank $1", 0, 0, 0 ]
  , [ new RegExp("(PlayStation3 PPC)"), "Playstation 3", 0, 0, 0 ]
  , [ new RegExp("(hiptop|avantgo|plucker|xiino|blazer|elaine|up.browser|up.link|mmp|smartphone|midp|wap|vodafone|o2|pocket|mobile|pda)"), "Generic Smartphone", 0, 0, 0 ]
  , [ new RegExp("^(1207|3gso|4thp|501i|502i|503i|504i|505i|506i|6310|6590|770s|802s|a wa|acer|acs\\-|airn|alav|asus|attw|au\\-m|aur |aus |abac|acoo|aiko|alco|alca|amoi|anex|anny|anyw|aptu|arch|argo|bell|bird|bw\\-n|bw\\-u|beck|benq|bilb|blac|c55/|cdm\\-|chtm|capi|comp|cond|craw|dall|dbte|dc\\-s|dica|ds\\-d|ds12|dait|devi|dmob|doco|dopo|el49|erk0|esl8|ez40|ez60|ez70|ezos|ezze|elai|emul|eric|ezwa|fake|fly\\-|fly_|g\\-mo|g1 u|g560|gf\\-5|grun|gene|go.w|good|grad|hcit|hd\\-m|hd\\-p|hd\\-t|hei\\-|hp i|hpip|hs\\-c|htc |htc\\-|htca|htcg)"), "Generic Feature Phone", 0, 0, 0 ]
  , [ new RegExp("^(htcp|htcs|htct|htc_|haie|hita|huaw|hutc|i\\-20|i\\-go|i\\-ma|i230|iac|iac\\-|iac/|ig01|im1k|inno|iris|jata|java|kddi|kgt|kgt/|kpt |kwc\\-|klon|lexi|lg g|lg\\-a|lg\\-b|lg\\-c|lg\\-d|lg\\-f|lg\\-g|lg\\-k|lg\\-l|lg\\-m|lg\\-o|lg\\-p|lg\\-s|lg\\-t|lg\\-u|lg\\-w|lg/k|lg/l|lg/u|lg50|lg54|lge\\-|lge/|lynx|leno|m1\\-w|m3ga|m50/|maui|mc01|mc21|mcca|medi|meri|mio8|mioa|mo01|mo02|mode|modo|mot |mot\\-|mt50|mtp1|mtv |mate|maxo|merc|mits|mobi|motv|mozz|n100|n101|n102|n202|n203|n300|n302|n500|n502|n505|n700|n701|n710|nec\\-|nem\\-|newg|neon)"), "Generic Feature Phone", 0, 0, 0 ]
  , [ new RegExp("^(netf|noki|nzph|o2 x|o2\\-x|opwv|owg1|opti|oran|ot\\-s|p800|pand|pg\\-1|pg\\-2|pg\\-3|pg\\-6|pg\\-8|pg\\-c|pg13|phil|pn\\-2|pt\\-g|palm|pana|pire|pock|pose|psio|qa\\-a|qc\\-2|qc\\-3|qc\\-5|qc\\-7|qc07|qc12|qc21|qc32|qc60|qci\\-|qwap|qtek|r380|r600|raks|rim9|rove|s55/|sage|sams|sc01|sch\\-|scp\\-|sdk/|se47|sec\\-|sec0|sec1|semc|sgh\\-|shar|sie\\-|sk\\-0|sl45|slid|smb3|smt5|sp01|sph\\-|spv |spv\\-|sy01|samm|sany|sava|scoo|send|siem|smar|smit|soft|sony|t\\-mo|t218|t250|t600|t610|t618|tcl\\-|tdg\\-|telm|tim\\-|ts70|tsm\\-|tsm3|tsm5|tx\\-9|tagt)"), "Generic Feature Phone", 0, 0, 0 ]
  , [ new RegExp("^(talk|teli|topl|tosh|up.b|upg1|utst|v400|v750|veri|vk\\-v|vk40|vk50|vk52|vk53|vm40|vx98|virg|vite|voda|vulc|w3c |w3c\\-|wapj|wapp|wapu|wapm|wig |wapi|wapr|wapv|wapy|wapa|waps|wapt|winc|winw|wonu|x700|xda2|xdag|yas\\-|your|zte\\-|zeto|aste|audi|avan|blaz|brew|brvw|bumb|ccwa|cell|cldc|cmd\\-|dang|eml2|fetc|hipt|http|ibro|idea|ikom|ipaq|jbro|jemu|jigs|keji|kyoc|kyok|libw|m\\-cr|midp|mmef|moto|mwbp|mywa|newt|nok6|o2im|pant|pdxg|play|pluc|port|prox|rozo|sama|seri|smal|symb|treo|upsi|vx52|vx53|vx60|vx61|vx70|vx80|vx81|vx83|vx85|wap\\-|webc|whit|wmlb|xda\\-|xda_)"), "Generic Feature Phone", 0, 0, 0 ]
  , [ new RegExp("(bot|borg|google(^tv)|yahoo|slurp|msnbot|msrbot|openbot|archiver|netresearch|lycos|scooter|altavista|teoma|gigabot|baiduspider|blitzbot|oegp|charlotte|furlbot|http%20client|polybot|htdig|ichiro|mogimogi|larbin|pompos|scrubby|searchsight|seekbot|semanticdiscovery|silk|snappy|speedy|spider|voila|vortex|voyager|zao|zeal|fast\\-webcrawler|converacrawler|dataparksearch|findlinks)"), "Spider", 0, 0, 0 ]
];

exports.os = [
    [ new RegExp("(Android) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"), 0, 0, 0, 0 ]
  , [ new RegExp("(Android)\\-(\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"), 0, 0, 0, 0 ]
  , [ new RegExp("(Android) Donut"), 0, "1", "2", 0 ]
  , [ new RegExp("(Android) Eclair"), 0, "2", "1", 0 ]
  , [ new RegExp("(Android) Froyo"), 0, "2", "2", 0 ]
  , [ new RegExp("(Android) Gingerbread"), 0, "2", "3", 0 ]
  , [ new RegExp("(Android) Honeycomb"), 0, "3", 0, 0 ]
  , [ new RegExp("(Silk-Accelerated=[a-z]{4,5})"), "Android", 0, 0, 0 ]
  , [ new RegExp("(Windows Phone 6\\.5)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Windows (?:NT 5\\.2|NT 5\\.1))"), "Windows XP", 0, 0, 0 ]
  , [ new RegExp("(XBLWP7)"), "Windows Phone OS", 0, 0, 0 ]
  , [ new RegExp("(Windows NT 6\\.1)"), "Windows 7", 0, 0, 0 ]
  , [ new RegExp("(Windows NT 6\\.0)"), "Windows Vista", 0, 0, 0 ]
  , [ new RegExp("(Windows 98|Windows XP|Windows ME|Windows 95|Windows CE|Windows 7|Windows NT 4\\.0|Windows Vista|Windows 2000)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Windows NT 6\\.2; ARM;)"), "Windows RT", 0, 0, 0 ]
  , [ new RegExp("(Windows NT 6\\.2)"), "Windows 8", 0, 0, 0 ]
  , [ new RegExp("(Windows NT 5\\.0)"), "Windows 2000", 0, 0, 0 ]
  , [ new RegExp("(Windows Phone OS) (\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Windows ?Mobile)"), "Windows Mobile", 0, 0, 0 ]
  , [ new RegExp("(WinNT4.0)"), "Windows NT 4.0", 0, 0, 0 ]
  , [ new RegExp("(Win98)"), "Windows 98", 0, 0, 0 ]
  , [ new RegExp("(Tizen)/(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Mac OS X) (\\d+)[_.](\\d+)(?:[_.](\\d+))?"), 0, 0, 0, 0 ]
  , [ new RegExp("(?:PPC|Intel) (Mac OS X)"), 0, 0, 0, 0 ]
  , [ new RegExp("(CPU OS|iPhone OS) (\\d+)_(\\d+)(?:_(\\d+))?"), "iOS", 0, 0, 0 ]
  , [ new RegExp("(iPhone|iPad|iPod); Opera"), "iOS", 0, 0, 0 ]
  , [ new RegExp("(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)"), "iOS", 0, 0, 0 ]
  , [ new RegExp("(AppleTV)/(\\d+)\\.(\\d+)"), "ATV OS X", "$1", "$2", 0 ]
  , [ new RegExp("(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+))?"), "Chrome OS", 0, 0, 0 ]
  , [ new RegExp("(Debian)-(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?"), 0, 0, 0, 0 ]
  , [ new RegExp("(Linux Mint)(?:/(\\d+))?"), 0, 0, 0, 0 ]
  , [ new RegExp("(Mandriva)(?: Linux)?/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?"), 0, 0, 0, 0 ]
  , [ new RegExp("(Symbian[Oo][Ss])/(\\d+)\\.(\\d+)"), "Symbian OS", 0, 0, 0 ]
  , [ new RegExp("(Symbian/3).+NokiaBrowser/7\\.3"), "Symbian^3 Anna", 0, 0, 0 ]
  , [ new RegExp("(Symbian/3).+NokiaBrowser/7\\.4"), "Symbian^3 Belle", 0, 0, 0 ]
  , [ new RegExp("(Symbian/3)"), "Symbian^3", 0, 0, 0 ]
  , [ new RegExp("(Series 60|SymbOS|S60)"), "Symbian OS", 0, 0, 0 ]
  , [ new RegExp("(MeeGo)"), 0, 0, 0, 0 ]
  , [ new RegExp("Symbian [Oo][Ss]"), "Symbian OS", 0, 0, 0 ]
  , [ new RegExp("(BB10);.+Version/(\\d+)\\.(\\d+)\\.(\\d+)"), "BlackBerry OS", 0, 0, 0 ]
  , [ new RegExp("(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?"), "BlackBerry OS", 0, 0, 0 ]
  , [ new RegExp("(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?"), "BlackBerry OS", 0, 0, 0 ]
  , [ new RegExp("(RIM Tablet OS) (\\d+)\\.(\\d+)\\.(\\d+)"), "BlackBerry Tablet OS", 0, 0, 0 ]
  , [ new RegExp("(Play[Bb]ook)"), "BlackBerry Tablet OS", 0, 0, 0 ]
  , [ new RegExp("(Black[Bb]erry)"), "Blackberry OS", 0, 0, 0 ]
  , [ new RegExp("(GoogleTV) (\\d+)\\.(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(GoogleTV)\\/\\d+"), 0, 0, 0, 0 ]
  , [ new RegExp("(webOS|hpwOS)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?"), "webOS", 0, 0, 0 ]
  , [ new RegExp("(SUSE|Fedora|Red Hat|PCLinuxOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(SUSE|Fedora|Red Hat|Puppy|PCLinuxOS|CentOS)/(\\d+)\\.(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Ubuntu|Kindle|Bada|Lubuntu|BackTrack|Red Hat|Slackware)/(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(PlayStation Vita) (\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Windows|OpenBSD|FreeBSD|NetBSD|Ubuntu|Kubuntu|Android|Arch Linux|CentOS|WeTab|Slackware)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Linux)/(\\d+)\\.(\\d+)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Linux|BSD)"), 0, 0, 0, 0 ]
  , [ new RegExp("(Red Hat)"), 0, 0, 0, 0 ]
];