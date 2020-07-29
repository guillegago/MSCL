NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/LongPing.h",{3464:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3464\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">LongPing</div></div></div><div class=\"TTSummary\">Contains logic for the LongPing Node command</div></div>",3466:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3466\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessPacket::</td><td class=\"PType\">AsppVersion&nbsp;</td><td class=\"PName last\">asppVer,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the LongPing command packet</div></div>",3467:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3467\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the LongPing Node command</div></div>",3469:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3469\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a LongPing Response object</div></div>",3471:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3471\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address to look for in the Long Ping response</div></div>",3472:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3472\" class=\"NDPrototype NoParameterForm\">PingResponse m_result</div><div class=\"TTSummary\">The PingResponse that holds the result of the LongPing Node command</div></div>",3474:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3474\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the expected response pattern\'s bytes</div></div>",3475:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3475\" class=\"NDPrototype NoParameterForm\">PingResponse result()</div><div class=\"TTSummary\">Gets the PingResponse that holds the result of the response</div></div>"});