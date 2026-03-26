
const APP_VERSION="1.699"
const DONATION_ERC20_ADDRESS="0x1E7333A8a912cA3a39Fe3699405AF523Ed2c2058"
const DONATION_PAYPAL_EMAIL="mellok@ukr.net"
const LANGUAGE_KEY="uiLanguageV1"
const SUPPORTED_LANGUAGES=new Set(["uk","en"])
const I18N={
 uk:{
  appTitle:"Weekly Trade Tracker",
  sideMenuTitle:"Weekly Trade Tracker v{version}",
  windows:"Вікна",
  loadData:"ЗАВАНТАЖИТИ ДАНІ",
  saveData:"ЗБЕРЕГТИ ДАНІ",
  googleSignIn:"LOGIN",
  googleSignOut:"LOGOUT",
  cloudSyncNow:"SYNC NOW",
  cloudNotConfigured:"Cloud не налаштовано",
  cloudSignedOut:"Не виконано вхід",
  cloudSignedIn:"Вхід: {email}",
  cloudSyncing:"Синхронізація...",
  cloudSynced:"Хмару оновлено",
  cloudSyncFailed:"Помилка синхронізації",
  cloudLoaded:"Дані завантажено з хмари",
  cloudNoData:"У хмарі ще немає даних",
  cloudAuthFailed:"Помилка входу через Google",
  menu:"МЕНЮ",
  languageAria:"Мова",
  languageUkrainian:"УКР",
  languageEnglish:"ENG",
  lock:"Lock",
  pinWindows:"Pin windows",
  resetTrades:"RESET ALL",
  lockTitle:"Пароль",
  unlock:"Розблокувати",
  showPassword:"Показати пароль",
  hidePassword:"Сховати пароль",
  confirmTitle:"Підтвердження",
  confirmResetAll:"Ви точно хочете скинути всі дані?",
  yes:"Так",
  no:"Ні",
  weeklyProfit:"TRADE {index} ПРИБУТОК:",
  weeklyLoss:"TRADE {index} ЗБИТОК:",
  weeklyTradePrefix:"TRADE {index}",
  weeklyProfitWord:"ПРИБУТОК:",
  weeklyLossWord:"ЗБИТОК:",
  topTotalProfit:"TOTAL PROFIT",
  marginCalculator:"Калькулятор Маржі",
  marginBackCalculator:"Калькулятор",
  profitRisk:"Прибуток / Ризик",
  entryPrice:"Ціна Входу",
  exitPrice:"Ціна Виходу",
  leverage:"Плече",
  marginLabel:"Маржа:",
  tradeTracker:"Трекер Угод",
  initialDeposit:"Початковий депозит",
  wins:"Плюс",
  loss:"Мінус",
  captureButton:"ЗАФІКСУВАТИ",
  captureProfit:"ПРИБУТОК",
  captureLoss:"ЗБИТОК",
  contracts:"Контракти",
  contractNamePlaceholder:"Назва контракту",
 notes:"Нотатки",
  notesPlaceholder:"...",
  totalTrades:"Total PnL",
  winRate:"Вінрейт",
  overall:"Загальний",
  overallProfit:"прибуток",
  overallLoss:"збиток",
  reset:"СКИНУТИ",
  marketClocks:"Ринкові Годинники",
  tradeCurve:"Крива Угод",
  tradeCurveTab:"Крива Trade {index}",
  monthCurveTab:"Крива {month}",
  totalCurveTab:"Загальна Крива",
  pnlCalendar:"Календар PnL",
  pnlDailyTab:"Щоденні PnL",
  pnlMonthlyTab:"Щомісячні PnL",
  calendarYear:"Рік",
  calendarMonth:"Місяць",
  chartWinRate:"WIN RATE:",
  chartRoi:"ROI:",
  roi:"ROI",
  previousTrades:"Попередні трейди",
  nextTrades:"Наступні трейди",
  addTradeTab:"Додати трейд",
  flipTracker:"Перевернути трекер",
  flipMargin:"Перевернути калькулятор маржі",
  flipTotals:"Перевернути Total PnL",
  flipClocks:"Перевернути годинники",
  clockSlotLabel:"Годинник {index}",
  deleteLastTrade:"Видалити трейд",
  collapseWindow:"Згорнути вікно",
  hideWindow:"Сховати вікно",
  totalsEmpty:"Немає зафіксованих значень",
  tradeLabel:"Trade {index}.",
	  panelMargin:"Калькулятор Маржі",
	  panelTracker:"Трекер Угод",
	  panelChart:"Крива Угод",
	  panelTotals:"Total PnL",
	  panelClocks:"Ринкові Годинники",
	  panelCalendar:"Календар PnL",
	  notesGroup:"Нотатки",
  notesToggleAll:"Показати або сховати всі нотатки",
  notesShowHideButton:"show/hide",
  folderIcon:"Папка",
  folderClose:"Закрити папку",
  folderExpand:"Розгорнути папку",
  notesPanel:"Нотатки",
  notesPanelIndexed:"Нотатки {index}",
  deleteNote:"Видалити нотатку",
  reorderNote:"Змінити порядок нотатки",
  reorderTrade:"Змінити порядок угоди",
  reorderContract:"Змінити порядок контракту",
  toolBold:"Жирний",
  toolItalic:"Курсив",
  toolStrike:"Закреслений",
  toolUnderline:"Підкреслений",
  toolMono:"Моноширинний",
  toolSpoiler:"Спойлер",
  toolList:"Нумерований список",
  toolAlignLeft:"Вирівняти ліворуч",
  toolAlignCenter:"Вирівняти по центру",
  toolAlignRight:"Вирівняти праворуч",
  toolSpellcheckOn:"Орфографія: ВКЛ",
  toolSpellcheckOff:"Орфографія: ВИКЛ",
  toolReset:"RESET",
  lockSaveFirstAlert:"Спочатку збережіть або завантажте дані з паролем.",
  lockTooManyAttempts:"Забагато невдалих спроб. Спробуйте через {time}",
  lockWrongPassword:"Невірний пароль. Залишилось спроб: {count}",
  promptEncryptPassword:"Введіть пароль для шифрування файлу",
  promptRepeatPassword:"Повторіть пароль",
  promptDecryptPassword:"Введіть пароль для розшифрування файлу",
  statusPasswordRequired:"Потрібен пароль",
  statusPasswordsMismatch:"Паролі не співпадають",
  statusEncryptedSaved:"Зашифрований файл збережено",
  statusSaveFailed:"Не вдалося зберегти дані",
  statusDataLoaded:"Дані успішно завантажено",
  statusLoadFailed:"Не вдалося завантажити файл або невірний пароль",
  creatorInfoLabel:"Інформація про автора",
  creatorName:"Olexandr Skorobagatko",
  creatorSupportMessage:"If you like my product, feel free to donate any amount.",
  creatorCryptoLabel:"ERC-20:",
  creatorPaypalLabel:"PayPal:",
  creatorThanks:"THANK YOU",
  copy:"Копіювати",
  copied:"Скопійовано",
  copyFailed:"Помилка копіювання"
 },
 en:{
  appTitle:"Weekly Trade Tracker",
  sideMenuTitle:"Weekly Trade Tracker v{version}",
  windows:"Windows",
  loadData:"LOAD DATA",
  saveData:"SAVE DATA",
  googleSignIn:"LOGIN",
  googleSignOut:"LOGOUT",
  cloudSyncNow:"SYNC NOW",
  cloudNotConfigured:"Cloud is not configured",
  cloudSignedOut:"Signed out",
  cloudSignedIn:"Signed in: {email}",
  cloudSyncing:"Syncing...",
  cloudSynced:"Cloud synced",
  cloudSyncFailed:"Cloud sync failed",
  cloudLoaded:"Cloud data loaded",
  cloudNoData:"No cloud data yet",
  cloudAuthFailed:"Google sign-in failed",
  menu:"MENU",
  languageAria:"Language",
  languageUkrainian:"УКР",
  languageEnglish:"ENG",
  lock:"Lock",
  pinWindows:"Pin windows",
  resetTrades:"RESET ALL",
  lockTitle:"Password",
  unlock:"Unlock",
  showPassword:"Show password",
  hidePassword:"Hide password",
  confirmTitle:"Confirmation",
  confirmResetAll:"Are you sure you want to reset all data?",
  yes:"Yes",
  no:"No",
  weeklyProfit:"TRADE {index} PROFIT:",
  weeklyLoss:"TRADE {index} LOSS:",
  weeklyTradePrefix:"TRADE {index}",
  weeklyProfitWord:"PROFIT:",
  weeklyLossWord:"LOSS:",
  topTotalProfit:"TOTAL PROFIT",
  marginCalculator:"Margin Calculator",
  marginBackCalculator:"Calculator",
  profitRisk:"Profit / Risk",
  entryPrice:"Entry Price",
  exitPrice:"Exit Price",
  leverage:"Leverage",
  marginLabel:"Margin:",
  tradeTracker:"Trade Tracker",
  initialDeposit:"Initial deposit",
  wins:"Wins",
  loss:"Loss",
  captureButton:"CAPTURE",
  captureProfit:"PROFIT",
  captureLoss:"LOSS",
  contracts:"Contracts",
  contractNamePlaceholder:"Contract name",
 notes:"Notes",
  notesPlaceholder:"...",
  totalTrades:"Total PnL",
  winRate:"Win rate",
  overall:"Overall",
  overallProfit:"profit",
  overallLoss:"loss",
  reset:"RESET",
  marketClocks:"Market Clocks",
  tradeCurve:"Trade Curve",
  tradeCurveTab:"Trade {index} curve",
  monthCurveTab:"{month} Curve",
  totalCurveTab:"Total Curve",
  pnlCalendar:"PnL Calendar",
  pnlDailyTab:"Daily PnL",
  pnlMonthlyTab:"Monthly PnL",
  calendarYear:"Year",
  calendarMonth:"Month",
  chartWinRate:"WIN RATE:",
  chartRoi:"ROI:",
  roi:"ROI",
  previousTrades:"Previous trades",
  nextTrades:"Next trades",
  addTradeTab:"Add trade",
  flipTracker:"Flip tracker",
  flipMargin:"Flip margin calculator",
  flipTotals:"Flip total PnL",
  flipClocks:"Flip clocks",
  clockSlotLabel:"Clock {index}",
  deleteLastTrade:"Delete trade",
  collapseWindow:"Collapse window",
  hideWindow:"Hide window",
  totalsEmpty:"No fixed values",
  tradeLabel:"Trade {index}.",
	  panelMargin:"Margin Calculator",
	  panelTracker:"Trade Tracker",
	  panelChart:"Trade Curve",
	  panelTotals:"Total PnL",
	  panelClocks:"Market Clocks",
	  panelCalendar:"PnL Calendar",
	  notesGroup:"Notes",
  notesToggleAll:"Show or hide all notes",
  notesShowHideButton:"show/hide",
  folderIcon:"Folder",
  folderClose:"Close folder",
  folderExpand:"Expand folder",
  notesPanel:"Notes",
  notesPanelIndexed:"Notes {index}",
  deleteNote:"Delete note",
  reorderNote:"Reorder note",
  reorderTrade:"Reorder trade",
  reorderContract:"Reorder contract",
  toolBold:"Bold",
  toolItalic:"Italic",
  toolStrike:"Strikethrough",
  toolUnderline:"Underline",
  toolMono:"Monospace",
  toolSpoiler:"Spoiler",
  toolList:"Numbered list",
  toolAlignLeft:"Align left",
  toolAlignCenter:"Align center",
  toolAlignRight:"Align right",
  toolSpellcheckOn:"Spellcheck: ON",
  toolSpellcheckOff:"Spellcheck: OFF",
  toolReset:"RESET",
  lockSaveFirstAlert:"Please save or load data with a password first.",
  lockTooManyAttempts:"Too many failed attempts. Try again in {time}",
  lockWrongPassword:"Wrong password. Attempts left: {count}",
  promptEncryptPassword:"Enter password to encrypt the data file",
  promptRepeatPassword:"Repeat the password",
  promptDecryptPassword:"Enter password to decrypt the data file",
  statusPasswordRequired:"Password is required",
  statusPasswordsMismatch:"Passwords do not match",
  statusEncryptedSaved:"Encrypted file saved",
  statusSaveFailed:"Failed to save data",
  statusDataLoaded:"Data loaded successfully",
  statusLoadFailed:"Failed to load file or wrong password",
  creatorInfoLabel:"Creator info",
  creatorName:"Olexandr Skorobagatko",
  creatorSupportMessage:"If you like my product, feel free to donate any amount.",
  creatorCryptoLabel:"ERC-20:",
  creatorPaypalLabel:"PayPal:",
  creatorThanks:"THANK YOU",
  copy:"Copy",
  copied:"Copied",
  copyFailed:"Copy failed"
 }
}

function getInitialLanguage(){
 const queryLanguage=new URLSearchParams(window.location.search).get("lang")
 if(SUPPORTED_LANGUAGES.has(queryLanguage)) return queryLanguage
 const storedLanguage=localStorage.getItem(LANGUAGE_KEY)
 if(SUPPORTED_LANGUAGES.has(storedLanguage)) return storedLanguage
 return "uk"
}

let currentLanguage=getInitialLanguage()

function t(key,vars={}){
 const dictionary=I18N[currentLanguage] || I18N.uk
 const fallback=I18N.uk[key] ?? key
 const template=dictionary[key] ?? fallback
 return String(template).replace(/\{(\w+)\}/g,(_,name)=>vars[name]??`{${name}}`)
}

function formatTooltipText(value){
 const raw=String(value ?? "").replace(/\s+/g," ").trim()
 if(!raw) return ""
 const locale=currentLanguage==="en" ? "en-US" : "uk-UA"
 return raw.toLocaleLowerCase(locale)
}

function applyLowercaseButtonTooltips(root=document){
 const scope=root && typeof root.querySelectorAll==="function" ? root : document
 const targets=scope.querySelectorAll('button,input[type="checkbox"][data-panel-toggle],input[type="checkbox"][data-notes-toggle-all]')
 targets.forEach(el=>{
  const ariaLabel=el.getAttribute("aria-label") || ""
  const textLabel=(el.textContent || "").replace(/\s+/g," ").trim()
  const currentTitle=el.getAttribute("title") || ""
  let source=ariaLabel || textLabel || currentTitle
  if(!source && el.matches("[data-collapse-btn]")){
   source=t("collapseWindow")
  }
  const tooltip=formatTooltipText(source)
  if(!tooltip) return
  if(el.getAttribute("title")!==tooltip){
   el.setAttribute("title",tooltip)
  }
 })
}

function updateLanguageUrl(lang){
 const url=new URL(window.location.href)
 url.searchParams.set("lang",lang)
 window.history.replaceState({}, "", url.toString())
}

function formatAmount(value){
 const num=Number(value)
 if(!Number.isFinite(num)) return "0.00"
 const locale=currentLanguage==="en" ? "en-US" : "uk-UA"
 return num.toLocaleString(locale,{minimumFractionDigits:2,maximumFractionDigits:2})
}

function formatPercent(value){
 const num=Number(value)
 if(!Number.isFinite(num)) return "0.0"
 const locale=currentLanguage==="en" ? "en-US" : "uk-UA"
 return num.toLocaleString(locale,{minimumFractionDigits:1,maximumFractionDigits:1})
}

function setSideMenuStatus(message,type=""){
 if(!sideMenuStatus) return
 sideMenuStatus.innerText=message || ""
 sideMenuStatus.classList.remove("success","error")
 if(type){
  sideMenuStatus.classList.add(type)
 }
}

function isFirebaseConfigReady(config){
 if(!config || typeof config!=="object") return false
 const required=["apiKey","authDomain","projectId","appId"]
 return required.every(key=>String(config[key] || "").trim()!=="")
}

function setCloudStatus(messageKey,vars={},type=""){
 if(!cloudAuthStatusEl) return
 cloudAuthStatusEl.innerText=t(messageKey,vars)
 cloudAuthStatusEl.classList.remove("success","error")
 if(type){
  cloudAuthStatusEl.classList.add(type)
 }
}

function updateCloudControls(){
 if(googleAuthBtn){
  const authLabel=cloudUser ? t("googleSignOut") : t("googleSignIn")
  googleAuthBtn.disabled=!cloudFirebaseReady || cloudSyncInFlight
  googleAuthBtn.innerText=authLabel
  googleAuthBtn.setAttribute("aria-label",authLabel)
  googleAuthBtn.title=authLabel
 }
 if(cloudSyncBtn){
  const syncLabel=t("cloudSyncNow")
  cloudSyncBtn.disabled=!cloudFirebaseReady || !cloudUser || cloudSyncInFlight
  cloudSyncBtn.innerText=syncLabel
  cloudSyncBtn.setAttribute("aria-label",syncLabel)
  cloudSyncBtn.title=syncLabel
 }
 applyLowercaseButtonTooltips()
 if(!cloudAuthStatusEl) return
 if(!cloudFirebaseReady){
  setCloudStatus("cloudNotConfigured",{},"error")
  return
 }
 if(!cloudUser){
  setCloudStatus("cloudSignedOut")
  return
 }
 if(!cloudSyncInFlight){
  setCloudStatus("cloudSignedIn",{email:cloudUser.email || cloudUser.displayName || "Google"},"success")
 }
}

function requestCloudSync(){
 if(!cloudFirebaseReady || !cloudUser) return
 cloudPendingSync=true
}

async function syncCloudState({force=false,quiet=false}={}){
 if(!cloudFirebaseReady || !cloudDb || !cloudUser || cloudSyncInFlight) return false
 const snapshot=serializeAppState()
 if(!force && !cloudPendingSync && snapshot===lastCloudSyncedSnapshot){
  return true
 }
 cloudSyncInFlight=true
 if(!quiet){
  setCloudStatus("cloudSyncing")
 }
 updateCloudControls()
 try{
  await cloudDb.collection(CLOUD_USER_COLLECTION).doc(cloudUser.uid).set({
   snapshot,
   appVersion:APP_VERSION,
   updatedAt:firebase.firestore.FieldValue.serverTimestamp()
  },{merge:true})
  lastCloudSyncedSnapshot=snapshot
  cloudPendingSync=false
  if(!quiet){
   setCloudStatus("cloudSynced",{},"success")
  }
  return true
 }catch{
  if(!quiet){
   setCloudStatus("cloudSyncFailed",{},"error")
  }
  return false
 }finally{
  cloudSyncInFlight=false
  updateCloudControls()
 }
}

async function loadCloudState(){
 if(!cloudFirebaseReady || !cloudDb || !cloudUser) return
 try{
  const doc=await cloudDb.collection(CLOUD_USER_COLLECTION).doc(cloudUser.uid).get()
  const snapshot=doc.data()?.snapshot
  if(typeof snapshot==="string" && snapshot.trim()!==""){
  applySerializedState(snapshot,{applyLayout:true})
  undoStack=[]
  redoStack=[]
  lastCommittedState=serializeAppState()
  persistUndoHistory()
  lastCloudSyncedSnapshot=lastCommittedState
  cloudPendingSync=false
   setCloudStatus("cloudLoaded",{},"success")
  }else{
   lastCloudSyncedSnapshot=serializeAppState()
   cloudPendingSync=true
   setCloudStatus("cloudNoData")
  }
 }catch{
  setCloudStatus("cloudSyncFailed",{},"error")
 }
}

function initCloudSync(){
 if(!window.firebase || !isFirebaseConfigReady(FIREBASE_CONFIG)){
  cloudFirebaseReady=false
  updateCloudControls()
  return
 }
 try{
  if(!firebase.apps.length){
   firebase.initializeApp(FIREBASE_CONFIG)
  }
  cloudAuth=firebase.auth()
  cloudDb=firebase.firestore()
  cloudFirebaseReady=true
 }catch{
  cloudFirebaseReady=false
  setCloudStatus("cloudNotConfigured",{},"error")
  updateCloudControls()
  return
 }

 cloudAuth.onAuthStateChanged(async (user)=>{
  cloudUser=user || null
  updateCloudControls()
  if(cloudUser){
   setCloudStatus("cloudSignedIn",{email:cloudUser.email || cloudUser.displayName || "Google"},"success")
   await loadCloudState()
  }else{
   cloudPendingSync=false
   lastCloudSyncedSnapshot=""
   setCloudStatus("cloudSignedOut")
  }
  updateCloudControls()
 })

 if(googleAuthBtn){
  googleAuthBtn.addEventListener("click",async ()=>{
   if(!cloudFirebaseReady || !cloudAuth || cloudSyncInFlight) return
   if(cloudUser){
    await cloudAuth.signOut()
    return
   }
   try{
    const provider=new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({prompt:"select_account"})
    await cloudAuth.signInWithPopup(provider)
   }catch{
    setCloudStatus("cloudAuthFailed",{},"error")
   }
  })
 }

 if(cloudSyncBtn){
  cloudSyncBtn.addEventListener("click",async ()=>{
   if(!cloudFirebaseReady || !cloudUser) return
   cloudPendingSync=true
   await syncCloudState({force:true})
  })
 }

 if(cloudSyncTimer){
  clearInterval(cloudSyncTimer)
 }
 cloudSyncTimer=setInterval(()=>{
  if(!cloudFirebaseReady || !cloudUser || !cloudPendingSync) return
  syncCloudState({quiet:true})
 },CLOUD_SYNC_INTERVAL_MS)

 updateCloudControls()
}

const CLOCK_SLOT_COUNT=4
const DEFAULT_CLOCK_SLOT_IDS=["kyiv","new_york","london","tokyo"]
const CLOCK_ZONE_OPTIONS=[
 {id:"kyiv",timeZone:"Europe/Kyiv",marketKey:"kyiv",fallbackOffset:"UTC+2",cityUk:"Київ",cityEn:"Kyiv"},
 {id:"london",timeZone:"Europe/London",marketKey:"london",fallbackOffset:"UTC+0",cityUk:"Лондон",cityEn:"London"},
 {id:"new_york",timeZone:"America/New_York",marketKey:"newYork",fallbackOffset:"UTC-5",cityUk:"Нью-Йорк",cityEn:"New York"},
 {id:"chicago",timeZone:"America/Chicago",marketKey:"chicago",fallbackOffset:"UTC-6",cityUk:"Чикаго",cityEn:"Chicago"},
 {id:"toronto",timeZone:"America/Toronto",marketKey:"toronto",fallbackOffset:"UTC-5",cityUk:"Торонто",cityEn:"Toronto"},
 {id:"sao_paulo",timeZone:"America/Sao_Paulo",marketKey:"saoPaulo",fallbackOffset:"UTC-3",cityUk:"Сан-Паулу",cityEn:"Sao Paulo"},
 {id:"frankfurt",timeZone:"Europe/Berlin",marketKey:"frankfurt",fallbackOffset:"UTC+1",cityUk:"Франкфурт",cityEn:"Frankfurt"},
 {id:"zurich",timeZone:"Europe/Zurich",marketKey:"zurich",fallbackOffset:"UTC+1",cityUk:"Цюрих",cityEn:"Zurich"},
 {id:"dubai",timeZone:"Asia/Dubai",marketKey:"dubai",fallbackOffset:"UTC+4",cityUk:"Дубай",cityEn:"Dubai"},
 {id:"mumbai",timeZone:"Asia/Kolkata",marketKey:"mumbai",fallbackOffset:"UTC+5:30",cityUk:"Мумбаї",cityEn:"Mumbai"},
 {id:"singapore",timeZone:"Asia/Singapore",marketKey:"singapore",fallbackOffset:"UTC+8",cityUk:"Сінгапур",cityEn:"Singapore"},
 {id:"hong_kong",timeZone:"Asia/Hong_Kong",marketKey:"hongKong",fallbackOffset:"UTC+8",cityUk:"Гонконг",cityEn:"Hong Kong"},
 {id:"tokyo",timeZone:"Asia/Tokyo",marketKey:"tokyo",fallbackOffset:"UTC+9",cityUk:"Токіо",cityEn:"Tokyo"},
 {id:"sydney",timeZone:"Australia/Sydney",marketKey:"sydney",fallbackOffset:"UTC+10",cityUk:"Сідней",cityEn:"Sydney"}
]
const CLOCK_ZONE_BY_ID=new Map(CLOCK_ZONE_OPTIONS.map(option=>[option.id,option]))
const MARKET_HOURS_BY_CITY={
 kyiv:[[10*60,17*60]],
 newYork:[[9*60+30,16*60]],
 london:[[8*60,16*60+30]],
 tokyo:[[9*60,11*60+30],[12*60+30,15*60]],
 sydney:[[10*60,16*60]],
 hongKong:[[9*60+30,12*60],[13*60,16*60]],
 singapore:[[9*60,17*60]],
 dubai:[[10*60,15*60]],
 frankfurt:[[9*60,17*60+30]],
 zurich:[[9*60,17*60+30]],
 toronto:[[9*60+30,16*60]],
 chicago:[[8*60+30,15*60]],
 mumbai:[[9*60+15,15*60+30]],
 saoPaulo:[[10*60,17*60]]
}

function normalizeClockSlotIds(value){
 const defaults=DEFAULT_CLOCK_SLOT_IDS.slice(0,CLOCK_SLOT_COUNT)
 if(!Array.isArray(value)) return defaults
 return defaults.map((fallback,index)=>{
  const candidate=String(value[index] ?? "").trim()
  return CLOCK_ZONE_BY_ID.has(candidate) ? candidate : fallback
 })
}

function loadStoredClockSlotIds(){
 try{
  const parsed=JSON.parse(localStorage.getItem(CLOCK_SELECTION_KEY) || "null")
  return normalizeClockSlotIds(parsed)
 }catch{
  return normalizeClockSlotIds(null)
 }
}

function saveClockSlotIds(){
 localStorage.setItem(CLOCK_SELECTION_KEY,JSON.stringify(clockSlotIds))
}

function getClockSlotOption(slotIndex){
 const fallbackId=DEFAULT_CLOCK_SLOT_IDS[Math.max(0,Math.min(DEFAULT_CLOCK_SLOT_IDS.length-1,slotIndex))]
 const selectedId=clockSlotIds[slotIndex]
 return CLOCK_ZONE_BY_ID.get(selectedId) || CLOCK_ZONE_BY_ID.get(fallbackId)
}

function getClockCityLabel(option){
 if(!option) return ""
 return currentLanguage==="en" ? option.cityEn : option.cityUk
}

function normalizeClockOffsetToken(token,fallbackOffset){
 const raw=String(token || "").trim()
 if(!raw) return fallbackOffset
 const normalized=raw.replace(/^GMT/i,"UTC").replace(/\s+/g,"")
 if(/^UTC$/i.test(normalized)) return "UTC+0"
 const match=normalized.match(/^UTC([+-]\d{1,2})(?::?(\d{2}))?$/i)
 if(!match) return fallbackOffset
 const hours=match[1]
 const minutes=String(match[2] || "")
 if(!minutes || minutes==="00"){
  return `UTC${hours}`
 }
 return `UTC${hours}:${minutes.padStart(2,"0")}`
}

function getClockOffsetLabel(option){
 if(!option) return "UTC+0"
 try{
  const parts=new Intl.DateTimeFormat("en-US",{
   timeZone:option.timeZone,
   timeZoneName:"shortOffset"
  }).formatToParts(new Date())
  const token=parts.find(part=>part.type==="timeZoneName")?.value
  return normalizeClockOffsetToken(token,option.fallbackOffset)
 }catch{
  return option.fallbackOffset
 }
}

function formatClockValue(timeZone){
 try{
  return new Intl.DateTimeFormat("en-GB",{
   hour:"2-digit",
   minute:"2-digit",
   second:"2-digit",
   hour12:false,
   timeZone
  }).format(new Date())
 }catch{
  return "--:--:--"
 }
}

function getClockLocalParts(timeZone){
 try{
  const parts=new Intl.DateTimeFormat("en-GB",{
   weekday:"short",
   hour:"2-digit",
   minute:"2-digit",
   second:"2-digit",
   hour12:false,
   timeZone
  }).formatToParts(new Date())
  const pick=(type)=>parts.find(part=>part.type===type)?.value || ""
  return {
   weekday:pick("weekday"),
   hour:Number(pick("hour"))||0,
   minute:Number(pick("minute"))||0
  }
 }catch{
  return {weekday:"",hour:0,minute:0}
 }
}

function isWeekdayShort(value){
 return ["Mon","Tue","Wed","Thu","Fri"].includes(value)
}

function isMinutesInRange(value,start,end){
 return value>=start && value<end
}

function isCityMarketOpen(cityKey,timeZone){
 const local=getClockLocalParts(timeZone)
 if(!isWeekdayShort(local.weekday)) return false
 const ranges=MARKET_HOURS_BY_CITY[cityKey]
 if(!Array.isArray(ranges) || !ranges.length) return false
 const totalMinutes=(local.hour*60)+local.minute
 return ranges.some(range=>{
  if(!Array.isArray(range) || range.length!==2) return false
  return isMinutesInRange(totalMinutes,Number(range[0])||0,Number(range[1])||0)
 })
}

function updateMarketClocks(){
 for(let i=0;i<CLOCK_SLOT_COUNT;i+=1){
  const option=getClockSlotOption(i)
  const cityEl=clockCityEls[i]
  const timeEl=clockTimeEls[i]
  if(cityEl){
   cityEl.innerText=getClockCityLabel(option)
  }
  if(!timeEl || !option) continue
  timeEl.innerText=formatClockValue(option.timeZone)
  const isOpen=isCityMarketOpen(option.marketKey,option.timeZone)
  timeEl.classList.toggle("closed",!isOpen)
 }
}

function bytesToBase64(bytes){
 let binary=""
 const chunkSize=0x8000
 for(let i=0;i<bytes.length;i+=chunkSize){
  const chunk=bytes.subarray(i,i+chunkSize)
  binary+=String.fromCharCode(...chunk)
 }
 return btoa(binary)
}

function base64ToBytes(base64){
 const binary=atob(base64)
 const bytes=new Uint8Array(binary.length)
 for(let i=0;i<binary.length;i++){
  bytes[i]=binary.charCodeAt(i)
 }
 return bytes
}

async function deriveDataKey(password,salt,iterations){
 const encoder=new TextEncoder()
 const baseKey=await crypto.subtle.importKey(
  "raw",
  encoder.encode(password),
  "PBKDF2",
  false,
  ["deriveKey"]
 )
 return crypto.subtle.deriveKey(
  {
   name:"PBKDF2",
   salt,
   iterations,
   hash:"SHA-256"
  },
  baseKey,
  {
   name:"AES-GCM",
   length:256
  },
  false,
 ["encrypt","decrypt"]
 )
}

async function derivePasswordVerifierBits(password,salt,iterations){
 const encoder=new TextEncoder()
 const baseKey=await crypto.subtle.importKey(
  "raw",
  encoder.encode(password),
  "PBKDF2",
  false,
  ["deriveBits"]
 )
 const bits=await crypto.subtle.deriveBits(
  {
   name:"PBKDF2",
   salt,
   iterations,
   hash:"SHA-256"
  },
  baseKey,
  256
 )
 return new Uint8Array(bits)
}

async function createLockPasswordVerifier(password){
 const salt=crypto.getRandomValues(new Uint8Array(16))
 const bits=await derivePasswordVerifierBits(password,salt,DATA_FILE_ITERATIONS)
 return JSON.stringify({
  version:1,
  kdf:"PBKDF2",
  hash:"SHA-256",
  iterations:DATA_FILE_ITERATIONS,
  salt:bytesToBase64(salt),
  data:bytesToBase64(bits)
 })
}

async function saveLockPasswordVerifier(password){
 lockPasswordVerifier=await createLockPasswordVerifier(password)
 localStorage.setItem(LOCK_PASSWORD_VERIFIER_KEY,lockPasswordVerifier)
 resetLockFailures()
}

async function verifyLockPassword(password){
 if(!lockPasswordVerifier) return false
 try{
  const payload=JSON.parse(lockPasswordVerifier)
  const salt=base64ToBytes(payload.salt)
  const bits=await derivePasswordVerifierBits(password,salt,Number(payload.iterations)||DATA_FILE_ITERATIONS)
  return bytesToBase64(bits)===payload.data
 }catch{
  return false
 }
}

function persistLockSecurityState(){
 localStorage.setItem(LOCK_FAILED_ATTEMPTS_KEY,String(lockFailedAttempts))
 if(lockoutUntil>0){
  localStorage.setItem(LOCKOUT_UNTIL_KEY,String(lockoutUntil))
  return
 }
 localStorage.removeItem(LOCKOUT_UNTIL_KEY)
}

function getLockoutRemainingMs(){
 return Math.max(0,lockoutUntil-Date.now())
}

function formatLockoutRemaining(ms){
 const totalSeconds=Math.ceil(ms/1000)
 const minutes=Math.floor(totalSeconds/60)
 const seconds=totalSeconds%60
 return `${minutes}:${String(seconds).padStart(2,"0")}`
}

function setLockErrorMessage(message,state=""){
 if(!lockError) return
 lockError.innerText=message || ""
 if(state){
  lockError.dataset.state=state
  return
 }
 delete lockError.dataset.state
}

function setLockPasswordVisibility(isVisible){
 if(!lockPasswordInput) return
 lockPasswordInput.type=isVisible ? "text" : "password"
 if(lockTogglePasswordBtn){
 lockTogglePasswordBtn.classList.toggle("visible",isVisible)
 lockTogglePasswordBtn.setAttribute("aria-label",isVisible ? t("hidePassword") : t("showPassword"))
 lockTogglePasswordBtn.title=formatTooltipText(isVisible ? t("hidePassword") : t("showPassword"))
}
}

function resetLockFailures(){
 lockFailedAttempts=0
 lockoutUntil=0
 persistLockSecurityState()
 if(lockError?.dataset.state==="lockout"){
  setLockErrorMessage("")
 }
}

function registerLockFailure(){
 if(getLockoutRemainingMs()>0){
  updateLockFormAvailability()
  return
 }
 lockFailedAttempts+=1
 if(lockFailedAttempts>=LOCK_MAX_FAILED_ATTEMPTS){
  lockFailedAttempts=0
  lockoutUntil=Date.now()+LOCKOUT_DURATION_MS
 }
 persistLockSecurityState()
}

function updateLockFormAvailability(){
 const remainingMs=getLockoutRemainingMs()
 if(remainingMs<=0 && lockoutUntil>0){
  resetLockFailures()
 }
 const isLockedOut=getLockoutRemainingMs()>0
 if(lockPasswordInput) lockPasswordInput.disabled=isLockedOut
 if(lockSubmitBtn) lockSubmitBtn.disabled=isLockedOut
 if(lockTogglePasswordBtn) lockTogglePasswordBtn.disabled=isLockedOut
 if(isLockedOut){
  setLockErrorMessage(t("lockTooManyAttempts",{time:formatLockoutRemaining(getLockoutRemainingMs())}),"lockout")
  return true
 }
 if(lockError?.dataset.state==="lockout"){
  setLockErrorMessage("")
 }
 return false
}

async function encryptStateSnapshot(snapshot,password){
 const salt=crypto.getRandomValues(new Uint8Array(16))
 const iv=crypto.getRandomValues(new Uint8Array(12))
 const key=await deriveDataKey(password,salt,DATA_FILE_ITERATIONS)
 const encoded=new TextEncoder().encode(snapshot)
 const encryptedBuffer=await crypto.subtle.encrypt({name:"AES-GCM",iv},key,encoded)
 return JSON.stringify({
  version:DATA_FILE_VERSION,
  algorithm:"AES-GCM",
  kdf:"PBKDF2",
  hash:"SHA-256",
  iterations:DATA_FILE_ITERATIONS,
  salt:bytesToBase64(salt),
  iv:bytesToBase64(iv),
  data:bytesToBase64(new Uint8Array(encryptedBuffer))
 },null,2)
}

async function decryptStateSnapshot(fileText,password){
 const payload=JSON.parse(fileText)
 if(payload?.version!==DATA_FILE_VERSION || payload?.algorithm!=="AES-GCM"){
  throw new Error("Unsupported file format")
 }
 const salt=base64ToBytes(payload.salt)
 const iv=base64ToBytes(payload.iv)
 const data=base64ToBytes(payload.data)
 const key=await deriveDataKey(password,salt,Number(payload.iterations)||DATA_FILE_ITERATIONS)
 const decryptedBuffer=await crypto.subtle.decrypt({name:"AES-GCM",iv},key,data)
 return new TextDecoder().decode(decryptedBuffer)
}

async function saveEncryptedDataFile(fileName,content){
 const safeName=String(fileName || "weekly-trade-tracker-data.wtt")
 const safeContent=String(content ?? "")
 if(typeof window.showSaveFilePicker==="function"){
  const handle=await window.showSaveFilePicker({
   suggestedName:safeName,
   types:[{
    description:"Weekly Trade Tracker data",
    accept:{
     "application/json":[".wtt",".json"]
    }
   }]
  })
  const writable=await handle.createWritable()
  await writable.write(safeContent)
  await writable.close()
  return
 }
 const blob=new Blob([safeContent],{type:"application/json"})
 const url=URL.createObjectURL(blob)
 const link=document.createElement("a")
 link.href=url
 link.download=safeName
 document.body.appendChild(link)
 link.click()
 link.remove()
 URL.revokeObjectURL(url)
}

async function copyTextToClipboard(value){
 const text=String(value ?? "")
 if(!text) return false
 try{
  if(navigator.clipboard && window.isSecureContext){
   await navigator.clipboard.writeText(text)
   return true
  }
 }catch{}
 try{
  const textarea=document.createElement("textarea")
  textarea.value=text
  textarea.setAttribute("readonly","readonly")
  textarea.style.position="fixed"
  textarea.style.opacity="0"
  textarea.style.pointerEvents="none"
  document.body.appendChild(textarea)
  textarea.focus()
  textarea.select()
  const copied=document.execCommand("copy")
  textarea.remove()
  return !!copied
 }catch{
  return false
 }
}

async function handleDonationCopy(kind){
 const value=kind==="paypal" ? DONATION_PAYPAL_EMAIL : DONATION_ERC20_ADDRESS
 const copied=await copyTextToClipboard(value)
 showStatusToast(copied ? t("copied") : t("copyFailed"))
}

function escapeHtml(value){
 return String(value)
  .replace(/&/g,"&amp;")
  .replace(/</g,"&lt;")
  .replace(/>/g,"&gt;")
  .replace(/"/g,"&quot;")
}

function calculate(){
 const marginEl=document.getElementById("margin")
 if(!marginEl) return

 let profit=parseFloat(document.getElementById("profit").value)
 let entry=parseFloat(document.getElementById("entry").value)
 let exit=parseFloat(document.getElementById("exit").value)
 let leverage=parseFloat(document.getElementById("leverage").value)

 if(!Number.isFinite(profit) || !Number.isFinite(entry) || !Number.isFinite(exit) || !Number.isFinite(leverage) || leverage===0){
  marginEl.innerText="0"
  return
 }

 let distance=Math.abs(exit-entry)
 if(distance===0){
  marginEl.innerText="0"
  return
 }

 let margin=(profit*entry)/(distance*leverage)
 marginEl.innerText=Number.isFinite(margin)?formatAmount(margin):"0"

}

function resetMarginCalculator(){
 const profitInput=document.getElementById("profit")
 const entryInput=document.getElementById("entry")
 const exitInput=document.getElementById("exit")
 const leverageInput=document.getElementById("leverage")
 if(profitInput) profitInput.value=""
 if(entryInput) entryInput.value=""
 if(exitInput) exitInput.value=""
 if(leverageInput) leverageInput.value="10"
 calculate()
}

document.querySelectorAll("#profit,#entry,#exit,#leverage").forEach(el=>{
 el.addEventListener("input",()=>{
  commitUndoableChange(()=>{
   calculate()
  })
 })
})

const marginResetInitBtn=document.getElementById("marginResetBtn")
if(marginResetInitBtn){
 marginResetInitBtn.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   resetMarginCalculator()
  })
 })
}

const marginPanel=document.querySelector('.container[data-drag-id="margin"]')
const marginFlipShell=document.getElementById("marginFlipShell")
const marginCard=document.getElementById("marginCard")
const marginFlipBtn=document.getElementById("marginFlipBtn")
const marginCalcDisplayEl=document.getElementById("marginCalcDisplay")
const marginCalcPadEl=document.getElementById("marginCalcPad")
const startDepositInput=document.getElementById("startDeposit")
const dayTabsShell=document.getElementById("dayTabsShell")
const dayTabsEl=document.getElementById("dayTabs")
const dayTabsPrevBtn=document.getElementById("dayTabsPrevBtn")
const dayTabsNextBtn=document.getElementById("dayTabsNextBtn")
const dayTabsAddBtn=document.getElementById("dayTabsAddBtn")
const tbody=document.getElementById("tradeRows")
const contractRowsEl=document.getElementById("contractRows")
const addTradeRowBtn=document.getElementById("addTradeRowBtn")
const removeTradeRowBtn=document.getElementById("removeTradeRowBtn")
const captureTotalBtn=document.getElementById("captureTotalBtn")
const captureStateEl=document.getElementById("captureState")
const trackerCard=document.getElementById("trackerCard")
const trackerFlipShell=document.getElementById("trackerFlipShell")
const trackerFlipBtn=document.getElementById("trackerFlipBtn")
const trackerPanel=document.querySelector('.tracker[data-drag-id="tracker"]')
const deleteDayBtn=document.getElementById("deleteDayBtn")
const totalsPanel=document.querySelector('.totals[data-drag-id="totals"]')
const totalsFlipShell=document.getElementById("totalsFlipShell")
const totalsCard=document.getElementById("totalsCard")
const totalsFlipBtn=document.getElementById("totalsFlipBtn")
const totalsList=document.getElementById("totalsList")
const totalsMonthTabsShellEl=document.getElementById("totalsMonthTabsShell")
const totalsMonthTabsEl=document.getElementById("totalsMonthTabs")
const totalsMonthTabsPrevBtn=document.getElementById("totalsMonthTabsPrevBtn")
const totalsMonthTabsNextBtn=document.getElementById("totalsMonthTabsNextBtn")
const totalsEditListEl=document.getElementById("totalsEditList")
const totalsEditMonthEl=document.getElementById("totalsEditMonth")
const totalsResetBtn=document.getElementById("totalsResetBtn")
const totalsStatusEl=document.getElementById("totalsStatus")
const totalsSumEl=document.getElementById("totalsSum")
const totalsWinRateEl=document.getElementById("totalsWinRate")
const totalsRoiEl=document.getElementById("totalsRoi")
let totalsMonthFilterKey=""
const clockPanel=document.querySelector('.clock[data-drag-id="clocks"]')
const clockFlipShell=document.getElementById("clockFlipShell")
const clockCard=document.getElementById("clockCard")
const clockFlipBtn=document.getElementById("clockFlipBtn")
const clockCityEls=[
 document.getElementById("clockCity1"),
 document.getElementById("clockCity2"),
 document.getElementById("clockCity3"),
 document.getElementById("clockCity4")
]
const clockTimeEls=[
 document.getElementById("clockTime1"),
 document.getElementById("clockTime2"),
 document.getElementById("clockTime3"),
 document.getElementById("clockTime4")
]
const clockSelectEls=[
 document.getElementById("clockSelect1"),
 document.getElementById("clockSelect2"),
 document.getElementById("clockSelect3"),
 document.getElementById("clockSelect4")
]
const depositPathTop=document.getElementById("depositPathTop")
const depositPathBottom=document.getElementById("depositPathBottom")
const roiPath=document.getElementById("roiPath")
const depositStartDot=document.getElementById("depositStartDot")
const depositEndDot=document.getElementById("depositEndDot")
const clipTopRect=document.getElementById("clipTopRect")
const clipBottomRect=document.getElementById("clipBottomRect")
const chartMidline=document.getElementById("chartMidline")
const chartMin=document.getElementById("chartMin")
const chartMax=document.getElementById("chartMax")
const chartDayCurveTab=document.getElementById("chartDayCurveTab")
const chartMonthCurveTab=document.getElementById("chartMonthCurveTab")
const chartTotalCurveTab=document.getElementById("chartTotalCurveTab")
const chartWinRateLabelEl=document.getElementById("chartWinRateLabel")
const chartWinRateValueEl=document.getElementById("chartWinRateValue")
const chartRoiLabelEl=document.getElementById("chartRoiLabel")
const chartRoiValueEl=document.getElementById("chartRoiValue")
const pnlCalendarPanel=document.querySelector('.calendar[data-drag-id="calendar"]')
const pnlCalendarDailyTab=document.getElementById("calendarDailyTab")
const pnlCalendarMonthlyTab=document.getElementById("calendarMonthlyTab")
const pnlCalendarPickerEl=document.getElementById("calendarPicker")
const pnlCalendarPickerBtn=document.getElementById("calendarPickerBtn")
const pnlCalendarPickerMenu=document.getElementById("calendarPickerMenu")
const pnlCalendarPickerGrid=document.getElementById("calendarPickerGrid")
const pnlCalendarMonthCaptionEl=document.getElementById("calendarMonthCaption")
const pnlCalendarContentEl=document.getElementById("calendarContent")
const weeklyProfitLabelEl=document.getElementById("weeklyProfitLabel")
const weeklyProfitValueEl=document.getElementById("weeklyProfitValue")
const weeklyProfitPercentEl=document.getElementById("weeklyProfitPercent")
const weeklyTotalProfitLabelEl=document.getElementById("weeklyTotalProfitLabel")
const weeklyTotalProfitValueEl=document.getElementById("weeklyTotalProfitValue")
const folderIconWidget=document.getElementById("folderIconWidget")
const chartLabels=document.querySelector(".chart-labels")
const scaleShellEl=document.querySelector(".scale")
const MIN_TRADES=1
const NEW_TRADE_INITIAL_ROWS=3
const TOTALS_KEY="totalHistoryV1"
const DAY_SESSIONS_KEY="daySessionsV1"
const ACTIVE_DAY_KEY="activeDayIndexV1"
const CONTRACT_NAMES_KEY="contractNamesV1"
const PNL_CAPTURE_DATES_KEY="pnlCaptureDatesV1"
const PNL_CALENDAR_MODE_KEY="pnlCalendarModeV1"
const PNL_CALENDAR_YEAR_KEY="pnlCalendarYearV1"
const PNL_CALENDAR_MONTH_KEY="pnlCalendarMonthV1"
const MARGIN_FLIP_KEY="marginFlipV1"
const TRACKER_FLIP_KEY="trackerFlipV1"
const TOTALS_FLIP_KEY="totalsFlipV1"
const CLOCK_SELECTION_KEY="clockSelectionsV1"
const CLOCK_FLIP_KEY="clockFlipV1"
const DRAG_KEY="panelPositionsV1"
const GAP=30
const PANEL_SELECTOR=".container,.tracker,.chart,.notes,.totals,.clock,.calendar"
const PANEL_HIDE_SELECTOR=".container,.chart,.notes,.totals,.clock,.calendar"
const DRAG_INTERACTIVE_SELECTOR='button,input,select,textarea,option,label,a,[role="button"],[contenteditable="true"],.notes-toolbar,.notes-tool-btn,.notes-toolbar-nav,.notes-toolbar-shell,.notes-toolbar-scroll,.notes-title-editable,.notes-title-input,.calendar-content,.calendar-month-caption'
const PIN_KEY="pinStateV1"
const LOCK_STATE_KEY="appLockedV1"
const LOCK_PASSWORD_VERIFIER_KEY="lockPasswordVerifierV1"
const LOCK_FAILED_ATTEMPTS_KEY="lockFailedAttemptsV1"
const LOCKOUT_UNTIL_KEY="lockoutUntilV1"
const NOTES_ITEMS_KEY="notesItemsV2"
const NOTES_TITLES_KEY="notesTitlesV1"
const NOTES_PANEL_LAYOUTS_KEY="notesPanelLayoutsV1"
const NOTES_SPELLCHECK_KEY="notesSpellcheckV1"
const NOTES_GROUP_COLLAPSED_KEY="notesGroupCollapsedV1"
const FOLDER_ICON_STATE_KEY="folderIconStateV1"
const CHART_MODE_KEY="chartModeV1"
const UNDO_HISTORY_KEY="undoHistoryV1"
const IMPORT_LAYOUT_ON_LOAD_KEY="importLayoutOnLoadV1"
const WINDOW_SCALE_KEY="windowScaleV1"
const WINDOW_SCALE_STEP=0.05
const MIN_WINDOW_SCALE=0.5
const MAX_WINDOW_SCALE=2
const DEFAULT_WINDOW_SCALE=1.1
const MIN_NOTES_PANELS=0
const MAX_NOTES_PANELS=100
const UNDO_LIMIT=100
const LOCK_MAX_FAILED_ATTEMPTS=5
const LOCKOUT_DURATION_MS=5*60*1000
const ROI_API_REFRESH_MS=15000

let trades=JSON.parse(localStorage.getItem("tradesV2"))||[]
let totalHistory=JSON.parse(localStorage.getItem(TOTALS_KEY))||[]
let contractNames=JSON.parse(localStorage.getItem(CONTRACT_NAMES_KEY))||[]
let daySessions=JSON.parse(localStorage.getItem(DAY_SESSIONS_KEY))||[]
let notesItems=loadStoredNotesItems()
let noteTitles=loadStoredNotesTitles()
let notesPanelLayouts=loadStoredNotesPanelLayouts()
let isNotesGroupCollapsed=localStorage.getItem(NOTES_GROUP_COLLAPSED_KEY)==="1"
let shouldAnimateNotesGroupOpen=false
const storedStartDeposit=localStorage.getItem("startDepositV2")
let startDeposit=storedStartDeposit===null || storedStartDeposit==="" ? 0 : (parseFloat(storedStartDeposit)||0)
let latestWeeklyProfit=0
let latestEndingDeposit=0
const storedChartMode=localStorage.getItem(CHART_MODE_KEY)
let chartViewMode=(storedChartMode==="total" || storedChartMode==="month") ? storedChartMode : "day"
let tradeCaptureDates=loadStoredPnlCaptureDates()
let pnlCalendarMode=localStorage.getItem(PNL_CALENDAR_MODE_KEY)==="monthly" ? "monthly" : "daily"
const nowDate=new Date()
let pnlCalendarYear=Math.max(2026,parseInt(localStorage.getItem(PNL_CALENDAR_YEAR_KEY) || String(nowDate.getFullYear()),10) || nowDate.getFullYear())
let pnlCalendarMonth=Math.max(0,Math.min(11,parseInt(localStorage.getItem(PNL_CALENDAR_MONTH_KEY) || String(nowDate.getMonth()),10) || nowDate.getMonth()))
let pnlCalendarPickerOpen=false
let marginFlipped=localStorage.getItem(MARGIN_FLIP_KEY)==="1"
let trackerFlipped=localStorage.getItem(TRACKER_FLIP_KEY)==="1"
let totalsFlipped=localStorage.getItem(TOTALS_FLIP_KEY)==="1"
let clockSlotIds=loadStoredClockSlotIds()
let clockFlipped=localStorage.getItem(CLOCK_FLIP_KEY)==="1"
let marginCalcCurrentValue="0"
let marginCalcStoredValue=null
let marginCalcPendingOperator=null
let marginCalcWaitingForOperand=false
let activeDayIndex=Math.max(0,parseInt(localStorage.getItem(ACTIVE_DAY_KEY) || "0",10) || 0)
let undoStack=[]
let redoStack=[]
let lastCommittedState=""
let isRestoringHistory=false
let allowImportLayoutOnLoad=localStorage.getItem(IMPORT_LAYOUT_ON_LOAD_KEY)==="1"
let roiCurveState={
 connected:false,
 values:[],
 key:"",
 lastFetchedAt:0,
 loading:false,
 loadingKey:""
}
let activeRowReorder=null
let activeNotesMenuReorder=null
startDepositInput.value=storedStartDeposit===null || storedStartDeposit==="" ? "" : storedStartDeposit
if(!Array.isArray(totalHistory)) totalHistory=[]
if(!Array.isArray(contractNames)) contractNames=[]

// Migrate old default state (8 empty rows) to the new default (1 row).
if(
 Array.isArray(trades) &&
 trades.length===8 &&
 trades.every(t=>!t || (t.result==null && (t.profit==="" || t.profit==null)))
){
 trades=trades.slice(0,MIN_TRADES)
 localStorage.setItem("tradesV2",JSON.stringify(trades))
}

function cloneData(value){
 return JSON.parse(JSON.stringify(value))
}

function setAllowImportLayoutOnLoad(value){
 allowImportLayoutOnLoad=!!value
 if(allowImportLayoutOnLoad){
  localStorage.setItem(IMPORT_LAYOUT_ON_LOAD_KEY,"1")
  return
 }
 localStorage.removeItem(IMPORT_LAYOUT_ON_LOAD_KEY)
}

function hasLayoutInStatePayload(state){
 if(!state || typeof state!=="object") return false
 const panels=state.panels
 const hasPanels=!!panels && typeof panels==="object" && Object.keys(panels).some(key=>key!=="__meta")
 const noteLayouts=state.notes?.layouts
 const hasNoteLayouts=!!noteLayouts && typeof noteLayouts==="object" && Object.keys(noteLayouts).length>0
 const workspace=state.workspace
 const hasWorkspace=!!workspace && typeof workspace==="object" && (
  typeof workspace.backgroundPosition==="string" ||
  workspace.topZIndex!=null
 )
 return hasPanels || hasNoteLayouts || hasWorkspace
}

function normalizeLegacyNoteToHtml(value){
 const raw=String(value || "")
 if(!raw) return ""
 const hasHtmlTags=/<\/?[a-z][\s\S]*>/i.test(raw)
 if(hasHtmlTags) return raw
 return escapeHtml(raw).replace(/\r?\n/g,"<br>")
}

function getWelcomeNoteHtml(lang=currentLanguage){
 const safeLang=lang==="en" ? "en" : "uk"
 const message=safeLang==="en"
  ? "Thank you for choosing my product."
  : "Дякую, що обрали мій продукт."
 return `<div class="welcome-note-text">${escapeHtml(message)}</div>`
}

function ensureCenteredWelcomeNotePanel({forceCreate=false}={}){
 const welcomeHtml=getWelcomeNoteHtml()
 if(forceCreate || notesItems.length===0){
  notesItems=[welcomeHtml]
  noteTitles=normalizeNotesTitles(noteTitles,1)
  notesPanelLayouts={}
  syncNotesPanels(1)
 }
 const notePanel=getNotesPanels()[0]
 if(!notePanel) return
 const editor=notePanel.querySelector(".notes-editor")
 if(editor && editor.innerHTML!==welcomeHtml){
  editor.innerHTML=welcomeHtml
 }
 notesItems[0]=welcomeHtml
 noteTitles=normalizeNotesTitles(noteTitles,notesItems.length)
 notePanel.classList.remove("panel-hidden")
 updateNotesPanelMeta(notePanel,0)
 rememberNotesPanelLayout(notePanel)
 saveNotesItems()
 saveNotesTitles()
 saveNotesPanelLayouts()
 refreshDraggables()
 refreshPanelCollapsedBadges()
}

function syncWelcomeNoteLanguageIfDefault(){
 const notePanel=getNotesPanels()[0]
 if(!notePanel) return
 const editor=notePanel.querySelector(".notes-editor")
 if(!editor) return
 const htmlUk=getWelcomeNoteHtml("uk")
 const htmlEn=getWelcomeNoteHtml("en")
 const currentHtml=String(editor.innerHTML || "").trim()
 if(currentHtml!==htmlUk && currentHtml!==htmlEn) return
 const nextHtml=getWelcomeNoteHtml()
 if(currentHtml===nextHtml) return
 editor.innerHTML=nextHtml
 if(notesItems.length>0){
  notesItems[0]=nextHtml
  saveNotesItems()
 }
}

function isWelcomeNotePanel(panel){
 if(!panel?.classList?.contains("notes")) return false
 const noteIndex=Math.max(0,Number(panel.dataset.noteIndex)||0)
 if(noteIndex!==0) return false
 const editor=panel.querySelector(".notes-editor")
 if(!editor) return false
 const html=String(editor.innerHTML || "").trim()
 return html===getWelcomeNoteHtml("uk") || html===getWelcomeNoteHtml("en")
}

function centerPanelOnScreen(panel){
 if(!panel) return
 const panelWidth=panel.offsetWidth || 360
 const panelHeight=panel.offsetHeight || 250
 const centeredX=Math.max(20,Math.round((window.innerWidth-panelWidth)/2))
 const centeredY=Math.max(getPanelTopSafeY(),Math.round((window.innerHeight-panelHeight)/2))
 panel.style.left=`${centeredX}px`
 panel.style.top=`${centeredY}px`
 panel.dataset.expandedX=String(centeredX)
 panel.dataset.expandedY=String(centeredY)
}

function normalizeNotesItems(items){
 const source=Array.isArray(items)?items:[]
 const normalized=source.slice(0,MAX_NOTES_PANELS).map(item=>typeof item==="string" ? normalizeLegacyNoteToHtml(item) : "")
 return normalized
}

function normalizeNoteTitle(value){
 return String(value || "").replace(/\s+/g," ").trim().slice(0,40)
}

function normalizeNotesTitles(titles,count=notesItems.length){
 const safeCount=Math.max(MIN_NOTES_PANELS,Math.min(MAX_NOTES_PANELS,Number(count)||MIN_NOTES_PANELS))
 const source=Array.isArray(titles) ? titles : []
 return Array.from({length:safeCount},(_,index)=>normalizeNoteTitle(source[index]))
}

function loadStoredNotesItems(){
 try{
  const parsed=JSON.parse(localStorage.getItem(NOTES_ITEMS_KEY) || "null")
  if(Array.isArray(parsed)) return normalizeNotesItems(parsed)
 }catch{}
 const legacyText=localStorage.getItem("notesTextV1")
 if(legacyText===null || legacyText==="") return normalizeNotesItems([])
 return normalizeNotesItems([legacyText])
}

function loadStoredNotesTitles(){
 try{
  const parsed=JSON.parse(localStorage.getItem(NOTES_TITLES_KEY) || "null")
  if(Array.isArray(parsed)) return normalizeNotesTitles(parsed,notesItems.length)
 }catch{}
 return normalizeNotesTitles([],notesItems.length)
}

function saveNotesItems(){
 notesItems=normalizeNotesItems(notesItems)
 localStorage.setItem(NOTES_ITEMS_KEY,JSON.stringify(notesItems))
 localStorage.setItem("notesTextV1",notesItems[0] || "")
 localStorage.removeItem("notesHeightV1")
}

function saveNotesTitles(){
 noteTitles=normalizeNotesTitles(noteTitles,notesItems.length)
 localStorage.setItem(NOTES_TITLES_KEY,JSON.stringify(noteTitles))
}

function loadStoredNotesPanelLayouts(){
 try{
  const parsed=JSON.parse(localStorage.getItem(NOTES_PANEL_LAYOUTS_KEY) || "{}")
  return parsed && typeof parsed==="object" ? parsed : {}
 }catch{
  return {}
 }
}

function saveNotesPanelLayouts(){
 localStorage.setItem(NOTES_PANEL_LAYOUTS_KEY,JSON.stringify(notesPanelLayouts))
}

function loadStoredPnlCaptureDates(){
 try{
  const parsed=JSON.parse(localStorage.getItem(PNL_CAPTURE_DATES_KEY) || "null")
  return Array.isArray(parsed) ? parsed : []
 }catch{
  return []
 }
}

function isValidPnlDateKey(value){
 if(typeof value!=="string") return false
 if(!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
 const parsed=new Date(`${value}T00:00:00`)
 if(Number.isNaN(parsed.getTime())) return false
 const [year,month,day]=value.split("-").map(Number)
 return parsed.getFullYear()===year && (parsed.getMonth()+1)===month && parsed.getDate()===day
}

function getLocalDateKey(date=new Date()){
 const year=date.getFullYear()
 const month=String(date.getMonth()+1).padStart(2,"0")
 const day=String(date.getDate()).padStart(2,"0")
 return `${year}-${month}-${day}`
}

function normalizePnlCaptureDates(){
 if(!Array.isArray(tradeCaptureDates)) tradeCaptureDates=[]
 tradeCaptureDates=tradeCaptureDates.map(value=>isValidPnlDateKey(value) ? value : null)
 while(tradeCaptureDates.length<daySessions.length) tradeCaptureDates.push(null)
 if(tradeCaptureDates.length>daySessions.length) tradeCaptureDates=tradeCaptureDates.slice(0,daySessions.length)
 if(tradeCaptureDates.some(Boolean)) return
 const hasStoredHistory=Array.isArray(totalHistory) && totalHistory.some(value=>value!==null && value!==undefined)
 if(!hasStoredHistory) return
 const fallbackDate=getLocalDateKey()
 totalHistory.forEach((value,index)=>{
  if(value===null || value===undefined) return
  tradeCaptureDates[index]=fallbackDate
 })
}

function savePnlCaptureDates(){
 localStorage.setItem(PNL_CAPTURE_DATES_KEY,JSON.stringify(tradeCaptureDates))
}

function savePnlCalendarPreferences(){
 localStorage.setItem(PNL_CALENDAR_MODE_KEY,pnlCalendarMode)
 localStorage.setItem(PNL_CALENDAR_YEAR_KEY,String(pnlCalendarYear))
 localStorage.setItem(PNL_CALENDAR_MONTH_KEY,String(pnlCalendarMonth))
}

function createEmptyDaySession(startValue="",rowsCount=MIN_TRADES){
 const numericStart=startValue==="" ? 0 : (parseFloat(startValue) || 0)
 const safeRows=Math.max(MIN_TRADES,Number(rowsCount)||MIN_TRADES)
 return {
  startDeposit:numericStart,
  startDepositInputValue:startValue,
  trades:Array.from({length:safeRows},()=>({result:null,profit:""})),
  contractNames:Array.from({length:safeRows},()=>(""))
 }
}

function normalizeDaySessions(){
 if(!Array.isArray(daySessions) || !daySessions.length){
  daySessions=[{
   startDeposit,
   startDepositInputValue:startDepositInput.value,
   trades:cloneData(trades),
   contractNames:cloneData(contractNames)
  }]
 }
 daySessions=daySessions.map(day=>({
  startDeposit:Number(day?.startDeposit)||0,
  startDepositInputValue:day?.startDepositInputValue ?? (Number(day?.startDeposit)||0 ? String(Number(day.startDeposit)) : ""),
  trades:Array.isArray(day?.trades)?cloneData(day.trades):Array.from({length:MIN_TRADES},()=>({result:null,profit:""})),
  contractNames:Array.isArray(day?.contractNames)?cloneData(day.contractNames):Array.from({length:MIN_TRADES},()=>(""))
 }))
 if(activeDayIndex>=daySessions.length) activeDayIndex=daySessions.length-1
 while(totalHistory.length<daySessions.length) totalHistory.push(null)
 if(totalHistory.length>daySessions.length) totalHistory=totalHistory.slice(0,daySessions.length)
 normalizePnlCaptureDates()
}

function saveDaySessions(){
 normalizePnlCaptureDates()
 localStorage.setItem(DAY_SESSIONS_KEY,JSON.stringify(daySessions))
 localStorage.setItem(ACTIVE_DAY_KEY,String(activeDayIndex))
 savePnlCaptureDates()
}

function getPanelStates(){
 const panels={}
 document.querySelectorAll(PANEL_SELECTOR).forEach(el=>{
  const id=el.dataset.dragId
  if(!id) return
  const persistSize=shouldPersistPanelSize(el)
  const currentX=parseFloat(el.style.left)||el.offsetLeft||0
  const currentY=parseFloat(el.style.top)||el.offsetTop||0
  const storedExpandedX=parseFloat(el.dataset.expandedX)
  const storedExpandedY=parseFloat(el.dataset.expandedY)
  const storedFolderX=parseFloat(el.dataset.folderX)
  const storedFolderY=parseFloat(el.dataset.folderY)
  const expandedX=el.classList.contains("collapsed")
   ? (Number.isFinite(storedExpandedX) ? storedExpandedX : currentX)
   : currentX
  const expandedY=el.classList.contains("collapsed")
   ? (Number.isFinite(storedExpandedY) ? storedExpandedY : currentY)
   : currentY
  const folderX=el.classList.contains("collapsed")
   ? currentX
   : (Number.isFinite(storedFolderX) ? storedFolderX : currentX)
  const folderY=el.classList.contains("collapsed")
   ? currentY
   : (Number.isFinite(storedFolderY) ? storedFolderY : currentY)
  panels[id]={
 x:currentX,
 y:currentY,
 expandedX,
 expandedY,
 folderX,
 folderY,
 z:parseInt(el.style.zIndex,10)||10,
  width:persistSize?(parseFloat(el.style.width)||el.offsetWidth||0):null,
  height:persistSize?(parseFloat(el.style.height)||el.offsetHeight||0):null,
  collapsed:el.classList.contains("collapsed"),
  hidden:el.classList.contains("panel-hidden")
  }
 })
 return panels
}

function shouldPersistPanelSize(el){
 return !!el?.classList.contains("notes")
}

function isPanelResizable(el){
 if(!el?.classList) return false
 return el.classList.contains("notes") || el.classList.contains("totals")
}

function serializeAppState(){
 return JSON.stringify({
  calculator:{
   profit:document.getElementById("profit").value,
   entry:document.getElementById("entry").value,
   exit:document.getElementById("exit").value,
   leverage:document.getElementById("leverage").value
  },
  trades:cloneData(trades),
  totalHistory:cloneData(totalHistory),
  contractNames:cloneData(contractNames),
  daySessions:cloneData(daySessions),
 activeDayIndex,
 startDeposit,
  startDepositInputValue:startDepositInput.value,
  notes:{
   items:cloneData(notesItems),
   titles:cloneData(noteTitles),
   layouts:cloneData(notesPanelLayouts)
  },
  chart:{
   mode:chartViewMode
  },
  pnlCalendar:{
   mode:pnlCalendarMode,
   year:pnlCalendarYear,
   month:pnlCalendarMonth,
   captureDates:cloneData(tradeCaptureDates)
  },
  toolbar:{
   isPinned
  },
  margin:{
   flipped:marginFlipped
  },
  tracker:{
   flipped:trackerFlipped
  },
  totals:{
   flipped:totalsFlipped
  },
  clocks:{
   flipped:clockFlipped,
   slots:cloneData(clockSlotIds)
  },
  panels:getPanelStates(),
  workspace:{
   backgroundPosition:document.body.style.backgroundPosition || "",
   topZIndex
  }
 })
}

function serializeExportState(){
 const state=JSON.parse(serializeAppState())
 const exportState={
  trades:cloneData(state.trades ?? []),
  totalHistory:cloneData(state.totalHistory ?? []),
  contractNames:cloneData(state.contractNames ?? []),
  daySessions:cloneData(state.daySessions ?? []),
  activeDayIndex:Math.max(0,Math.floor(Number(state.activeDayIndex) || 0)),
  startDeposit:Number(state.startDeposit) || 0,
  startDepositInputValue:state.startDepositInputValue ?? "",
  pnlCalendar:{
   captureDates:cloneData(state.pnlCalendar?.captureDates ?? [])
  },
  notes:{
   items:cloneData(state.notes?.items ?? []),
   titles:cloneData(state.notes?.titles ?? []),
   layouts:cloneData(state.notes?.layouts ?? {})
  },
  panels:cloneData(state.panels ?? {}),
  workspace:cloneData(state.workspace ?? {})
 }
 return JSON.stringify(exportState)
}

function sanitizeHistoryStack(stack){
 if(!Array.isArray(stack)) return []
 return stack
  .filter(item=>typeof item==="string" && item.trim()!=="")
  .slice(-UNDO_LIMIT)
}

function persistUndoHistory(){
 const payloadBase={
  lastCommittedState:typeof lastCommittedState==="string" ? lastCommittedState : "",
  anchorState:(typeof lastCommittedState==="string" && lastCommittedState!=="")
   ? lastCommittedState
   : serializeAppState()
 }
 let undoPayload=sanitizeHistoryStack(undoStack)
 let redoPayload=sanitizeHistoryStack(redoStack)
 while(true){
  try{
   localStorage.setItem(UNDO_HISTORY_KEY,JSON.stringify({
    ...payloadBase,
    undoStack:undoPayload,
    redoStack:redoPayload
   }))
   return
  }catch{
   if(!undoPayload.length && !redoPayload.length){
    try{
     localStorage.removeItem(UNDO_HISTORY_KEY)
    }catch{}
    return
   }
   if(undoPayload.length>=redoPayload.length && undoPayload.length){
    undoPayload=undoPayload.slice(Math.ceil(undoPayload.length/2))
   }else if(redoPayload.length){
    redoPayload=redoPayload.slice(Math.ceil(redoPayload.length/2))
   }
  }
 }
}

function restoreUndoHistoryFromStorage(){
 try{
  const parsed=JSON.parse(localStorage.getItem(UNDO_HISTORY_KEY) || "null")
  if(!parsed || typeof parsed!=="object") return
  const currentState=lastCommittedState || serializeAppState()
  const anchorState=typeof parsed.anchorState==="string" && parsed.anchorState!==""
   ? parsed.anchorState
   : (typeof parsed.lastCommittedState==="string" ? parsed.lastCommittedState : "")
  if(!anchorState || anchorState!==currentState){
   undoStack=[]
   redoStack=[]
   persistUndoHistory()
   return
  }
  undoStack=sanitizeHistoryStack(parsed.undoStack)
  redoStack=sanitizeHistoryStack(parsed.redoStack)
  lastCommittedState=typeof parsed.lastCommittedState==="string" && parsed.lastCommittedState!==""
   ? parsed.lastCommittedState
   : currentState
 }catch{
  undoStack=[]
  redoStack=[]
  persistUndoHistory()
 }
}

function pushUndoSnapshot(snapshot){
 if(isRestoringHistory || !snapshot) return
 if(undoStack.length && undoStack[undoStack.length-1]===snapshot) return
 undoStack.push(snapshot)
 if(undoStack.length>UNDO_LIMIT) undoStack.shift()
}

function pushRedoSnapshot(snapshot){
 if(isRestoringHistory || !snapshot) return
 if(redoStack.length && redoStack[redoStack.length-1]===snapshot) return
 redoStack.push(snapshot)
 if(redoStack.length>UNDO_LIMIT) redoStack.shift()
}

function commitUndoableChange(action){
 if(isRestoringHistory){
  action()
  return
 }
 const before=lastCommittedState || serializeAppState()
 action()
 const after=serializeAppState()
 if(after!==before){
  pushUndoSnapshot(before)
  redoStack=[]
  lastCommittedState=after
  persistUndoHistory()
  requestCloudSync()
 }
}

function applySerializedState(snapshot,options={}){
 if(!snapshot) return
 const state=JSON.parse(snapshot)
 const applyLayout=options.applyLayout!==false
 isRestoringHistory=true
 clearSelectedPanels()

 document.getElementById("profit").value=state.calculator?.profit ?? ""
 document.getElementById("entry").value=state.calculator?.entry ?? ""
 document.getElementById("exit").value=state.calculator?.exit ?? ""
 document.getElementById("leverage").value=state.calculator?.leverage ?? "10"

 trades=Array.isArray(state.trades)?cloneData(state.trades):[]
 totalHistory=Array.isArray(state.totalHistory)?cloneData(state.totalHistory):[]
 contractNames=Array.isArray(state.contractNames)?cloneData(state.contractNames):[]
 daySessions=Array.isArray(state.daySessions)?cloneData(state.daySessions):[]
 notesItems=Array.isArray(state.notes?.items)
  ? normalizeNotesItems(cloneData(state.notes.items))
  : normalizeNotesItems((typeof state.notes?.text==="string" && state.notes.text!=="") ? [state.notes.text] : [])
 noteTitles=Array.isArray(state.notes?.titles)?normalizeNotesTitles(cloneData(state.notes.titles),notesItems.length):normalizeNotesTitles([],notesItems.length)
 if(applyLayout){
  notesPanelLayouts=state.notes?.layouts && typeof state.notes.layouts==="object" ? cloneData(state.notes.layouts) : {}
 }
 chartViewMode=(state.chart?.mode==="total" || state.chart?.mode==="month") ? state.chart.mode : "day"
 pnlCalendarMode=state.pnlCalendar?.mode==="monthly" ? "monthly" : "daily"
 pnlCalendarYear=Math.max(2026,Number(state.pnlCalendar?.year)||pnlCalendarYear)
 const restoredMonth=Number(state.pnlCalendar?.month)
 pnlCalendarMonth=Number.isFinite(restoredMonth) ? Math.max(0,Math.min(11,restoredMonth)) : pnlCalendarMonth
 tradeCaptureDates=Array.isArray(state.pnlCalendar?.captureDates) ? cloneData(state.pnlCalendar.captureDates) : []
 normalizePnlCaptureDates()
 activeDayIndex=Math.max(0,Number(state.activeDayIndex)||0)
 startDeposit=Number(state.startDeposit)||0
 startDepositInput.value=state.startDepositInputValue ?? (startDeposit===0 ? "" : String(startDeposit))
 isPinned=!!state.toolbar?.isPinned
 marginFlipped=!!state.margin?.flipped
 trackerFlipped=!!state.tracker?.flipped
 totalsFlipped=!!state.totals?.flipped
 clockFlipped=!!state.clocks?.flipped
 clockSlotIds=normalizeClockSlotIds(state.clocks?.slots)

 syncNotesPanels(notesItems.length)

 if(applyLayout){
  document.body.style.backgroundPosition=state.workspace?.backgroundPosition || ""
  topZIndex=Math.max(10,Number(state.workspace?.topZIndex)||10)

  const panels=state.panels || {}
  document.querySelectorAll(PANEL_SELECTOR).forEach(el=>{
   const id=el.dataset.dragId
   const panelState=panels[id]
   if(!panelState) return
   const stateX=Number(panelState.x)
   const stateY=Number(panelState.y)
   const safeY=Math.max(getPanelTopSafeY(),Number.isFinite(stateY) ? stateY : 0)
   el.style.left=`${Number.isFinite(stateX) ? stateX : 0}px`
   el.style.top=`${safeY}px`
   const expandedX=parseFloat(panelState.expandedX)
   const expandedY=parseFloat(panelState.expandedY)
   const folderX=parseFloat(panelState.folderX)
   const folderY=parseFloat(panelState.folderY)
   el.dataset.expandedX=String(Number.isFinite(expandedX) ? expandedX : (Number.isFinite(stateX) ? stateX : 0))
   el.dataset.expandedY=String(Number.isFinite(expandedY) ? Math.max(getPanelTopSafeY(),expandedY) : safeY)
   el.dataset.folderX=String(Number.isFinite(folderX) ? folderX : (Number.isFinite(stateX) ? stateX : 0))
   el.dataset.folderY=String(Number.isFinite(folderY) ? Math.max(getPanelTopSafeY(),folderY) : safeY)
   el.style.zIndex=String(panelState.z || 10)
   if(shouldPersistPanelSize(el)){
    el.style.width=panelState.width?`${panelState.width}px`:""
    el.style.height=panelState.height?`${panelState.height}px`:""
   }else{
    el.style.width=""
    el.style.height=""
   }
   el.classList.toggle("collapsed",!!panelState.collapsed)
   el.classList.toggle("panel-hidden",!!panelState.hidden)
   topZIndex=Math.max(topZIndex,Number(panelState.z)||10)
  })
 }

 saveTrades()
 saveTotalHistory()
 saveContractNames()
 saveDaySessions()
 if(startDepositInput.value===""){
  localStorage.removeItem("startDepositV2")
 }else{
  localStorage.setItem("startDepositV2",startDepositInput.value)
 }
 localStorage.setItem(PIN_KEY,isPinned?"1":"0")
 localStorage.setItem(CHART_MODE_KEY,chartViewMode)
 savePnlCaptureDates()
 savePnlCalendarPreferences()
 saveClockSlotIds()
 localStorage.setItem(MARGIN_FLIP_KEY,marginFlipped?"1":"0")
 localStorage.setItem(TOTALS_FLIP_KEY,totalsFlipped?"1":"0")
 localStorage.setItem(CLOCK_FLIP_KEY,clockFlipped?"1":"0")
 saveNotesItems()
 saveNotesTitles()
 saveNotesPanelLayouts()

 buildRows()
 updateTotals()
 renderTotalHistory()
 updateMarginFlipUI()
 updateTrackerFlipUI()
 updateTotalsFlipUI()
 renderClockSelectOptions()
 updateClockFlipUI()
 updateMarketClocks()
 updateMarginCardHeight()
 updateTrackerCardHeight()
 updateTotalsCardHeight()
 updateClockCardHeight()
 updateToolbar()
 renderSideMenuList()
 calculate()
 savePositions()

 lastCommittedState=serializeAppState()
 isRestoringHistory=false
 persistUndoHistory()
}

function undoLastAction(){
 if(!undoStack.length) return
 const currentState=lastCommittedState || serializeAppState()
 pushRedoSnapshot(currentState)
 applySerializedState(undoStack.pop())
}

function redoLastAction(){
 if(!redoStack.length) return
 const currentState=lastCommittedState || serializeAppState()
 pushUndoSnapshot(currentState)
 applySerializedState(redoStack.pop())
}

startDepositInput.addEventListener("input",()=>{
 commitUndoableChange(()=>{
  const rawValue=startDepositInput.value.trim()
  startDeposit=rawValue==="" ? 0 : (parseFloat(rawValue)||0)
  if(rawValue===""){
   localStorage.removeItem("startDepositV2")
  }else{
   localStorage.setItem("startDepositV2",rawValue)
  }
  updateTotals()
 })
})

function normalizeTrades(){
 trades=trades.map(t=>t||{result:null,profit:""})
 while(trades.length<MIN_TRADES) trades.push({result:null,profit:""})
}

function saveTrades(){
 localStorage.setItem("tradesV2",JSON.stringify(trades))
}

function saveTotalHistory(){
 localStorage.setItem(TOTALS_KEY,JSON.stringify(totalHistory))
}

function normalizeContractNames(){
 contractNames=contractNames.map(name=>typeof name==="string" ? name : "")
 while(contractNames.length<trades.length) contractNames.push("")
 if(contractNames.length>trades.length) contractNames=contractNames.slice(0,trades.length)
}

function saveContractNames(){
 localStorage.setItem(CONTRACT_NAMES_KEY,JSON.stringify(contractNames))
}

function syncActiveDayStorage(){
 saveTrades()
 saveContractNames()
 if(startDepositInput.value===""){
  localStorage.removeItem("startDepositV2")
 }else{
  localStorage.setItem("startDepositV2",startDepositInput.value)
 }
}

function getTrackerVisibleDayIndices(){
 normalizeDaySessions()
 const allIndices=daySessions.map((_,index)=>index)
 if(!totalsMonthFilterKey) return allIndices
 const visibleSet=new Set(
  getCapturedTotalEntries()
   .filter(entry=>entry.monthKey===totalsMonthFilterKey)
   .map(entry=>Math.floor(Number(entry.index)))
   .filter(index=>Number.isFinite(index) && index>=0 && index<daySessions.length)
 )
 allIndices.forEach(index=>{
  const hasCapturedValue=totalHistory[index]!==null && totalHistory[index]!==undefined
  if(hasCapturedValue) return
  const dateKey=tradeCaptureDates[index]
  if(!isValidPnlDateKey(dateKey)) return
  if(String(dateKey).slice(0,7)===totalsMonthFilterKey){
   visibleSet.add(index)
  }
 })
 return allIndices.filter(index=>visibleSet.has(index))
}

function getVisibleTradeOrdinal(dayIndex=activeDayIndex){
 const visibleDayIndices=getTrackerVisibleDayIndices()
 const safeDayIndex=Math.max(0,Math.floor(Number(dayIndex) || 0))
 const visiblePosition=visibleDayIndices.indexOf(safeDayIndex)
 return visiblePosition>=0 ? visiblePosition+1 : safeDayIndex+1
}

function getOverallTotalProfitSum(){
 return Array.isArray(totalHistory) ? totalHistory.reduce((sum,value)=>sum+(value==null ? 0 : Number(value||0)),0) : 0
}

function updateWeeklyTradeHeaderLabel(){
 if(!weeklyProfitLabelEl) return
 const tradeIndex=getVisibleTradeOrdinal(activeDayIndex)
 const isLoss=latestWeeklyProfit<0
 const prefix=t("weeklyTradePrefix",{index:tradeIndex})
 const word=isLoss ? t("weeklyLossWord") : t("weeklyProfitWord")
 weeklyProfitLabelEl.innerHTML=`<span class="label-prefix">${prefix}</span> <span class="label-word ${isLoss?"negative":"positive"}">${word}</span>`
}

function updateWeeklyTotalProfitDisplay(totalSum=getOverallTotalProfitSum()){
 if(!weeklyTotalProfitValueEl) return
 const value=Number(totalSum)||0
 const sign=value>0?"+":""
 weeklyTotalProfitValueEl.innerText=`${sign}${formatAmount(value)}$`
 weeklyTotalProfitValueEl.classList.toggle("positive",value>0)
 weeklyTotalProfitValueEl.classList.toggle("negative",value<0)
}

function renderDayTabs(){
 if(!dayTabsEl) return
 normalizeDaySessions()
 const visibleDayIndices=getTrackerVisibleDayIndices()
 const dayTabsHtml=visibleDayIndices.map((dayIndex,visibleIndex)=>`
<button class="day-tab ${dayIndex===activeDayIndex ? "active" : ""}" type="button" data-day-index="${dayIndex}">T${visibleIndex+1}</button>
`).join("")
 dayTabsEl.innerHTML=dayTabsHtml
 if(dayTabsAddBtn){
  const addTradeLabel=t("addTradeTab")
  dayTabsAddBtn.setAttribute("aria-label",addTradeLabel)
  dayTabsAddBtn.title=addTradeLabel
 }
 applyLowercaseButtonTooltips()
 requestAnimationFrame(()=>{
  const activeTab=dayTabsEl.querySelector(".day-tab.active")
  if(activeTab) activeTab.scrollIntoView({block:"nearest",inline:"nearest"})
  updateDayTabsNavigation()
 })
}

function updateDayTabsNavigation(){
 if(!dayTabsShell || !dayTabsEl || !dayTabsPrevBtn || !dayTabsNextBtn) return
 const visibleTabsCount=dayTabsEl.querySelectorAll(".day-tab").length
 const hasNav=visibleTabsCount>8
 dayTabsShell.classList.toggle("has-nav",hasNav)
 if(!hasNav){
  dayTabsPrevBtn.disabled=true
  dayTabsNextBtn.disabled=true
  dayTabsEl.scrollLeft=0
  return
 }
 const maxScroll=Math.max(0,dayTabsEl.scrollWidth-dayTabsEl.clientWidth)
 dayTabsPrevBtn.disabled=dayTabsEl.scrollLeft<=2
 dayTabsNextBtn.disabled=dayTabsEl.scrollLeft>=maxScroll-2
}

function saveCurrentDayState(){
 normalizeDaySessions()
 normalizeTrades()
 normalizeContractNames()
 daySessions[activeDayIndex]={
  startDeposit,
  startDepositInputValue:startDepositInput.value,
  trades:cloneData(trades),
  contractNames:cloneData(contractNames)
 }
 syncActiveDayStorage()
 saveDaySessions()
}

function loadDay(index){
 normalizeDaySessions()
 activeDayIndex=Math.max(0,Math.min(index,daySessions.length-1))
 const day=daySessions[activeDayIndex]
 trades=cloneData(day.trades)
 contractNames=cloneData(day.contractNames)
 startDeposit=Number(day.startDeposit)||0
 startDepositInput.value=day.startDepositInputValue ?? (startDeposit===0 ? "" : String(startDeposit))
 syncActiveDayStorage()
 saveDaySessions()
 buildRows()
 updateTotals()
 renderDayTabs()
}

function formatDayStartValue(value){
 if(!Number.isFinite(value)) return ""
 return value % 1 === 0 ? String(value) : value.toFixed(2)
}

function addNewDaySession(){
 normalizeDaySessions()
 updateTotals()
 const nextStartValue=formatDayStartValue(latestEndingDeposit)
 daySessions.push(createEmptyDaySession(nextStartValue,NEW_TRADE_INITIAL_ROWS))
 while(totalHistory.length<daySessions.length) totalHistory.push(null)
 while(tradeCaptureDates.length<daySessions.length) tradeCaptureDates.push(null)
 activeDayIndex=daySessions.length-1
 saveTotalHistory()
 savePnlCaptureDates()
 saveDaySessions()
 renderTotalHistory()
 loadDay(activeDayIndex)
}

function deleteLastDaySession(){
 deleteDaySessionByIndex(daySessions.length-1)
}

function daySessionHasUserData(day){
 if(!day || typeof day!=="object") return false
 const hasStartValue=String(day.startDepositInputValue ?? "").trim()!==""
 const hasTrades=Array.isArray(day.trades) && day.trades.some(trade=>{
  if(!trade || typeof trade!=="object") return false
  const hasResult=trade.result==="win" || trade.result==="loss"
  const hasProfit=String(trade.profit ?? "").trim()!==""
  return hasResult || hasProfit
 })
 const hasContracts=Array.isArray(day.contractNames) && day.contractNames.some(name=>String(name ?? "").trim()!=="")
 return hasStartValue || hasTrades || hasContracts
}

function hasAnyTrackerData(){
 normalizeDaySessions()
 const hasCapturedHistory=Array.isArray(totalHistory) && totalHistory.some(value=>value!==null && value!==undefined)
 if(hasCapturedHistory) return true
 return daySessions.some(daySessionHasUserData)
}

function hideTrackerPanel(){
 if(!trackerPanel) return
 trackerPanel.classList.add("panel-hidden")
 removePanelFromSelection(trackerPanel)
 savePositions()
 renderSideMenuList()
}

function deleteDaySessionByIndex(targetIndex){
 normalizeDaySessions()
 if(daySessions.length<=1){
  daySessions=[createEmptyDaySession("")]
  totalHistory=[null]
  tradeCaptureDates=[null]
  activeDayIndex=0
  trades=cloneData(daySessions[0].trades)
  contractNames=cloneData(daySessions[0].contractNames)
  startDeposit=0
  startDepositInput.value=""
 syncActiveDayStorage()
 saveTotalHistory()
 savePnlCaptureDates()
 saveDaySessions()
 buildRows()
 updateTotals()
 renderTotalHistory()
  return
 }
 const safeTargetIndex=Math.max(0,Math.min(daySessions.length-1,Math.floor(Number(targetIndex) || 0)))
 daySessions.splice(safeTargetIndex,1)
 if(totalHistory.length>safeTargetIndex){
  totalHistory.splice(safeTargetIndex,1)
 }
 if(tradeCaptureDates.length>safeTargetIndex){
  tradeCaptureDates.splice(safeTargetIndex,1)
 }
 while(totalHistory.length<daySessions.length) totalHistory.push(null)
 while(tradeCaptureDates.length<daySessions.length) tradeCaptureDates.push(null)
 if(activeDayIndex>safeTargetIndex){
  activeDayIndex-=1
 }else if(activeDayIndex===safeTargetIndex){
  activeDayIndex=Math.max(0,safeTargetIndex-1)
 }
 activeDayIndex=Math.min(Math.max(0,activeDayIndex),daySessions.length-1)
 saveTotalHistory()
 savePnlCaptureDates()
 saveDaySessions()
 loadDay(activeDayIndex)
 renderTotalHistory()
}

function renderContractRows(){
 if(!contractRowsEl) return
 normalizeContractNames()
 contractRowsEl.innerHTML=contractNames.map((name,i)=>`
<div class="contract-row" data-index="${i}">
  <div class="contract-index">${i+1}</div>
  <input class="contract-input" type="text" value="${escapeHtml(name)}" placeholder="${i===0 ? t("contractNamePlaceholder") : ""}" data-index="${i}">
  <div class="contract-handle-cell"><button class="contract-drag-handle" type="button" aria-label="${t("reorderContract")}" title="${t("reorderContract")}">≡</button></div>
</div>
`).join("")
 applyLowercaseButtonTooltips()
 updateTrackerCardHeight()
}

function updateMarginCardHeight(){
 if(!marginFlipShell || !marginCard) return
 const faces=[...marginCard.querySelectorAll(".margin-face")]
 if(!faces.length) return
 const maxHeight=Math.max(...faces.map(face=>face.scrollHeight))
 marginFlipShell.style.height=`${maxHeight}px`
}

function refreshMarginPanelLayout(){
 if(!marginPanel || marginPanel.classList.contains("panel-hidden") || marginPanel.classList.contains("collapsed")) return
 requestAnimationFrame(()=>{
  if(!marginPanel || marginPanel.classList.contains("panel-hidden") || marginPanel.classList.contains("collapsed")) return
  if(marginFlipShell) marginFlipShell.style.height=""
  updateMarginCardHeight()
  requestAnimationFrame(()=>{
   if(!marginPanel || marginPanel.classList.contains("panel-hidden") || marginPanel.classList.contains("collapsed")) return
   updateMarginCardHeight()
  })
 })
}

function updateMarginFlipUI(){
 if(!marginCard || !marginFlipBtn) return
 marginCard.classList.toggle("flipped",marginFlipped)
 marginFlipBtn.classList.toggle("active",marginFlipped)
 if(marginTitleEl){
  marginTitleEl.innerText=t(marginFlipped ? "marginBackCalculator" : "marginCalculator")
 }
 localStorage.setItem(MARGIN_FLIP_KEY,marginFlipped?"1":"0")
 updateMarginCardHeight()
}

function triggerMarginFlipMotion(){
 if(!marginCard) return
 marginCard.classList.remove("is-flipping")
 void marginCard.offsetWidth
 marginCard.classList.add("is-flipping")
}

function formatMarginCalcValue(value){
 if(!Number.isFinite(value)) return "Error"
 const rounded=Math.round(value*10000000000)/10000000000
 if(Object.is(rounded,-0)) return "0"
 const fixed=Number.isInteger(rounded) ? String(rounded) : String(rounded).replace(/\.?0+$/,"")
 return fixed==="" ? "0" : fixed
}

function getMarginCalcOperatorSymbol(operator){
 if(operator==="*") return "×"
 if(operator==="/") return "÷"
 return operator || ""
}

function getMarginCalcDisplayText(){
 if(marginCalcCurrentValue==="Error") return "Error"
 if(marginCalcPendingOperator){
  const leftValue=Number.isFinite(marginCalcStoredValue)
   ? formatMarginCalcValue(marginCalcStoredValue)
   : "0"
  const operatorSymbol=getMarginCalcOperatorSymbol(marginCalcPendingOperator)
  if(marginCalcWaitingForOperand){
   return `${leftValue}${operatorSymbol}`
  }
  return `${leftValue}${operatorSymbol}${marginCalcCurrentValue}`
 }
 return marginCalcCurrentValue
}

function refreshMarginCalcDisplay(){
 if(marginCalcDisplayEl){
  marginCalcDisplayEl.innerText=getMarginCalcDisplayText()
 }
}

function setMarginCalcDisplay(nextValue){
 marginCalcCurrentValue=String(nextValue ?? "0")
 refreshMarginCalcDisplay()
}

function resetMarginBasicCalculator(){
 marginCalcCurrentValue="0"
 marginCalcStoredValue=null
 marginCalcPendingOperator=null
 marginCalcWaitingForOperand=false
 setMarginCalcDisplay("0")
}

function getMarginCalcOperand(){
 const value=Number(marginCalcCurrentValue)
 return Number.isFinite(value) ? value : 0
}

function applyMarginCalcOperation(left,right,operator){
 if(!Number.isFinite(left) || !Number.isFinite(right)) return null
 if(operator==="+") return left+right
 if(operator==="-") return left-right
 if(operator==="*") return left*right
 if(operator==="/"){
  if(Math.abs(right)<0.0000000001) return null
  return left/right
 }
 return right
}

function inputMarginCalcDigit(digit){
 if(!/^\d$/.test(String(digit))) return
 if(marginCalcCurrentValue==="Error"){
  resetMarginBasicCalculator()
 }
 if(marginCalcWaitingForOperand){
  setMarginCalcDisplay(String(digit))
  marginCalcWaitingForOperand=false
  return
 }
 if(marginCalcCurrentValue==="0"){
  setMarginCalcDisplay(String(digit))
  return
 }
 setMarginCalcDisplay(`${marginCalcCurrentValue}${digit}`)
}

function inputMarginCalcDot(){
 if(marginCalcCurrentValue==="Error"){
  resetMarginBasicCalculator()
 }
 if(marginCalcWaitingForOperand){
  setMarginCalcDisplay("0.")
  marginCalcWaitingForOperand=false
  return
 }
 if(marginCalcCurrentValue.includes(".")) return
 setMarginCalcDisplay(`${marginCalcCurrentValue}.`)
}

function handleMarginCalcOperator(nextOperator){
 if(!["+", "-", "*", "/"].includes(nextOperator)) return
 if(marginCalcCurrentValue==="Error"){
  resetMarginBasicCalculator()
 }
 const currentValue=getMarginCalcOperand()
 if(marginCalcStoredValue===null){
  marginCalcStoredValue=currentValue
 }else if(!marginCalcWaitingForOperand && marginCalcPendingOperator){
  const computed=applyMarginCalcOperation(marginCalcStoredValue,currentValue,marginCalcPendingOperator)
  if(computed===null){
   setMarginCalcDisplay("Error")
   marginCalcStoredValue=null
   marginCalcPendingOperator=null
   marginCalcWaitingForOperand=false
   return
  }
  marginCalcStoredValue=computed
  setMarginCalcDisplay(formatMarginCalcValue(computed))
 }
 marginCalcPendingOperator=nextOperator
 marginCalcWaitingForOperand=true
 refreshMarginCalcDisplay()
}

function handleMarginCalcEquals(){
 if(marginCalcCurrentValue==="Error"){
  resetMarginBasicCalculator()
  return
 }
 if(!marginCalcPendingOperator){
  marginCalcWaitingForOperand=true
  refreshMarginCalcDisplay()
  return
 }
 const currentValue=getMarginCalcOperand()
 const leftValue=marginCalcStoredValue===null ? currentValue : marginCalcStoredValue
 const computed=applyMarginCalcOperation(leftValue,currentValue,marginCalcPendingOperator)
 if(computed===null){
  setMarginCalcDisplay("Error")
 }else{
  setMarginCalcDisplay(formatMarginCalcValue(computed))
 }
 marginCalcStoredValue=null
 marginCalcPendingOperator=null
 marginCalcWaitingForOperand=true
}

function toggleMarginCalcSign(){
 if(marginCalcCurrentValue==="Error") return
 const currentValue=getMarginCalcOperand()
 const toggled=-currentValue
 setMarginCalcDisplay(formatMarginCalcValue(toggled))
}

function applyMarginCalcPercent(){
 if(marginCalcCurrentValue==="Error") return
 const currentValue=getMarginCalcOperand()
 setMarginCalcDisplay(formatMarginCalcValue(currentValue/100))
}

function backspaceMarginCalcValue(){
 if(marginCalcCurrentValue==="Error"){
  resetMarginBasicCalculator()
  return
 }
 if(marginCalcWaitingForOperand && marginCalcPendingOperator){
  const storedValue=Number.isFinite(marginCalcStoredValue) ? marginCalcStoredValue : 0
  marginCalcPendingOperator=null
  marginCalcStoredValue=null
  marginCalcWaitingForOperand=false
  setMarginCalcDisplay(formatMarginCalcValue(storedValue))
  return
 }
 const raw=String(marginCalcCurrentValue || "")
 const next=raw.length>1 ? raw.slice(0,-1) : "0"
 if(next==="-" || next==="-0"){
  setMarginCalcDisplay("0")
  return
 }
 setMarginCalcDisplay(next)
}

function handleMarginCalcKey(key){
 const normalized=String(key || "")
 if(/^\d$/.test(normalized)){
  inputMarginCalcDigit(normalized)
  refreshMarginCalcDisplay()
  return true
 }
 if(normalized==="."){
  inputMarginCalcDot()
  refreshMarginCalcDisplay()
  return true
 }
 if(normalized==="C"){
  resetMarginBasicCalculator()
  refreshMarginCalcDisplay()
  return true
 }
 if(normalized==="sign"){
  toggleMarginCalcSign()
  refreshMarginCalcDisplay()
  return true
 }
 if(normalized==="%"){
  applyMarginCalcPercent()
  refreshMarginCalcDisplay()
  return true
 }
 if(normalized==="="){
  handleMarginCalcEquals()
  refreshMarginCalcDisplay()
  return true
 }
 if(["+","-","*","/"].includes(normalized)){
  handleMarginCalcOperator(normalized)
  refreshMarginCalcDisplay()
  return true
 }
 return false
}

function initMarginBasicCalculator(){
 if(!marginCalcPadEl) return
 if(marginCalcPadEl.dataset.ready==="1") return
 marginCalcPadEl.dataset.ready="1"
 marginCalcPadEl.addEventListener("click",(e)=>{
  const btn=e.target.closest("button[data-calc-key]")
  if(!btn || btn.disabled) return
  e.preventDefault()
  handleMarginCalcKey(btn.dataset.calcKey)
 })
 resetMarginBasicCalculator()
}

function initMarginBasicCalculatorKeyboard(){
 if(document.body.dataset.marginCalcKeyboardReady==="1") return
 document.body.dataset.marginCalcKeyboardReady="1"
document.addEventListener("keydown",(e)=>{
  if(isLocked || isResetConfirmOpen || isDonationScreenOpen) return
  if(!marginFlipped) return
  if(!marginPanel || marginPanel.classList.contains("panel-hidden") || marginPanel.classList.contains("collapsed")) return
  const target=e.target
  const tag=(target?.tagName || "").toLowerCase()
  const isTypingTarget=
   ["input","textarea","select","button"].includes(tag) ||
   !!target?.isContentEditable ||
   !!target?.closest?.('[contenteditable="true"]')
  if(isTypingTarget) return
  if(e.ctrlKey || e.metaKey || e.altKey) return
  const key=String(e.key || "")
  let handled=false
  if(/^\d$/.test(key)){
   handled=handleMarginCalcKey(key)
  }else if(key==="." || key===","){
   handled=handleMarginCalcKey(".")
  }else if(["+","-","*","/","%","="].includes(key)){
   handled=handleMarginCalcKey(key)
  }else if(key==="Enter"){
   handled=handleMarginCalcKey("=")
  }else if(key==="Escape"){
   handled=handleMarginCalcKey("C")
  }else if(key==="Backspace"){
   backspaceMarginCalcValue()
   handled=true
  }
  if(handled){
   e.preventDefault()
  }
 })
}

function updateTrackerCardHeight(){
 if(!trackerFlipShell || !trackerCard) return
 const faces=[...trackerCard.querySelectorAll(".tracker-face")]
 if(!faces.length) return
 const maxHeight=Math.max(...faces.map(face=>face.scrollHeight))
 trackerFlipShell.style.height=`${maxHeight}px`
}

function refreshTrackerPanelLayout(){
 if(!trackerPanel || trackerPanel.classList.contains("panel-hidden") || trackerPanel.classList.contains("collapsed")) return
 requestAnimationFrame(()=>{
  if(!trackerPanel || trackerPanel.classList.contains("panel-hidden") || trackerPanel.classList.contains("collapsed")) return
  if(trackerFlipShell) trackerFlipShell.style.height=""
  renderDayTabs()
  updateDayTabsNavigation()
  updateTrackerCardHeight()
  requestAnimationFrame(()=>{
   if(!trackerPanel || trackerPanel.classList.contains("panel-hidden") || trackerPanel.classList.contains("collapsed")) return
   updateTrackerCardHeight()
  })
 })
}

function updateTrackerFlipUI(){
 if(!trackerCard || !trackerFlipBtn) return
 trackerCard.classList.toggle("flipped",trackerFlipped)
 trackerFlipBtn.classList.toggle("active",trackerFlipped)
 localStorage.setItem(TRACKER_FLIP_KEY,trackerFlipped?"1":"0")
 updateTrackerCardHeight()
}

function triggerTrackerFlipMotion(){
 if(!trackerCard) return
 trackerCard.classList.remove("is-flipping")
 void trackerCard.offsetWidth
 trackerCard.classList.add("is-flipping")
}

function updateClockCardHeight(){
 if(!clockFlipShell || !clockCard) return
 const faces=[...clockCard.querySelectorAll(".clock-face")]
 if(!faces.length) return
 const maxHeight=Math.max(...faces.map(face=>face.scrollHeight))
 clockFlipShell.style.height=`${maxHeight}px`
}

function refreshClockPanelLayout(){
 if(!clockPanel || clockPanel.classList.contains("panel-hidden") || clockPanel.classList.contains("collapsed")) return
 requestAnimationFrame(()=>{
  if(!clockPanel || clockPanel.classList.contains("panel-hidden") || clockPanel.classList.contains("collapsed")) return
  if(clockFlipShell) clockFlipShell.style.height=""
  updateClockCardHeight()
  requestAnimationFrame(()=>{
   if(!clockPanel || clockPanel.classList.contains("panel-hidden") || clockPanel.classList.contains("collapsed")) return
   updateClockCardHeight()
  })
 })
}

function updateClockFlipUI(){
 if(!clockCard || !clockFlipBtn) return
 clockCard.classList.toggle("flipped",clockFlipped)
 clockFlipBtn.classList.toggle("active",clockFlipped)
 localStorage.setItem(CLOCK_FLIP_KEY,clockFlipped?"1":"0")
 updateClockCardHeight()
}

function triggerClockFlipMotion(){
 if(!clockCard) return
 clockCard.classList.remove("is-flipping")
 void clockCard.offsetWidth
 clockCard.classList.add("is-flipping")
}

function updateTotalsCardHeight(){
 if(!totalsFlipShell || !totalsCard) return
 const faces=[...totalsCard.querySelectorAll(".totals-face")]
 if(!faces.length) return
 const maxFaceHeight=Math.max(...faces.map(face=>face.scrollHeight))
 let availableHeight=0
 if(totalsPanel){
  const panelStyles=getComputedStyle(totalsPanel)
  const paddingTop=parseFloat(panelStyles.paddingTop)||0
  const paddingBottom=parseFloat(panelStyles.paddingBottom)||0
  const titleEl=totalsPanel.querySelector("h3")
  const titleStyles=titleEl ? getComputedStyle(titleEl) : null
  const titleHeight=titleEl ? titleEl.offsetHeight : 0
  const titleMarginBottom=titleStyles ? (parseFloat(titleStyles.marginBottom)||0) : 0
  const panelInnerHeight=totalsPanel.clientHeight-paddingTop-paddingBottom
  availableHeight=Math.max(0,panelInnerHeight-titleHeight-titleMarginBottom)
 }
 const targetHeight=Math.max(maxFaceHeight,availableHeight)
 totalsFlipShell.style.height=`${Math.ceil(targetHeight)}px`
}

function refreshTotalsPanelLayout(){
 if(!totalsPanel || totalsPanel.classList.contains("panel-hidden") || totalsPanel.classList.contains("collapsed")) return
 requestAnimationFrame(()=>{
  if(!totalsPanel || totalsPanel.classList.contains("panel-hidden") || totalsPanel.classList.contains("collapsed")) return
  if(totalsFlipShell) totalsFlipShell.style.height=""
  updateTotalsCardHeight()
  requestAnimationFrame(()=>{
   if(!totalsPanel || totalsPanel.classList.contains("panel-hidden") || totalsPanel.classList.contains("collapsed")) return
   updateTotalsCardHeight()
  })
 })
}

function updateTotalsFlipUI(){
 if(!totalsCard || !totalsFlipBtn) return
 totalsCard.classList.toggle("flipped",totalsFlipped)
 totalsFlipBtn.classList.toggle("active",totalsFlipped)
 localStorage.setItem(TOTALS_FLIP_KEY,totalsFlipped?"1":"0")
 updateTotalsCardHeight()
}

function triggerTotalsFlipMotion(){
 if(!totalsCard) return
 totalsCard.classList.remove("is-flipping")
 void totalsCard.offsetWidth
 totalsCard.classList.add("is-flipping")
}

function renderClockSelectOptions(){
 if(!clockSelectEls.length) return
 clockSlotIds=normalizeClockSlotIds(clockSlotIds)
 clockSelectEls.forEach((select,index)=>{
  if(!select) return
  select.innerHTML=CLOCK_ZONE_OPTIONS.map(option=>{
   const label=`${getClockOffsetLabel(option)} ${getClockCityLabel(option)}`
   return `<option value="${option.id}">${escapeHtml(label)}</option>`
  }).join("")
  select.value=clockSlotIds[index]
  if(select.value!==clockSlotIds[index]){
   select.value=DEFAULT_CLOCK_SLOT_IDS[index] || DEFAULT_CLOCK_SLOT_IDS[0]
  }
  select.setAttribute("aria-label",t("clockSlotLabel",{index:index+1}))
  select.title=t("clockSlotLabel",{index:index+1})
 })
 updateClockCardHeight()
}

function getCurrentMonthInfo(date=new Date()){
 const year=date.getFullYear()
 const monthIndex=date.getMonth()
 const daysInMonth=new Date(year,monthIndex+1,0).getDate()
 return {year,monthIndex,daysInMonth}
}

function getMonthInfoFromMonthKey(monthKey){
 const token=String(monthKey || "").trim()
 const match=token.match(/^(\d{4})-(\d{2})$/)
 if(!match) return null
 const year=Number(match[1])
 const month=Number(match[2])
 if(!Number.isFinite(year) || !Number.isFinite(month) || month<1 || month>12) return null
 const monthIndex=month-1
 const daysInMonth=new Date(year,monthIndex+1,0).getDate()
 return {year,monthIndex,daysInMonth}
}

function getDateKeyForMonthDay(year,monthIndex,day){
 const safeYear=Math.max(1970,Math.floor(Number(year)||1970))
 const safeMonth=Math.max(0,Math.min(11,Math.floor(Number(monthIndex)||0)))
 const monthToken=String(safeMonth+1).padStart(2,"0")
 const dayToken=String(Math.max(1,Math.floor(Number(day)||1))).padStart(2,"0")
 return `${safeYear}-${monthToken}-${dayToken}`
}

function parsePnlDateKeyParts(dateKey){
 if(!isValidPnlDateKey(dateKey)) return null
 const year=Number(String(dateKey).slice(0,4))
 const month=Number(String(dateKey).slice(5,7))
 const day=Number(String(dateKey).slice(8,10))
 if(!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) return null
 if(month<1 || month>12) return null
 const monthIndex=month-1
 const daysInMonth=new Date(year,monthIndex+1,0).getDate()
 return {
  year,
  monthIndex,
  day:Math.max(1,Math.min(daysInMonth,day)),
  daysInMonth
 }
}

function getTradeCaptureDateInfo(index,fallbackMonthInfo=null){
 const parsed=parsePnlDateKeyParts(tradeCaptureDates[index])
 if(parsed) return parsed
 const fallback=fallbackMonthInfo || getMonthInfoFromMonthKey(totalsMonthFilterKey) || getCurrentMonthInfo()
 const fallbackDays=Math.max(1,new Date(fallback.year,fallback.monthIndex+1,0).getDate())
 const fallbackDay=Math.max(1,Math.min(fallbackDays,(new Date()).getDate()))
 return {
  year:fallback.year,
  monthIndex:fallback.monthIndex,
  day:fallbackDay,
  daysInMonth:fallbackDays
 }
}

function getTotalsActiveMonthInfo(){
 return getMonthInfoFromMonthKey(totalsMonthFilterKey) || getCurrentMonthInfo()
}

function getTotalsDateYearRange(selectedYear){
 const nowYear=(new Date()).getFullYear()
 let minYear=2026
 let maxYear=Math.max(2035,nowYear+5)
 const applyYear=(value)=>{
  const year=Number(value)
  if(!Number.isFinite(year)) return
  minYear=Math.min(minYear,year)
  maxYear=Math.max(maxYear,year)
 }
 applyYear(selectedYear)
 const filterInfo=getMonthInfoFromMonthKey(totalsMonthFilterKey)
 if(filterInfo) applyYear(filterInfo.year)
 ;(Array.isArray(tradeCaptureDates)?tradeCaptureDates:[]).forEach(rawDate=>{
  const parsed=parsePnlDateKeyParts(rawDate)
  if(parsed) applyYear(parsed.year)
 })
 minYear=Math.min(minYear,(Number(selectedYear)||nowYear)-3)
 maxYear=Math.max(maxYear,(Number(selectedYear)||nowYear)+3)
 const years=[]
 for(let year=minYear;year<=maxYear;year+=1){
  years.push(year)
 }
 return years
}

function buildTotalsDateMonthOptionsHtml(selectedMonthIndex){
 return Array.from({length:12},(_,monthIndex)=>{
  const label=getCalendarMonthToken(monthIndex)
  const selected=monthIndex===selectedMonthIndex ? " selected" : ""
  return `<option value="${monthIndex}"${selected}>${escapeHtml(label)}</option>`
 }).join("")
}

function buildTotalsDateYearOptionsHtml(selectedYear){
 return getTotalsDateYearRange(selectedYear).map(year=>{
  const selected=year===selectedYear ? " selected" : ""
  return `<option value="${year}"${selected}>${year}</option>`
 }).join("")
}

function buildTotalsDateGridHtml(daysInMonth,selectedDay,tradeIndex){
 const safeDays=Math.max(1,Math.floor(Number(daysInMonth) || 1))
 const safeDay=Math.max(1,Math.min(safeDays,Math.floor(Number(selectedDay) || 1)))
 return Array.from({length:safeDays},(_,dayIndex)=>{
  const day=dayIndex+1
  const activeClass=day===safeDay ? " active" : ""
  return `<button class="totals-date-option${activeClass}" type="button" data-date-day="${day}" data-trade-index="${tradeIndex}">${day}</button>`
 }).join("")
}

function getTotalsDatePickerInfo(picker){
 const activeMonth=getTotalsActiveMonthInfo()
 const safeYear=activeMonth.year
 const safeMonthIndex=activeMonth.monthIndex
 const daysInMonth=new Date(safeYear,safeMonthIndex+1,0).getDate()
 const dayValue=parseInt(picker?.dataset.dateDay || "",10)
 const safeDay=Math.max(1,Math.min(daysInMonth,Number.isFinite(dayValue) ? dayValue : 1))
 return {year:safeYear,monthIndex:safeMonthIndex,day:safeDay,daysInMonth}
}

function syncTotalsDatePickerDayGrid(picker){
 if(!picker) return
 const tradeIndex=parseInt(picker.dataset.tradeIndex || "",10)
 if(!Number.isFinite(tradeIndex)) return
 const info=getTotalsDatePickerInfo(picker)
 picker.dataset.dateYear=String(info.year)
 picker.dataset.dateMonthIndex=String(info.monthIndex)
 picker.dataset.dateDay=String(info.day)
 const grid=picker.querySelector(".totals-date-grid")
 if(grid){
  grid.innerHTML=buildTotalsDateGridHtml(info.daysInMonth,info.day,tradeIndex)
 }
}

function positionTotalsDateMenu(picker){
 if(!picker || !totalsPanel) return
 const menu=picker.querySelector(".totals-date-menu")
 if(!menu || menu.classList.contains("hidden")) return
 menu.classList.remove("drop-up")
 const panelRect=totalsPanel.getBoundingClientRect()
 const pickerRect=picker.getBoundingClientRect()
 const menuHeight=menu.offsetHeight || 0
 const edgePadding=8
 const spaceBelow=(panelRect.bottom-edgePadding)-pickerRect.bottom
 const spaceAbove=pickerRect.top-(panelRect.top+edgePadding)
 const useDropUp=spaceBelow<menuHeight && spaceAbove>spaceBelow
 menu.classList.toggle("drop-up",useDropUp)
}

function setTotalsDatePickerOpen(picker,isOpen){
 if(!picker) return
 const btn=picker.querySelector(".totals-date-btn")
 const menu=picker.querySelector(".totals-date-menu")
 const row=picker.closest(".totals-edit-row")
 if(!btn || !menu) return
 menu.classList.toggle("hidden",!isOpen)
 btn.classList.toggle("active",!!isOpen)
 picker.classList.toggle("open",!!isOpen)
 if(row){
  row.classList.toggle("date-open",!!isOpen)
 }
 if(!isOpen){
  menu.classList.remove("drop-up")
  return
 }
 syncTotalsDatePickerDayGrid(picker)
 requestAnimationFrame(()=>positionTotalsDateMenu(picker))
}

function closeTotalsDateMenus(exceptPicker=null){
 if(!totalsEditListEl) return
 totalsEditListEl.querySelectorAll(".totals-date-picker").forEach(picker=>{
  if(exceptPicker && picker===exceptPicker) return
  setTotalsDatePickerOpen(picker,false)
 })
}

function renderTotalsEditHistory(capturedDays){
 if(!totalsEditListEl || !totalsEditMonthEl) return
 const monthInfo=getTotalsActiveMonthInfo()
 const monthLabel=getCalendarMonthToken(monthInfo.monthIndex)
 totalsEditMonthEl.innerText=`${monthLabel} ${monthInfo.year}`
 if(!capturedDays.length){
  totalsEditListEl.innerHTML=`<div class="totals-empty">${t("totalsEmpty")}</div>`
  updateTotalsCardHeight()
  applyLowercaseButtonTooltips()
  return
 }
 totalsEditListEl.innerHTML=capturedDays.map(({value,index},monthTradeIndex)=>{
 const amount=Number(value)
 const sign=amount>0?"+":""
const amountClass=amount<0?"negative":(amount>0?"positive":"")
 const storedDateInfo=getTradeCaptureDateInfo(index,monthInfo)
 const monthDays=Math.max(1,new Date(monthInfo.year,monthInfo.monthIndex+1,0).getDate())
 const dateInfo={
  year:monthInfo.year,
  monthIndex:monthInfo.monthIndex,
  day:Math.max(1,Math.min(monthDays,storedDateInfo.day)),
  daysInMonth:monthDays
 }
 const dayLabel=String(dateInfo.day).padStart(2,"0")
 const dateLabel=`${dayLabel} ${getCalendarMonthToken(dateInfo.monthIndex)}`
  const dayGrid=buildTotalsDateGridHtml(dateInfo.daysInMonth,dateInfo.day,index)
  return `<div class="totals-edit-row" data-trade-index="${index}">
<div class="totals-edit-main"><span class="totals-edit-trade">${t("tradeLabel",{index:monthTradeIndex+1})}</span><strong class="totals-edit-amount ${amountClass}">${sign}${formatAmount(amount)}$</strong></div>
<div class="totals-date-picker" data-trade-index="${index}" data-date-year="${dateInfo.year}" data-date-month-index="${dateInfo.monthIndex}" data-date-day="${dateInfo.day}">
  <button class="totals-date-btn" type="button" data-date-toggle aria-label="${t("calendarMonth")}">${escapeHtml(dateLabel)}</button>
  <div class="totals-date-menu hidden"><div class="totals-date-grid">${dayGrid}</div></div>
</div>
</div>`
 }).join("")
 updateTotalsCardHeight()
 applyLowercaseButtonTooltips()
}

function getCapturedTotalEntries(){
 return (Array.isArray(totalHistory)?totalHistory:[])
  .map((value,index)=>{
   const rawDate=tradeCaptureDates[index]
   const dateKey=isValidPnlDateKey(rawDate) ? rawDate : getLocalDateKey()
   return {value,index,dateKey}
  })
  .filter(item=>item.value!==null && item.value!==undefined)
  .map(item=>({
   value:item.value,
   index:item.index,
   dateKey:item.dateKey,
   monthKey:String(item.dateKey).slice(0,7)
  }))
}

function getCalendarMonthToken(monthIndex){
 const safeMonthIndex=Math.max(0,Math.min(11,Math.floor(Number(monthIndex) || 0)))
 return String(getPnlCalendarMonthLabel(safeMonthIndex) || "?").replace(/\./g,"").toUpperCase()
}

function getTotalsMonthLabel(monthKey){
 const [year,month]=String(monthKey || "").split("-").map(Number)
 if(!Number.isFinite(year) || !Number.isFinite(month)) return "?"
 return getCalendarMonthToken(month-1)
}

function renderTotalsMonthTabs(entries){
 if(!totalsMonthTabsEl) return entries
 const monthKeys=[...new Set((Array.isArray(entries)?entries:[]).map(entry=>entry.monthKey))]
  .filter(Boolean)
  .sort((a,b)=>a.localeCompare(b))
 if(!monthKeys.length){
  totalsMonthTabsEl.innerHTML=""
  totalsMonthTabsEl.classList.remove("has-items")
  if(totalsMonthTabsShellEl){
   totalsMonthTabsShellEl.classList.remove("has-items","has-nav")
  }
  updateTotalsMonthTabsNavigation()
  totalsMonthFilterKey=""
  applyLowercaseButtonTooltips()
  return entries
 }
 totalsMonthTabsEl.classList.add("has-items")
 if(totalsMonthTabsShellEl){
  totalsMonthTabsShellEl.classList.add("has-items")
 }
 if(!monthKeys.includes(totalsMonthFilterKey)){
  totalsMonthFilterKey=monthKeys[monthKeys.length-1]
 }
 totalsMonthTabsEl.innerHTML=monthKeys.map(monthKey=>{
  const label=getTotalsMonthLabel(monthKey)
  const isActive=monthKey===totalsMonthFilterKey
  return `<button class="totals-month-tab ${isActive?"active":""}" type="button" data-month-key="${monthKey}">${escapeHtml(label)}</button>`
 }).join("")
 requestAnimationFrame(()=>{
  const activeTab=totalsMonthTabsEl.querySelector(".totals-month-tab.active")
  if(activeTab) activeTab.scrollIntoView({block:"nearest",inline:"nearest"})
  updateTotalsMonthTabsNavigation()
 })
 applyLowercaseButtonTooltips()
 return entries.filter(entry=>entry.monthKey===totalsMonthFilterKey)
}

function updateTotalsMonthTabsNavigation(){
 if(!totalsMonthTabsShellEl || !totalsMonthTabsEl || !totalsMonthTabsPrevBtn || !totalsMonthTabsNextBtn) return
 const visibleTabsCount=totalsMonthTabsEl.querySelectorAll(".totals-month-tab").length
 const hasItems=visibleTabsCount>0
 totalsMonthTabsShellEl.classList.toggle("has-items",hasItems)
 if(!hasItems){
  totalsMonthTabsShellEl.classList.remove("has-nav")
  totalsMonthTabsPrevBtn.disabled=true
  totalsMonthTabsNextBtn.disabled=true
  totalsMonthTabsEl.scrollLeft=0
  return
 }
 const hasNav=visibleTabsCount>8
 totalsMonthTabsShellEl.classList.toggle("has-nav",hasNav)
 if(!hasNav){
  totalsMonthTabsPrevBtn.disabled=true
  totalsMonthTabsNextBtn.disabled=true
  totalsMonthTabsEl.scrollLeft=0
  return
 }
 const maxScroll=Math.max(0,totalsMonthTabsEl.scrollWidth-totalsMonthTabsEl.clientWidth)
 totalsMonthTabsPrevBtn.disabled=totalsMonthTabsEl.scrollLeft<=2
 totalsMonthTabsNextBtn.disabled=totalsMonthTabsEl.scrollLeft>=maxScroll-2
}

function updateTotalsPanelMinHeight(capturedCount=0){
 if(!totalsPanel || !totalsList) return
 const minimumBaseHeight=260
 const rowCount=Math.max(1,Math.floor(Number(capturedCount) || 0))

 const sampleFrontRow=totalsList.querySelector(".total-row")
 const frontRowHeight=sampleFrontRow ? sampleFrontRow.offsetHeight : 18
 const frontRowGap=6
 const frontListPadding=20
 const frontListRequiredHeight=Math.max(
  170,
  Math.ceil((rowCount*frontRowHeight)+(Math.max(0,rowCount-1)*frontRowGap)+frontListPadding)
 )

 const sampleBackRow=totalsEditListEl?.querySelector(".totals-edit-row")
 const backRowHeight=sampleBackRow ? sampleBackRow.offsetHeight : 28
 const backRowGap=8
 const backListPadding=20
 const backListRequiredHeight=Math.max(
  170,
  Math.ceil((rowCount*backRowHeight)+(Math.max(0,rowCount-1)*backRowGap)+backListPadding)
 )

 const panelStyles=getComputedStyle(totalsPanel)
 const paddingTop=parseFloat(panelStyles.paddingTop)||0
 const paddingBottom=parseFloat(panelStyles.paddingBottom)||0
 const titleEl=totalsPanel.querySelector("h3")
 const titleStyles=titleEl ? getComputedStyle(titleEl) : null
 const titleHeight=titleEl ? titleEl.offsetHeight : 0
 const titleMarginBottom=titleStyles ? (parseFloat(titleStyles.marginBottom)||0) : 0
 const frontEl=totalsPanel.querySelector(".totals-front")
 const frontStyles=frontEl ? getComputedStyle(frontEl) : null
 const frontGap=frontStyles ? (parseFloat(frontStyles.gap)||0) : 8
 const winRateBlock=totalsPanel.querySelector(".stat.total-winrate")
 const summaryBlock=totalsPanel.querySelector(".stat.total-summary:not(.total-winrate)")
 const resetBlock=totalsPanel.querySelector("#totalsResetBtn")
 const winRateHeight=winRateBlock ? winRateBlock.offsetHeight : 36
 const summaryHeight=summaryBlock ? summaryBlock.offsetHeight : 36
 const resetHeight=resetBlock ? resetBlock.offsetHeight : 36
 const monthTabsHeight=totalsMonthTabsShellEl ? totalsMonthTabsShellEl.offsetHeight : (totalsMonthTabsEl ? totalsMonthTabsEl.offsetHeight : 0)

 const frontBlockCount=(monthTabsHeight>0 ? 1 : 0)+4
 const frontGapCount=Math.max(0,frontBlockCount-1)
 const frontFixedHeight=monthTabsHeight+winRateHeight+summaryHeight+resetHeight+(frontGap*frontGapCount)
 const frontContentRequired=frontFixedHeight+frontListRequiredHeight

 const backEl=totalsPanel.querySelector(".totals-back")
 const backStyles=backEl ? getComputedStyle(backEl) : null
 const backGap=backStyles ? (parseFloat(backStyles.rowGap || backStyles.gap)||0) : 8
 const editMonthHeight=totalsEditMonthEl ? totalsEditMonthEl.offsetHeight : 0
 const backFixedHeight=editMonthHeight+(editMonthHeight>0 ? backGap : 0)
 const backContentRequired=backFixedHeight+backListRequiredHeight

 const panelFixedHeight=paddingTop+paddingBottom+titleHeight+titleMarginBottom
 const requiredHeight=Math.max(
  minimumBaseHeight,
  Math.ceil(panelFixedHeight+Math.max(frontContentRequired,backContentRequired))
 )
 totalsPanel.style.minHeight=`${requiredHeight}px`
 if(totalsPanel.offsetHeight<requiredHeight){
  totalsPanel.style.height=`${requiredHeight}px`
 }
}

function renderTotalHistory(){
 if(!totalsList) return
 const allCapturedEntries=getCapturedTotalEntries()
 const capturedDays=renderTotalsMonthTabs(allCapturedEntries)
 if(capturedDays.length===0){
  totalsList.innerHTML=`<div class="totals-empty">${t("totalsEmpty")}</div>`
  renderTotalsEditHistory([])
  updateTotalsSummary()
  renderPnlCalendar()
  syncTrackerWithTotalsMonthFilter()
  updateTotalsPanelMinHeight(0)
  updateTotalsCardHeight()
  applyLowercaseButtonTooltips()
  return
 }
 totalsList.innerHTML=capturedDays.map(({value,index},monthTradeIndex)=>{
  const amount=Number(value)
  const sign=amount>0?"+":""
  const cls=amount<0?"negative":(amount>0?"positive":"")
  return `<div class="total-row ${cls}"><span>${t("tradeLabel",{index:monthTradeIndex+1})}</span><strong>${sign}${formatAmount(amount)}$</strong></div>`
}).join("")
 renderTotalsEditHistory(capturedDays)
 updateTotalsSummary()
 renderPnlCalendar()
 syncTrackerWithTotalsMonthFilter()
 updateTotalsPanelMinHeight(capturedDays.length)
 updateTotalsCardHeight()
 applyLowercaseButtonTooltips()
}

function focusTotalsMonthTabByMonthKey(monthKey){
 const safeMonthKey=String(monthKey || "").trim()
 if(!/^\d{4}-\d{2}$/.test(safeMonthKey)) return
 totalsMonthFilterKey=safeMonthKey
 closeTotalsDateMenus()
 renderTotalHistory()
}

function focusTotalsMonthTabByYearMonth(year,monthIndex){
 const safeYear=Math.max(2026,Math.floor(Number(year) || 2026))
 const safeMonthIndex=Math.max(0,Math.min(11,Math.floor(Number(monthIndex) || 0)))
 const monthKey=`${safeYear}-${String(safeMonthIndex+1).padStart(2,"0")}`
 focusTotalsMonthTabByMonthKey(monthKey)
}

function focusTotalsMonthTabByTradeIndex(tradeIndex){
 const index=Math.max(0,Math.floor(Number(tradeIndex) || 0))
 const dateKey=isValidPnlDateKey(tradeCaptureDates[index]) ? tradeCaptureDates[index] : getLocalDateKey()
 const monthKey=String(dateKey).slice(0,7)
 if(!monthKey) return
 focusTotalsMonthTabByMonthKey(monthKey)
}

function updateCaptureState(){
  const isLoss=latestWeeklyProfit<0
  if(captureStateEl){
   captureStateEl.innerText=isLoss?t("captureLoss"):t("captureProfit")
   captureStateEl.classList.toggle("negative",isLoss)
   captureStateEl.classList.toggle("positive",!isLoss)
  }
}

function updateTotalsSummary(){
 if(!totalsStatusEl || !totalsSumEl) return
 const totalSum=getOverallTotalProfitSum()
 const isLoss=totalSum<0
 const sign=totalSum>0?"+":""
 totalsStatusEl.innerText=isLoss?t("overallLoss"):t("overallProfit")
 totalsStatusEl.classList.toggle("status-negative",isLoss)
 totalsStatusEl.classList.toggle("status-positive",!isLoss)
 totalsSumEl.innerText=`${sign}${formatAmount(totalSum)}$`
 totalsSumEl.classList.toggle("sum-negative",isLoss)
 totalsSumEl.classList.toggle("sum-positive",totalSum>0)
 updateWeeklyTotalProfitDisplay(totalSum)
 updateOverallWinRate()
}

function getWinRateStats(sourceTrades){
 let wins=0
 let losses=0
 ;(Array.isArray(sourceTrades)?sourceTrades:[]).forEach(trade=>{
  if(trade?.result==="win") wins++
  if(trade?.result==="loss") losses++
 })
 const totalResolved=wins+losses
 const rate=totalResolved ? (wins/totalResolved)*100 : 0
 return {wins,losses,rate}
}

function getWinRateStatsByDayIndices(dayIndices){
 normalizeDaySessions()
 const safeIndices=[...new Set((Array.isArray(dayIndices)?dayIndices:[])
  .map(index=>Math.floor(Number(index)))
  .filter(index=>Number.isFinite(index) && index>=0 && index<daySessions.length))]
 let wins=0
 let losses=0
 safeIndices.forEach(index=>{
  const day=daySessions[index]
  const dayTrades=index===activeDayIndex ? trades : (Array.isArray(day?.trades) ? day.trades : [])
  const stats=getWinRateStats(dayTrades)
  wins+=stats.wins
  losses+=stats.losses
 })
 const totalResolved=wins+losses
 const rate=totalResolved ? (wins/totalResolved)*100 : 0
 return {wins,losses,rate}
}

function getOverallWinRateStats(monthKey=""){
 normalizeDaySessions()
 if(monthKey){
  const monthIndices=getCapturedTotalEntries()
   .filter(entry=>entry.monthKey===monthKey)
   .map(entry=>entry.index)
  return getWinRateStatsByDayIndices(monthIndices)
 }
 return getWinRateStatsByDayIndices(daySessions.map((_,index)=>index))
}

function getOverallRoiStats(monthKey=""){
 const entries=getCapturedTotalEntries()
  .filter(entry=>!monthKey || entry.monthKey===monthKey)
 let totalProfit=0
 let totalBase=0
 entries.forEach(entry=>{
  const profit=Number(entry.value)
  if(Number.isFinite(profit)) totalProfit+=profit
  const base=Number(getDaySessionBase(entry.index))
  if(Number.isFinite(base) && base>0){
   totalBase+=base
  }
 })
 const rate=totalBase>0 ? (totalProfit/totalBase)*100 : 0
 return {rate,totalProfit,totalBase}
}

function updateOverallWinRate(){
 if(!totalsWinRateEl) return
 const monthKey=(totalsMonthFilterKey && /^\d{4}-\d{2}$/.test(totalsMonthFilterKey)) ? totalsMonthFilterKey : ""
 const {rate}=getOverallWinRateStats(monthKey)
 totalsWinRateEl.innerText=`${formatPercent(rate)}%`
 totalsWinRateEl.classList.add("sum-positive")
 totalsWinRateEl.classList.remove("sum-negative")
 if(totalsRoiEl){
  const roiRate=getOverallRoiStats(monthKey).rate
  const sign=roiRate>0?"+":""
  totalsRoiEl.innerText=`${sign}${formatPercent(roiRate)}%`
  totalsRoiEl.classList.toggle("sum-positive",roiRate>=0)
  totalsRoiEl.classList.toggle("sum-negative",roiRate<0)
 }
}

function buildRows(){
 normalizeTrades()
 normalizeContractNames()
 tbody.innerHTML=""

 trades.forEach((trade,i)=>{
  const winActive=trade.result==="win"
  const lossActive=trade.result==="loss"
 const contractHint=contractNames[i]?.trim() || ""
 const contractTitleAttr=contractHint ? ` title="${escapeHtml(contractHint)}"` : ""

 let row=document.createElement("tr")
 row.dataset.index=i
  row.innerHTML=`
<td>${i+1}</td>
<td><div class="btn-group">
<button class="trade-btn win-btn ${winActive?"active-win":""}" data-type="win" aria-label="${t("wins")}" title="${t("wins")}">&#10004;</button>
<button class="trade-btn loss-btn ${lossActive?"active-loss":""}" data-type="loss" aria-label="${t("loss")}" title="${t("loss")}">&#10006;</button>
</div></td>
<td${contractTitleAttr}><input class="profit-input no-spinner" type="number" value="${trade.profit??""}" placeholder="0" data-index="${i}"${contractTitleAttr}></td>
<td class="trade-handle-cell"><button class="trade-drag-handle" type="button" aria-label="${t("reorderTrade")}" title="${t("reorderTrade")}">≡</button></td>
`
 tbody.appendChild(row)
})
 renderContractRows()
 renderDayTabs()
 applyLowercaseButtonTooltips()
}

function syncTrackerWithTotalsMonthFilter(){
 const visibleDayIndices=getTrackerVisibleDayIndices()
 if(totalsMonthFilterKey && visibleDayIndices.length>0 && !visibleDayIndices.includes(activeDayIndex)){
  loadDay(visibleDayIndices[0])
  return
 }
 renderDayTabs()
}

function moveTradeRow(fromIndex,toIndex){
 if(fromIndex===toIndex) return false
 if(fromIndex<0 || toIndex<0 || fromIndex>=trades.length || toIndex>=trades.length) return false
 const [tradeItem]=trades.splice(fromIndex,1)
 trades.splice(toIndex,0,tradeItem)
 const [contractItem]=contractNames.splice(fromIndex,1)
 contractNames.splice(toIndex,0,contractItem)
 return true
}

function getVerticalReorderInsertBefore(container,selector,placeholder,clientY){
 const items=[...container.querySelectorAll(selector)].filter(item=>item!==placeholder)
 let nextItem=null
 let bestOffset=Number.NEGATIVE_INFINITY
 items.forEach(item=>{
  const rect=item.getBoundingClientRect()
  const offset=clientY-rect.top-(rect.height/2)
  if(offset<0 && offset>bestOffset){
   bestOffset=offset
   nextItem=item
  }
 })
 return nextItem
}

function createRowDragPreview(sourceEl){
 if(!sourceEl) return null
 const rect=sourceEl.getBoundingClientRect()
 let previewEl=null
 if(sourceEl.tagName==="TR"){
  const table=document.createElement("table")
  table.className="row-drag-preview"
  table.style.borderCollapse="separate"
  table.style.borderSpacing="0"
  table.style.tableLayout="fixed"
  table.style.width=`${rect.width}px`
  const body=document.createElement("tbody")
  const clone=sourceEl.cloneNode(true)
  const sourceCells=[...sourceEl.children]
  const cloneCells=[...clone.children]
  sourceCells.forEach((cell,index)=>{
   const width=cell.getBoundingClientRect().width
   if(cloneCells[index]){
    cloneCells[index].style.width=`${width}px`
    cloneCells[index].style.minWidth=`${width}px`
    cloneCells[index].style.maxWidth=`${width}px`
    cloneCells[index].style.boxSizing="border-box"
    const sourceInput=cell.querySelector("input")
    const cloneInput=cloneCells[index].querySelector("input")
    if(sourceInput && cloneInput){
     cloneInput.value=sourceInput.value
    }
   }
  })
  body.appendChild(clone)
  table.appendChild(body)
  previewEl=table
 }else{
  const clone=sourceEl.cloneNode(true)
  clone.classList.add("row-drag-preview")
  clone.style.width=`${rect.width}px`
  clone.style.gridTemplateColumns=[...sourceEl.children].map(child=>`${child.getBoundingClientRect().width}px`).join(" ")
  const sourceInput=sourceEl.querySelector("input")
  const cloneInput=clone.querySelector("input")
  if(sourceInput && cloneInput){
   cloneInput.value=sourceInput.value
  }
  previewEl=clone
 }
 return previewEl
}

function createRowPlaceholder(kind,sourceEl){
 const height=sourceEl.getBoundingClientRect().height
 if(kind==="trade"){
  const placeholder=document.createElement("tr")
  placeholder.className="trade-row-placeholder"
  const td=document.createElement("td")
  td.colSpan=sourceEl.children.length
  const slot=document.createElement("div")
  slot.className="trade-row-placeholder-slot"
  slot.style.height=`${height}px`
  td.appendChild(slot)
  placeholder.appendChild(td)
  return placeholder
 }
 const placeholder=document.createElement("div")
 placeholder.className="contract-row-placeholder"
 placeholder.style.height=`${height}px`
 return placeholder
}

function positionRowDragPreview(clientX,clientY){
 if(!activeRowReorder?.previewEl) return
 const x=clientX-activeRowReorder.offsetX
 const y=clientY-activeRowReorder.offsetY
 activeRowReorder.previewEl.style.transform=`translate(${x}px,${y}px)`
}

function finishRowReorder(commitMove){
 if(!activeRowReorder) return
 const state=activeRowReorder
 document.removeEventListener("pointermove",handleRowReorderPointerMove)
 document.removeEventListener("pointerup",handleRowReorderPointerUp)
 document.removeEventListener("pointercancel",handleRowReorderPointerCancel)
 document.body.style.userSelect=""
 activeRowReorder.previewEl?.remove()
 const toIndex=[...state.container.children].indexOf(state.placeholderEl)
 state.placeholderEl.remove()
 activeRowReorder=null
 const moved=commitMove && moveTradeRow(state.fromIndex,toIndex)
 if(moved){
  commitUndoableChange(()=>{
   saveTrades()
   saveContractNames()
   saveCurrentDayState()
   buildRows()
   updateTotals()
   updateTrackerCardHeight()
  })
  return
 }
 buildRows()
 updateTotals()
 updateTrackerCardHeight()
}

function handleRowReorderPointerMove(e){
 if(!activeRowReorder) return
 positionRowDragPreview(e.clientX,e.clientY)
 const insertBeforeEl=getVerticalReorderInsertBefore(activeRowReorder.container,activeRowReorder.itemSelector,activeRowReorder.placeholderEl,e.clientY)
 if(insertBeforeEl){
  activeRowReorder.container.insertBefore(activeRowReorder.placeholderEl,insertBeforeEl)
 }else{
  activeRowReorder.container.appendChild(activeRowReorder.placeholderEl)
 }
}

function handleRowReorderPointerUp(){
 finishRowReorder(true)
}

function handleRowReorderPointerCancel(){
 finishRowReorder(false)
}

function startRowReorder(kind,row,handle,e){
 if(activeRowReorder || !row || !handle) return
 const fromIndex=parseInt(row.dataset.index,10)
 if(Number.isNaN(fromIndex)) return
 const container=kind==="trade" ? tbody : contractRowsEl
 if(!container) return
 const previewEl=createRowDragPreview(row)
 const placeholderEl=createRowPlaceholder(kind,row)
 if(!previewEl || !placeholderEl) return
 const rowRect=row.getBoundingClientRect()
 document.body.appendChild(previewEl)
 const nextSibling=row.nextSibling
 row.remove()
 container.insertBefore(placeholderEl,nextSibling)
 activeRowReorder={
  kind,
  fromIndex,
  container,
  itemSelector:kind==="trade" ? "tr" : ".contract-row",
  previewEl,
  placeholderEl,
  offsetX:e.clientX-rowRect.left,
  offsetY:e.clientY-rowRect.top
 }
 positionRowDragPreview(e.clientX,e.clientY)
 document.body.style.userSelect="none"
 document.addEventListener("pointermove",handleRowReorderPointerMove)
 document.addEventListener("pointerup",handleRowReorderPointerUp)
 document.addEventListener("pointercancel",handleRowReorderPointerCancel)
}

function buildDayCurveData(sourceTrades,baseValue){
 const base=Number(baseValue)||0
 let deposit=base
 let wins=0
 let losses=0
 let hasActivity=false
 const curve=[base]

 ;(Array.isArray(sourceTrades)?sourceTrades:[]).forEach((trade)=>{
  const amount=parseFloat(trade?.profit)
  const hasAmount=!isNaN(amount)
  const normalizedAmount=Math.abs(amount)

  if(trade?.result==="win"){
   if(hasAmount) deposit+=normalizedAmount
   wins++
   hasActivity=true
  }else if(trade?.result==="loss"){
   if(hasAmount) deposit-=normalizedAmount
   losses++
   hasActivity=true
  }else if((trade?.profit ?? "")!==""){
   hasActivity=true
  }

  curve.push(deposit)
 })

 return {
  base,
  curve,
  wins,
  losses,
  endDeposit:deposit,
  profit:deposit-base,
  hasActivity
 }
}

function getDaySessionBase(index){
 if(index===activeDayIndex) return startDeposit
 return Number(daySessions[index]?.startDeposit)||0
}

function getDaySessionTrades(index){
 return index===activeDayIndex ? trades : (Array.isArray(daySessions[index]?.trades)?daySessions[index].trades:[])
}

function getTotalCurveData(){
 normalizeDaySessions()
 const base=getDaySessionBase(0)
 let deposit=base
 const curve=[deposit]

 daySessions.forEach((_,index)=>{
  const dayData=buildDayCurveData(getDaySessionTrades(index),getDaySessionBase(index))
  let profitValue=null

  if(index===activeDayIndex){
   profitValue=dayData.hasActivity ? dayData.profit : null
  }else if(totalHistory[index]!==null && totalHistory[index]!==undefined){
   profitValue=Number(totalHistory[index]||0)
  }else if(dayData.hasActivity){
   profitValue=dayData.profit
  }

  if(profitValue===null) return
  deposit+=profitValue
  curve.push(deposit)
 })

 return {curve,base}
}

function getMonthlyCurveData(){
 const entries=getPnlCalendarEntries()
  .filter(entry=>{
   const [year,month]=String(entry.dateKey).split("-").map(Number)
   return year===pnlCalendarYear && (month-1)===pnlCalendarMonth
  })
  .sort((a,b)=>{
   if(a.dateKey===b.dateKey) return (a.index||0)-(b.index||0)
   return String(a.dateKey).localeCompare(String(b.dateKey))
  })

 const base=0
 let deposit=base
 const curve=[base]

 entries.forEach(entry=>{
  const value=Number(entry.value)||0
  deposit+=value
  curve.push(deposit)
 })

 const monthStats=getWinRateStatsByDayIndices(entries.map(entry=>entry.index))
 return {
  base,
  curve,
  wins:monthStats.wins,
  losses:monthStats.losses,
  rate:monthStats.rate,
  hasActivity:entries.length>0
 }
}

function getPnlCalendarEntries(){
 normalizeDaySessions()
 const entries=[]
 totalHistory.forEach((value,index)=>{
  if(value===null || value===undefined) return
  const numericValue=Number(value)
  if(!Number.isFinite(numericValue)) return
  const dateKey=tradeCaptureDates[index]
  if(!isValidPnlDateKey(dateKey)) return
  entries.push({dateKey,value:numericValue,index})
 })
 return entries
}

function getPnlCalendarMonthLabel(monthIndex){
 const locale=currentLanguage==="en" ? "en-US" : "uk-UA"
 return new Intl.DateTimeFormat(locale,{month:"short"}).format(new Date(2026,monthIndex,1))
}

function getPnlCalendarMonthTitle(monthIndex){
 const locale=currentLanguage==="en" ? "en-US" : "uk-UA"
 return new Intl.DateTimeFormat(locale,{month:"long"}).format(new Date(2026,monthIndex,1))
}

function getPnlCalendarYearGridStart(year){
 const baseYear=2026
 const safeYear=Math.max(baseYear,Math.floor(Number(year) || baseYear))
 return baseYear+Math.floor((safeYear-baseYear)/12)*12
}

function setPnlCalendarPickerOpen(isOpen){
 if(!pnlCalendarPickerMenu || !pnlCalendarPickerBtn) return
 pnlCalendarPickerOpen=!!isOpen
 pnlCalendarPickerMenu.classList.toggle("hidden",!pnlCalendarPickerOpen)
 pnlCalendarPickerBtn.classList.toggle("active",pnlCalendarPickerOpen)
 pnlCalendarPickerBtn.setAttribute("aria-expanded",pnlCalendarPickerOpen?"true":"false")
}

function renderPnlCalendarPickerGrid(){
 if(!pnlCalendarPickerGrid) return
 const yearStart=getPnlCalendarYearGridStart(pnlCalendarYear)
 const options=Array.from({length:12},(_,index)=>yearStart+index)
 pnlCalendarPickerGrid.innerHTML=options.map(year=>`<button class="calendar-picker-option ${year===pnlCalendarYear?"active":""}" type="button" data-calendar-year="${year}">${year}</button>`).join("")
}

function renderPnlCalendarMonthCaption(){
 if(!pnlCalendarMonthCaptionEl) return
 if(pnlCalendarMode!=="daily"){
  pnlCalendarMonthCaptionEl.innerText=String(pnlCalendarYear)
  return
 }
 pnlCalendarMonthCaptionEl.innerText=getPnlCalendarMonthTitle(pnlCalendarMonth)
}

function getPnlCalendarWeekdayLabels(){
 return currentLanguage==="en"
  ? ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
  : ["Пн","Вт","Ср","Чт","Пт","Сб","Нд"]
}

function getPnlClass(value){
 if(value>0) return "positive"
 if(value<0) return "negative"
 return "neutral"
}

function formatPnlLabel(value){
 const sign=value>0?"+":""
 return `${sign}${formatAmount(value)}$`
}

function renderPnlCalendarControls(){
 if(!pnlCalendarDailyTab || !pnlCalendarMonthlyTab) return
 pnlCalendarYear=Math.max(2026,Math.floor(Number(pnlCalendarYear) || (new Date()).getFullYear()))
 pnlCalendarMonth=Math.max(0,Math.min(11,pnlCalendarMonth))
 pnlCalendarDailyTab.innerText=t("pnlDailyTab")
 pnlCalendarMonthlyTab.innerText=t("pnlMonthlyTab")
 pnlCalendarDailyTab.classList.toggle("active",pnlCalendarMode==="daily")
 pnlCalendarMonthlyTab.classList.toggle("active",pnlCalendarMode==="monthly")
 if(pnlCalendarPickerBtn){
  pnlCalendarPickerBtn.innerText=String(pnlCalendarYear)
  const pickerLabel=t("calendarYear")
  pnlCalendarPickerBtn.setAttribute("aria-label",pickerLabel)
  pnlCalendarPickerBtn.title=pickerLabel
  pnlCalendarPickerBtn.classList.toggle("active",pnlCalendarPickerOpen)
  pnlCalendarPickerBtn.setAttribute("aria-expanded",pnlCalendarPickerOpen?"true":"false")
 }
 if(pnlCalendarPickerMenu){
  pnlCalendarPickerMenu.classList.toggle("hidden",!pnlCalendarPickerOpen)
 }
 renderPnlCalendarPickerGrid()
 renderPnlCalendarMonthCaption()
 applyLowercaseButtonTooltips()
}

function renderPnlDailyCalendar(entries){
 if(!pnlCalendarContentEl) return
 const filteredEntries=(Array.isArray(entries)?entries:[]).filter(entry=>{
  const [year,month]=String(entry.dateKey).split("-").map(Number)
  return year===pnlCalendarYear && (month-1)===pnlCalendarMonth
 })
 const daySums=new Map()
 const dayTradeIndexMap=new Map()
 filteredEntries.forEach(entry=>{
  const day=Number(String(entry.dateKey).slice(8,10))
  if(!Number.isFinite(day)) return
  daySums.set(day,(daySums.get(day)||0)+entry.value)
  const tradeIndex=Number(entry.index)
  if(!Number.isFinite(tradeIndex)) return
  const prevIndex=dayTradeIndexMap.get(day)
  if(!Number.isFinite(prevIndex) || tradeIndex>prevIndex){
   dayTradeIndexMap.set(day,tradeIndex)
  }
 })

 const daysInMonth=new Date(pnlCalendarYear,pnlCalendarMonth+1,0).getDate()
 const firstWeekday=(new Date(pnlCalendarYear,pnlCalendarMonth,1).getDay()+6)%7
 const weekdayLabels=getPnlCalendarWeekdayLabels()
 const weekdayHtml=weekdayLabels.map(label=>`<div class="calendar-weekday">${escapeHtml(label)}</div>`).join("")
 const daysHtml=[]
 for(let i=0;i<firstWeekday;i+=1){
  daysHtml.push('<div class="calendar-day empty"></div>')
 }
 for(let day=1;day<=daysInMonth;day+=1){
  const dayValue=daySums.has(day) ? daySums.get(day) : null
  const tradeIndex=dayTradeIndexMap.get(day)
  const dayActionAttrs=Number.isFinite(tradeIndex) ? ` data-trade-index="${tradeIndex}"` : ""
  const dayCellClass=dayValue!==null && dayValue<0 ? " pnl-negative" : ""
  const valueHtml=dayValue===null
   ? ""
   : `<div class="calendar-value ${getPnlClass(dayValue)}">${formatPnlLabel(dayValue)}</div>`
  daysHtml.push(`<div class="calendar-day${dayCellClass}"${dayActionAttrs}><div class="calendar-day-number">${day}</div>${valueHtml}</div>`)
 }
 while(daysHtml.length%7!==0){
  daysHtml.push('<div class="calendar-day empty"></div>')
 }
 pnlCalendarContentEl.innerHTML=`
<div class="calendar-weekdays">${weekdayHtml}</div>
<div class="calendar-days">${daysHtml.join("")}</div>`
}

function renderPnlMonthlyCalendar(entries){
 if(!pnlCalendarContentEl) return
 const monthSums=Array.from({length:12},()=>0)
 const hasMonthValue=Array.from({length:12},()=>false)
 ;(Array.isArray(entries)?entries:[]).forEach(entry=>{
  const [year,month]=String(entry.dateKey).split("-").map(Number)
  if(year!==pnlCalendarYear) return
  const monthIndex=(month||1)-1
  if(monthIndex<0 || monthIndex>11) return
  monthSums[monthIndex]+=entry.value
  hasMonthValue[monthIndex]=true
 })
 const monthsHtml=monthSums.map((value,index)=>{
 const label=getPnlCalendarMonthLabel(index)
 const monthCellClass=hasMonthValue[index] && value<0 ? " pnl-negative" : ""
  const valueHtml=hasMonthValue[index]
   ? `<div class="calendar-value ${getPnlClass(value)}">${formatPnlLabel(value)}</div>`
   : ""
  return `<div class="calendar-month${monthCellClass}" data-month-index="${index}"><div class="calendar-month-label">${escapeHtml(label)}</div>${valueHtml}</div>`
 }).join("")
 pnlCalendarContentEl.innerHTML=`<div class="calendar-months">${monthsHtml}</div>`
}

function renderPnlCalendar(){
 if(!pnlCalendarContentEl) return
 const previousMode=pnlCalendarMode
 const previousYear=pnlCalendarYear
 const previousMonth=pnlCalendarMonth
 const entries=getPnlCalendarEntries()
 renderPnlCalendarControls()
 if(pnlCalendarMode==="monthly"){
  renderPnlMonthlyCalendar(entries)
 }else{
  renderPnlDailyCalendar(entries)
 }
 if(previousMode!==pnlCalendarMode || previousYear!==pnlCalendarYear || previousMonth!==pnlCalendarMonth){
 savePnlCalendarPreferences()
}
 if(chartViewMode==="month"){
  renderChart()
 }
 applyLowercaseButtonTooltips()
}

function setPnlCalendarMode(mode){
 const nextMode=mode==="monthly" ? "monthly" : "daily"
 if(pnlCalendarMode===nextMode){
  renderPnlCalendar()
  return
 }
 pnlCalendarMode=nextMode
 savePnlCalendarPreferences()
 renderPnlCalendar()
}

function renderChartTabs(){
 if(chartDayCurveTab){
  chartDayCurveTab.innerText=t("tradeCurveTab",{index:getVisibleTradeOrdinal(activeDayIndex)})
  chartDayCurveTab.classList.toggle("active",chartViewMode==="day")
 }
 if(chartMonthCurveTab){
  chartMonthCurveTab.innerText=t("monthCurveTab",{month:getPnlCalendarMonthLabel(pnlCalendarMonth)})
  chartMonthCurveTab.classList.toggle("active",chartViewMode==="month")
 }
 if(chartTotalCurveTab){
  chartTotalCurveTab.innerText=t("totalCurveTab")
  chartTotalCurveTab.classList.toggle("active",chartViewMode==="total")
 }
}

function renderChartWinRate(stats){
 if(!chartWinRateLabelEl || !chartWinRateValueEl) return
 const safeStats=stats || {wins:0,losses:0,rate:0}
 chartWinRateLabelEl.innerText=t("chartWinRate")
 chartWinRateValueEl.innerText=`${formatPercent(safeStats.rate)}%`
}

function getRoiPercentFromValues(values){
 if(!Array.isArray(values) || values.length<2) return null
 const start=Number(values[0])
 const end=Number(values[values.length-1])
 if(!Number.isFinite(start) || !Number.isFinite(end) || Math.abs(start)<0.000001) return null
 return ((end-start)/Math.abs(start))*100
}

function areSeriesShapesEquivalent(seriesA,seriesB,epsilon=0.003){
 if(!Array.isArray(seriesA) || !Array.isArray(seriesB)) return false
 if(seriesA.length<2 || seriesB.length<2) return false
 if(seriesA.length!==seriesB.length) return false
 const safeA=seriesA.map(value=>Number(value)).filter(value=>Number.isFinite(value))
 const safeB=seriesB.map(value=>Number(value)).filter(value=>Number.isFinite(value))
 if(safeA.length!==seriesA.length || safeB.length!==seriesB.length) return false
 const minA=Math.min(...safeA)
 const maxA=Math.max(...safeA)
 const minB=Math.min(...safeB)
 const maxB=Math.max(...safeB)
 const spanA=maxA-minA
 const spanB=maxB-minB
 if(spanA<0.000001 && spanB<0.000001) return true
 if(spanA<0.000001 || spanB<0.000001) return false
 for(let i=0;i<safeA.length;i+=1){
  const normalizedA=(safeA[i]-minA)/spanA
  const normalizedB=(safeB[i]-minB)/spanB
  if(Math.abs(normalizedA-normalizedB)>epsilon) return false
 }
 return true
}

function getRoiPercentFromSeries(values){
 if(!Array.isArray(values) || values.length===0) return null
 const end=Number(values[values.length-1])
 if(!Number.isFinite(end)) return null
 return end
}

function getSortedPnlEntriesForMonth(year,monthIndex){
 return getPnlCalendarEntries()
  .filter(entry=>{
   const [entryYear,entryMonth]=String(entry.dateKey).split("-").map(Number)
   return entryYear===year && (entryMonth-1)===monthIndex
  })
  .sort((a,b)=>{
   if(a.dateKey===b.dateKey) return (a.index||0)-(b.index||0)
   return String(a.dateKey).localeCompare(String(b.dateKey))
  })
}

function getSortedPnlEntriesTotal(){
 return getPnlCalendarEntries()
  .slice()
  .sort((a,b)=>{
   if(a.dateKey===b.dateKey) return (a.index||0)-(b.index||0)
   return String(a.dateKey).localeCompare(String(b.dateKey))
  })
}

function buildRoiSeriesFromEntries(entries){
 const series=[0]
 let cumulativeProfit=0
 let cumulativeBase=0
 ;(Array.isArray(entries)?entries:[]).forEach(entry=>{
  const pnlValue=Number(entry?.value)
  if(Number.isFinite(pnlValue)) cumulativeProfit+=pnlValue
  const baseValue=Number(getDaySessionBase(entry?.index))
  if(Number.isFinite(baseValue) && baseValue>0) cumulativeBase+=baseValue
  series.push(cumulativeBase>0 ? (cumulativeProfit/cumulativeBase)*100 : 0)
 })
 return series
}

function buildLocalRoiSeries(chartData){
 if(chartViewMode==="month"){
  const entries=getSortedPnlEntriesForMonth(pnlCalendarYear,pnlCalendarMonth)
  return buildRoiSeriesFromEntries(entries)
 }
 if(chartViewMode==="total"){
  const entries=getSortedPnlEntriesTotal()
  return buildRoiSeriesFromEntries(entries)
 }
 const curveValues=Array.isArray(chartData?.curve) ? chartData.curve : []
 const baseValue=Number(chartData?.base)
 if(curveValues.length<2 || !Number.isFinite(baseValue) || Math.abs(baseValue)<0.000001) return []
 return curveValues.map(value=>{
  const numericValue=Number(value)
  if(!Number.isFinite(numericValue)) return 0
  return ((numericValue-baseValue)/Math.abs(baseValue))*100
 })
}

function renderChartRoi(roiPercent){
 if(!chartRoiLabelEl || !chartRoiValueEl) return
 chartRoiLabelEl.innerText=t("chartRoi")
 if(!Number.isFinite(roiPercent)){
  chartRoiValueEl.innerText="--"
  return
 }
 const sign=roiPercent>0?"+":""
 chartRoiValueEl.innerText=`${sign}${formatPercent(roiPercent)}%`
}

function getRoiCurveKey(){
 return `${chartViewMode}|${activeDayIndex}|${pnlCalendarYear}|${pnlCalendarMonth}`
}

function getExchangeApiBridge(){
 if(typeof window==="undefined") return null
 return window.WTT_EXCHANGE_API || window.wttExchangeApi || window.exchangeApi || null
}

function isExchangeApiConnected(api){
 if(!api) return false
 try{
  if(typeof api.isConnected==="function"){
   return !!api.isConnected()
  }
 }catch{}
 if(typeof api.connected==="boolean") return api.connected
 if(typeof api.connection==="string"){
  return api.connection.toLowerCase()==="connected"
 }
 return typeof api.getRoiCurve==="function" || typeof api.fetchRoiCurve==="function" || typeof api.getRoiSeries==="function"
}

function requestExchangeRoiCurve(api,context){
 if(!api) return null
 if(typeof api.getRoiCurve==="function") return api.getRoiCurve(context)
 if(typeof api.fetchRoiCurve==="function") return api.fetchRoiCurve(context)
 if(typeof api.getRoiSeries==="function") return api.getRoiSeries(context)
 return null
}

function toFiniteNumber(value){
 const n=Number(value)
 return Number.isFinite(n) ? n : null
}

function normalizeRoiCurveValues(payload,base){
 const safeBase=Number.isFinite(Number(base)) ? Number(base) : 0
 const unit=String(payload?.unit || payload?.valueType || payload?.seriesType || "").toLowerCase()
 const source=Array.isArray(payload?.points) ? payload.points : (Array.isArray(payload) ? payload : [])
 const primitiveSeries=source.every(item=>item==null || typeof item==="number" || typeof item==="string")
 let values=source.map(item=>{
  if(item==null) return null
  if(typeof item==="number" || typeof item==="string"){
   return toFiniteNumber(item)
  }
  const directCandidates=[item.value,item.equity,item.balance,item.amount,item.price]
  for(const candidate of directCandidates){
   const direct=toFiniteNumber(candidate)
   if(direct!==null) return direct
  }
  const percentCandidates=[item.roiPercent,item.roi,item.percent,item.pnlPercent,item.changePercent]
  for(const candidate of percentCandidates){
   const percent=toFiniteNumber(candidate)
   if(percent!==null) return safeBase*(1 + percent/100)
  }
  return null
 }).filter(value=>value!==null)
 const isPercentSeries=unit.includes("percent") || unit.includes("%") || unit.includes("roi")
 if(isPercentSeries && primitiveSeries){
  values=values.map(value=>safeBase*(1 + value/100))
 }
 return values
}

function syncRoiCurveFromApi(chartData){
 const api=getExchangeApiBridge()
 const connected=isExchangeApiConnected(api)
 const key=getRoiCurveKey()
 if(!connected){
  roiCurveState.connected=false
  roiCurveState.values=[]
  roiCurveState.key=""
  roiCurveState.lastFetchedAt=0
  roiCurveState.loading=false
  roiCurveState.loadingKey=""
  return
 }
 roiCurveState.connected=true
 if(roiCurveState.loading){
  if(roiCurveState.loadingKey===key) return
  return
 }
 const now=Date.now()
 const isFresh=roiCurveState.key===key && (now-roiCurveState.lastFetchedAt)<ROI_API_REFRESH_MS
 if(isFresh) return
 roiCurveState.loading=true
 roiCurveState.loadingKey=key
 const context={
  mode:chartViewMode,
  tradeIndex:activeDayIndex,
  tradeId:activeDayIndex+1,
  year:pnlCalendarYear,
  month:pnlCalendarMonth+1
 }
 Promise.resolve(requestExchangeRoiCurve(api,context))
  .then(payload=>{
   roiCurveState.values=normalizeRoiCurveValues(payload,chartData?.base)
   roiCurveState.key=key
   roiCurveState.lastFetchedAt=Date.now()
  })
  .catch(()=>{
   roiCurveState.values=[]
   roiCurveState.key=key
   roiCurveState.lastFetchedAt=Date.now()
  })
  .finally(()=>{
   roiCurveState.loading=false
   roiCurveState.loadingKey=""
   renderChart()
  })
}

function buildSmoothCurvePath(points){
 if(!Array.isArray(points) || !points.length) return ""
 let d=`M ${points[0].x} ${points[0].y}`
 for(let i=0;i<points.length-1;i++){
  const p0=points[i-1]||points[i]
  const p1=points[i]
  const p2=points[i+1]
  const p3=points[i+2]||p2
  const c1x=p1.x + (p2.x - p0.x)/6
  const c1y=p1.y + (p2.y - p0.y)/6
  const c2x=p2.x - (p3.x - p1.x)/6
  const c2y=p2.y - (p3.y - p1.y)/6
  d+=` C ${c1x} ${c1y} ${c2x} ${c2y} ${p2.x} ${p2.y}`
 }
 return d
}

function drawRoiCurve(values,showCurve=true){
 if(!roiPath) return
 if(!showCurve || !Array.isArray(values) || values.length<2){
  roiPath.setAttribute("d","")
  return
 }
 const w=300
 const h=200
 const padX=8
 const padY=30
 const minVal=Math.min(...values)
 const maxVal=Math.max(...values)
 const span=maxVal-minVal||1
 const step=(w-2*padX)/(values.length-1)
 const points=values.map((value,index)=>{
  const x=padX + index*step
  const y=padY + (h-2*padY) * (1 - (value-minVal)/span)
  return {x,y}
 })
 roiPath.setAttribute("d",buildSmoothCurvePath(points))
}

function renderChart(){
 let chartData
 let chartWinRateStats
 let shouldShowCurve=false

 if(chartViewMode==="total"){
  chartData=getTotalCurveData()
  chartWinRateStats=getOverallWinRateStats()
  shouldShowCurve=chartData.curve.length>1
 }else if(chartViewMode==="month"){
  chartData=getMonthlyCurveData()
  chartWinRateStats={wins:chartData.wins,losses:chartData.losses,rate:chartData.rate}
  shouldShowCurve=chartData.curve.length>1
 }else{
  chartData=buildDayCurveData(trades,startDeposit)
  chartWinRateStats=getWinRateStats(trades)
  shouldShowCurve=!!chartData.hasActivity
 }

 drawCurve(chartData.curve,chartData.base,shouldShowCurve)
 const roiKey=getRoiCurveKey()
 const hasApiRoi=shouldShowCurve && roiCurveState.connected && roiCurveState.key===roiKey && Array.isArray(roiCurveState.values) && roiCurveState.values.length>1
 const localRoiSeries=buildLocalRoiSeries(chartData)
 const roiSeries=hasApiRoi ? roiCurveState.values : localRoiSeries
 const isDuplicateRoiCurve=shouldShowCurve && Array.isArray(roiSeries) && roiSeries.length>1 && areSeriesShapesEquivalent(roiSeries,chartData.curve)
 const shouldShowRoi=shouldShowCurve && Array.isArray(roiSeries) && roiSeries.length>1 && !isDuplicateRoiCurve
 drawRoiCurve(roiSeries,shouldShowRoi)
 const roiPercent=hasApiRoi ? getRoiPercentFromValues(roiSeries) : getRoiPercentFromSeries(roiSeries)
 renderChartRoi(roiPercent)
 syncRoiCurveFromApi(chartData)
 renderChartTabs()
 renderChartWinRate(chartWinRateStats)
}

function updateTotals(){
 const dayData=buildDayCurveData(trades,startDeposit)
 document.getElementById("wins").innerText=dayData.wins
 document.getElementById("losses").innerText=dayData.losses
 latestEndingDeposit=dayData.endDeposit
 const weeklyProfit=dayData.profit
 latestWeeklyProfit=weeklyProfit
 updateWeeklyTradeHeaderLabel()
 if(weeklyProfitValueEl){
  const sign=weeklyProfit>0?"+":""
  weeklyProfitValueEl.innerText=`${sign}${formatAmount(weeklyProfit)}`
  weeklyProfitValueEl.classList.toggle("positive",weeklyProfit>0)
  weeklyProfitValueEl.classList.toggle("negative",weeklyProfit<0)
 }
 if(weeklyProfitPercentEl){
  const pct=startDeposit!==0?(weeklyProfit/startDeposit)*100:0
  const signPct=pct>0?"+":""
  weeklyProfitPercentEl.innerText=`(${signPct}${formatPercent(pct)}%)`
  weeklyProfitPercentEl.classList.toggle("positive",pct>0)
  weeklyProfitPercentEl.classList.toggle("negative",pct<0)
 }
 updateCaptureState()
 renderChart()
 updateOverallWinRate()
 if(!isRestoringHistory){
  saveCurrentDayState()
 }
}

function drawCurve(values,base,showCurve=true){
 if(!depositPathTop || !depositPathBottom) return
 const w=300
 const h=200
 const padX=8
 const padY=30
 const minVal=Math.min(...values)
 const maxVal=Math.max(...values)
 const span=maxVal-minVal||1
 const baseYRaw=padY + (h-2*padY) * (1 - (base-minVal)/span)
 const baseY=Math.max(0,Math.min(h,baseYRaw))
 if(clipTopRect){
  clipTopRect.setAttribute("x","0")
  clipTopRect.setAttribute("y","0")
  clipTopRect.setAttribute("width",String(w))
  clipTopRect.setAttribute("height",String(baseY))
 }
 if(clipBottomRect){
  clipBottomRect.setAttribute("x","0")
  clipBottomRect.setAttribute("y",String(baseY))
  clipBottomRect.setAttribute("width",String(w))
  clipBottomRect.setAttribute("height",String(Math.max(0,h-baseY)))
 }
 if(chartMidline){
  chartMidline.setAttribute("x1","0")
  chartMidline.setAttribute("y1",String(baseY))
  chartMidline.setAttribute("x2",String(w))
  chartMidline.setAttribute("y2",String(baseY))
 }
 const step=values.length>1?(w-2*padX)/(values.length-1):0
 const pts=values.map((v,i)=>{
  const x=padX + i*step
  const y=padY + (h-2*padY) * (1 - (v-minVal)/span)
  return {x,y}
 })
 let d=""
 if(showCurve && pts.length){
  d+=`M ${pts[0].x} ${pts[0].y}`
  for(let i=0;i<pts.length-1;i++){
    const p0=pts[i-1]||pts[i]
    const p1=pts[i]
    const p2=pts[i+1]
    const p3=pts[i+2]||p2
    const c1x=p1.x + (p2.x - p0.x)/6
    const c1y=p1.y + (p2.y - p0.y)/6
    const c2x=p2.x - (p3.x - p1.x)/6
    const c2y=p2.y - (p3.y - p1.y)/6
    d+=` C ${c1x} ${c1y} ${c2x} ${c2y} ${p2.x} ${p2.y}`
  }
 }
 depositPathTop.setAttribute("d",d)
 depositPathBottom.setAttribute("d",d)
 if(showCurve && pts.length && depositStartDot && depositEndDot){
  const startPoint=pts[0]
  const endPoint=pts[pts.length-1]
  const startClass=startPoint.y<=baseY?"top":"bottom"
  const endClass=endPoint.y<=baseY?"top":"bottom"
  depositStartDot.setAttribute("cx",startPoint.x)
  depositStartDot.setAttribute("cy",startPoint.y)
  depositStartDot.setAttribute("r","4")
  depositStartDot.classList.remove("top","bottom")
  depositStartDot.classList.add(startClass)
  depositEndDot.setAttribute("cx",endPoint.x)
  depositEndDot.setAttribute("cy",endPoint.y)
  depositEndDot.setAttribute("r","4")
  depositEndDot.classList.remove("top","bottom")
  depositEndDot.classList.add(endClass)
 }else if(depositStartDot && depositEndDot){
  depositStartDot.setAttribute("r","0")
  depositEndDot.setAttribute("r","0")
 }
 const lastValue=values.length?values[values.length-1]:base
 if(chartLabels){
  chartLabels.classList.toggle("positive",showCurve && lastValue>=base)
  chartLabels.classList.toggle("negative",showCurve && lastValue<base)
 }
 if(chartMin && chartMax){
  chartMin.innerText=`${formatAmount(minVal)}$`
  chartMax.innerText=`${formatAmount(maxVal)}$`
 }
}

tbody.addEventListener("click",(e)=>{
 const btn=e.target.closest(".trade-btn")
 if(!btn) return
 const row=btn.closest("tr")
 const i=parseInt(row.dataset.index,10)
 const type=btn.dataset.type

 commitUndoableChange(()=>{
  const trade=trades[i]
  trade.result=trade.result===type?null:type
  trades[i]=trade
  saveTrades()

  const winBtn=row.querySelector(".win-btn")
  const lossBtn=row.querySelector(".loss-btn")
  winBtn.classList.toggle("active-win",trade.result==="win")
  lossBtn.classList.toggle("active-loss",trade.result==="loss")

  updateTotals()
 })
})

tbody.addEventListener("input",(e)=>{
 const input=e.target.closest(".profit-input")
 if(!input) return
 const i=parseInt(input.dataset.index,10)
 commitUndoableChange(()=>{
  trades[i].profit=input.value
  saveTrades()
  updateTotals()
 })
})

tbody.addEventListener("pointerdown",(e)=>{
 const handle=e.target.closest(".trade-drag-handle")
 if(!handle) return
 if(e.button!==0) return
 const row=handle.closest("tr")
 if(!row) return
 e.preventDefault()
 e.stopPropagation()
 startRowReorder("trade",row,handle,e)
})

if(contractRowsEl){
 contractRowsEl.addEventListener("input",(e)=>{
  const input=e.target.closest(".contract-input")
  if(!input) return
  const i=parseInt(input.dataset.index,10)
  commitUndoableChange(()=>{
   contractNames[i]=input.value
   saveContractNames()
   saveCurrentDayState()
   const profitInput=tbody.querySelector(`.profit-input[data-index="${i}"]`)
   const rowCell=profitInput?.closest("td")
   const contractHint=input.value.trim()
   if(profitInput){
    if(contractHint){
     profitInput.title=contractHint
    }else{
     profitInput.removeAttribute("title")
    }
   }
   if(rowCell){
    if(contractHint){
     rowCell.title=contractHint
    }else{
     rowCell.removeAttribute("title")
    }
  }
  updateTrackerCardHeight()
  })
 })

 contractRowsEl.addEventListener("pointerdown",(e)=>{
  const handle=e.target.closest(".contract-drag-handle")
  if(!handle) return
  if(e.button!==0) return
  const row=handle.closest(".contract-row")
  if(!row) return
  e.preventDefault()
  e.stopPropagation()
  startRowReorder("contract",row,handle,e)
 })
}

if(dayTabsEl){
 dayTabsEl.addEventListener("click",(e)=>{
  const btn=e.target.closest(".day-tab")
  if(!btn) return
  const nextIndex=parseInt(btn.dataset.dayIndex,10)
  if(Number.isNaN(nextIndex) || nextIndex===activeDayIndex) return
  commitUndoableChange(()=>{
   saveCurrentDayState()
   loadDay(nextIndex)
  })
 })
 dayTabsEl.addEventListener("scroll",updateDayTabsNavigation)
}

if(dayTabsAddBtn){
 dayTabsAddBtn.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   saveCurrentDayState()
   addNewDaySession()
  })
 })
}

if(chartDayCurveTab){
 chartDayCurveTab.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   setChartViewMode("day")
  })
 })
}

if(chartMonthCurveTab){
 chartMonthCurveTab.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   setChartViewMode("month")
  })
 })
}

if(chartTotalCurveTab){
 chartTotalCurveTab.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   setChartViewMode("total")
  })
 })
}

if(pnlCalendarDailyTab){
 pnlCalendarDailyTab.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   setPnlCalendarMode("daily")
  })
 })
}

if(pnlCalendarMonthlyTab){
 pnlCalendarMonthlyTab.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   setPnlCalendarMode("monthly")
  })
 })
}

if(pnlCalendarContentEl){
 pnlCalendarContentEl.addEventListener("click",(e)=>{
  if(pnlCalendarMode==="monthly"){
   const monthCell=e.target.closest(".calendar-month[data-month-index]")
   if(!monthCell) return
   const nextMonth=parseInt(monthCell.dataset.monthIndex,10)
   if(!Number.isFinite(nextMonth)) return
   commitUndoableChange(()=>{
    pnlCalendarMonth=Math.max(0,Math.min(11,nextMonth))
    pnlCalendarMode="daily"
    savePnlCalendarPreferences()
    renderPnlCalendar()
    setPnlCalendarPickerOpen(false)
    focusTotalsMonthTabByYearMonth(pnlCalendarYear,pnlCalendarMonth)
   })
   return
  }
 if(pnlCalendarMode!=="daily") return
 const dayCell=e.target.closest(".calendar-day[data-trade-index]")
 if(!dayCell || dayCell.classList.contains("empty")) return
 const nextIndex=parseInt(dayCell.dataset.tradeIndex,10)
 if(!Number.isFinite(nextIndex)) return
  commitUndoableChange(()=>{
   saveCurrentDayState()
   if(nextIndex!==activeDayIndex){
    loadDay(nextIndex)
   }
   focusTotalsMonthTabByTradeIndex(nextIndex)
  })
 })
}

if(pnlCalendarPickerBtn){
 pnlCalendarPickerBtn.addEventListener("click",()=>{
  setPnlCalendarPickerOpen(!pnlCalendarPickerOpen)
  renderPnlCalendarControls()
 })
}

if(pnlCalendarPickerGrid){
 pnlCalendarPickerGrid.addEventListener("click",(e)=>{
  const option=e.target.closest("[data-calendar-year]")
  if(!option) return
  commitUndoableChange(()=>{
   const nextYear=parseInt(option.dataset.calendarYear,10)
   if(Number.isFinite(nextYear)){
    pnlCalendarYear=Math.max(2026,nextYear)
   }
   savePnlCalendarPreferences()
   renderPnlCalendar()
   setPnlCalendarPickerOpen(false)
  })
 })
}

document.addEventListener("pointerdown",(e)=>{
 if(!pnlCalendarPickerOpen || !pnlCalendarPickerEl) return
 if(pnlCalendarPickerEl.contains(e.target)) return
 setPnlCalendarPickerOpen(false)
})

document.addEventListener("pointerdown",(e)=>{
 if(!totalsEditListEl) return
 const path=typeof e.composedPath==="function" ? e.composedPath() : []
 const insidePicker=path.some(node=>node?.classList?.contains?.("totals-date-picker"))
 if(insidePicker) return
 closeTotalsDateMenus()
})

document.addEventListener("keydown",(e)=>{
 if(e.code!=="Escape") return
 if(!pnlCalendarPickerOpen) return
 setPnlCalendarPickerOpen(false)
})

document.addEventListener("keydown",(e)=>{
 if(e.code!=="Escape") return
 closeTotalsDateMenus()
})

if(dayTabsPrevBtn){
 dayTabsPrevBtn.addEventListener("click",()=>{
  if(!dayTabsEl) return
  dayTabsEl.scrollBy({left:-Math.max(120,dayTabsEl.clientWidth*0.55),behavior:"smooth"})
 })
}

if(dayTabsNextBtn){
 dayTabsNextBtn.addEventListener("click",()=>{
  if(!dayTabsEl) return
  dayTabsEl.scrollBy({left:Math.max(120,dayTabsEl.clientWidth*0.55),behavior:"smooth"})
 })
}

if(totalsMonthTabsPrevBtn){
 totalsMonthTabsPrevBtn.addEventListener("click",()=>{
  if(!totalsMonthTabsEl) return
  totalsMonthTabsEl.scrollBy({left:-Math.max(120,totalsMonthTabsEl.clientWidth*0.55),behavior:"smooth"})
 })
}

if(totalsMonthTabsNextBtn){
 totalsMonthTabsNextBtn.addEventListener("click",()=>{
  if(!totalsMonthTabsEl) return
  totalsMonthTabsEl.scrollBy({left:Math.max(120,totalsMonthTabsEl.clientWidth*0.55),behavior:"smooth"})
 })
}

if(addTradeRowBtn){
 addTradeRowBtn.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   trades.push({result:null,profit:""})
   contractNames.push("")
   saveTrades()
   saveContractNames()
   buildRows()
   updateTotals()
  })
 })
}

if(removeTradeRowBtn){
 removeTradeRowBtn.addEventListener("click",()=>{
  if(trades.length<=MIN_TRADES) return
  commitUndoableChange(()=>{
   trades.pop()
   contractNames.pop()
   saveTrades()
   saveContractNames()
   buildRows()
   updateTotals()
  })
 })
}

if(captureTotalBtn){
 captureTotalBtn.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   saveCurrentDayState()
   normalizeDaySessions()
   const capturedDayIndex=Math.max(0,Math.min(daySessions.length-1,Math.floor(Number(activeDayIndex) || 0)))
   const hadCapturedBefore=totalHistory[capturedDayIndex]!==null && totalHistory[capturedDayIndex]!==undefined
   const existingCaptureDate=tradeCaptureDates[capturedDayIndex]
   const captureDate=isValidPnlDateKey(existingCaptureDate) ? existingCaptureDate : getLocalDateKey()
   const visibleBeforeCapture=getTrackerVisibleDayIndices()
   const isLastVisibleInFilteredMonth=totalsMonthFilterKey
    ? (visibleBeforeCapture.length>0 && capturedDayIndex===visibleBeforeCapture[visibleBeforeCapture.length-1])
    : false
   const shouldAppendDaySession=!hadCapturedBefore && (capturedDayIndex===daySessions.length-1 || isLastVisibleInFilteredMonth)
   totalHistory[capturedDayIndex]=latestWeeklyProfit
   tradeCaptureDates[capturedDayIndex]=captureDate
   if(shouldAppendDaySession){
    const nextStartValue=formatDayStartValue(latestEndingDeposit)
    daySessions.push(createEmptyDaySession(nextStartValue,NEW_TRADE_INITIAL_ROWS))
    tradeCaptureDates.push(null)
   }
   while(totalHistory.length<daySessions.length) totalHistory.push(null)
   const nextActiveIndex=hadCapturedBefore ? capturedDayIndex : Math.min(capturedDayIndex+1,daySessions.length-1)
   activeDayIndex=nextActiveIndex
   saveTotalHistory()
   saveDaySessions()
   savePnlCaptureDates()
   renderTotalHistory()
   loadDay(nextActiveIndex)
  })
 })
}

if(deleteDayBtn){
 deleteDayBtn.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   if(!hasAnyTrackerData()){
    hideTrackerPanel()
    return
   }
   normalizeDaySessions()
   let targetIndex=Math.max(0,Math.min(daySessions.length-1,Math.floor(Number(activeDayIndex) || 0)))
   if(totalsMonthFilterKey){
    const visibleDayIndices=getTrackerVisibleDayIndices()
    if(visibleDayIndices.length===0) return
    if(!visibleDayIndices.includes(targetIndex)){
     targetIndex=visibleDayIndices[visibleDayIndices.length-1]
    }
   }
   saveCurrentDayState()
   deleteDaySessionByIndex(targetIndex)
  })
 })
}

if(totalsResetBtn){
 totalsResetBtn.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   totalHistory=[]
   tradeCaptureDates=tradeCaptureDates.map(()=>null)
   saveTotalHistory()
   savePnlCaptureDates()
   renderTotalHistory()
   renderChart()
  })
 })
}

function performResetTrades(){
 commitUndoableChange(()=>{
  clearSelectedPanels()
  trades=Array.from({length:MIN_TRADES},()=>({result:null,profit:""}))
  contractNames=Array.from({length:MIN_TRADES},()=>(""))
  daySessions=[createEmptyDaySession("")]
  activeDayIndex=0
  totalHistory=[]
  tradeCaptureDates=[]
  pnlCalendarMode="daily"
  pnlCalendarYear=(new Date()).getFullYear()
  pnlCalendarMonth=(new Date()).getMonth()
  setPnlCalendarPickerOpen(false)
  startDeposit=0
  latestWeeklyProfit=0
  latestEndingDeposit=0
  startDepositInput.value=""
  localStorage.removeItem("tradesV2")
  localStorage.removeItem(CONTRACT_NAMES_KEY)
  localStorage.removeItem("startDepositV2")
  localStorage.removeItem(TOTALS_KEY)
  localStorage.removeItem(DAY_SESSIONS_KEY)
  localStorage.removeItem(ACTIVE_DAY_KEY)
  localStorage.removeItem(PNL_CAPTURE_DATES_KEY)
  localStorage.removeItem(PNL_CALENDAR_MODE_KEY)
  localStorage.removeItem(PNL_CALENDAR_YEAR_KEY)
  localStorage.removeItem(PNL_CALENDAR_MONTH_KEY)
  document.getElementById("profit").value=""
  document.getElementById("entry").value=""
  document.getElementById("exit").value=""
  document.getElementById("leverage").value="10"
  document.getElementById("margin").innerText=formatAmount(0)
  notesItems=[]
  noteTitles=[]
  notesPanelLayouts={}
  clockSlotIds=normalizeClockSlotIds(null)
  marginFlipped=false
  totalsFlipped=false
  clockFlipped=false
  topZIndex=10
  document.body.style.backgroundPosition=""
  localStorage.removeItem(DRAG_KEY)
  syncNotesPanels(0)
  document.querySelectorAll(PANEL_SELECTOR).forEach(panel=>{
   panel.classList.remove("panel-hidden","collapsed")
  })
  refreshDraggables()
  ensureCenteredWelcomeNotePanel({forceCreate:true})
  setInitialPositions()
  refreshPanelCollapsedBadges()
  localStorage.removeItem("notesHeightV1")
  localStorage.removeItem(NOTES_TITLES_KEY)
  localStorage.removeItem(NOTES_PANEL_LAYOUTS_KEY)
  localStorage.removeItem(MARGIN_FLIP_KEY)
  localStorage.removeItem(TOTALS_FLIP_KEY)
  localStorage.removeItem(CLOCK_SELECTION_KEY)
  localStorage.removeItem(CLOCK_FLIP_KEY)
  saveTrades()
  saveContractNames()
  saveTotalHistory()
  saveDaySessions()
  savePnlCalendarPreferences()
  renderClockSelectOptions()
  updateMarginFlipUI()
  updateTotalsFlipUI()
  updateClockFlipUI()
  updateMarketClocks()
  renderPnlCalendar()
  buildRows()
  updateTotals()
  renderTotalHistory()
  calculate()
  savePositions({markLayoutEdited:false})
  setAllowImportLayoutOnLoad(true)
  renderSideMenuList()
  showWelcomeSplash()
 })
}

function resetTrades(){
 if(isLocked) return
 setResetConfirmOpen(true)
}

normalizeDaySessions()
loadDay(activeDayIndex)
renderTotalHistory()

let draggables=[]
let topZIndex=10
const layoutEl=document.querySelector(".layout")
const topbarTitleEl=document.getElementById("topbarTitle")
const langToggleBtn=document.getElementById("langToggleBtn")
const sideMenu=document.getElementById("sideMenu")
const sideMenuOverlay=document.getElementById("sideMenuOverlay")
const panelSelectionBox=document.getElementById("panelSelectionBox")
const sideMenuTitleEl=document.getElementById("sideMenuTitle")
const sideMenuHeadingEl=document.getElementById("sideMenuHeading")
const sideMenuList=document.getElementById("sideMenuList")
const emptyAsciiArtEl=document.getElementById("emptyAsciiArt")
const loadDataBtn=document.getElementById("loadDataBtn")
const saveDataBtn=document.getElementById("saveDataBtn")
const loadDataInput=document.getElementById("loadDataInput")
const sideMenuStatus=document.getElementById("sideMenuStatus")
const creatorInfoBtn=document.getElementById("creatorInfoBtn")
const googleAuthBtn=document.getElementById("googleAuthBtn")
const cloudSyncBtn=document.getElementById("cloudSyncBtn")
const cloudAuthStatusEl=document.getElementById("cloudAuthStatus")
const menuEdgeLabelEl=document.getElementById("menuEdgeLabel")
const lockBtnTop=document.getElementById("lockBtnTop")
const resetBtnTop=document.getElementById("resetBtnTop")
const lockScreen=document.getElementById("lockScreen")
const lockForm=document.getElementById("lockForm")
const lockTitleEl=document.getElementById("lockTitle")
const lockPasswordInput=document.getElementById("lockPassword")
const lockTogglePasswordBtn=document.getElementById("lockTogglePasswordBtn")
const lockSubmitBtn=lockForm?.querySelector('button[type="submit"]')
const lockError=document.getElementById("lockError")
const lockUnlockBtn=document.getElementById("lockUnlockBtn")
const resetConfirmScreen=document.getElementById("resetConfirmScreen")
const resetConfirmTitleEl=document.getElementById("resetConfirmTitle")
const resetConfirmMessageEl=document.getElementById("resetConfirmMessage")
const resetConfirmYesBtn=document.getElementById("resetConfirmYesBtn")
const resetConfirmNoBtn=document.getElementById("resetConfirmNoBtn")
const donationScreen=document.getElementById("donationScreen")
const donationNameEl=document.getElementById("donationName")
const donationMessageEl=document.getElementById("donationMessage")
const donationCryptoEl=document.getElementById("donationCrypto")
const donationPaypalEl=document.getElementById("donationPaypal")
const donationCloseBtn=document.getElementById("donationCloseBtn")
const donationAvatarImg=document.getElementById("donationAvatarImg")
const donationAvatarFallback=document.getElementById("donationAvatarFallback")
const pinBtn=document.getElementById("pinBtn")
const statusToastEl=document.getElementById("statusToast")
const welcomeSplashEl=document.getElementById("welcomeSplash")
const marginTitleEl=document.getElementById("marginTitle")
const profitRiskLabelEl=document.getElementById("profitRiskLabel")
const entryPriceLabelEl=document.getElementById("entryPriceLabel")
const exitPriceLabelEl=document.getElementById("exitPriceLabel")
const leverageLabelEl=document.getElementById("leverageLabel")
const marginResultLabelEl=document.getElementById("marginResultLabel")
const marginResetBtn=document.getElementById("marginResetBtn")
const trackerCollapsedTitleEl=document.getElementById("trackerCollapsedTitle")
const trackerFrontTitleEl=document.getElementById("trackerFrontTitle")
const startDepositLabelEl=document.getElementById("startDepositLabel")
const winsLabelEl=document.getElementById("winsLabel")
const lossesLabelEl=document.getElementById("lossesLabel")
const contractsTitleEl=document.getElementById("contractsTitle")
const totalsTitleEl=document.getElementById("totalsTitle")
const totalsWinRateLabelEl=document.getElementById("totalsWinRateLabel")
const totalsRoiLabelEl=document.getElementById("totalsRoiLabel")
const totalsOverallLabelEl=document.getElementById("totalsOverallLabel")
const clockTitleEl=document.getElementById("clockTitle")
const chartTitleEl=document.getElementById("chartTitle")
const calendarTitleLabelEl=document.getElementById("calendarTitle")
let isPinned=false
let spaceDragMode=false
let spaceDragStart=null
let sideMenuHoverTimer=null
let sideMenuCloseTimer=null
let statusToastTimer=null
let welcomeSplashTimer=null
let windowsScale=clampWindowScale(parseFloat(localStorage.getItem(WINDOW_SCALE_KEY) || String(DEFAULT_WINDOW_SCALE)))
let notesSpellcheckEnabled=localStorage.getItem(NOTES_SPELLCHECK_KEY)!=="0"
let isLocked=false
let isResetConfirmOpen=false
let isDonationScreenOpen=false
let lockViewSnapshot=""
let lockPasswordVerifier=localStorage.getItem(LOCK_PASSWORD_VERIFIER_KEY) || ""
let lockFailedAttempts=Math.max(0,parseInt(localStorage.getItem(LOCK_FAILED_ATTEMPTS_KEY) || "0",10) || 0)
let lockoutUntil=Math.max(0,parseInt(localStorage.getItem(LOCKOUT_UNTIL_KEY) || "0",10) || 0)
let selectedPanelIds=new Set()
let panelSelectionState=null
const PANEL_LABEL_KEYS={
 margin:"panelMargin",
 tracker:"panelTracker",
 chart:"panelChart",
 totals:"panelTotals",
 clocks:"panelClocks",
 calendar:"panelCalendar"
}
const DATA_FILE_VERSION=1
const DATA_FILE_ITERATIONS=250000
const CLOUD_SYNC_INTERVAL_MS=7000
const CLOUD_USER_COLLECTION="wttUsers"
const FIREBASE_CONFIG_DEFAULT={
 apiKey:"",
 authDomain:"",
 projectId:"",
 appId:""
}
const FIREBASE_CONFIG=(window.WTT_FIREBASE_CONFIG && typeof window.WTT_FIREBASE_CONFIG==="object")
 ? window.WTT_FIREBASE_CONFIG
 : FIREBASE_CONFIG_DEFAULT
let cloudFirebaseReady=false
let cloudAuth=null
let cloudDb=null
let cloudUser=null
let cloudSyncInFlight=false
let cloudPendingSync=false
let lastCloudSyncedSnapshot=""
let cloudSyncTimer=null

function setCaptureButtonText(){
 if(!captureTotalBtn) return
 const label=`${t("captureButton")} `
 if(captureTotalBtn.firstChild && captureTotalBtn.firstChild.nodeType===Node.TEXT_NODE){
  captureTotalBtn.firstChild.textContent=label
  return
 }
 captureTotalBtn.insertBefore(document.createTextNode(label),captureTotalBtn.firstChild || null)
}

function buildDonationContactHtml(labelKey,value,kind){
 const copyLabel=t("copy")
 return `<span class="donation-line-content"><span class="donation-contact-label">${escapeHtml(t(labelKey))}</span> <span class="donation-contact-value">${escapeHtml(value)}</span></span><button class="donation-copy-btn" type="button" data-copy-donation="${escapeHtml(kind)}" aria-label="${escapeHtml(copyLabel)}" title="${escapeHtml(copyLabel)}"></button>`
}

function applyLanguage(){
 document.documentElement.lang=currentLanguage
 if(topbarTitleEl) topbarTitleEl.innerText=t("appTitle")
 if(sideMenuTitleEl) sideMenuTitleEl.innerText=t("sideMenuTitle",{version:APP_VERSION})
 if(sideMenuHeadingEl) sideMenuHeadingEl.innerText=t("windows")
 if(menuEdgeLabelEl) menuEdgeLabelEl.innerText=t("menu")
 if(loadDataBtn) loadDataBtn.innerText=t("loadData")
 if(saveDataBtn) saveDataBtn.innerText=t("saveData")
 if(creatorInfoBtn){
  creatorInfoBtn.innerText="© Created by Olexandr Skorobagatko. Ukraine. 2026"
  creatorInfoBtn.setAttribute("aria-label",t("creatorInfoLabel"))
  creatorInfoBtn.title=t("creatorInfoLabel")
 }
 if(donationNameEl) donationNameEl.innerText=t("creatorName")
 if(donationMessageEl) donationMessageEl.innerText=t("creatorSupportMessage")
 if(donationCryptoEl){
  donationCryptoEl.innerHTML=buildDonationContactHtml("creatorCryptoLabel",DONATION_ERC20_ADDRESS,"erc20")
 }
 if(donationPaypalEl){
  donationPaypalEl.innerHTML=buildDonationContactHtml("creatorPaypalLabel",DONATION_PAYPAL_EMAIL,"paypal")
 }
 if(donationCloseBtn){
  donationCloseBtn.innerText=t("creatorThanks")
  donationCloseBtn.setAttribute("aria-label",t("creatorThanks"))
  donationCloseBtn.title=t("creatorThanks")
 }
 if(lockTitleEl) lockTitleEl.innerText=t("lockTitle")
 if(lockUnlockBtn) lockUnlockBtn.innerText=t("unlock")
 if(resetConfirmTitleEl) resetConfirmTitleEl.innerText=t("confirmTitle")
 if(resetConfirmMessageEl) resetConfirmMessageEl.innerText=t("confirmResetAll")
 if(resetConfirmYesBtn) resetConfirmYesBtn.innerText=t("yes")
 if(resetConfirmNoBtn) resetConfirmNoBtn.innerText=t("no")
 if(marginTitleEl) marginTitleEl.innerText=t(marginFlipped ? "marginBackCalculator" : "marginCalculator")
 if(profitRiskLabelEl) profitRiskLabelEl.innerText=t("profitRisk")
 if(entryPriceLabelEl) entryPriceLabelEl.innerText=t("entryPrice")
 if(exitPriceLabelEl) exitPriceLabelEl.innerText=t("exitPrice")
 if(leverageLabelEl) leverageLabelEl.innerText=t("leverage")
 if(marginResultLabelEl) marginResultLabelEl.innerText=t("marginLabel")
 if(marginResetBtn) marginResetBtn.innerText=t("reset")
 if(trackerCollapsedTitleEl) trackerCollapsedTitleEl.innerText=t("tradeTracker")
 if(trackerFrontTitleEl) trackerFrontTitleEl.innerText=t("tradeTracker")
 if(startDepositLabelEl) startDepositLabelEl.innerText=t("initialDeposit")
 if(winsLabelEl) winsLabelEl.innerText=t("wins")
 if(lossesLabelEl) lossesLabelEl.innerText=t("loss")
 if(contractsTitleEl) contractsTitleEl.innerText=t("contracts")
 if(totalsTitleEl) totalsTitleEl.innerText=t("totalTrades")
 if(totalsWinRateLabelEl) totalsWinRateLabelEl.innerText=t("winRate")
 if(totalsRoiLabelEl) totalsRoiLabelEl.innerText=t("roi")
 if(totalsOverallLabelEl) totalsOverallLabelEl.innerText=t("overall")
 if(totalsResetBtn) totalsResetBtn.innerText=t("reset")
 if(clockTitleEl) clockTitleEl.innerText=t("marketClocks")
 if(chartTitleEl) chartTitleEl.innerText=t("tradeCurve")
 if(chartRoiLabelEl) chartRoiLabelEl.innerText=t("chartRoi")
 if(calendarTitleLabelEl) calendarTitleLabelEl.innerText=t("pnlCalendar")
 if(dayTabsPrevBtn){
  dayTabsPrevBtn.setAttribute("aria-label",t("previousTrades"))
  dayTabsPrevBtn.title=t("previousTrades")
 }
if(dayTabsNextBtn){
  dayTabsNextBtn.setAttribute("aria-label",t("nextTrades"))
  dayTabsNextBtn.title=t("nextTrades")
 }
 if(totalsMonthTabsPrevBtn){
  totalsMonthTabsPrevBtn.setAttribute("aria-label",t("previousTrades"))
  totalsMonthTabsPrevBtn.title=t("previousTrades")
 }
 if(totalsMonthTabsNextBtn){
  totalsMonthTabsNextBtn.setAttribute("aria-label",t("nextTrades"))
  totalsMonthTabsNextBtn.title=t("nextTrades")
 }
 if(trackerFlipBtn){
  trackerFlipBtn.setAttribute("aria-label",t("flipTracker"))
  trackerFlipBtn.title=t("flipTracker")
 }
 if(marginFlipBtn){
  marginFlipBtn.setAttribute("aria-label",t("flipMargin"))
  marginFlipBtn.title=t("flipMargin")
 }
 if(totalsFlipBtn){
  totalsFlipBtn.setAttribute("aria-label",t("flipTotals"))
  totalsFlipBtn.title=t("flipTotals")
 }
 if(clockFlipBtn){
  clockFlipBtn.setAttribute("aria-label",t("flipClocks"))
  clockFlipBtn.title=t("flipClocks")
 }
 if(deleteDayBtn){
  deleteDayBtn.setAttribute("aria-label",t("deleteLastTrade"))
  deleteDayBtn.title=t("deleteLastTrade")
 }
 document.querySelectorAll("[data-hide-btn]").forEach(btn=>{
  btn.setAttribute("aria-label",t("hideWindow"))
  btn.title=t("hideWindow")
 })
 updateWeeklyTradeHeaderLabel()
 if(weeklyTotalProfitLabelEl){
  weeklyTotalProfitLabelEl.innerText=t("topTotalProfit")
 }
 if(lockBtnTop){
  lockBtnTop.setAttribute("aria-label",t("lock"))
  lockBtnTop.title=t("lock")
 }
 if(pinBtn){
  pinBtn.setAttribute("aria-label",t("pinWindows"))
  pinBtn.title=t("pinWindows")
 }
 if(resetBtnTop){
  resetBtnTop.setAttribute("aria-label",t("resetTrades"))
  resetBtnTop.title=t("resetTrades")
 }
 if(lockPasswordInput){
  lockPasswordInput.setAttribute("aria-label",t("lockTitle"))
 }
 if(langToggleBtn){
  langToggleBtn.setAttribute("aria-label",t("languageAria"))
  langToggleBtn.title=t("languageAria")
  langToggleBtn.innerText=currentLanguage==="en" ? t("languageEnglish") : t("languageUkrainian")
 }
 if(folderIconWidget){
  folderIconWidget.setAttribute("aria-label",t("folderIcon"))
 }
 updateCloudControls()
 if(startDepositInput){
  startDepositInput.placeholder=t("initialDeposit")
 }
 const profitInput=document.getElementById("profit")
 if(profitInput){
  profitInput.placeholder=t("profitRisk")
 }
 getNotesPanels().forEach((panel,index)=>{
  updateNotesPanelMeta(panel,index)
  setNotesToolbarLanguage(panel)
 })
 syncWelcomeNoteLanguageIfDefault()
 refreshPanelCollapsedBadges()
 renderClockSelectOptions()
 updateMarketClocks()
 if(lockPasswordInput){
  setLockPasswordVisibility(lockPasswordInput.type==="text")
 }
 updateLockFormAvailability()
 setCaptureButtonText()
 renderDayTabs()
 renderChartTabs()
 renderTotalHistory()
 buildRows()
 updateTotals()
 renderSideMenuList()
 applyLowercaseButtonTooltips()
}

function setLanguage(nextLanguage,{persist=true}={}){
 if(!SUPPORTED_LANGUAGES.has(nextLanguage)) return
 if(currentLanguage===nextLanguage) return
 currentLanguage=nextLanguage
 if(persist){
  localStorage.setItem(LANGUAGE_KEY,currentLanguage)
 }
 updateLanguageUrl(currentLanguage)
 applyLanguage()
}

function getPanels(){
 return [...document.querySelectorAll(PANEL_SELECTOR)]
}

function refreshDraggables(){
 draggables=getPanels()
 refreshPanelCollapsedBadges()
 pruneSelectedPanels()
 return draggables
}

function syncSideMenuSelectionState(){
 if(!sideMenuList) return
 sideMenuList.querySelectorAll(".side-menu-item").forEach(item=>{
  const label=item.querySelector("[data-panel-select]")
  const panelId=label?.dataset?.panelSelect
  if(!panelId){
   item.classList.remove("is-selected")
   return
  }
  const panel=getPanels().find(candidate=>candidate.dataset.dragId===panelId)
  const isSelected=!!panel && selectedPanelIds.has(panelId) && !panel.classList.contains("panel-hidden")
  item.classList.toggle("is-selected",isSelected)
 })
}

function syncPanelSelectionClasses(){
 getPanels().forEach(panel=>{
  const id=panel.dataset.dragId
  const isSelected=!!id && selectedPanelIds.has(id) && !panel.classList.contains("panel-hidden")
  panel.classList.toggle("panel-selected",isSelected)
 })
 syncSideMenuSelectionState()
}

function pruneSelectedPanels(){
 const visibleIds=new Set(getPanels()
  .filter(panel=>!panel.classList.contains("panel-hidden"))
  .map(panel=>panel.dataset.dragId)
  .filter(Boolean))
 selectedPanelIds=new Set([...selectedPanelIds].filter(id=>visibleIds.has(id)))
 syncPanelSelectionClasses()
}

function setSelectedPanels(panels){
 selectedPanelIds=new Set((panels || [])
  .filter(panel=>panel?.dataset?.dragId && !panel.classList.contains("panel-hidden"))
  .map(panel=>panel.dataset.dragId))
 syncPanelSelectionClasses()
}

function clearSelectedPanels(){
 if(!selectedPanelIds.size) return
 selectedPanelIds.clear()
 syncPanelSelectionClasses()
}

function removePanelFromSelection(panel){
 const id=panel?.dataset?.dragId
 if(!id) return
 if(selectedPanelIds.delete(id)){
  syncPanelSelectionClasses()
 }
}

function isPanelSelected(panel){
 const id=panel?.dataset?.dragId
 return !!id && selectedPanelIds.has(id) && !panel.classList.contains("panel-hidden")
}

function getSelectedPanels(fallbackPanel=null){
 const selected=draggables.filter(panel=>isPanelSelected(panel))
 if(selected.length) return selected
 return fallbackPanel ? [fallbackPanel] : []
}

function bringPanelsToFront(panels,anchorPanel=null){
 const ordered=[...new Set(panels)]
  .filter(Boolean)
  .sort((a,b)=>(parseInt(a.style.zIndex,10)||10)-(parseInt(b.style.zIndex,10)||10))
 if(anchorPanel && ordered.includes(anchorPanel)){
  ordered.splice(ordered.indexOf(anchorPanel),1)
  ordered.push(anchorPanel)
 }
 ordered.forEach(panel=>bringToFront(panel))
}

function updatePanelSelectionBox(rect){
 if(!panelSelectionBox) return
 panelSelectionBox.style.left=`${rect.left}px`
 panelSelectionBox.style.top=`${rect.top}px`
 panelSelectionBox.style.width=`${rect.width}px`
 panelSelectionBox.style.height=`${rect.height}px`
 panelSelectionBox.classList.add("visible")
}

function hidePanelSelectionBox(){
 if(!panelSelectionBox) return
 panelSelectionBox.classList.remove("visible")
 panelSelectionBox.style.width="0px"
 panelSelectionBox.style.height="0px"
}

function setPanelSelectionInteraction(isActive){
 document.body.classList.toggle("panel-selecting",isActive)
 if(!isActive) return
 const selection=window.getSelection?.()
 if(selection){
  selection.removeAllRanges()
 }
}

function rectsIntersect(a,b){
 return a.left<=b.right && a.right>=b.left && a.top<=b.bottom && a.bottom>=b.top
}

function getPanelSelectionRect(panel){
 if(!panel) return null
 if(panel.classList.contains("collapsed")){
  const iconRect=panel.querySelector(".panel-collapsed-icon")?.getBoundingClientRect?.()
  if(iconRect && iconRect.width>0 && iconRect.height>0){
   return iconRect
  }
 }
 return panel.getBoundingClientRect()
}

function updatePanelsFromSelectionRect(rect,{addToSelection=false,baseSelectedIds=null}={}){
 const selected=getPanels().filter(panel=>{
  if(panel.classList.contains("panel-hidden")) return false
  const panelRect=getPanelSelectionRect(panel)
  if(!panelRect) return false
  return rectsIntersect(rect,panelRect)
 })
 if(addToSelection){
  const safeBaseIds=baseSelectedIds instanceof Set ? baseSelectedIds : new Set()
  const preserved=getPanels().filter(panel=>{
   if(panel.classList.contains("panel-hidden")) return false
   const panelId=panel?.dataset?.dragId
   return !!panelId && safeBaseIds.has(panelId)
  })
  setSelectedPanels([...preserved,...selected])
  return
 }
 setSelectedPanels(selected)
}

function isPanelSelectionBackgroundTarget(target){
 if(!target) return false
 if(target.closest(".topbar,.side-menu,.side-menu-overlay,.lock-screen,.confirm-screen")) return false
 if(target.closest(`${PANEL_SELECTOR},.folder-icon-widget`)) return false
 return !!target.closest("body,.scale,.layout")
}

function isNotesPanelId(id){
 return id==="notes" || /^notes-\d+$/.test(id || "")
}

function getNotesPanels(){
 return [...document.querySelectorAll(".notes")].sort((a,b)=>(Number(a.dataset.noteIndex)||0)-(Number(b.dataset.noteIndex)||0))
}

function makeNotesPanelId(index){
 return index===0 ? "notes" : `notes-${index+1}`
}

function getNotesPanelDefaultLabel(index){
 return index===0 ? t("notesPanel") : t("notesPanelIndexed",{index:index+1})
}

function getNotesPanelLabel(index){
 const customTitle=normalizeNoteTitle(noteTitles[index])
 return customTitle || getNotesPanelDefaultLabel(index)
}

function getPanelCollapsedLabel(panel){
 const id=panel?.dataset?.dragId || ""
 if(isNotesPanelId(id)){
  const noteIndex=Math.max(0,Number(panel.dataset.noteIndex)||0)
  return getNotesPanelLabel(noteIndex)
 }
 const labelKey=PANEL_LABEL_KEYS[id]
 if(labelKey){
  return t(labelKey)
 }
 const heading=panel?.querySelector?.("h2,h3")
 return String(heading?.textContent || id || "").replace(/\s+/g," ").trim()
}

function ensurePanelCollapsedBadge(panel){
 if(!panel) return
 const children=[...panel.children]
 let iconEl=children.find(child=>child.classList?.contains("panel-collapsed-icon"))
 if(!iconEl){
  iconEl=document.createElement("div")
  iconEl.className="panel-collapsed-icon"
  panel.appendChild(iconEl)
 }
 let labelEl=children.find(child=>child.classList?.contains("panel-collapsed-label"))
 if(!labelEl){
  labelEl=document.createElement("div")
  labelEl.className="panel-collapsed-label"
  panel.appendChild(labelEl)
 }
 labelEl.textContent=getPanelCollapsedLabel(panel)
}

function refreshPanelCollapsedBadges(){
 getPanels().forEach(panel=>ensurePanelCollapsedBadge(panel))
}

function getNotesInsertBeforeNode(){
 return document.querySelector('.totals[data-drag-id="totals"]')
}

function insertNotesPanel(panel){
 const insertBeforeNode=getNotesInsertBeforeNode()
 const parent=insertBeforeNode?.parentNode || document.body
 parent.insertBefore(panel,insertBeforeNode || null)
}

function snapshotNotesPanelLayout(panel){
 const expandedHeight=panel.classList.contains("collapsed")
  ? (panel.dataset.notesExpandedHeight || "")
  : (panel.style.height || `${panel.offsetHeight}px`)
 return {
  left:panel.style.left || `${panel.offsetLeft}px`,
  top:panel.style.top || `${panel.offsetTop}px`,
  width:panel.style.width || "",
  height:expandedHeight,
  z:parseInt(panel.style.zIndex,10) || 10
 }
}

function rememberNotesPanelLayout(panel){
 const dragId=panel?.dataset?.dragId
 if(!dragId || !isNotesPanelId(dragId)) return
 notesPanelLayouts[dragId]=snapshotNotesPanelLayout(panel)
}

function applyRememberedNotesPanelLayout(panel){
 const dragId=panel?.dataset?.dragId
 if(!dragId || !notesPanelLayouts[dragId]) return false
 const layout=notesPanelLayouts[dragId]
 panel.style.left=layout.left || panel.style.left
 panel.style.top=layout.top || panel.style.top
 panel.style.width=layout.width || ""
 panel.style.height=layout.height || ""
 if(layout.z!=null){
  panel.style.zIndex=String(layout.z)
  topZIndex=Math.max(topZIndex,Number(layout.z)||10)
 }
 return true
}

function updateNotesPanelMeta(panel,index){
 panel.dataset.noteIndex=String(index)
 panel.dataset.dragId=makeNotesPanelId(index)
 const title=panel.querySelector("h3")
 const editor=panel.querySelector(".notes-editor")
 if(title && panel.dataset.titleEditing!=="1"){
  title.textContent=getNotesPanelLabel(index)
 }
 if(editor && editor.innerHTML!==notesItems[index]){
  editor.innerHTML=notesItems[index] || ""
 }
 ensurePanelCollapsedBadge(panel)
}

function startNotesTitleEditing(panel){
 if(!panel || panel.dataset.titleEditing==="1") return
 const titleEl=panel.querySelector("h3")
 if(!titleEl) return
 const noteIndex=Math.max(0,Number(panel.dataset.noteIndex)||0)
 const initialTitle=normalizeNoteTitle(noteTitles[noteIndex])
 const placeholder=getNotesPanelDefaultLabel(noteIndex)
 panel.dataset.titleEditing="1"
 const input=document.createElement("input")
 input.type="text"
 input.className="notes-title-input"
 input.value=initialTitle
 input.placeholder=placeholder
 titleEl.textContent=""
 titleEl.appendChild(input)
 input.focus()
 input.select()
 let completed=false
 const finish=(save)=>{
  if(completed) return
  completed=true
  input.removeEventListener("keydown",onKeyDown)
  input.removeEventListener("blur",onBlur)
  panel.dataset.titleEditing="0"
  if(!save){
   updateNotesPanelMeta(panel,noteIndex)
   return
  }
  const nextTitle=normalizeNoteTitle(input.value)
  if(nextTitle===initialTitle){
   updateNotesPanelMeta(panel,noteIndex)
   return
  }
  commitUndoableChange(()=>{
   noteTitles=normalizeNotesTitles(noteTitles,notesItems.length)
   noteTitles[noteIndex]=nextTitle
   saveNotesTitles()
   updateNotesPanelMeta(panel,noteIndex)
   renderSideMenuList()
  })
 }
 const onBlur=()=>finish(true)
 const onKeyDown=(e)=>{
  e.stopPropagation()
  if(e.key==="Enter"){
   e.preventDefault()
   finish(true)
   return
  }
  if(e.key==="Escape"){
   e.preventDefault()
   finish(false)
  }
 }
 input.addEventListener("keydown",onKeyDown)
 input.addEventListener("blur",onBlur)
 input.addEventListener("pointerdown",e=>e.stopPropagation())
}

function createNotesPanel(index){
 const panel=document.createElement("div")
 panel.className="notes"
 panel.innerHTML=`<button class="min-btn" type="button" data-collapse-btn></button><button class="delete-day-btn" type="button" data-hide-btn aria-label="${t("hideWindow")}" title="${t("hideWindow")}"></button><h3 class="notes-title-editable"></h3><div class="notes-editor" contenteditable="true" spellcheck="true" autocorrect="on" autocapitalize="sentences" lang="${currentLanguage==="en" ? "en-US" : "uk-UA"}" data-placeholder="${t("notesPlaceholder")}"></div><div class="notes-toolbar"><button class="notes-tool-btn" type="button" data-note-cmd="bold" title="${t("toolBold")}" aria-label="${t("toolBold")}"><span class="notes-tool-icon notes-tool-icon-bold">B</span></button><button class="notes-tool-btn" type="button" data-note-cmd="italic" title="${t("toolItalic")}" aria-label="${t("toolItalic")}"><span class="notes-tool-icon notes-tool-icon-italic">I</span></button><button class="notes-tool-btn" type="button" data-note-cmd="strike" title="${t("toolStrike")}" aria-label="${t("toolStrike")}"><span class="notes-tool-icon notes-tool-icon-strike">S</span></button><button class="notes-tool-btn" type="button" data-note-cmd="underline" title="${t("toolUnderline")}" aria-label="${t("toolUnderline")}"><span class="notes-tool-icon notes-tool-icon-underline">U</span></button><button class="notes-tool-btn" type="button" data-note-cmd="mono" title="${t("toolMono")}" aria-label="${t("toolMono")}"><span class="notes-tool-icon notes-tool-icon-mono">&lt;/&gt;</span></button><button class="notes-tool-btn" type="button" data-note-cmd="spoiler" title="${t("toolSpoiler")}" aria-label="${t("toolSpoiler")}"><span class="notes-tool-icon notes-tool-icon-spoiler" aria-hidden="true"></span></button><button class="notes-tool-btn" type="button" data-note-cmd="olist" title="${t("toolList")}" aria-label="${t("toolList")}"><span class="notes-tool-icon">1.</span></button><button class="notes-tool-btn" type="button" data-note-cmd="alignLeft" title="${t("toolAlignLeft")}" aria-label="${t("toolAlignLeft")}"><span class="notes-tool-icon" aria-hidden="true"><svg class="notes-tool-svg" viewBox="0 0 12 10"><line x1="1" y1="1.5" x2="11" y2="1.5"></line><line x1="1" y1="5" x2="8.5" y2="5"></line><line x1="1" y1="8.5" x2="10" y2="8.5"></line></svg></span></button><button class="notes-tool-btn" type="button" data-note-cmd="alignCenter" title="${t("toolAlignCenter")}" aria-label="${t("toolAlignCenter")}"><span class="notes-tool-icon" aria-hidden="true"><svg class="notes-tool-svg" viewBox="0 0 12 10"><line x1="1.5" y1="1.5" x2="10.5" y2="1.5"></line><line x1="2.5" y1="5" x2="9.5" y2="5"></line><line x1="1.5" y1="8.5" x2="10.5" y2="8.5"></line></svg></span></button><button class="notes-tool-btn" type="button" data-note-cmd="alignRight" title="${t("toolAlignRight")}" aria-label="${t("toolAlignRight")}"><span class="notes-tool-icon" aria-hidden="true"><svg class="notes-tool-svg" viewBox="0 0 12 10"><line x1="1" y1="1.5" x2="11" y2="1.5"></line><line x1="3.5" y1="5" x2="11" y2="5"></line><line x1="2" y1="8.5" x2="11" y2="8.5"></line></svg></span></button><button class="notes-tool-btn" type="button" data-note-cmd="clear" title="${t("toolReset")}" aria-label="${t("toolReset")}"><span class="notes-tool-icon">X</span></button></div>`
 updateNotesPanelMeta(panel,index)
 return panel
}

function placeNotesPanelNearPrevious(panel,index){
 const panelWidth=panel.offsetWidth || 360
 const panelHeight=panel.offsetHeight || 250
 const minTop=getPanelTopSafeY()
 const centerX=(window.innerWidth-panelWidth)/2
 const centerY=(window.innerHeight-panelHeight)/2
 const nextX=Math.max(20,Math.min(window.innerWidth-panelWidth-20,centerX+(index*8)))
 const nextY=Math.max(minTop,Math.min(window.innerHeight-panelHeight-20,centerY-(index*8)))
 panel.style.left=`${nextX}px`
 panel.style.top=`${nextY}px`
 bringToFront(panel)
}

function syncNotesPanels(targetCount=notesItems.length){
 const clampedCount=Math.max(MIN_NOTES_PANELS,Math.min(MAX_NOTES_PANELS,Number(targetCount)||MIN_NOTES_PANELS))
 notesItems=normalizeNotesItems(notesItems)
 noteTitles=normalizeNotesTitles(noteTitles,notesItems.length)
 if(notesItems.length<clampedCount){
  while(notesItems.length<clampedCount) notesItems.push("")
 }else if(notesItems.length>clampedCount){
  notesItems=notesItems.slice(0,clampedCount)
 }
 noteTitles=normalizeNotesTitles(noteTitles,clampedCount)

 const panels=getNotesPanels()

 for(let index=panels.length; index<clampedCount; index+=1){
  const panel=createNotesPanel(index)
  insertNotesPanel(panel)
  if(!applyRememberedNotesPanelLayout(panel)){
   placeNotesPanelNearPrevious(panel,index)
  }
  initNotePanel(panel)
 }

 const updatedPanels=getNotesPanels()
 updatedPanels.forEach((panel,index)=>{
  if(index<clampedCount){
   updateNotesPanelMeta(panel,index)
   return
  }
  delete notesPanelLayouts[panel.dataset.dragId]
  panel.remove()
 })

 refreshDraggables()
  saveNotesItems()
 saveNotesTitles()
 saveNotesPanelLayouts()
}

function moveArrayItem(list,fromIndex,toIndex){
 if(!Array.isArray(list)) return
 if(fromIndex===toIndex) return
 if(fromIndex<0 || toIndex<0 || fromIndex>=list.length || toIndex>=list.length) return
 const [item]=list.splice(fromIndex,1)
 list.splice(toIndex,0,item)
}

function moveNotesPanel(fromIndex,toIndex){
 const count=notesItems.length
 const from=Math.max(0,Math.min(count-1,Math.floor(Number(fromIndex)||0)))
 const to=Math.max(0,Math.min(count-1,Math.floor(Number(toIndex)||0)))
 if(from===to || count<=1) return false
 const panels=getNotesPanels()
 if(from>=panels.length || to>=panels.length) return false

 const reorderedPanels=[...panels]
 const [movingPanel]=reorderedPanels.splice(from,1)
 reorderedPanels.splice(to,0,movingPanel)

 const selectedPanels=getSelectedPanels()
 moveArrayItem(notesItems,from,to)
 moveArrayItem(noteTitles,from,to)

 const panelLayoutMap=new Map(panels.map(panel=>[panel,snapshotNotesPanelLayout(panel)]))
 reorderedPanels.forEach((panel,index)=>updateNotesPanelMeta(panel,index))

 notesPanelLayouts={}
 reorderedPanels.forEach((panel,index)=>{
  const snapshot=panelLayoutMap.get(panel)
  if(snapshot){
   notesPanelLayouts[makeNotesPanelId(index)]=snapshot
  }
 })

 saveNotesItems()
 saveNotesTitles()
 saveNotesPanelLayouts()
 refreshDraggables()
 setSelectedPanels(selectedPanels.filter(panel=>panel && !panel.classList.contains("panel-hidden")))
 savePositions()
 renderSideMenuList()
 return true
}

function removeNotesPanelByIndex(noteIndex){
 const count=notesItems.length
 if(count<=MIN_NOTES_PANELS) return false
 const index=Math.max(0,Math.min(count-1,Math.floor(Number(noteIndex)||0)))
 const panels=getNotesPanels()
 if(index>=panels.length) return false

 const panelToRemove=panels[index]
 const remainingPanels=panels.filter((_,panelIndex)=>panelIndex!==index)
 const selectedPanels=getSelectedPanels().filter(panel=>panel!==panelToRemove)
 const remainingLayoutMap=new Map(remainingPanels.map(panel=>[panel,snapshotNotesPanelLayout(panel)]))

 notesItems.splice(index,1)
 noteTitles.splice(index,1)
 removePanelFromSelection(panelToRemove)
 panelToRemove.remove()

 remainingPanels.forEach((panel,panelIndex)=>updateNotesPanelMeta(panel,panelIndex))
 notesPanelLayouts={}
 remainingPanels.forEach((panel,panelIndex)=>{
  const snapshot=remainingLayoutMap.get(panel)
  if(snapshot){
   notesPanelLayouts[makeNotesPanelId(panelIndex)]=snapshot
  }
 })

 saveNotesItems()
 saveNotesTitles()
 saveNotesPanelLayouts()
 refreshDraggables()
 setSelectedPanels(selectedPanels.filter(panel=>panel && !panel.classList.contains("panel-hidden")))
 savePositions()
 renderSideMenuList()
 return true
}

function createNotesMenuDragPreview(item){
 if(!item) return null
 const rect=item.getBoundingClientRect()
 const preview=item.cloneNode(true)
 preview.classList.add("side-menu-note-drag-preview")
 preview.style.width=`${rect.width}px`
 preview.style.height=`${rect.height}px`
 return preview
}

function createNotesMenuPlaceholder(item){
 if(!item) return null
 const rect=item.getBoundingClientRect()
 const placeholder=document.createElement("div")
 placeholder.className="side-menu-note-placeholder"
 placeholder.style.height=`${rect.height}px`
 return placeholder
}

function positionNotesMenuDragPreview(clientX,clientY){
 if(!activeNotesMenuReorder?.previewEl) return
 const x=clientX-activeNotesMenuReorder.offsetX
 const y=clientY-activeNotesMenuReorder.offsetY
 activeNotesMenuReorder.previewEl.style.transform=`translate(${x}px,${y}px)`
}

function getNotesMenuReorderInsertBefore(container,placeholder,clientY){
 const items=[...container.querySelectorAll(".side-menu-item.note-item")]
  .filter(item=>item!==placeholder)
 let nextItem=null
 let bestOffset=Number.NEGATIVE_INFINITY
 items.forEach(item=>{
  const rect=item.getBoundingClientRect()
  const offset=clientY-rect.top-(rect.height/2)
  if(offset<0 && offset>bestOffset){
   bestOffset=offset
   nextItem=item
  }
 })
 return nextItem
}

function finishNotesMenuReorder(commitMove){
 if(!activeNotesMenuReorder) return
 const state=activeNotesMenuReorder
 document.removeEventListener("pointermove",handleNotesMenuReorderPointerMove)
 document.removeEventListener("pointerup",handleNotesMenuReorderPointerUp)
 document.removeEventListener("pointercancel",handleNotesMenuReorderPointerCancel)
 document.body.style.userSelect=""
 state.previewEl?.remove()
 const toIndex=[...state.container.children].indexOf(state.placeholderEl)
 state.placeholderEl.remove()
 activeNotesMenuReorder=null
 if(!commitMove || toIndex<0 || toIndex===state.fromIndex){
  renderSideMenuList()
  return
 }
 commitUndoableChange(()=>{
  moveNotesPanel(state.fromIndex,toIndex)
 })
}

function handleNotesMenuReorderPointerMove(e){
 if(!activeNotesMenuReorder) return
 positionNotesMenuDragPreview(e.clientX,e.clientY)
 const insertBeforeEl=getNotesMenuReorderInsertBefore(activeNotesMenuReorder.container,activeNotesMenuReorder.placeholderEl,e.clientY)
 if(insertBeforeEl){
  activeNotesMenuReorder.container.insertBefore(activeNotesMenuReorder.placeholderEl,insertBeforeEl)
 }else{
  activeNotesMenuReorder.container.appendChild(activeNotesMenuReorder.placeholderEl)
 }
}

function handleNotesMenuReorderPointerUp(){
 finishNotesMenuReorder(true)
}

function handleNotesMenuReorderPointerCancel(){
 finishNotesMenuReorder(false)
}

function startNotesMenuReorder(item,e){
 if(activeNotesMenuReorder || !item) return
 const fromIndex=parseInt(item.dataset.noteIndex,10)
 if(Number.isNaN(fromIndex)) return
 const container=item.parentElement
 if(!container) return
 const previewEl=createNotesMenuDragPreview(item)
 const placeholderEl=createNotesMenuPlaceholder(item)
 if(!previewEl || !placeholderEl) return
 const rect=item.getBoundingClientRect()
 const nextSibling=item.nextSibling
 item.remove()
 container.insertBefore(placeholderEl,nextSibling)
 document.body.appendChild(previewEl)
 activeNotesMenuReorder={
  fromIndex,
  container,
  previewEl,
  placeholderEl,
  offsetX:e.clientX-rect.left,
  offsetY:e.clientY-rect.top
 }
 positionNotesMenuDragPreview(e.clientX,e.clientY)
 document.body.style.userSelect="none"
 document.addEventListener("pointermove",handleNotesMenuReorderPointerMove)
 document.addEventListener("pointerup",handleNotesMenuReorderPointerUp)
 document.addEventListener("pointercancel",handleNotesMenuReorderPointerCancel)
}

let activeFolderIconDrag=null

function normalizeFolderIconState(rawState){
 const source=rawState && typeof rawState==="object" ? rawState : {}
 const width=folderIconWidget?.offsetWidth || 32
 const height=folderIconWidget?.offsetHeight || 32
 const maxX=Math.max(0,window.innerWidth-width)
 const maxY=Math.max(0,window.innerHeight-height)
 const xValue=Number(source.x)
 const yValue=Number(source.y)
 const zValue=Number(source.z)
 return {
  x:Math.max(0,Math.min(maxX,Number.isFinite(xValue) ? xValue : 24)),
  y:Math.max(0,Math.min(maxY,Number.isFinite(yValue) ? yValue : 84)),
  z:Math.max(12,Number.isFinite(zValue) ? Math.floor(zValue) : 14),
  closed:false
 }
}

function loadFolderIconState(){
 try{
  const parsed=JSON.parse(localStorage.getItem(FOLDER_ICON_STATE_KEY) || "null")
  return normalizeFolderIconState(parsed)
 }catch{
  return normalizeFolderIconState(null)
 }
}

function getFolderIconCurrentState(){
 if(!folderIconWidget){
  return normalizeFolderIconState(null)
 }
 return normalizeFolderIconState({
  x:parseFloat(folderIconWidget.style.left)||folderIconWidget.offsetLeft,
  y:parseFloat(folderIconWidget.style.top)||folderIconWidget.offsetTop,
  z:parseInt(folderIconWidget.style.zIndex,10)||14
 })
}

function applyFolderIconState(state){
 if(!folderIconWidget) return
 const nextState=normalizeFolderIconState(state)
 folderIconWidget.style.left=`${nextState.x}px`
 folderIconWidget.style.top=`${nextState.y}px`
 folderIconWidget.style.zIndex=String(nextState.z)
 folderIconWidget.classList.toggle("is-closed",nextState.closed)
 topZIndex=Math.max(topZIndex,nextState.z)
}

function saveFolderIconState(){
 if(!folderIconWidget) return
 const state=getFolderIconCurrentState()
 localStorage.setItem(FOLDER_ICON_STATE_KEY,JSON.stringify(state))
}

function handleFolderIconDragMove(e){
 if(!activeFolderIconDrag || !folderIconWidget) return
 const width=folderIconWidget.offsetWidth || 32
 const height=folderIconWidget.offsetHeight || 32
 const maxX=Math.max(0,window.innerWidth-width)
 const maxY=Math.max(0,window.innerHeight-height)
 const nextX=Math.max(0,Math.min(maxX,e.clientX-activeFolderIconDrag.offsetX))
 const nextY=Math.max(0,Math.min(maxY,e.clientY-activeFolderIconDrag.offsetY))
 folderIconWidget.style.left=`${nextX}px`
 folderIconWidget.style.top=`${nextY}px`
}

function finishFolderIconDrag(){
 if(!activeFolderIconDrag || !folderIconWidget) return
 activeFolderIconDrag=null
 folderIconWidget.classList.remove("is-dragging")
 document.removeEventListener("pointermove",handleFolderIconDragMove)
 document.removeEventListener("pointerup",finishFolderIconDrag)
 document.removeEventListener("pointercancel",finishFolderIconDrag)
 saveFolderIconState()
}

function startFolderIconDrag(e){
 if(!folderIconWidget) return
 if(e.button!=null && e.button!==0) return
 if(e.detail>1) return
 e.preventDefault()
 e.stopPropagation()
 const rect=folderIconWidget.getBoundingClientRect()
 topZIndex=Math.max(topZIndex,parseInt(folderIconWidget.style.zIndex,10)||14)+1
 folderIconWidget.style.zIndex=String(topZIndex)
 folderIconWidget.classList.add("is-dragging")
 activeFolderIconDrag={
  offsetX:e.clientX-rect.left,
  offsetY:e.clientY-rect.top
 }
 document.addEventListener("pointermove",handleFolderIconDragMove)
 document.addEventListener("pointerup",finishFolderIconDrag)
 document.addEventListener("pointercancel",finishFolderIconDrag)
}

function initFolderIconWidget(){
 if(!folderIconWidget) return
 applyFolderIconState(loadFolderIconState())
 if(folderIconWidget.dataset.folderReady==="1") return
 folderIconWidget.dataset.folderReady="1"
 folderIconWidget.addEventListener("pointerdown",startFolderIconDrag)
 folderIconWidget.addEventListener("dblclick",(e)=>{
  if(e.target.closest("button,input,select,textarea,[contenteditable='true']")) return
  e.preventDefault()
  e.stopPropagation()
  folderIconWidget.classList.remove("is-closed")
  saveFolderIconState()
  applyLowercaseButtonTooltips(folderIconWidget)
 })
 window.addEventListener("resize",()=>{
  applyFolderIconState(getFolderIconCurrentState())
  saveFolderIconState()
 })
}

isPinned=localStorage.getItem(PIN_KEY)==="1"
applyWindowScale()

syncNotesPanels(notesItems.length)
const isFirstLaunchWithoutLayout=!hasAnySavedPosition()
applySavedPositions()
if(isFirstLaunchWithoutLayout){
 ensureCenteredWelcomeNotePanel({forceCreate:true})
 setInitialPositions()
 savePositions()
 showWelcomeSplash()
}

refreshDraggables().forEach(el=>enableDrag(el))
document.querySelectorAll("[data-hide-btn]").forEach(btn=>bindPanelHideButton(btn))
updateToolbar()
initFolderIconWidget()
initMarginBasicCalculator()
initMarginBasicCalculatorKeyboard()
initNotes()
initTotalsPanelResizeObserver()
initWorkspaceDrag()
initPanelSelection()
initKeyboardPanelNudge()
initWindowScaleShortcut()
initContextMenuBlock()
initSaveDataShortcut()
initCollapseButtons()
initUndoShortcut()
if(langToggleBtn){
 langToggleBtn.addEventListener("click",()=>{
  const nextLanguage=currentLanguage==="uk" ? "en" : "uk"
  setLanguage(nextLanguage,{persist:true})
 })
}
localStorage.setItem(LANGUAGE_KEY,currentLanguage)
updateLanguageUrl(currentLanguage)
applyLanguage()
initCloudSync()
updateMarginFlipUI()
updateTrackerFlipUI()
updateTotalsFlipUI()
updateClockFlipUI()
updateMarketClocks()
setInterval(updateMarketClocks,1000)
setInterval(()=>{
 if(!isLocked) return
 updateLockFormAvailability()
},1000)
window.addEventListener("resize",updateTrackerCardHeight)
window.addEventListener("resize",updateMarginCardHeight)
window.addEventListener("resize",updateTotalsCardHeight)
window.addEventListener("resize",updateClockCardHeight)
window.addEventListener("resize",updateDayTabsNavigation)
window.addEventListener("resize",()=>getNotesPanels().forEach(updateNotesToolbarNavigation))
if(localStorage.getItem(LOCK_STATE_KEY)==="1"){
 if(lockPasswordVerifier){
  setLockState(true)
 }else{
  localStorage.removeItem(LOCK_STATE_KEY)
 }
}
lastCommittedState=serializeAppState()
restoreUndoHistoryFromStorage()
persistUndoHistory()

function hasAnySavedPosition(){
 try{
  const data=JSON.parse(localStorage.getItem(DRAG_KEY)||"{}")
  return Object.keys(data).length>0
 }catch{
  return false
 }
}

function getPanelTopSafeY(){
 const topbarBottom=(document.querySelector(".topbar")?.getBoundingClientRect()?.bottom ?? 0)
 const layoutRect=layoutEl?.getBoundingClientRect?.() || null
 const scaleRaw=Number(windowsScale)
 const scale=(Number.isFinite(scaleRaw) && scaleRaw>0) ? scaleRaw : 1
 const topGapPx=2
 const viewportTopPx=topbarBottom+topGapPx
 if(layoutRect){
  return Math.round((viewportTopPx-layoutRect.top)/scale)
 }
 return Math.round(viewportTopPx/scale)
}

function applySavedPositions(){
 try{
  const data=JSON.parse(localStorage.getItem(DRAG_KEY)||"{}")
  const meta=data.__meta || {}
  if(meta.backgroundPosition){
   document.body.style.backgroundPosition=meta.backgroundPosition
  }
  if(meta.topZIndex){
   topZIndex=Math.max(topZIndex,Number(meta.topZIndex)||10)
  }
  draggables.forEach(el=>{
   const id=el.dataset.dragId
   if(!id || !data[id]) return
   const savedX=Number(data[id].x)
   const savedY=Number(data[id].y)
   const clampedSavedY=Math.max(getPanelTopSafeY(),Number.isFinite(savedY) ? savedY : 0)
   el.style.left=`${Number.isFinite(savedX) ? savedX : 0}px`
   el.style.top=`${clampedSavedY}px`
   const expandedX=parseFloat(data[id].expandedX)
   const expandedY=parseFloat(data[id].expandedY)
   const folderX=parseFloat(data[id].folderX)
   const folderY=parseFloat(data[id].folderY)
   const safeExpandedY=Number.isFinite(expandedY) ? Math.max(getPanelTopSafeY(),expandedY) : clampedSavedY
   const safeFolderY=Number.isFinite(folderY) ? Math.max(getPanelTopSafeY(),folderY) : clampedSavedY
   el.dataset.expandedX=String(Number.isFinite(expandedX) ? expandedX : (Number.isFinite(savedX) ? savedX : 0))
   el.dataset.expandedY=String(safeExpandedY)
   el.dataset.folderX=String(Number.isFinite(folderX) ? folderX : (Number.isFinite(savedX) ? savedX : 0))
   el.dataset.folderY=String(safeFolderY)
  if(data[id].z!=null){
   el.style.zIndex=String(data[id].z)
   topZIndex=Math.max(topZIndex,Number(data[id].z)||10)
  }
   if(shouldPersistPanelSize(el)){
    el.style.width=data[id].width?`${data[id].width}px`:""
    el.style.height=data[id].height?`${data[id].height}px`:""
    if(el.classList.contains("notes")){
     el.dataset.notesExpandedHeight=data[id].height?`${data[id].height}px`:""
    }
   }else{
    el.style.width=""
    el.style.height=""
   }
   el.classList.toggle("collapsed",!!data[id].collapsed)
   el.classList.toggle("panel-hidden",!!data[id].hidden)
  })
  updateTrackerCardHeight()
 }catch{}
}

function setInitialPositions(){
 const scaleRaw=Number(windowsScale)
 const scale=(Number.isFinite(scaleRaw) && scaleRaw>0) ? scaleRaw : 1
 const minTop=getPanelTopSafeY()
 const visiblePanels=draggables.filter(panel=>!panel.classList.contains("panel-hidden"))
 if(!visiblePanels.length) return

 const layoutRect=layoutEl?.getBoundingClientRect?.() || null
 const topbarBottom=document.querySelector(".topbar")?.getBoundingClientRect()?.bottom ?? 0
 const weeklyProfitRect=document.querySelector(".weekly-profit")?.getBoundingClientRect?.() || null
 const weeklyProfitMainRect=document.querySelector(".weekly-profit-main")?.getBoundingClientRect?.() || null
 const workTopScreen=Math.max(topbarBottom+12,(weeklyProfitRect?.bottom ?? (topbarBottom+46))+12)
 const workBottomScreen=Math.max(workTopScreen+140,window.innerHeight-16)
 const centerXScreen=weeklyProfitMainRect ? (weeklyProfitMainRect.left + (weeklyProfitMainRect.width/2)) : (window.innerWidth/2)
 const centerYScreen=(workTopScreen+workBottomScreen)/2

 const screenToWorldX=(x)=>{
  if(!layoutRect) return x
  return (x-layoutRect.left)/scale
 }
 const screenToWorldY=(y)=>{
  if(!layoutRect) return y
  return (y-layoutRect.top)/scale
 }

 const leftLimitX=screenToWorldX(20)
 const rightLimitX=screenToWorldX(window.innerWidth-20)
 const topLimitY=Math.max(minTop,screenToWorldY(workTopScreen))
 const bottomLimitY=screenToWorldY(workBottomScreen)
 const centerX=screenToWorldX(centerXScreen)
 const centerY=screenToWorldY(centerYScreen)
 const expandedLiftY=350
 const notesExtraLiftY=580

 const expandedOffsets={
  margin:{x:-420,y:-80},
  totals:{x:-190,y:-210},
  tracker:{x:20,y:-155},
  calendar:{x:-210,y:-25},
  chart:{x:190,y:-35},
  clocks:{x:320,y:-275}
 }

 const getExpandedPosition=(panel,index)=>{
  const panelW=Math.max(40,panel.offsetWidth||72)
  const panelH=Math.max(40,panel.offsetHeight||74)
  const panelId=String(panel.dataset.dragId || "")
  let offset=expandedOffsets[panelId] || null
  if(!offset && isNotesPanelId(panelId)){
   if(isWelcomeNotePanel(panel)){
    offset={x:0,y:0}
   }else{
   const noteIndex=Math.max(0,Number(panel.dataset.noteIndex)||0)
   offset={
    x:390 + ((noteIndex%2)*230),
    y:90 + (Math.floor(noteIndex/2)*170)
   }
   }
  }
  if(!offset){
   offset={x:-40 + (index*28),y:80 + (index*22)}
  }
  const rawX=(centerX + offset.x) - (panelW/2)
  const noteLift=isNotesPanelId(panelId) ? notesExtraLiftY : 0
  const rawY=(centerY + offset.y - expandedLiftY - noteLift) - (panelH/2)
  const maxX=Math.max(leftLimitX,rightLimitX-panelW)
  const maxY=Math.max(topLimitY,bottomLimitY-panelH)
  return {
   x:Math.max(leftLimitX,Math.min(maxX,Math.round(rawX))),
   y:Math.max(topLimitY,Math.min(maxY,Math.round(rawY)))
  }
 }

 let expandedClusterBottom=topLimitY
 visiblePanels.forEach((panel,index)=>{
  const expandedPos=getExpandedPosition(panel,index)
  const panelExpandedHeight=Math.max(40,panel.offsetHeight||74)
  expandedClusterBottom=Math.max(expandedClusterBottom,expandedPos.y+panelExpandedHeight)
  panel.dataset.expandedX=String(expandedPos.x)
  panel.dataset.expandedY=String(expandedPos.y)
  panel.classList.add("collapsed")
 })

 const folderOrderByPanelId={
  tracker:0,
  totals:1,
  chart:2,
  calendar:3,
  margin:4,
  clocks:5,
  notes:6
 }
 const getFolderOrderRank=(panel)=>{
  const id=String(panel?.dataset?.dragId || "")
  if(isNotesPanelId(id)){
   const noteIndex=Math.max(0,Number(panel?.dataset?.noteIndex) || 0)
   return folderOrderByPanelId.notes + (noteIndex/1000)
  }
  if(Object.prototype.hasOwnProperty.call(folderOrderByPanelId,id)){
   return folderOrderByPanelId[id]
  }
  return 999
 }
 const orderedFolderPanels=[...visiblePanels]
  .map((panel,index)=>({panel,index,rank:getFolderOrderRank(panel)}))
  .sort((a,b)=>(a.rank-b.rank) || (a.index-b.index))
  .map(item=>item.panel)

 const collapsedItems=orderedFolderPanels.map(panel=>{
  const rect=panel.getBoundingClientRect()
  return {
   panel,
   width:Math.max(40,Math.round(rect.width||panel.offsetWidth||72)),
   height:Math.max(40,Math.round(rect.height||panel.offsetHeight||74))
  }
 })

 const maxRowWidth=Math.max(140,rightLimitX-leftLimitX)
 const rows=[]
 let currentRow={items:[],width:0,height:0}

 collapsedItems.forEach(item=>{
  const nextWidth=currentRow.items.length ? currentRow.width+GAP+item.width : item.width
  if(currentRow.items.length && nextWidth>maxRowWidth){
   rows.push(currentRow)
   currentRow={items:[],width:0,height:0}
  }
  currentRow.width=currentRow.items.length ? currentRow.width+GAP+item.width : item.width
  currentRow.height=Math.max(currentRow.height,item.height)
  currentRow.items.push(item)
 })
 if(currentRow.items.length){
  rows.push(currentRow)
 }

 const totalHeight=rows.reduce((sum,row)=>sum+row.height,0)+GAP*Math.max(0,rows.length-1)
 const maxStartY=Math.max(topLimitY,bottomLimitY-totalHeight)
 const desiredStartY=Math.round(expandedClusterBottom+GAP+expandedLiftY)
 let startY=Math.max(topLimitY,Math.min(maxStartY,desiredStartY))

 rows.forEach(row=>{
  const centeredRowX=Math.round(centerX-(row.width/2))
  const maxStartX=Math.max(leftLimitX,rightLimitX-row.width)
  let nextX=Math.max(leftLimitX,Math.min(maxStartX,centeredRowX))
  row.items.forEach(item=>{
   const roundedX=Math.round(nextX)
   const roundedY=Math.round(startY)
   item.panel.style.left=`${roundedX}px`
   item.panel.style.top=`${roundedY}px`
   item.panel.dataset.folderX=String(roundedX)
   item.panel.dataset.folderY=String(roundedY)
   nextX += item.width + GAP
  })
  startY += row.height + GAP
 })

 const targetCenterXScreen=weeklyProfitMainRect
  ? (weeklyProfitMainRect.left + (weeklyProfitMainRect.width/2))
  : (window.innerWidth/2)
 const targetCenterXWorld=screenToWorldX(targetCenterXScreen)
 const panelBounds=visiblePanels.map(panel=>{
  const width=Math.max(40,panel.offsetWidth||72)
  const x=parseFloat(panel.style.left)||0
  return {panel,x,width}
 })
 const minX=Math.min(...panelBounds.map(item=>item.x))
 const maxX=Math.max(...panelBounds.map(item=>item.x+item.width))
 const currentCenterX=(minX+maxX)/2
 const requestedShift=targetCenterXWorld-currentCenterX
 const minAllowedShift=leftLimitX-minX
 const maxAllowedShift=rightLimitX-maxX
 const appliedShift=Math.max(minAllowedShift,Math.min(maxAllowedShift,requestedShift))
 if(Math.abs(appliedShift)>0.01){
  panelBounds.forEach(item=>{
   const nextX=Math.round(item.x+appliedShift)
   item.panel.style.left=`${nextX}px`
   item.panel.dataset.folderX=String(nextX)
  })
 }

}

function layoutPanelsInRows(){
 const visiblePanels=draggables.filter(panel=>!panel.classList.contains("panel-hidden"))
 if(!visiblePanels.length) return
 const viewportWidth=Math.max(320,window.innerWidth)
 const rightLimit=viewportWidth-20
 let nextX=20
 let nextY=getPanelTopSafeY()+16
 let rowHeight=0
 visiblePanels.forEach(panel=>{
  const panelWidth=panel.offsetWidth || 320
  const panelHeight=panel.offsetHeight || 220
  if(nextX+panelWidth>rightLimit && nextX>20){
   nextX=20
   nextY += rowHeight + GAP
   rowHeight=0
  }
  panel.style.left=`${nextX}px`
  panel.style.top=`${nextY}px`
  nextX += panelWidth + GAP
  rowHeight=Math.max(rowHeight,panelHeight)
 })
}

function initPanelSelection(){
 if(!layoutEl || !panelSelectionBox) return

 document.addEventListener("pointerdown",(e)=>{
 if(e.button!==0) return
  if(isLocked || isResetConfirmOpen || isDonationScreenOpen || spaceDragMode) return
  if(sideMenu?.classList.contains("open")) return
  if(!isPanelSelectionBackgroundTarget(e.target)) return
 panelSelectionState={
   pointerId:e.pointerId,
   startX:e.clientX,
   startY:e.clientY,
   hasMoved:false,
   additive:!!e.shiftKey,
   baseSelectedIds:new Set([...selectedPanelIds])
  }
  setPanelSelectionInteraction(true)
  if(!panelSelectionState.additive){
   clearSelectedPanels()
  }
  hidePanelSelectionBox()
 })

 document.addEventListener("pointermove",(e)=>{
  if(!panelSelectionState || e.pointerId!==panelSelectionState.pointerId) return
  const dx=e.clientX-panelSelectionState.startX
  const dy=e.clientY-panelSelectionState.startY
  if(!panelSelectionState.hasMoved && Math.abs(dx)<4 && Math.abs(dy)<4) return
  panelSelectionState.hasMoved=true
  const left=Math.min(panelSelectionState.startX,e.clientX)
  const top=Math.min(panelSelectionState.startY,e.clientY)
  const right=Math.max(panelSelectionState.startX,e.clientX)
  const bottom=Math.max(panelSelectionState.startY,e.clientY)
  const rect={
   left,
   top,
   right,
   bottom,
   width:right-left,
   height:bottom-top
  }
  setPanelSelectionInteraction(true)
  updatePanelSelectionBox(rect)
  updatePanelsFromSelectionRect(rect,{
   addToSelection:!!panelSelectionState.additive,
   baseSelectedIds:panelSelectionState.baseSelectedIds
  })
 })

 const finishSelection=(e)=>{
  if(!panelSelectionState || (e?.pointerId!=null && e.pointerId!==panelSelectionState.pointerId)) return
  panelSelectionState=null
  setPanelSelectionInteraction(false)
  hidePanelSelectionBox()
 }

 document.addEventListener("pointerup",finishSelection)
 document.addEventListener("pointercancel",finishSelection)
}

function enableDrag(el){
 if(!el || el.dataset.dragReady==="1") return
 el.dataset.dragReady="1"
 const dragSnapStep=10
 let isDown=false
 let startX=0
 let startY=0
 let dragItems=[]
 let dragUndoSnapshot=""
 let snapDragByModifier=false
 let lastMoveX=0
 let lastMoveY=0
 let lastMoveTs=0

 const setDragMotionBlur=(blurPx)=>{
  const safeBlur=Math.max(0,Number(blurPx) || 0)
  dragItems.forEach(item=>{
   const panel=item.el
   if(!panel) return
   if(safeBlur<=0.05){
    panel.classList.remove("drag-motion-active")
    panel.style.removeProperty("--drag-motion-blur")
    return
   }
   panel.style.setProperty("--drag-motion-blur",`${safeBlur.toFixed(2)}px`)
   panel.classList.add("drag-motion-active")
  })
 }

el.addEventListener("pointerdown",(e)=>{
 const target=e.target
 if(target?.closest?.(DRAG_INTERACTIVE_SELECTOR)) return
 if(el.classList.contains("collapsed") && !target?.closest?.(".panel-collapsed-icon")) return
 if(target?.isContentEditable || target?.closest?.('[contenteditable="true"]')) return
 if(isPointerInResizeZone(el,e)) return
 if(isPinned) return
 if(e.shiftKey){
  e.preventDefault()
  if(isPanelSelected(el)){
   removePanelFromSelection(el)
  }else{
   const selectedNow=getSelectedPanels()
   setSelectedPanels([...selectedNow,el])
  }
  return
 }
  snapDragByModifier=!!(e.ctrlKey || e.metaKey)
  const dragPanels=isPanelSelected(el) ? getSelectedPanels(el) : [el]
  setSelectedPanels(dragPanels)
  dragUndoSnapshot=lastCommittedState || serializeAppState()
  const frontAnchor=dragPanels.length>1 ? null : el
  bringPanelsToFront(dragPanels,frontAnchor)
  isDown=true
  el.setPointerCapture(e.pointerId)
  startX=e.clientX
  startY=e.clientY
   lastMoveX=e.clientX
   lastMoveY=e.clientY
   lastMoveTs=performance.now()
  dragItems=dragPanels.map(panel=>({
   el:panel,
   x:parseFloat(panel.style.left)||panel.offsetLeft,
   y:parseFloat(panel.style.top)||panel.offsetTop
  }))
 })

  el.addEventListener("pointermove",(e)=>{
   if(!isDown) return
   const now=performance.now()
   const dt=Math.max(1,now-lastMoveTs)
   const stepDx=e.clientX-lastMoveX
   const stepDy=e.clientY-lastMoveY
   const speed=Math.hypot(stepDx,stepDy)/dt
   const blurThreshold=0.24
   const maxBlur=1.4
   const blurPx=speed<=blurThreshold ? 0 : Math.min(maxBlur,(speed-blurThreshold)*3.2)
   setDragMotionBlur(blurPx)
   lastMoveX=e.clientX
   lastMoveY=e.clientY
   lastMoveTs=now
   const dx=e.clientX-startX
   const dy=e.clientY-startY
   const minTop=getPanelTopSafeY()
   const shouldSnap=snapDragByModifier && (e.ctrlKey || e.metaKey)
   dragItems.forEach(item=>{
    let nextX=item.x+dx
    let nextY=Math.max(minTop,item.y+dy)
    if(shouldSnap){
     nextX=Math.round(nextX/dragSnapStep)*dragSnapStep
     nextY=Math.round(nextY/dragSnapStep)*dragSnapStep
     nextY=Math.max(minTop,nextY)
    }
    item.el.style.left=`${nextX}px`
    item.el.style.top=`${nextY}px`
   })
  })

  const finishPanelDrag=(e)=>{
   if(!isDown) return
   isDown=false
   setDragMotionBlur(0)
   if(el.hasPointerCapture?.(e.pointerId)){
    el.releasePointerCapture(e.pointerId)
   }
   snapDragByModifier=false
   dragItems=[]
   savePositions()
   const after=serializeAppState()
  if(after!==dragUndoSnapshot){
   pushUndoSnapshot(dragUndoSnapshot)
   redoStack=[]
   lastCommittedState=after
   persistUndoHistory()
  }
 }

  el.addEventListener("pointerup",finishPanelDrag)
  el.addEventListener("pointercancel",finishPanelDrag)
}

function isPointerInResizeZone(el,e){
 if(!isPanelResizable(el)) return false
 const rect=el.getBoundingClientRect()
 const resizeHandleSize=22
 if(el.classList.contains("totals")){
  return e.clientY>=rect.bottom-resizeHandleSize
 }
 return e.clientX>=rect.right-resizeHandleSize && e.clientY>=rect.bottom-resizeHandleSize
}

function bringToFront(el){
 topZIndex+=1
 el.style.zIndex=String(topZIndex)
}

pinBtn.addEventListener("click",()=>{
 commitUndoableChange(()=>{
  isPinned=!isPinned
  localStorage.setItem(PIN_KEY,isPinned?"1":"0")
  updateToolbar()
  showPinStateToast()
 })
})

function updateToolbar(){
 pinBtn.classList.toggle("active",isPinned)
}

function showStatusToast(message){
 if(!statusToastEl || !message) return
 statusToastEl.textContent=message
 statusToastEl.classList.add("visible")
 clearTimeout(statusToastTimer)
 statusToastTimer=setTimeout(()=>{
  statusToastEl.classList.remove("visible")
 },800)
}

function showWelcomeSplash(){
 if(!welcomeSplashEl) return
 welcomeSplashEl.classList.remove("show")
 void welcomeSplashEl.offsetWidth
 welcomeSplashEl.classList.add("show")
 clearTimeout(welcomeSplashTimer)
 welcomeSplashTimer=setTimeout(()=>{
  welcomeSplashEl.classList.remove("show")
 },3400)
}

function initContextMenuBlock(){
 document.addEventListener("contextmenu",(e)=>{
  e.preventDefault()
 })
}

function showPinStateToast(){
 showStatusToast(isPinned ? "PIN WINDOWS ON" : "PIN WINDOWS OFF")
}

function clampWindowScale(value){
 const numeric=Number(value)
 if(!Number.isFinite(numeric)) return DEFAULT_WINDOW_SCALE
 return Math.max(MIN_WINDOW_SCALE,Math.min(MAX_WINDOW_SCALE,numeric))
}

function applyWindowScale(){
 windowsScale=clampWindowScale(windowsScale)
 if(scaleShellEl){
  scaleShellEl.style.setProperty("--windows-scale",windowsScale.toFixed(2))
 }
}

function showWindowScaleToast(){
 const percent=Math.round(windowsScale*100)
 showStatusToast(`SCALE ${percent}%`)
}

function initWindowScaleShortcut(){
document.addEventListener("wheel",(e)=>{
 if(!(e.ctrlKey || e.metaKey)) return
  if(isLocked || isResetConfirmOpen || isDonationScreenOpen) return
  e.preventDefault()
  const direction=e.deltaY<0 ? 1 : -1
  const nextScale=clampWindowScale(windowsScale + (direction*WINDOW_SCALE_STEP))
  if(Math.abs(nextScale-windowsScale)<0.0001) return
  windowsScale=nextScale
  applyWindowScale()
  localStorage.setItem(WINDOW_SCALE_KEY,windowsScale.toFixed(2))
  showWindowScaleToast()
 },{passive:false})
}

function focusPanelFromSideMenu(panelId,{allowReveal=true}={}){
 if(!panelId) return
 refreshDraggables()
 const panel=draggables.find(item=>item.dataset.dragId===panelId)
 if(!panel) return
 const applyFocus=()=>{
  if(panel.classList.contains("panel-hidden")){
   if(!allowReveal) return
   panel.classList.remove("panel-hidden")
   if(panel===trackerPanel){
    refreshTrackerPanelLayout()
   }
   if(panel===clockPanel){
    refreshClockPanelLayout()
   }
   if(panel===totalsPanel){
    refreshTotalsPanelLayout()
   }
   if(panel===pnlCalendarPanel){
    renderPnlCalendar()
   }
  }
  setSelectedPanels([panel])
  bringPanelsToFront([panel],panel)
  savePositions()
  renderSideMenuList()
 }
 if(panel.classList.contains("panel-hidden") && allowReveal){
  commitUndoableChange(()=>{
   applyFocus()
  })
  return
 }
 applyFocus()
}

function renderSideMenuList(){
 if(!sideMenuList) return
 refreshDraggables()
 const renderPanelItem=(panel)=>{
  const id=panel.dataset.dragId
  const noteIndex=Number(panel.dataset.noteIndex)||0
  const isNotesItem=isNotesPanelId(id)
 const panelLabelKey=PANEL_LABEL_KEYS[id]
  const label=isNotesPanelId(id) ? getNotesPanelLabel(noteIndex) : (panelLabelKey ? t(panelLabelKey) : id)
  const checked=!panel.classList.contains("panel-hidden")
  const isSelected=isPanelSelected(panel)
  const noteHandle=isNotesItem ? `<button class="side-menu-note-drag-handle" type="button" data-note-drag-handle="${noteIndex}" aria-label="${t("reorderNote")}" title="${t("reorderNote")}">≡</button>` : ""
  const noteDeleteButton=isNotesItem ? `<button class="side-menu-note-delete-btn" type="button" data-note-delete="${noteIndex}" aria-label="${t("deleteNote")}" title="${t("deleteNote")}" ${notesItems.length<=MIN_NOTES_PANELS?"disabled":""}><span class="side-menu-note-delete-icon">&times;</span></button>` : ""
  const noteIndexAttr=isNotesItem ? ` data-note-index="${noteIndex}"` : ""
  return `<div class="side-menu-item${isSelected?" is-selected":""}${isNotesItem?" note-item":""}"${noteIndexAttr}>${noteHandle}<span class="side-menu-item-label" data-panel-select="${id}" role="button" tabindex="0">${label}</span><span class="side-menu-item-actions"><input type="checkbox" data-panel-toggle="${id}" aria-label="${t("notesShowHideButton")}" title="${t("notesShowHideButton")}" ${checked?"checked":""}>${noteDeleteButton}</span></div>`
 }
const notesPanels=draggables
 .filter(panel=>isNotesPanelId(panel.dataset.dragId))
 .sort((a,b)=>(Number(a.dataset.noteIndex)||0)-(Number(b.dataset.noteIndex)||0))
 const allNotesVisible=notesPanels.length>0 && notesPanels.every(panel=>!panel.classList.contains("panel-hidden"))
 const notesToggleAllCheckbox=`<input class="side-menu-note-toggle-all" type="checkbox" data-notes-toggle-all aria-label="${t("notesToggleAll")}" title="${t("notesShowHideButton")}" ${allNotesVisible?"checked":""} ${notesPanels.length ? "" : "disabled"}>`
const otherPanels=draggables.filter(panel=>!isNotesPanelId(panel.dataset.dragId))
const otherPanelsHtml=otherPanels.map(renderPanelItem).join("")
const notesItemsHtml=notesPanels.map(renderPanelItem).join("")
 const notesHeaderControls=`<span class="side-menu-note-controls"><button class="side-menu-note-btn" type="button" data-notes-action="remove" ${notesItems.length<=MIN_NOTES_PANELS?"disabled":""}>-</button><span class="side-menu-note-count">${notesItems.length}</span><button class="side-menu-note-btn" type="button" data-notes-action="add" ${notesItems.length>=MAX_NOTES_PANELS?"disabled":""}>+</button>${notesToggleAllCheckbox}</span>`
 const notesGroupClassSuffix=`${isNotesGroupCollapsed?" is-collapsed":""}${(!isNotesGroupCollapsed && shouldAnimateNotesGroupOpen)?" is-opening":""}`
 const notesGroupHtml=`<div class="side-menu-group${notesGroupClassSuffix}" data-notes-group><div class="side-menu-group-header"><button class="side-menu-group-title-btn" type="button" data-notes-group-toggle aria-expanded="${isNotesGroupCollapsed?"false":"true"}">${t("notesGroup")}</button>${notesHeaderControls}</div><div class="side-menu-group-items">${notesItemsHtml}</div></div>`
 sideMenuList.innerHTML=`${otherPanelsHtml}${notesGroupHtml}`
 applyLowercaseButtonTooltips(sideMenuList)
 if(shouldAnimateNotesGroupOpen){
  const notesGroupEl=sideMenuList.querySelector("[data-notes-group]")
  if(notesGroupEl){
   requestAnimationFrame(()=>{
    notesGroupEl.classList.remove("is-opening")
   })
  }
  shouldAnimateNotesGroupOpen=false
 }
 updateEmptyAsciiArt()
}

function updateEmptyAsciiArt(){
 if(!emptyAsciiArtEl) return
 const hasVisiblePanels=getPanels().some(panel=>!panel.classList.contains("panel-hidden"))
 emptyAsciiArtEl.classList.toggle("visible",!hasVisiblePanels)
}

function changeNotesPanelCount(delta){
 const nextCount=Math.max(MIN_NOTES_PANELS,Math.min(MAX_NOTES_PANELS,notesItems.length+delta))
 if(nextCount===notesItems.length) return
 commitUndoableChange(()=>{
  if(delta>0 && isNotesGroupCollapsed){
   isNotesGroupCollapsed=false
   localStorage.setItem(NOTES_GROUP_COLLAPSED_KEY,"0")
   shouldAnimateNotesGroupOpen=true
  }
  syncNotesPanels(nextCount)
  savePositions()
  renderSideMenuList()
 })
}

function setAllNotesPanelsVisibility(shouldShow){
 const notesPanels=getNotesPanels()
 if(!notesPanels.length) return
 notesPanels.forEach(panel=>{
  panel.classList.toggle("panel-hidden",!shouldShow)
  if(!shouldShow){
   removePanelFromSelection(panel)
  }
 })
 savePositions()
 renderSideMenuList()
}

function setChartViewMode(mode){
 const nextMode=(mode==="total" || mode==="month") ? mode : "day"
 if(chartViewMode===nextMode){
  renderChartTabs()
  return
 }
 chartViewMode=nextMode
 localStorage.setItem(CHART_MODE_KEY,chartViewMode)
 renderChart()
}

function setSideMenuOpen(isOpen){
 if(!sideMenu || !sideMenuOverlay) return
 if(sideMenuHoverTimer){
  clearTimeout(sideMenuHoverTimer)
  sideMenuHoverTimer=null
 }
 if(sideMenuCloseTimer){
  clearTimeout(sideMenuCloseTimer)
  sideMenuCloseTimer=null
 }
 sideMenu.classList.toggle("open",isOpen)
 sideMenuOverlay.classList.toggle("open",isOpen)
}

function applyLockValueMask(){
 const maskValue="******"
 const textTargets=[
  weeklyProfitValueEl,
  weeklyProfitPercentEl,
  weeklyTotalProfitValueEl,
  document.getElementById("margin"),
 totalsSumEl,
 totalsWinRateEl,
 totalsRoiEl,
 chartMax,
  chartMin,
  chartWinRateValueEl,
  chartRoiValueEl,
  ...document.querySelectorAll("#totalsList strong"),
  ...document.querySelectorAll(".totals-edit-amount"),
  ...document.querySelectorAll(".calendar-value")
 ]
 textTargets.forEach(el=>{
  if(!el) return
  el.innerText=maskValue
 })

 const inputTargets=[
  document.getElementById("profit"),
  document.getElementById("entry"),
  document.getElementById("exit"),
  startDepositInput,
 ...document.querySelectorAll(".profit-input")
 ]
 inputTargets.forEach(input=>{
  if(!input) return
  const hasValue=(input.value || "").trim()!==""
  if(!hasValue) return
  input.dataset.lockMaskType=input.type || "text"
  input.type="text"
  input.value=maskValue
 })
}

function restoreLockValueMask(){
 const staticInputs=[
  document.getElementById("profit"),
  document.getElementById("entry"),
  document.getElementById("exit"),
  startDepositInput
 ]
 staticInputs.forEach(input=>{
  if(!input) return
  const originalType=input.dataset.lockMaskType
  if(originalType){
   input.type=originalType
   delete input.dataset.lockMaskType
  }
 })
 if(lockViewSnapshot){
  applySerializedState(lockViewSnapshot)
  lockViewSnapshot=""
  return
 }
 buildRows()
 updateTotals()
 renderTotalHistory()
 calculate()
}

function setLockState(locked){
 if(!lockScreen) return
 if(locked && !lockPasswordVerifier){
  window.alert(t("lockSaveFirstAlert"))
  return
 }
 isLocked=locked
 localStorage.setItem(LOCK_STATE_KEY,locked?"1":"0")
 if(locked){
  lockViewSnapshot=serializeAppState()
  applyLockValueMask()
  setSideMenuOpen(false)
  lockScreen.classList.add("open")
  setLockErrorMessage("")
  if(lockPasswordInput) lockPasswordInput.value=""
  setLockPasswordVisibility(false)
  const isLockedOut=updateLockFormAvailability()
  requestAnimationFrame(()=>{
   if(lockPasswordInput && !isLockedOut) lockPasswordInput.focus()
  })
  return
 }
 restoreLockValueMask()
 lockScreen.classList.remove("open")
 setLockErrorMessage("")
 if(lockPasswordInput) lockPasswordInput.value=""
 setLockPasswordVisibility(false)
 updateLockFormAvailability()
}

function setResetConfirmOpen(isOpen){
 if(!resetConfirmScreen) return
 isResetConfirmOpen=isOpen
 resetConfirmScreen.classList.toggle("open",isOpen)
 if(isOpen){
  setSideMenuOpen(false)
  requestAnimationFrame(()=>{
   if(resetConfirmNoBtn) resetConfirmNoBtn.focus()
  })
 }
}

function setDonationScreenOpen(isOpen){
 if(!donationScreen) return
 isDonationScreenOpen=isOpen
 donationScreen.classList.toggle("open",isOpen)
 if(isOpen){
  setSideMenuOpen(false)
  requestAnimationFrame(()=>{
   if(donationCloseBtn) donationCloseBtn.focus()
  })
 }
}

function syncDonationAvatarFallback(){
 if(!donationAvatarImg || !donationAvatarFallback) return
 const hasImage=!!donationAvatarImg.currentSrc && donationAvatarImg.naturalWidth>0 && donationAvatarImg.naturalHeight>0
 donationAvatarImg.classList.toggle("is-hidden",!hasImage)
 donationAvatarFallback.classList.toggle("is-hidden",hasImage)
}

if(donationAvatarImg){
 donationAvatarImg.addEventListener("load",syncDonationAvatarFallback)
 donationAvatarImg.addEventListener("error",syncDonationAvatarFallback)
 syncDonationAvatarFallback()
}

if(sideMenuOverlay){
 sideMenuOverlay.addEventListener("click",()=>{
  setSideMenuOpen(false)
 })
}

if(creatorInfoBtn){
 creatorInfoBtn.addEventListener("click",()=>{
  if(isLocked || isResetConfirmOpen || isDonationScreenOpen) return
  setDonationScreenOpen(true)
 })
}

if(lockBtnTop){
 lockBtnTop.addEventListener("click",()=>{
  setLockState(true)
 })
}

if(lockTogglePasswordBtn){
 lockTogglePasswordBtn.addEventListener("click",()=>{
  if(!lockPasswordInput || lockTogglePasswordBtn.disabled) return
  setLockPasswordVisibility(lockPasswordInput.type==="password")
  lockPasswordInput.focus()
 })
}

if(lockForm){
 lockForm.addEventListener("submit",async (e)=>{
  e.preventDefault()
  if(updateLockFormAvailability()) return
  const password=lockPasswordInput?lockPasswordInput.value.trim():""
  if(await verifyLockPassword(password)){
   resetLockFailures()
   setLockState(false)
   return
  }
  registerLockFailure()
  if(updateLockFormAvailability()) return
  setLockErrorMessage(t("lockWrongPassword",{count:Math.max(0,LOCK_MAX_FAILED_ATTEMPTS-lockFailedAttempts)}),"error")
  if(lockPasswordInput){
   lockPasswordInput.select()
   lockPasswordInput.focus()
  }
 })
}

if(resetConfirmYesBtn){
 resetConfirmYesBtn.addEventListener("click",()=>{
  setResetConfirmOpen(false)
  performResetTrades()
 })
}

if(resetConfirmNoBtn){
 resetConfirmNoBtn.addEventListener("click",()=>{
  setResetConfirmOpen(false)
 })
}

if(resetConfirmScreen){
 resetConfirmScreen.addEventListener("click",(e)=>{
  if(e.target!==resetConfirmScreen) return
  setResetConfirmOpen(false)
 })
}

if(donationCloseBtn){
 donationCloseBtn.addEventListener("click",()=>{
  setDonationScreenOpen(false)
 })
}

if(donationScreen){
 donationScreen.addEventListener("click",async (e)=>{
  const copyBtn=e.target.closest?.("[data-copy-donation]")
  if(copyBtn){
   e.preventDefault()
   e.stopPropagation()
   await handleDonationCopy(copyBtn.dataset.copyDonation)
   return
  }
  if(e.target!==donationScreen) return
  setDonationScreenOpen(false)
 })
}

document.addEventListener("pointermove",(e)=>{
 if(isResetConfirmOpen) return
 if(isDonationScreenOpen) return
 if(isLocked) return
 if(sideMenu?.classList.contains("open")){
  return
 }
 if(e.clientY<=80){
  if(sideMenuHoverTimer){
   clearTimeout(sideMenuHoverTimer)
   sideMenuHoverTimer=null
  }
  return
 }
 if(e.clientX<=200){
  if(sideMenuHoverTimer) return
  sideMenuHoverTimer=setTimeout(()=>{
   setSideMenuOpen(true)
   sideMenuHoverTimer=null
  },500)
  return
 }
 if(sideMenuHoverTimer){
 clearTimeout(sideMenuHoverTimer)
 sideMenuHoverTimer=null
 }
})

if(sideMenu){
 sideMenu.addEventListener("pointerenter",()=>{
  if(activeNotesMenuReorder){
   return
  }
  if(sideMenuCloseTimer){
   clearTimeout(sideMenuCloseTimer)
   sideMenuCloseTimer=null
  }
 })
 sideMenu.addEventListener("pointerleave",()=>{
  if(activeNotesMenuReorder){
   return
  }
  if(!sideMenu.classList.contains("open")) return
  if(sideMenuCloseTimer){
   clearTimeout(sideMenuCloseTimer)
  }
  sideMenuCloseTimer=setTimeout(()=>{
   setSideMenuOpen(false)
  },500)
 })
}

if(sideMenuList){
 sideMenuList.addEventListener("pointerdown",(e)=>{
  const reorderHandle=e.target.closest("[data-note-drag-handle]")
  if(reorderHandle){
   if(e.button!=null && e.button!==0) return
   const item=reorderHandle.closest(".side-menu-item.note-item")
   if(!item) return
   e.preventDefault()
   e.stopPropagation()
   startNotesMenuReorder(item,e)
   return
  }
  const actionBtn=e.target.closest("[data-notes-action]")
  if(!actionBtn || actionBtn.disabled) return
  if(e.button!=null && e.button!==0) return
  e.preventDefault()
  e.stopPropagation()
  changeNotesPanelCount(actionBtn.dataset.notesAction==="add" ? 1 : -1)
 })

 sideMenuList.addEventListener("click",(e)=>{
  const noteDeleteBtn=e.target.closest("[data-note-delete]")
  if(noteDeleteBtn){
   if(noteDeleteBtn.disabled) return
   e.preventDefault()
   e.stopPropagation()
   const noteIndex=parseInt(noteDeleteBtn.dataset.noteDelete,10)
   commitUndoableChange(()=>{
    removeNotesPanelByIndex(noteIndex)
   })
   return
  }
  const groupToggleBtn=e.target.closest("[data-notes-group-toggle]")
  if(groupToggleBtn){
   e.preventDefault()
   e.stopPropagation()
   isNotesGroupCollapsed=!isNotesGroupCollapsed
   localStorage.setItem(NOTES_GROUP_COLLAPSED_KEY,isNotesGroupCollapsed?"1":"0")
   if(!isNotesGroupCollapsed){
    shouldAnimateNotesGroupOpen=true
   }
   renderSideMenuList()
   return
  }
  const labelEl=e.target.closest("[data-panel-select]")
  if(!labelEl) return
  e.preventDefault()
  e.stopPropagation()
  focusPanelFromSideMenu(labelEl.dataset.panelSelect,{allowReveal:true})
 })

 sideMenuList.addEventListener("keydown",(e)=>{
  const labelEl=e.target.closest?.("[data-panel-select]")
  if(!labelEl) return
  if(e.key!=="Enter" && e.key!==" ") return
  e.preventDefault()
  focusPanelFromSideMenu(labelEl.dataset.panelSelect,{allowReveal:true})
 })

sideMenuList.addEventListener("change",(e)=>{
 const notesToggleAllInput=e.target.closest("[data-notes-toggle-all]")
 if(notesToggleAllInput){
  if(notesToggleAllInput.disabled) return
  commitUndoableChange(()=>{
   setAllNotesPanelsVisibility(!!notesToggleAllInput.checked)
  })
  return
 }
 const input=e.target.closest("[data-panel-toggle]")
 if(!input) return
  const panel=draggables.find(item=>item.dataset.dragId===input.dataset.panelToggle)
  if(!panel) return
 commitUndoableChange(()=>{
  panel.classList.toggle("panel-hidden",!input.checked)
  if(!input.checked){
   removePanelFromSelection(panel)
  }
   if(input.checked && panel===marginPanel){
    refreshMarginPanelLayout()
   }
   if(input.checked && panel===trackerPanel){
    refreshTrackerPanelLayout()
   }
   if(input.checked && panel===clockPanel){
    refreshClockPanelLayout()
   }
   if(input.checked && panel===totalsPanel){
    refreshTotalsPanelLayout()
   }
   if(input.checked && panel===pnlCalendarPanel){
    renderPnlCalendar()
   }
   savePositions()
   renderSideMenuList()
  })
 })
}

async function triggerSaveData(){
 if(isLocked || isResetConfirmOpen || isDonationScreenOpen) return
 try{
  const password=window.prompt(t("promptEncryptPassword"))
  if(password===null) return
  if(!password){
   setSideMenuStatus(t("statusPasswordRequired"),"error")
   return
  }
  const confirmPassword=window.prompt(t("promptRepeatPassword"))
  if(confirmPassword===null) return
  if(password!==confirmPassword){
   setSideMenuStatus(t("statusPasswordsMismatch"),"error")
   return
  }
  const snapshot=serializeExportState()
  const encryptedFile=await encryptStateSnapshot(snapshot,password)
  await saveLockPasswordVerifier(password)
  const stamp=new Date().toISOString().slice(0,10)
  const fileName=`weekly-trade-tracker-${stamp}-v${APP_VERSION}.wtt`
  await saveEncryptedDataFile(fileName,encryptedFile)
  setSideMenuStatus(t("statusEncryptedSaved"),"success")
 }catch(error){
  if(error?.name==="AbortError"){
   return
  }
  setSideMenuStatus(t("statusSaveFailed"),"error")
 }
}

function initSaveDataShortcut(){
 document.addEventListener("keydown",(e)=>{
  if(!(e.ctrlKey || e.metaKey) || e.altKey) return
  if(e.code!=="KeyS") return
  e.preventDefault()
  if(e.repeat) return
  void triggerSaveData()
 })
}

if(saveDataBtn){
 saveDataBtn.addEventListener("click",()=>{
  void triggerSaveData()
 })
}

if(loadDataBtn && loadDataInput){
 loadDataBtn.addEventListener("click",()=>{
  if(isLocked || isResetConfirmOpen || isDonationScreenOpen) return
  loadDataInput.value=""
  loadDataInput.click()
 })

 loadDataInput.addEventListener("change",async ()=>{
  const file=loadDataInput.files?.[0]
  if(!file) return
  try{
   const password=window.prompt(t("promptDecryptPassword"))
   if(password===null) return
   if(!password){
    setSideMenuStatus(t("statusPasswordRequired"),"error")
    return
   }
   const fileText=await file.text()
   const snapshot=await decryptStateSnapshot(fileText,password)
   const parsedState=JSON.parse(snapshot)
   await saveLockPasswordVerifier(password)
   const shouldApplyImportedLayout=allowImportLayoutOnLoad && hasLayoutInStatePayload(parsedState)
  applySerializedState(JSON.stringify(parsedState),{applyLayout:shouldApplyImportedLayout})
   setAllowImportLayoutOnLoad(false)
  undoStack=[]
  redoStack=[]
  lastCommittedState=serializeAppState()
  persistUndoHistory()
  setSideMenuOpen(false)
   setSideMenuStatus(t("statusDataLoaded"),"success")
  }catch{
   setSideMenuStatus(t("statusLoadFailed"),"error")
  }finally{
   loadDataInput.value=""
  }
 })
}

if(marginFlipBtn){
 marginFlipBtn.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   triggerMarginFlipMotion()
   marginFlipped=!marginFlipped
   updateMarginFlipUI()
  })
 })
}

if(marginCard){
 marginCard.addEventListener("transitionend",(e)=>{
  if(e.propertyName!=="transform") return
  marginCard.classList.remove("is-flipping")
  updateMarginCardHeight()
 })
}

if(trackerFlipBtn){
 trackerFlipBtn.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   triggerTrackerFlipMotion()
   trackerFlipped=!trackerFlipped
   updateTrackerFlipUI()
  })
 })
}

if(trackerCard){
 trackerCard.addEventListener("transitionend",(e)=>{
  if(e.propertyName!=="transform") return
  trackerCard.classList.remove("is-flipping")
  updateTrackerCardHeight()
 })
}

if(clockFlipBtn){
 clockFlipBtn.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   triggerClockFlipMotion()
   clockFlipped=!clockFlipped
   updateClockFlipUI()
  })
 })
}

if(clockCard){
 clockCard.addEventListener("transitionend",(e)=>{
  if(e.propertyName!=="transform") return
  clockCard.classList.remove("is-flipping")
  updateClockCardHeight()
 })
}

if(totalsFlipBtn){
 totalsFlipBtn.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   triggerTotalsFlipMotion()
   totalsFlipped=!totalsFlipped
   closeTotalsDateMenus()
   updateTotalsFlipUI()
  })
 })
}

if(totalsCard){
 totalsCard.addEventListener("transitionend",(e)=>{
  if(e.propertyName!=="transform") return
  totalsCard.classList.remove("is-flipping")
  updateTotalsCardHeight()
 })
}

if(totalsEditListEl){
 totalsEditListEl.addEventListener("pointerdown",(e)=>{
  const inPicker=e.target.closest(".totals-date-picker")
  if(!inPicker) return
  e.stopPropagation()
 })

 totalsEditListEl.addEventListener("click",(e)=>{
  const toggleBtn=e.target.closest("[data-date-toggle]")
  if(toggleBtn){
   const picker=toggleBtn.closest(".totals-date-picker")
   if(!picker) return
   const menu=picker.querySelector(".totals-date-menu")
   const shouldOpen=!!menu?.classList.contains("hidden")
   closeTotalsDateMenus()
   if(shouldOpen){
    setTotalsDatePickerOpen(picker,true)
   }
   return
  }
  const dayBtn=e.target.closest("[data-date-day][data-trade-index]")
  if(!dayBtn) return
  const tradeIndex=parseInt(dayBtn.dataset.tradeIndex,10)
  const dayValue=parseInt(dayBtn.dataset.dateDay,10)
  if(!Number.isFinite(tradeIndex) || !Number.isFinite(dayValue)) return
  const picker=dayBtn.closest(".totals-date-picker")
  const pickerInfo=getTotalsDatePickerInfo(picker)
  commitUndoableChange(()=>{
   const safeDay=Math.max(1,Math.min(pickerInfo.daysInMonth,dayValue))
   while(tradeCaptureDates.length<=tradeIndex) tradeCaptureDates.push(null)
   tradeCaptureDates[tradeIndex]=getDateKeyForMonthDay(pickerInfo.year,pickerInfo.monthIndex,safeDay)
   savePnlCaptureDates()
   closeTotalsDateMenus()
   renderTotalHistory()
  })
 })

}

if(totalsMonthTabsEl){
 totalsMonthTabsEl.addEventListener("scroll",updateTotalsMonthTabsNavigation)
 totalsMonthTabsEl.addEventListener("click",(e)=>{
  const tab=e.target.closest(".totals-month-tab[data-month-key]")
  if(!tab) return
  const monthKey=String(tab.dataset.monthKey || "")
  if(!monthKey || monthKey===totalsMonthFilterKey) return
  totalsMonthFilterKey=monthKey
  closeTotalsDateMenus()
  renderTotalHistory()
 })
}

clockSelectEls.forEach((select,index)=>{
 if(!select) return
 select.addEventListener("change",()=>{
  commitUndoableChange(()=>{
   const nextValue=String(select.value || "").trim()
   const fallbackId=DEFAULT_CLOCK_SLOT_IDS[index] || DEFAULT_CLOCK_SLOT_IDS[0]
   clockSlotIds[index]=CLOCK_ZONE_BY_ID.has(nextValue) ? nextValue : fallbackId
   saveClockSlotIds()
   updateMarketClocks()
   updateClockCardHeight()
  })
 })
})

function initTotalsPanelResizeObserver(){
 if(!window.ResizeObserver || !totalsPanel || totalsPanel.dataset.resizeReady==="1") return
 totalsPanel.dataset.resizeReady="1"
 let lastWidth=totalsPanel.offsetWidth
 let lastHeight=totalsPanel.offsetHeight
 let totalsResizeTimer=null
 const totalsResizeObserver=new ResizeObserver(()=>{
  refreshTotalsPanelLayout()
  const visibleRows=totalsList ? totalsList.querySelectorAll(".total-row").length : 0
  updateTotalsPanelMinHeight(visibleRows)
  if(isRestoringHistory) return
  if(totalsPanel.classList.contains("collapsed")) return
  const widthDiff=Math.abs(totalsPanel.offsetWidth-lastWidth)
  const heightDiff=Math.abs(totalsPanel.offsetHeight-lastHeight)
  if(widthDiff<2 && heightDiff<2) return
  clearTimeout(totalsResizeTimer)
  totalsResizeTimer=setTimeout(()=>{
   lastWidth=totalsPanel.offsetWidth
   lastHeight=totalsPanel.offsetHeight
   savePositions({markLayoutEdited:false})
   lastCommittedState=serializeAppState()
  },120)
 })
 totalsResizeObserver.observe(totalsPanel)
}

function initNotes(){
 localStorage.removeItem("notesHeightV1")
 getNotesPanels().forEach(panel=>{
  updateNotesPanelMeta(panel,Number(panel.dataset.noteIndex)||0)
  initNotePanel(panel)
 })
}

const noteSelectionStates=new WeakMap()
let isApplyingNoteFormatting=false

function getCurrentNoteSelectionInEditor(editor){
 const selection=window.getSelection()
 if(!selection || !selection.rangeCount) return null
 const range=selection.getRangeAt(0)
 if(!editor.contains(range.commonAncestorContainer)) return null
 return {selection,range}
}

function saveNoteSelection(editor){
 const currentSelection=getCurrentNoteSelectionInEditor(editor)
 if(!currentSelection) return false
 try{
  noteSelectionStates.set(editor,currentSelection.range.cloneRange())
  return true
 }catch{
  return false
 }
}

function restoreNoteSelection(editor){
 const storedRange=noteSelectionStates.get(editor)
 if(!storedRange) return null
 const selection=window.getSelection()
 if(!selection) return null
 try{
  const range=storedRange.cloneRange()
  if(!editor.contains(range.commonAncestorContainer)){
   noteSelectionStates.delete(editor)
   return null
  }
  editor.focus()
  selection.removeAllRanges()
  selection.addRange(range)
  return {selection,range}
 }catch{
  noteSelectionStates.delete(editor)
  return null
 }
}

function getNoteSelectionInEditor(editor,{restoreStored=true}={}){
 const currentSelection=getCurrentNoteSelectionInEditor(editor)
 if(currentSelection){
  saveNoteSelection(editor)
  return currentSelection
 }
 if(!restoreStored) return null
 return restoreNoteSelection(editor)
}

function ensureNoteSelection(editor,{requireRange=false}={}){
 if(!editor) return null
 const selected=getNoteSelectionInEditor(editor)
 if(!selected) return null
 if(requireRange && selected.range.collapsed) return null
 return selected
}

function cleanupNoteSelectionMarkers(markers){
 if(!markers) return
 const {start,end}=markers
 if(start?.parentNode) start.parentNode.removeChild(start)
 if(end?.parentNode) end.parentNode.removeChild(end)
}

function createNoteSelectionMarkers(range){
 if(!range || range.collapsed) return null
 try{
  const startMarker=document.createComment("note-sel-start")
  const endMarker=document.createComment("note-sel-end")
  const endRange=range.cloneRange()
  endRange.collapse(false)
  endRange.insertNode(endMarker)
  const startRange=range.cloneRange()
  startRange.collapse(true)
  startRange.insertNode(startMarker)
  return {start:startMarker,end:endMarker}
 }catch{
  return null
 }
}

function restoreNoteSelectionFromMarkers(editor,markers){
 if(!editor || !markers?.start || !markers?.end) return null
 const selection=window.getSelection()
 if(!selection) return null
 try{
  if(!markers.start.parentNode || !markers.end.parentNode){
   cleanupNoteSelectionMarkers(markers)
   return null
  }
  const range=document.createRange()
  range.setStartAfter(markers.start)
  range.setEndBefore(markers.end)
  cleanupNoteSelectionMarkers(markers)
  editor.normalize()
  selection.removeAllRanges()
  selection.addRange(range)
  return {selection,range}
 }catch{
  cleanupNoteSelectionMarkers(markers)
  return null
 }
}

function getNoteEditorHtml(editor){
 if(!editor) return ""
 const clone=editor.cloneNode(true)
 const commentWalker=document.createTreeWalker(clone,NodeFilter.SHOW_COMMENT)
 const commentsToRemove=[]
 let commentNode=commentWalker.nextNode()
 while(commentNode){
  if((commentNode.nodeValue || "").startsWith("note-sel-")){
   commentsToRemove.push(commentNode)
  }
  commentNode=commentWalker.nextNode()
 }
 commentsToRemove.forEach(node=>{
  if(node.parentNode) node.parentNode.removeChild(node)
 })
 const html=(clone.innerHTML || "").trim()
 if(!html || html==="&nbsp;" || html==="<br>") return ""
 return html
}

function buildSpoilerHtml(text){
 return text.split(/(\s+)/).map(token=>{
  if(!token) return ""
  if(/^\s+$/.test(token)){
   return escapeHtml(token).replace(/ /g,"&nbsp;").replace(/\n/g,"<br>")
  }
  return `<span class="note-spoiler-word">${escapeHtml(token)}</span>`
 }).join("")
}

function buildSpoilerFragment(text){
 const wrapper=document.createElement("div")
 wrapper.innerHTML=buildSpoilerHtml(text)
 const fragment=document.createDocumentFragment()
 while(wrapper.firstChild){
  fragment.appendChild(wrapper.firstChild)
 }
 return fragment
}

function applySpoilerToRange(editor,range){
 if(!editor || !range) return false
 const textNodes=[]
 const walker=document.createTreeWalker(editor,NodeFilter.SHOW_TEXT)
 let node=walker.nextNode()
 while(node){
  if(rangeIntersectsNode(range,node) && String(node.nodeValue || "").length){
   textNodes.push(node)
  }
  node=walker.nextNode()
 }
 let changed=false
 textNodes.forEach(textNode=>{
  if(!textNode?.parentNode) return
  if(textNode.parentElement?.closest?.(".note-spoiler-word")) return
  const source=String(textNode.nodeValue || "")
  if(!source.length) return
  const nodeRange=document.createRange()
  nodeRange.selectNodeContents(textNode)
  const segmentRange=range.cloneRange()
  if(segmentRange.compareBoundaryPoints(Range.START_TO_START,nodeRange)<0){
   segmentRange.setStart(textNode,0)
  }
  if(segmentRange.compareBoundaryPoints(Range.END_TO_END,nodeRange)>0){
   segmentRange.setEnd(textNode,source.length)
  }
  if(segmentRange.startContainer!==textNode || segmentRange.endContainer!==textNode) return
  const startOffset=segmentRange.startOffset
  const endOffset=segmentRange.endOffset
  if(endOffset<=startOffset) return
  let targetNode=textNode
  if(startOffset>0){
   targetNode=textNode.splitText(startOffset)
  }
  const targetLen=endOffset-startOffset
  if(targetLen<targetNode.nodeValue.length){
   targetNode.splitText(targetLen)
  }
  const segment=String(targetNode.nodeValue || "")
  if(!segment.length) return
  const fragment=buildSpoilerFragment(segment)
  targetNode.parentNode.insertBefore(fragment,targetNode)
  targetNode.parentNode.removeChild(targetNode)
  changed=true
 })
 if(changed) editor.normalize()
 return changed
}

function getMeaningfulSelectionTextNodes(editor,range){
 const nodes=[]
 if(!editor || !range) return nodes
 const walker=document.createTreeWalker(editor,NodeFilter.SHOW_TEXT)
 let node=walker.nextNode()
 while(node){
 const value=node.nodeValue || ""
 if(value.trim()){
   const intersects=rangeIntersectsNode(range,node)
   if(intersects) nodes.push(node)
  }
  node=walker.nextNode()
 }
 return nodes
}

function isSelectionWrappedWithClass(editor,range,className){
 const nodes=getMeaningfulSelectionTextNodes(editor,range)
 if(!nodes.length) return false
 return nodes.every(node=>!!node.parentElement?.closest(`.${className}`))
}

function rangeIntersectsClassElements(editor,range,className){
 if(!editor || !range) return false
 return [...editor.querySelectorAll(`.${className}`)].some(el=>{
  try{
   return range.intersectsNode(el)
  }catch{
   return false
  }
 })
}

function unwrapElementsInRange(editor,range,className){
 if(!editor || !range) return false
 const elements=[...editor.querySelectorAll(`.${className}`)]
 let changed=false
 elements.forEach(el=>{
  if(!rangeIntersectsNode(range,el)) return
  const parent=el.parentNode
  if(!parent) return
  while(el.firstChild){
   parent.insertBefore(el.firstChild,el)
  }
  parent.removeChild(el)
  changed=true
 })
 if(changed) editor.normalize()
 return changed
}

function removeMonoInlineStylesInRange(editor,range){
 if(!editor || !range) return false
 let changed=false
 ;[...editor.querySelectorAll("[style]")].forEach(el=>{
  if(!rangeIntersectsNode(range,el)) return
  const style=el.style
  if(!style) return
  let localChanged=false
  const fontFamily=String(style.fontFamily || "").toLowerCase()
  if(fontFamily.includes("consolas") || fontFamily.includes("courier") || fontFamily.includes("monospace")){
   style.removeProperty("font-family")
   localChanged=true
  }
  const bgColor=String(style.backgroundColor || "").toLowerCase()
  if(bgColor.includes("44, 218, 110") || bgColor.includes("44,218,110")){
   style.removeProperty("background-color")
   localChanged=true
  }
  const bg=String(style.background || "").toLowerCase()
  if(bg.includes("44, 218, 110") || bg.includes("44,218,110")){
   style.removeProperty("background")
   localChanged=true
  }
  if(localChanged){
   const padding=String(style.padding || "").replace(/\s+/g," ").trim()
   if(padding==="0 2px" || padding==="0px 2px" || padding==="0px 2px 0px 2px"){
    style.removeProperty("padding")
   }
   const radius=String(style.borderRadius || "").trim()
   if(radius==="3px"){
    style.removeProperty("border-radius")
   }
   if(!String(style.cssText || "").trim()){
    el.removeAttribute("style")
   }
   changed=true
  }
 })
 if(changed) editor.normalize()
 return changed
}

function rangeIntersectsNode(range,node){
 if(!range || !node) return false
 try{
  return range.intersectsNode(node)
 }catch{
  return false
 }
}

function unwrapTagsInRange(editor,range,tags){
 if(!editor || !range || !Array.isArray(tags) || !tags.length) return false
 let changed=false
 tags.forEach(tag=>{
  ;[...editor.querySelectorAll(tag)].forEach(el=>{
   if(!rangeIntersectsNode(range,el)) return
   const parent=el.parentNode
   if(!parent) return
   while(el.firstChild){
    parent.insertBefore(el.firstChild,el)
   }
   parent.removeChild(el)
   changed=true
  })
 })
 if(changed) editor.normalize()
 return changed
}

function removeStyleAttributesInRange(editor,range){
 if(!editor || !range) return false
 let changed=false
 ;[...editor.querySelectorAll("[style]")].forEach(el=>{
  if(!rangeIntersectsNode(range,el)) return
  if(el.hasAttribute("style")){
   el.removeAttribute("style")
   changed=true
  }
 })
 if(changed) editor.normalize()
 return changed
}

function removeHiddenNoteArtifactsInRange(editor,range=null){
 if(!editor) return false
 let changed=false
 const hiddenChars=/[\u200B-\u200D\u2060\u2061-\u2064\u2066-\u2069\uFEFF\u00AD]/g
 const textWalker=document.createTreeWalker(editor,NodeFilter.SHOW_TEXT)
 let textNode=textWalker.nextNode()
 while(textNode){
  if(!range || rangeIntersectsNode(range,textNode)){
   const source=String(textNode.nodeValue || "")
   const normalized=source
    .replace(hiddenChars,"")
    .replace(/\u00A0/g," ")
   if(normalized!==source){
    textNode.nodeValue=normalized
    changed=true
   }
  }
  textNode=textWalker.nextNode()
 }
 const emptyTextNodes=[]
 const emptyWalker=document.createTreeWalker(editor,NodeFilter.SHOW_TEXT)
 let emptyNode=emptyWalker.nextNode()
 while(emptyNode){
  if((!range || rangeIntersectsNode(range,emptyNode)) && emptyNode.nodeValue===""){
   emptyTextNodes.push(emptyNode)
  }
  emptyNode=emptyWalker.nextNode()
 }
 emptyTextNodes.forEach(node=>{
  if(node.parentNode){
   node.parentNode.removeChild(node)
   changed=true
  }
 })
 const commentWalker=document.createTreeWalker(editor,NodeFilter.SHOW_COMMENT)
 const commentNodes=[]
 let commentNode=commentWalker.nextNode()
 while(commentNode){
  const marker=(commentNode.nodeValue || "").trim()
  if((!range || rangeIntersectsNode(range,commentNode)) && marker.startsWith("note-sel-")){
   commentNodes.push(commentNode)
  }
  commentNode=commentWalker.nextNode()
 }
 commentNodes.forEach(node=>{
  if(node.parentNode){
   node.parentNode.removeChild(node)
   changed=true
  }
 })
 if(changed) editor.normalize()
 return changed
}

function unwrapOrderedListsInRange(editor,range){
 if(!editor || !range) return false
 const lists=[...editor.querySelectorAll("ol,ul")]
 let changed=false
 lists.forEach(list=>{
  if(!rangeIntersectsNode(range,list)) return
  const parent=list.parentNode
  if(!parent) return
  const items=[...list.children].filter(item=>{
   const tag=(item.tagName || "").toLowerCase()
   return tag==="li"
  })
  if(!items.length){
   const br=document.createElement("br")
   parent.insertBefore(br,list)
   parent.removeChild(list)
   changed=true
   return
  }
  const fragment=document.createDocumentFragment()
  items.forEach((item,index)=>{
   while(item.firstChild){
    fragment.appendChild(item.firstChild)
   }
   if(!item.textContent?.replace(/[\u200B\u00A0]/g,"").trim() && !fragment.lastChild){
    fragment.appendChild(document.createElement("br"))
   }
   if(index<items.length-1){
    fragment.appendChild(document.createElement("br"))
   }
  })
  if(!fragment.childNodes.length){
   fragment.appendChild(document.createElement("br"))
  }
  parent.insertBefore(fragment,list)
  parent.removeChild(list)
  changed=true
 })
 if(changed) editor.normalize()
 return changed
}

function resetNoteFormattingInRange(editor,range){
 if(!editor || !range) return false
 let changed=false
 changed=unwrapOrderedListsInRange(editor,range) || changed
 changed=unwrapElementsInRange(editor,range,"note-mono") || changed
 changed=unwrapElementsInRange(editor,range,"note-spoiler-word") || changed
 changed=unwrapTagsInRange(editor,range,["b","strong","i","em","u","s","strike","font","a","span","mark","code"]) || changed
 changed=removeStyleAttributesInRange(editor,range) || changed
 changed=removeHiddenNoteArtifactsInRange(editor,range) || changed
 changed=normalizeNoteLineBreakArtifacts(editor) || changed
 return changed
}

function getActiveNoteListItem(editor){
 if(!editor) return null
 const selection=window.getSelection()
 if(!selection || !selection.rangeCount) return null
 const range=selection.getRangeAt(0)
 if(!editor.contains(range.commonAncestorContainer)) return null
 const anchorNode=range.startContainer?.nodeType===Node.ELEMENT_NODE
  ? range.startContainer
  : range.startContainer?.parentElement
 return anchorNode?.closest?.("li") || null
}

function isNoteRangeAtListItemStart(listItem,range){
 if(!listItem || !range || !range.collapsed) return false
 try{
  const probe=document.createRange()
  probe.selectNodeContents(listItem)
  probe.setEnd(range.startContainer,range.startOffset)
  const beforeText=(probe.toString() || "").replace(/[\u200B\u00A0]/g,"").trim()
  return beforeText.length===0
 }catch{
  return false
 }
}

function listItemHasMeaningfulContent(listItem){
 if(!listItem) return false
 const text=(listItem.textContent || "").replace(/[\u200B\u00A0]/g,"").trim()
 if(text) return true
 return !!listItem.querySelector("img,video,canvas,svg,table,pre,code,input,textarea,select")
}

function handleNoteEnterAtListItemStart(editor){
 if(!editor) return false
 const selection=window.getSelection()
 if(!selection || !selection.rangeCount) return false
 const range=selection.getRangeAt(0)
 if(!range.collapsed || !editor.contains(range.commonAncestorContainer)) return false
 const anchorNode=range.startContainer?.nodeType===Node.ELEMENT_NODE
  ? range.startContainer
  : range.startContainer?.parentElement
 const listItem=anchorNode?.closest?.("li")
 if(!listItem || !editor.contains(listItem)) return false
 const list=listItem.parentElement
 if(!list || (list.tagName || "").toLowerCase()!=="ol") return false
 if(!isNoteRangeAtListItemStart(listItem,range)) return false
 if(!listItemHasMeaningfulContent(listItem)) return false
 const insertedListItem=document.createElement("li")
 insertedListItem.appendChild(document.createElement("br"))
 list.insertBefore(insertedListItem,listItem)
 const nextRange=document.createRange()
 nextRange.setStart(insertedListItem,0)
 nextRange.collapse(true)
 selection.removeAllRanges()
 selection.addRange(nextRange)
 saveNoteSelection(editor)
 return true
}

function cleanupEmptyNoteLists(editor){
 if(!editor) return false
 const activeLi=getActiveNoteListItem(editor)
 let changed=false
 ;[...editor.querySelectorAll("ol")].forEach(ol=>{
  const listItems=[...ol.children].filter(child=>(child.tagName || "").toLowerCase()==="li")
  listItems.forEach((li,index)=>{
   const text=(li.textContent || "").replace(/[\u200B\u00A0]/g,"").trim()
   const hasRichContent=!!li.querySelector("img,video,canvas,svg,table,pre,code,input,textarea,select")
   const hasLineBreak=!!li.querySelector("br")
   const isActive=!!activeLi && (li===activeLi || li.contains(activeLi))
   const isLast=index===listItems.length-1
   const isOnly=listItems.length===1
   if(text || hasRichContent || isActive) return
   if(hasLineBreak && (isLast || isOnly)) return
   li.remove()
   changed=true
  })
  const remainingItems=[...ol.children].filter(child=>(child.tagName || "").toLowerCase()==="li")
  if(!remainingItems.length){
   const br=document.createElement("br")
   ol.replaceWith(br)
   changed=true
  }
 })
 if(changed) editor.normalize()
 return changed
}

function normalizeNoteLineBreakArtifacts(editor){
 if(!editor) return false
 let changed=false
 const normalizeTextLineFeeds=(root)=>{
  if(!root) return
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT)
  let textNode=walker.nextNode()
  while(textNode){
   const value=String(textNode.nodeValue || "")
   const normalized=value
    .replace(/\r\n?/g,"\n")
    .replace(/\n{2,}/g,"\n")
   if(normalized!==value){
    textNode.nodeValue=normalized
    changed=true
   }
   textNode=walker.nextNode()
  }
 }

 const collapseBreaksIn=(root)=>{
  if(!root) return
  let prevWasBreak=false
  let node=root.firstChild
  while(node){
   const next=node.nextSibling
   const isBreak=node.nodeName==="BR"
   const isEmptyText=node.nodeType===Node.TEXT_NODE && !String(node.nodeValue || "").replace(/\u00A0/g," ").trim()
   if(isEmptyText){
    if(!node.parentNode){
     node=next
     continue
    }
    if(!next || next.nodeName==="BR" || prevWasBreak){
     node.parentNode.removeChild(node)
     changed=true
    }
   }else if(isBreak){
    if(prevWasBreak && node.parentNode){
     node.parentNode.removeChild(node)
     changed=true
    }else{
     prevWasBreak=true
    }
   }else{
    prevWasBreak=false
   }
   node=next
  }
 }

 normalizeTextLineFeeds(editor)
 collapseBreaksIn(editor)
 ;[...editor.querySelectorAll("li")].forEach(li=>{
  const topLevelWrappers=[...li.children].filter(child=>{
   const tag=(child.tagName || "").toLowerCase()
   return tag==="div" || tag==="p"
  })
  topLevelWrappers.forEach(wrapper=>{
   while(wrapper.firstChild){
    li.insertBefore(wrapper.firstChild,wrapper)
   }
   li.removeChild(wrapper)
   changed=true
  })
  while(li.firstChild && li.firstChild.nodeName==="BR"){
   li.removeChild(li.firstChild)
   changed=true
  }
  while(li.lastChild && li.lastChild.nodeName==="BR"){
   li.removeChild(li.lastChild)
   changed=true
  }
  collapseBreaksIn(li)
  if(!li.childNodes.length){
   li.appendChild(document.createElement("br"))
   changed=true
  }
 })

 if(changed) editor.normalize()
 return changed
}

function cleanupEmptyNoteDecorators(editor){
 if(!editor) return false
 let changed=false
 ;[...editor.querySelectorAll(".note-mono,.note-spoiler-word")].forEach(el=>{
  const text=(el.textContent || "").replace(/[\u200B\u00A0\s]/g,"")
  const hasRichContent=!!el.querySelector("img,video,canvas,svg,table,input,textarea,select")
  if(text || hasRichContent) return
  if(el.parentNode){
   el.parentNode.removeChild(el)
   changed=true
  }
 })
 if(changed) editor.normalize()
 return changed
}

function runNativeNoteCommand(editor,command,value=null,{requireRange=true}={}){
 if(!editor) return false
 const selected=ensureNoteSelection(editor,{requireRange})
 if(!selected) return false
 const markers=createNoteSelectionMarkers(selected.range.cloneRange())
 try{
  if(markers && markers.start.parentNode && markers.end.parentNode){
   const activeSelection=window.getSelection()
   if(activeSelection){
    const commandRange=document.createRange()
    commandRange.setStartAfter(markers.start)
    commandRange.setEndBefore(markers.end)
    activeSelection.removeAllRanges()
    activeSelection.addRange(commandRange)
   }
  }
  const result=document.execCommand(command,false,value)
  let restoredSelection=null
  if(markers){
   restoredSelection=restoreNoteSelectionFromMarkers(editor,markers)
  }
  if(!restoredSelection){
   cleanupNoteSelectionMarkers(markers)
  }
  saveNoteSelection(editor)
  return !!result
 }catch{
  cleanupNoteSelectionMarkers(markers)
  return false
 }
}

function replaceSelectionWithHtmlAndKeepSelection(editor,html){
 if(!editor || !html) return false
 const selected=ensureNoteSelection(editor,{requireRange:true})
 if(!selected || selected.selection.isCollapsed) return false
 const markers=createNoteSelectionMarkers(selected.range.cloneRange())
 try{
  const range=document.createRange()
  if(markers && markers.start.parentNode && markers.end.parentNode){
   range.setStartAfter(markers.start)
   range.setEndBefore(markers.end)
  }else{
   const fallbackRange=selected.selection.getRangeAt(0).cloneRange()
   range.setStart(fallbackRange.startContainer,fallbackRange.startOffset)
   range.setEnd(fallbackRange.endContainer,fallbackRange.endOffset)
  }
  const fragment=range.createContextualFragment(html)
  range.deleteContents()
  range.insertNode(fragment)
  let restoredSelection=null
  if(markers) restoredSelection=restoreNoteSelectionFromMarkers(editor,markers)
  if(!restoredSelection){
   cleanupNoteSelectionMarkers(markers)
  }
  saveNoteSelection(editor)
  return true
 }catch{
  cleanupNoteSelectionMarkers(markers)
  return runNativeNoteCommand(editor,"insertHTML",html)
 }
}

function applyNoteBold(editor){
 return runNativeNoteCommand(editor,"bold")
}

function applyNoteItalic(editor){
 return runNativeNoteCommand(editor,"italic")
}

function applyNoteStrike(editor){
 return runNativeNoteCommand(editor,"strikeThrough")
}

function applyNoteUnderline(editor){
 return runNativeNoteCommand(editor,"underline")
}

function buildNoteOrderedListHtml(text){
 const normalized=String(text || "").replace(/\r\n?/g,"\n")
 const lines=normalized.split("\n")
 const items=(lines.length ? lines : [""]).map(line=>{
  const safeLine=escapeHtml(line)
  if(!safeLine.trim()) return "<li><br></li>"
  return `<li>${safeLine}</li>`
 }).join("")
 return `<ol>${items}</ol>`
}

function applyNoteOrderedList(editor){
 if(!editor) return false
 const selected=ensureNoteSelection(editor,{requireRange:true})
 if(!selected) return false
 const listRange=selected.range.cloneRange()
 const selectedNodes=getMeaningfulSelectionTextNodes(editor,listRange)
 const isListActive=selectedNodes.length>0 && selectedNodes.every(node=>!!node.parentElement?.closest("ol"))
 const markers=createNoteSelectionMarkers(listRange.cloneRange())
 let unwrapRange=listRange
 if(markers && markers.start.parentNode && markers.end.parentNode){
  unwrapRange=document.createRange()
  unwrapRange.setStartAfter(markers.start)
  unwrapRange.setEndBefore(markers.end)
 }
 const listUnwrapped=unwrapOrderedListsInRange(editor,unwrapRange)
 const monoUnwrapped=unwrapElementsInRange(editor,unwrapRange,"note-mono")
 const spoilerUnwrapped=unwrapElementsInRange(editor,unwrapRange,"note-spoiler-word")
 const monoStylesCleared=removeMonoInlineStylesInRange(editor,unwrapRange)
 if(isListActive){
  const changed=listUnwrapped || monoUnwrapped || spoilerUnwrapped || monoStylesCleared
  if(markers) restoreNoteSelectionFromMarkers(editor,markers)
  if(changed){
   cleanupEmptyNoteDecorators(editor)
   cleanupEmptyNoteLists(editor)
   normalizeNoteLineBreakArtifacts(editor)
   saveNoteSelection(editor)
  }
  return changed
 }
 const restoredSelection=markers
  ? restoreNoteSelectionFromMarkers(editor,markers)
  : ensureNoteSelection(editor,{requireRange:true})
 if(!restoredSelection){
  const changed=listUnwrapped || monoUnwrapped || spoilerUnwrapped || monoStylesCleared
  if(changed){
   cleanupEmptyNoteDecorators(editor)
   normalizeNoteLineBreakArtifacts(editor)
   saveNoteSelection(editor)
  }
  return changed
 }
 const selectedText=restoredSelection.selection.toString()
 const hasContent=selectedText.replace(/[\u200B\u00A0]/g,"").trim().length>0
 if(!hasContent){
  const changed=listUnwrapped || monoUnwrapped || spoilerUnwrapped || monoStylesCleared
  if(changed){
   cleanupEmptyNoteDecorators(editor)
   normalizeNoteLineBreakArtifacts(editor)
   saveNoteSelection(editor)
  }
  return changed
 }
 const html=buildNoteOrderedListHtml(selectedText)
 const listCreated=replaceSelectionWithHtmlAndKeepSelection(editor,html)
 const changed=listCreated || listUnwrapped || monoUnwrapped || spoilerUnwrapped || monoStylesCleared
 if(changed){
  cleanupEmptyNoteDecorators(editor)
  cleanupEmptyNoteLists(editor)
  normalizeNoteLineBreakArtifacts(editor)
  saveNoteSelection(editor)
 }
 return changed
}

function applyNoteAlignment(editor,align){
 if(!editor) return false
 const selected=getNoteSelectionInEditor(editor,{restoreStored:true})
 if(!selected) return false
 const range=selected.range.cloneRange()
 const blockSelector="li,p,div,blockquote,h1,h2,h3,h4,h5,h6,pre,td,th"
 const markers=!range.collapsed ? createNoteSelectionMarkers(range.cloneRange()) : null
 let workRange=range
 if(markers && markers.start.parentNode && markers.end.parentNode){
  workRange=document.createRange()
  workRange.setStartAfter(markers.start)
  workRange.setEndBefore(markers.end)
 }
 let targets=[]
 if(workRange.collapsed){
  const anchor=workRange.startContainer?.nodeType===Node.ELEMENT_NODE
   ? workRange.startContainer
   : workRange.startContainer?.parentElement
  const fallback=anchor?.closest?.(blockSelector) || editor
  if(fallback && editor.contains(fallback)){
   targets=[fallback]
  }
 }else{
  targets=[...editor.querySelectorAll(blockSelector)].filter(el=>rangeIntersectsNode(workRange,el))
  if(!targets.length){
   const anchor=workRange.startContainer?.nodeType===Node.ELEMENT_NODE
    ? workRange.startContainer
    : workRange.startContainer?.parentElement
   const fallback=anchor?.closest?.(blockSelector) || editor
   if(fallback && editor.contains(fallback)){
    targets=[fallback]
   }
  }
 }
 let changed=false
 ;[...new Set(targets)].forEach(target=>{
  if(!target || !editor.contains(target)) return
  const beforeStyle=target.getAttribute("style") || ""
  const beforeAlign=target.getAttribute("align") || ""
  if(align==="left"){
   target.style.removeProperty("text-align")
   if(target.hasAttribute("align")) target.removeAttribute("align")
  }else{
   target.style.textAlign=align
   if(target.hasAttribute("align")) target.removeAttribute("align")
  }
  if(target.hasAttribute("style") && !String(target.getAttribute("style") || "").trim()){
   target.removeAttribute("style")
  }
  const afterStyle=target.getAttribute("style") || ""
  const afterAlign=target.getAttribute("align") || ""
  if(beforeStyle!==afterStyle || beforeAlign!==afterAlign){
   changed=true
  }
 })
 if(markers) restoreNoteSelectionFromMarkers(editor,markers)
 if(changed){
  saveNoteSelection(editor)
 }
 return changed
}

function applyNoteAlignLeft(editor){
 return applyNoteAlignment(editor,"left")
}

function applyNoteAlignCenter(editor){
 return applyNoteAlignment(editor,"center")
}

function applyNoteAlignRight(editor){
 return applyNoteAlignment(editor,"right")
}

function applyNoteReset(editor){
 if(!editor) return false
 const selected=getNoteSelectionInEditor(editor,{restoreStored:true})
 const markers=selected && !selected.range.collapsed ? createNoteSelectionMarkers(selected.range.cloneRange()) : null
 let targetRange=null
 if(markers && markers.start.parentNode && markers.end.parentNode){
  targetRange=document.createRange()
  targetRange.setStartAfter(markers.start)
  targetRange.setEndBefore(markers.end)
 }else{
  targetRange=document.createRange()
  targetRange.selectNodeContents(editor)
 }
 let changed=resetNoteFormattingInRange(editor,targetRange)
 if(markers){
  restoreNoteSelectionFromMarkers(editor,markers)
 }
 changed=removeHiddenNoteArtifactsInRange(editor,null) || changed
 cleanupEmptyNoteLists(editor)
 normalizeNoteLineBreakArtifacts(editor)
 saveNoteSelection(editor)
 return changed
}

function applyNoteMono(editor){
 const selected=ensureNoteSelection(editor,{requireRange:true})
 if(!selected) return false
 const monoRange=selected.range.cloneRange()
 const hasMonoInRange=
  isSelectionWrappedWithClass(editor,monoRange,"note-mono") ||
  rangeIntersectsClassElements(editor,monoRange,"note-mono")
 if(hasMonoInRange){
  const markers=createNoteSelectionMarkers(monoRange.cloneRange())
  let unwrapRange=monoRange
  if(markers && markers.start.parentNode && markers.end.parentNode){
   unwrapRange=document.createRange()
   unwrapRange.setStartAfter(markers.start)
   unwrapRange.setEndBefore(markers.end)
  }
  const unwrapped=unwrapElementsInRange(editor,unwrapRange,"note-mono")
  const inlineCleared=removeMonoInlineStylesInRange(editor,unwrapRange)
  const changed=unwrapped || inlineCleared
  if(markers) restoreNoteSelectionFromMarkers(editor,markers)
  if(changed){
   normalizeNoteLineBreakArtifacts(editor)
   saveNoteSelection(editor)
  }
  return changed
 }
 const markers=createNoteSelectionMarkers(monoRange.cloneRange())
 let unwrapRange=monoRange
 if(markers && markers.start.parentNode && markers.end.parentNode){
  unwrapRange=document.createRange()
  unwrapRange.setStartAfter(markers.start)
  unwrapRange.setEndBefore(markers.end)
 }
 const listChanged=unwrapOrderedListsInRange(editor,unwrapRange)
 const spoilerChanged=unwrapElementsInRange(editor,unwrapRange,"note-spoiler-word")
 const restoredSelection=markers
  ? restoreNoteSelectionFromMarkers(editor,markers)
  : ensureNoteSelection(editor,{requireRange:true})
 if(!restoredSelection){
  const changed=listChanged || spoilerChanged
  if(changed){
   cleanupEmptyNoteDecorators(editor)
   normalizeNoteLineBreakArtifacts(editor)
   saveNoteSelection(editor)
  }
  return changed
 }
 const selectedText=restoredSelection.selection.toString()
 if(!selectedText.trim()){
  const changed=listChanged || spoilerChanged
  if(changed){
   cleanupEmptyNoteDecorators(editor)
   normalizeNoteLineBreakArtifacts(editor)
   saveNoteSelection(editor)
  }
  return changed
 }
 const html=`<span class="note-mono">${escapeHtml(selectedText)}</span>`
 const monoChanged=replaceSelectionWithHtmlAndKeepSelection(editor,html)
 const changed=monoChanged || listChanged || spoilerChanged
 if(changed){
  cleanupEmptyNoteDecorators(editor)
  normalizeNoteLineBreakArtifacts(editor)
  saveNoteSelection(editor)
 }
 return changed
}

function applyNoteSpoiler(editor){
 const selected=ensureNoteSelection(editor,{requireRange:true})
 if(!selected) return false
 const spoilerRange=selected.range.cloneRange()
 const isActive=isSelectionWrappedWithClass(editor,spoilerRange,"note-spoiler-word")
  if(isActive){
  const markers=createNoteSelectionMarkers(spoilerRange.cloneRange())
  let unwrapRange=spoilerRange
  if(markers && markers.start.parentNode && markers.end.parentNode){
   unwrapRange=document.createRange()
   unwrapRange.setStartAfter(markers.start)
   unwrapRange.setEndBefore(markers.end)
  }
  const changed=unwrapElementsInRange(editor,unwrapRange,"note-spoiler-word")
  if(markers) restoreNoteSelectionFromMarkers(editor,markers)
  if(changed){
   normalizeNoteLineBreakArtifacts(editor)
   saveNoteSelection(editor)
  }
  return changed
 }
 const markers=createNoteSelectionMarkers(spoilerRange.cloneRange())
 let applyRange=spoilerRange
 if(markers && markers.start.parentNode && markers.end.parentNode){
  applyRange=document.createRange()
  applyRange.setStartAfter(markers.start)
  applyRange.setEndBefore(markers.end)
 }
 const listUnwrapped=unwrapOrderedListsInRange(editor,applyRange)
 const monoUnwrapped=unwrapElementsInRange(editor,applyRange,"note-mono")
 const monoStylesCleared=removeMonoInlineStylesInRange(editor,applyRange)
 const spoilerApplied=applySpoilerToRange(editor,applyRange)
 const changed=listUnwrapped || monoUnwrapped || monoStylesCleared || spoilerApplied
 if(markers) restoreNoteSelectionFromMarkers(editor,markers)
 if(changed){
  cleanupEmptyNoteDecorators(editor)
  normalizeNoteLineBreakArtifacts(editor)
  saveNoteSelection(editor)
 }
 return changed
}

function applyNoteSpellcheckToggle(editor){
 setNotesSpellcheckEnabled(!notesSpellcheckEnabled)
 if(editor) saveNoteSelection(editor)
 return false
}

const noteFormatHandlers={
 bold:applyNoteBold,
 italic:applyNoteItalic,
 strike:applyNoteStrike,
 underline:applyNoteUnderline,
 mono:applyNoteMono,
 spoiler:applyNoteSpoiler,
 spell:applyNoteSpellcheckToggle,
 olist:applyNoteOrderedList,
 alignLeft:applyNoteAlignLeft,
 alignCenter:applyNoteAlignCenter,
 alignRight:applyNoteAlignRight,
 clear:applyNoteReset
}

function applyNotesFormatCommand(editor,command){
 if(!editor || !command) return false
 const handler=noteFormatHandlers[command]
 if(!handler) return false
 try{
  editor.focus()
  return !!handler(editor)
 }catch{
  return false
 }
}

function ensureNotesToolbarShell(panel){
 if(!panel) return null
 const toolbar=panel.querySelector(".notes-toolbar")
 if(!toolbar) return null
 let shell=panel.querySelector(".notes-toolbar-shell")
 let scroll=panel.querySelector(".notes-toolbar-scroll")
 let prev=panel.querySelector(".notes-toolbar-nav.prev")
 let next=panel.querySelector(".notes-toolbar-nav.next")
 if(!shell){
  shell=document.createElement("div")
  shell.className="notes-toolbar-shell"
  prev=document.createElement("button")
  prev.type="button"
  prev.className="notes-toolbar-nav prev"
  next=document.createElement("button")
  next.type="button"
  next.className="notes-toolbar-nav next"
  scroll=document.createElement("div")
  scroll.className="notes-toolbar-scroll"
  const parent=toolbar.parentNode
  if(!parent) return null
  parent.insertBefore(shell,toolbar)
  scroll.appendChild(toolbar)
  shell.appendChild(prev)
  shell.appendChild(scroll)
  shell.appendChild(next)
 }
 return {shell,scroll,toolbar,prev,next}
}

function updateNotesToolbarNavigation(panel){
 const shell=panel?.querySelector(".notes-toolbar-shell")
 const scroll=shell?.querySelector(".notes-toolbar-scroll")
 const prev=shell?.querySelector(".notes-toolbar-nav.prev")
 const next=shell?.querySelector(".notes-toolbar-nav.next")
 if(!shell || !scroll || !prev || !next) return
 const maxScroll=Math.max(0,scroll.scrollWidth-scroll.clientWidth)
 const hasNav=maxScroll>2
 shell.classList.toggle("has-nav",hasNav)
 if(!hasNav){
  scroll.scrollLeft=0
  prev.disabled=true
  next.disabled=true
  return
 }
 const current=scroll.scrollLeft
 prev.disabled=current<=1
 next.disabled=current>=maxScroll-1
}

function getNotesSpellcheckLang(){
 return currentLanguage==="en" ? "en-US" : "uk-UA"
}

function getNotesSpellcheckLabel(){
 return notesSpellcheckEnabled ? t("toolSpellcheckOn") : t("toolSpellcheckOff")
}

function updateNotesSpellcheckButtonState(panel){
 if(!panel) return
 const btn=panel.querySelector('[data-note-cmd="spell"]')
 if(!btn) return
 const label=getNotesSpellcheckLabel()
 btn.classList.toggle("active",notesSpellcheckEnabled)
 btn.title=formatTooltipText(label)
 btn.setAttribute("aria-label",label)
}

function applyNotesEditorSpellcheck(editor){
 if(!editor) return
 editor.setAttribute("spellcheck",notesSpellcheckEnabled ? "true" : "false")
 editor.spellcheck=notesSpellcheckEnabled
 editor.setAttribute("autocorrect",notesSpellcheckEnabled ? "on" : "off")
 editor.setAttribute("autocapitalize",notesSpellcheckEnabled ? "sentences" : "off")
 editor.setAttribute("lang",getNotesSpellcheckLang())
}

function setNotesSpellcheckEnabled(nextEnabled){
 notesSpellcheckEnabled=!!nextEnabled
 localStorage.setItem(NOTES_SPELLCHECK_KEY,notesSpellcheckEnabled ? "1" : "0")
 getNotesPanels().forEach(panel=>{
  applyNotesEditorSpellcheck(panel.querySelector(".notes-editor"))
  updateNotesSpellcheckButtonState(panel)
 })
}

function ensureNotesSpellcheckButton(panel){
 if(!panel) return null
 const toolbar=panel.querySelector(".notes-toolbar")
 if(!toolbar) return null
 let button=toolbar.querySelector('[data-note-cmd="spell"]')
 if(button) return button
 button=document.createElement("button")
 button.type="button"
 button.className="notes-tool-btn notes-tool-btn-spell"
 button.setAttribute("data-note-cmd","spell")
 button.innerHTML='<span class="notes-tool-icon notes-tool-icon-spell">ABC</span>'
 const resetButton=toolbar.querySelector('[data-note-cmd="clear"]')
 if(resetButton){
  toolbar.insertBefore(button,resetButton)
 }else{
  toolbar.appendChild(button)
 }
 return button
}

function setNotesToolbarLanguage(panel){
 if(!panel) return
 const editor=panel.querySelector(".notes-editor")
 if(editor){
  editor.setAttribute("data-placeholder",t("notesPlaceholder"))
  applyNotesEditorSpellcheck(editor)
 }
 ensureNotesSpellcheckButton(panel)
 panel.querySelectorAll(".notes-tool-btn").forEach(btn=>{
  const cmd=btn.dataset.noteCmd
  const keyMap={
   bold:"toolBold",
   italic:"toolItalic",
   strike:"toolStrike",
   underline:"toolUnderline",
   mono:"toolMono",
   spoiler:"toolSpoiler",
   olist:"toolList",
   alignLeft:"toolAlignLeft",
   alignCenter:"toolAlignCenter",
   alignRight:"toolAlignRight",
   clear:"toolReset"
  }
  const textKey=keyMap[cmd]
  if(!textKey) return
  const label=t(textKey)
  btn.title=label
  btn.setAttribute("aria-label",label)
 })
 updateNotesSpellcheckButtonState(panel)
 const prevNav=panel.querySelector(".notes-toolbar-nav.prev")
 const nextNav=panel.querySelector(".notes-toolbar-nav.next")
 if(prevNav){
  prevNav.setAttribute("aria-label",t("previousTrades"))
  prevNav.title=t("previousTrades")
 }
 if(nextNav){
  nextNav.setAttribute("aria-label",t("nextTrades"))
  nextNav.title=t("nextTrades")
 }
 applyLowercaseButtonTooltips(panel)
}

function initNotePanel(panel){
 if(!panel || panel.dataset.noteReady==="1") return
 panel.dataset.noteReady="1"
 enableDrag(panel)
 bindCollapseButton(panel.querySelector("[data-collapse-btn]"))
 bindPanelHideButton(panel.querySelector("[data-hide-btn]"))
 const titleEl=panel.querySelector("h3")
 const editor=panel.querySelector(".notes-editor")
 const toolbarSetup=ensureNotesToolbarShell(panel)
 const toolbar=toolbarSetup?.toolbar || panel.querySelector(".notes-toolbar")
 const toolbarScroll=toolbarSetup?.scroll || null
 const toolbarPrev=toolbarSetup?.prev || null
 const toolbarNext=toolbarSetup?.next || null
 if(titleEl && titleEl.dataset.noteTitleReady!=="1"){
  titleEl.dataset.noteTitleReady="1"
  titleEl.classList.add("notes-title-editable")
  titleEl.addEventListener("pointerdown",(e)=>{
   e.stopPropagation()
  })
  titleEl.addEventListener("click",(e)=>{
   e.preventDefault()
   e.stopPropagation()
   startNotesTitleEditing(panel)
  })
 }
 if(editor){
  const syncSelection=()=>saveNoteSelection(editor)
  editor.addEventListener("focus",()=>requestAnimationFrame(syncSelection))
  editor.addEventListener("pointerup",()=>requestAnimationFrame(syncSelection))
  editor.addEventListener("keyup",syncSelection)
  editor.addEventListener("keydown",(e)=>{
   if(e.key!=="Enter" || e.shiftKey || e.ctrlKey || e.metaKey || e.altKey) return
   if(!handleNoteEnterAtListItemStart(editor)) return
   e.preventDefault()
   cleanupEmptyNoteLists(editor)
   normalizeNoteLineBreakArtifacts(editor)
   editor.dispatchEvent(new Event("input",{bubbles:true}))
  })
  editor.addEventListener("input",()=>{
  cleanupEmptyNoteLists(editor)
  syncSelection()
  if(isApplyingNoteFormatting) return
  commitUndoableChange(()=>{
   const noteIndex=Number(panel.dataset.noteIndex)||0
   notesItems[noteIndex]=getNoteEditorHtml(editor)
   saveNotesItems()
   })
  })
 }
 if(toolbar && editor){
  toolbar.addEventListener("pointerdown",(e)=>{
   if(e.target.closest(".notes-tool-btn")){
    saveNoteSelection(editor)
    e.preventDefault()
   }
  })
  toolbar.addEventListener("mousedown",(e)=>{
   if(e.target.closest(".notes-tool-btn")){
    saveNoteSelection(editor)
    e.preventDefault()
   }
  })
  toolbar.addEventListener("click",(e)=>{
   const btn=e.target.closest(".notes-tool-btn")
   if(!btn) return
   const command=btn.dataset.noteCmd
   commitUndoableChange(()=>{
    const beforeHtml=getNoteEditorHtml(editor)
    let changed=false
    isApplyingNoteFormatting=true
    try{
     changed=applyNotesFormatCommand(editor,command)
    }finally{
     isApplyingNoteFormatting=false
    }
    const afterHtml=getNoteEditorHtml(editor)
    const hasHtmlChanged=beforeHtml!==afterHtml
    const shouldPersist=changed || hasHtmlChanged
    if(!shouldPersist) return
    const noteIndex=Number(panel.dataset.noteIndex)||0
    notesItems[noteIndex]=afterHtml
    saveNotesItems()
   })
  })
  if(toolbarScroll && toolbarScroll.dataset.notesNavReady!=="1"){
   toolbarScroll.dataset.notesNavReady="1"
   toolbarScroll.addEventListener("scroll",()=>updateNotesToolbarNavigation(panel))
  }
  if(toolbarPrev && toolbarPrev.dataset.notesNavReady!=="1"){
   toolbarPrev.dataset.notesNavReady="1"
   toolbarPrev.addEventListener("click",()=>{
    if(!toolbarScroll) return
    const step=Math.max(120,toolbarScroll.clientWidth*0.8)
    toolbarScroll.scrollBy({left:-step,behavior:"smooth"})
   })
  }
  if(toolbarNext && toolbarNext.dataset.notesNavReady!=="1"){
   toolbarNext.dataset.notesNavReady="1"
   toolbarNext.addEventListener("click",()=>{
    if(!toolbarScroll) return
    const step=Math.max(120,toolbarScroll.clientWidth*0.8)
    toolbarScroll.scrollBy({left:step,behavior:"smooth"})
   })
  }
  setNotesToolbarLanguage(panel)
  updateNotesToolbarNavigation(panel)
  requestAnimationFrame(()=>updateNotesToolbarNavigation(panel))
 }
 if(window.ResizeObserver){
  let lastWidth=panel.offsetWidth
  let lastHeight=panel.offsetHeight
  let notesResizeTimer=null
  const notesResizeObserver=new ResizeObserver(()=>{
   updateNotesToolbarNavigation(panel)
   if(isRestoringHistory) return
   if(panel.classList.contains("collapsed")) return
   const widthDiff=Math.abs(panel.offsetWidth-lastWidth)
   const heightDiff=Math.abs(panel.offsetHeight-lastHeight)
   if(widthDiff<2 && heightDiff<2) return
   clearTimeout(notesResizeTimer)
   notesResizeTimer=setTimeout(()=>{
    lastWidth=panel.offsetWidth
    lastHeight=panel.offsetHeight
    savePositions({markLayoutEdited:false})
    lastCommittedState=serializeAppState()
   },120)
  })
  notesResizeObserver.observe(panel)
 }
}

function bindPanelHideButton(btn){
 if(!btn || btn.dataset.hideReady==="1") return
 btn.dataset.hideReady="1"
 btn.addEventListener("click",()=>{
  const panel=btn.closest(PANEL_HIDE_SELECTOR)
  if(!panel) return
  commitUndoableChange(()=>{
   const selectedToHide=isPanelSelected(panel)
    ? getSelectedPanels(panel).filter(canHidePanel)
    : []
   const targets=selectedToHide.length ? selectedToHide : [panel]
   hidePanels(targets)
   savePositions()
   renderSideMenuList()
  })
 })
}

function canHidePanel(candidate){
 return !!candidate && candidate.matches?.(PANEL_SELECTOR)
}

function hidePanels(panels){
 (panels || []).filter(canHidePanel).forEach(target=>{
  target.classList.add("panel-hidden")
  removePanelFromSelection(target)
 })
}

function initUndoShortcut(){
 function isTypingTarget(target){
  if(!target) return false
  const tag=(target.tagName||"").toLowerCase()
  return ["input","textarea","select","button","option","label"].includes(tag) || target.isContentEditable || !!target.closest?.('[contenteditable="true"]')
 }

 document.addEventListener("keydown",(e)=>{
  if(isResetConfirmOpen && e.code==="Escape"){
   setResetConfirmOpen(false)
   return
  }
  if(isDonationScreenOpen && e.code==="Escape"){
   setDonationScreenOpen(false)
   return
  }
  if(isResetConfirmOpen) return
  if(isDonationScreenOpen) return
  if(isLocked && e.code!=="Escape") return
  if(e.code==="Delete"){
   if(isTypingTarget(e.target)) return
   const selectedPanels=getSelectedPanels().filter(canHidePanel)
   if(!selectedPanels.length) return
   e.preventDefault()
   commitUndoableChange(()=>{
    hidePanels(selectedPanels)
    savePositions()
    renderSideMenuList()
   })
   return
  }
  if(e.code==="Escape"){
   if(isLocked) return
   setSideMenuOpen(false)
   return
  }
  if(!(e.ctrlKey || e.metaKey) || e.altKey) return
  if(e.code!=="KeyZ") return
  if(e.shiftKey){
   if(!redoStack.length) return
   e.preventDefault()
   redoLastAction()
   return
  }
  if(!undoStack.length) return
  e.preventDefault()
  undoLastAction()
 })
}

function initWorkspaceDrag(){
 const bodyEl=document.body
 let workspaceUndoSnapshot=""
 if(!getPanels().length) return

function isTypingTarget(target){
 if(!target) return false
 const tag=(target.tagName||"").toLowerCase()
  return ["input","textarea","select","button"].includes(tag) || target.isContentEditable || !!target.closest?.('[contenteditable="true"]')
}

 document.addEventListener("keydown",(e)=>{
  if(isTypingTarget(e.target)) return
  if(e.code==="Space"){
   spaceDragMode=true
   document.body.style.cursor="grab"
   e.preventDefault()
  }
 })
 document.addEventListener("keyup",(e)=>{
  if(isTypingTarget(e.target)) return
  if(e.code==="Space"){
   spaceDragMode=false
   spaceDragStart=null
   document.body.style.cursor=""
  }
 })
 document.addEventListener("pointerdown",(e)=>{
  if(!spaceDragMode) return
  workspaceUndoSnapshot=lastCommittedState || serializeAppState()
 const starts=getPanels().map(el=>({
   el,
   x:parseFloat(el.style.left)||el.offsetLeft,
   y:parseFloat(el.style.top)||el.offsetTop,
   expandedX:parseFloat(el.dataset.expandedX),
   expandedY:parseFloat(el.dataset.expandedY),
   folderX:parseFloat(el.dataset.folderX),
   folderY:parseFloat(el.dataset.folderY)
  }))
  const bg=getComputedStyle(bodyEl).backgroundPosition.split(" ")
  const bgX=parseFloat(bg[0])||0
  const bgY=parseFloat(bg[1])||0
  spaceDragStart={
   x:e.clientX,
   y:e.clientY,
   dx:0,
   dy:0,
   items:starts,
   bgX,
   bgY
  }
  e.target.setPointerCapture(e.pointerId)
 })
 document.addEventListener("pointermove",(e)=>{
  if(!spaceDragMode || !spaceDragStart) return
 const dx=e.clientX-spaceDragStart.x
 const dy=e.clientY-spaceDragStart.y
  spaceDragStart.dx=dx
  spaceDragStart.dy=dy
  spaceDragStart.items.forEach(item=>{
   item.el.style.left=`${item.x+dx}px`
   item.el.style.top=`${item.y+dy}px`
  })
  bodyEl.style.backgroundPosition=`${spaceDragStart.bgX+dx}px ${spaceDragStart.bgY+dy}px`
 })
 document.addEventListener("pointerup",(e)=>{
 if(!spaceDragMode || !spaceDragStart) return
  e.target.releasePointerCapture(e.pointerId)
  const finalDx=spaceDragStart.dx || 0
  const finalDy=spaceDragStart.dy || 0
  spaceDragStart.items.forEach(item=>{
   if(Number.isFinite(item.expandedX)) item.el.dataset.expandedX=String(item.expandedX+finalDx)
   if(Number.isFinite(item.expandedY)) item.el.dataset.expandedY=String(item.expandedY+finalDy)
   if(Number.isFinite(item.folderX)) item.el.dataset.folderX=String(item.folderX+finalDx)
   if(Number.isFinite(item.folderY)) item.el.dataset.folderY=String(item.folderY+finalDy)
  })
  spaceDragStart=null
  savePositions()
  const after=serializeAppState()
  if(after!==workspaceUndoSnapshot){
   pushUndoSnapshot(workspaceUndoSnapshot)
   redoStack=[]
   lastCommittedState=after
   persistUndoHistory()
  }
 })
}

function initKeyboardPanelNudge(){
 const ARROW_KEYS=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"])
 const FOLDER_GRID_STEP=10
 const SHIFT_MULTIPLIER=3
 let nudgeActive=false
 let nudgeBeforeSnapshot=""
 const arrowDeltaByKey={
  ArrowUp:{x:0,y:-1},
  ArrowDown:{x:0,y:1},
  ArrowLeft:{x:-1,y:0},
  ArrowRight:{x:1,y:0}
 }

 function isTypingTarget(target){
  if(!target) return false
  const tag=(target.tagName||"").toLowerCase()
  if(["input","textarea","select","button","option","label"].includes(tag)) return true
  if(target.isContentEditable) return true
  return !!target.closest?.('[contenteditable="true"]')
 }

 function finishNudgeSession(){
  if(!nudgeActive) return
  nudgeActive=false
  const before=nudgeBeforeSnapshot
  nudgeBeforeSnapshot=""
  const after=serializeAppState()
  if(before && after!==before){
   pushUndoSnapshot(before)
   redoStack=[]
   lastCommittedState=after
   persistUndoHistory()
  }
 }

 function snapToGrid(value,step){
  if(!step || !Number.isFinite(step)) return value
  return Math.round(value/step)*step
 }

document.addEventListener("keydown",(e)=>{
 if(!ARROW_KEYS.has(e.key)) return
  if(isLocked || isResetConfirmOpen || isDonationScreenOpen || isPinned) return
 if(e.ctrlKey || e.metaKey || e.altKey) return
  if(isTypingTarget(e.target)) return
  refreshDraggables()
  const selectedPanels=getSelectedPanels()
  if(!selectedPanels.length) return
  if(!nudgeActive){
   nudgeActive=true
   nudgeBeforeSnapshot=lastCommittedState || serializeAppState()
  }
 e.preventDefault()
 const delta=arrowDeltaByKey[e.key]
 const step=e.shiftKey ? FOLDER_GRID_STEP*SHIFT_MULTIPLIER : FOLDER_GRID_STEP
 selectedPanels.forEach(panel=>{
   const currentX=parseFloat(panel.style.left)||panel.offsetLeft
   const currentY=parseFloat(panel.style.top)||panel.offsetTop
   const baseX=snapToGrid(currentX,FOLDER_GRID_STEP)
   const baseY=snapToGrid(currentY,FOLDER_GRID_STEP)
   const nextX=baseX+(delta.x*step)
   let nextY=baseY+(delta.y*step)
   nextY=Math.max(getPanelTopSafeY(),nextY)
   panel.style.left=`${nextX}px`
   panel.style.top=`${nextY}px`
  })
  savePositions()
 })

 document.addEventListener("keyup",(e)=>{
  if(!ARROW_KEYS.has(e.key)) return
  finishNudgeSession()
 })

 document.addEventListener("pointerdown",finishNudgeSession)
 window.addEventListener("blur",finishNudgeSession)
}

function animatePanelExpandFromFolder(panel,fromRect){
 if(!panel || !fromRect || typeof panel.animate!=="function") return
 const targetRect=panel.getBoundingClientRect()
 if(targetRect.width<=0 || targetRect.height<=0 || fromRect.width<=0 || fromRect.height<=0) return
 const fromCenterX=fromRect.left + fromRect.width/2
 const fromCenterY=fromRect.top + fromRect.height/2
 const toCenterX=targetRect.left + targetRect.width/2
 const toCenterY=targetRect.top + targetRect.height/2
 const startScaleX=Math.max(0.2,Math.min(1,fromRect.width/targetRect.width))
 const startScaleY=Math.max(0.2,Math.min(1,fromRect.height/targetRect.height))
 const translateX=fromCenterX-toCenterX
 const translateY=fromCenterY-toCenterY
 try{
  panel.animate([
   {
    transform:`translate(${translateX}px,${translateY}px) scale(${startScaleX},${startScaleY})`,
    opacity:0.62,
    filter:"blur(2.2px)"
   },
   {
    transform:"translate(0px,0px) scale(1,1)",
    opacity:1,
    filter:"blur(0px)"
   }
  ],{
   duration:240,
   easing:"cubic-bezier(0.2,0.85,0.24,1)",
   fill:"both"
  })
 }catch{}
}

function bindCollapseButton(btn){
 if(!btn || btn.dataset.collapseReady==="1") return
 btn.dataset.collapseReady="1"
 const panel=btn.closest(PANEL_SELECTOR)
 if(!panel) return
 const togglePanelCollapsed=(targetCollapsed=null)=>{
  const isNotesPanel=panel.classList.contains("notes")
 const currentlyCollapsed=panel.classList.contains("collapsed")
 const nextCollapsed=targetCollapsed==null ? !currentlyCollapsed : !!targetCollapsed
 if(nextCollapsed===currentlyCollapsed) return
 const currentX=parseFloat(panel.style.left)||panel.offsetLeft||0
 const currentY=parseFloat(panel.style.top)||panel.offsetTop||0
 let transitionFromRect=null
 if(nextCollapsed){
  transitionFromRect=panel.getBoundingClientRect()
  panel.dataset.expandedX=String(currentX)
  panel.dataset.expandedY=String(currentY)
  if(!Number.isFinite(parseFloat(panel.dataset.folderX))){
    panel.dataset.folderX=String(currentX)
   }
   if(!Number.isFinite(parseFloat(panel.dataset.folderY))){
    panel.dataset.folderY=String(currentY)
   }
 }else{
  const iconRect=panel.querySelector(".panel-collapsed-icon")?.getBoundingClientRect?.()
  const panelRect=panel.getBoundingClientRect()
  transitionFromRect=(iconRect && iconRect.width>0 && iconRect.height>0) ? iconRect : panelRect
  panel.dataset.folderX=String(currentX)
  panel.dataset.folderY=String(currentY)
  const restoredX=parseFloat(panel.dataset.expandedX)
   const restoredY=parseFloat(panel.dataset.expandedY)
   if(Number.isFinite(restoredX)) panel.style.left=`${restoredX}px`
   if(Number.isFinite(restoredY)) panel.style.top=`${Math.max(getPanelTopSafeY(),restoredY)}px`
  }
  if(isNotesPanel && !currentlyCollapsed){
   panel.dataset.notesExpandedHeight=panel.style.height || `${panel.offsetHeight}px`
   panel.dataset.notesExpandedMinHeight=panel.style.minHeight || ""
  }
  panel.classList.toggle("collapsed",nextCollapsed)
  if(!nextCollapsed){
   if(isNotesPanel){
    const currentInlineHeight=parseFloat(panel.style.height)||0
    const fallbackHeight=currentInlineHeight>24 ? `${currentInlineHeight}px` : ""
    panel.style.height=panel.dataset.notesExpandedHeight || fallbackHeight
    panel.style.minHeight=panel.dataset.notesExpandedMinHeight || ""
   }else{
    panel.style.height=""
    panel.style.minHeight=""
   }
   if(isWelcomeNotePanel(panel)){
    centerPanelOnScreen(panel)
    bringToFront(panel)
   }
  }
  if(panel===trackerPanel){
   refreshTrackerPanelLayout()
  }
  if(panel===marginPanel){
   refreshMarginPanelLayout()
  }
  if(panel===clockPanel){
   refreshClockPanelLayout()
  }
  if(panel===totalsPanel){
   refreshTotalsPanelLayout()
  }
  if(panel===pnlCalendarPanel){
   renderPnlCalendar()
  }
 if(nextCollapsed){
  const restoredFolderX=parseFloat(panel.dataset.folderX)
  const restoredFolderY=parseFloat(panel.dataset.folderY)
  if(Number.isFinite(restoredFolderX)) panel.style.left=`${restoredFolderX}px`
  if(Number.isFinite(restoredFolderY)) panel.style.top=`${Math.max(getPanelTopSafeY(),restoredFolderY)}px`
 }
 ensurePanelCollapsedBadge(panel)
 if(transitionFromRect){
  requestAnimationFrame(()=>animatePanelExpandFromFolder(panel,transitionFromRect))
 }
}

 panel.__setCollapsedState=togglePanelCollapsed
 btn.addEventListener("click",()=>{
  commitUndoableChange(()=>{
   const selectedPanels=isPanelSelected(panel) ? getSelectedPanels(panel) : []
   const targets=selectedPanels.length ? selectedPanels : [panel]
   const nextCollapsed=!panel.classList.contains("collapsed")
   targets.forEach(targetPanel=>{
    const setCollapsedState=targetPanel?.__setCollapsedState
    if(typeof setCollapsedState==="function"){
     setCollapsedState(nextCollapsed)
    }
   })
   savePositions()
 })
})
if(panel.dataset.collapseDblReady!=="1"){
  panel.dataset.collapseDblReady="1"
panel.addEventListener("dblclick",(e)=>{
  if(isLocked || isResetConfirmOpen || isDonationScreenOpen) return
  if(!panel.classList.contains("collapsed")) return
  const iconEl=panel.querySelector(".panel-collapsed-icon")
  if(!iconEl) return
  const iconRect=iconEl.getBoundingClientRect()
  const inIcon=
   e.clientX>=iconRect.left &&
   e.clientX<=iconRect.right &&
   e.clientY>=iconRect.top &&
   e.clientY<=iconRect.bottom
  if(!inIcon) return
  const hitList=(document.elementsFromPoint?.(e.clientX,e.clientY) || [])
  const topPanelHit=hitList.find(node=>node?.closest?.(PANEL_SELECTOR))
  const topPanel=topPanelHit?.closest?.(PANEL_SELECTOR)
  if(topPanel && topPanel!==panel) return
  if(e.target.closest("button,input,select,textarea,[contenteditable='true']")) return
  e.preventDefault()
  e.stopPropagation()
   commitUndoableChange(()=>{
    const selectedCollapsedPanels=isPanelSelected(panel)
     ? getSelectedPanels(panel).filter(candidate=>candidate?.classList?.contains("collapsed"))
     : []
    const targets=selectedCollapsedPanels.length ? selectedCollapsedPanels : [panel]
    targets.forEach(targetPanel=>{
     const setCollapsedState=targetPanel?.__setCollapsedState
     if(typeof setCollapsedState==="function"){
      setCollapsedState(false)
      ensurePanelCollapsedBadge(targetPanel)
     }
    })
    savePositions()
   })
  })
 }
}

function initCollapseButtons(){
 document.querySelectorAll("[data-collapse-btn]").forEach(btn=>bindCollapseButton(btn))
}
function savePositions(options={}){
 const markLayoutEdited=options.markLayoutEdited!==false
 const data={}
 draggables.forEach(el=>{
  const id=el.dataset.dragId
  if(!id) return
 if(isNotesPanelId(id)){
  rememberNotesPanelLayout(el)
 }
 const currentX=parseFloat(el.style.left)||el.offsetLeft
 const currentY=parseFloat(el.style.top)||el.offsetTop
 const storedExpandedX=parseFloat(el.dataset.expandedX)
 const storedExpandedY=parseFloat(el.dataset.expandedY)
  const storedFolderX=parseFloat(el.dataset.folderX)
  const storedFolderY=parseFloat(el.dataset.folderY)
  const expandedX=el.classList.contains("collapsed")
   ? (Number.isFinite(storedExpandedX) ? storedExpandedX : currentX)
   : currentX
  const expandedY=el.classList.contains("collapsed")
   ? (Number.isFinite(storedExpandedY) ? storedExpandedY : currentY)
   : currentY
  const folderX=el.classList.contains("collapsed")
   ? currentX
   : (Number.isFinite(storedFolderX) ? storedFolderX : currentX)
  const folderY=el.classList.contains("collapsed")
   ? currentY
   : (Number.isFinite(storedFolderY) ? storedFolderY : currentY)
  el.dataset.expandedX=String(expandedX)
  el.dataset.expandedY=String(expandedY)
  el.dataset.folderX=String(folderX)
  el.dataset.folderY=String(folderY)
  const persistSize=shouldPersistPanelSize(el)
  const persistedWidth=persistSize?(parseFloat(el.style.width)||el.offsetWidth):null
  const persistedHeight=persistSize?(
   (el.classList.contains("notes") && el.classList.contains("collapsed") && (parseFloat(el.dataset.notesExpandedHeight)||0))
   || parseFloat(el.style.height)
   || el.offsetHeight
  ):null
  data[id]={
   x:currentX,
   y:currentY,
   expandedX,
   expandedY,
   folderX,
   folderY,
   z:parseInt(el.style.zIndex,10)||10,
   width:persistedWidth,
   height:persistedHeight,
   collapsed:el.classList.contains("collapsed"),
   hidden:el.classList.contains("panel-hidden")
  }
 })
 data.__meta={
  backgroundPosition:document.body.style.backgroundPosition || "",
 topZIndex
 }
 localStorage.setItem(DRAG_KEY,JSON.stringify(data))
 if(markLayoutEdited){
  setAllowImportLayoutOnLoad(false)
 }
 saveNotesPanelLayouts()
 requestCloudSync()
}



