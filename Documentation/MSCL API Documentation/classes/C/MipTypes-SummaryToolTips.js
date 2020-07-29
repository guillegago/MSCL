NDSummary.OnToolTipsLoaded("CClass:MipTypes",{683:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains enumeration/types for various MIP information</div></div>",684:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all the different data classes of MIP data.</div></div>",695:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all the different types/categories of MIP commands and data.</div></div>",702:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for enable or disable of data.</div></div>",705:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums to represent different time categories.</div></div>",708:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all of the different MIP commands.</div></div>",816:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all of the different MIP Channel Field IDs.</div></div>",984:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for different MIP Channel Qualifiers.&nbsp; This combined with the ChannelField produces a unique identifier for each individual channel that is collected.</div></div>",1069:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1069\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> channelName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PType first\">ChannelQualifier&nbsp;</td><td class=\"PName last\">qualifier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the name of the specified &lt;ChannelId&gt;.&nbsp; This is the universal channel name that should be used for uploading to SensorCloud.</div></div>",1070:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1070\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipChannelFields getChannelFields_allDataClasses(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Get a list of ChannelFields representing the same descriptor/channel field across all GNSS data classes</div></div>",1071:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1071\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ChannelField getChannelField_baseDataClass(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the ChannelField representing the provided channel field\'s equivalent in the original GNSS data class (0x81)</div></div>",1072:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1072\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ChannelField getChannelField_toDataClass(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField,</td></tr><tr><td class=\"PType first\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the ChannelField representing the provided channel field\'s equivalent in the specified DataClass</div></div>",1073:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1073\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> getChannelNamePrependText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the text to prepend the channel name to distinguish between different GNSS data classes</div></div>",1074:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1074\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> isGnssChannelField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether the provided ChannelField is within a GNSS data set.</div></div>"});