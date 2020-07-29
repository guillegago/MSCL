NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/PageDownload.h",{3477:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3477\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">PageDownload</div></div></div><div class=\"TTSummary\">Contains logic for the PageDownload Node command</div></div>",3479:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3479\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">pageIndex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the PageDownload command packet</div></div>",3480:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3480\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the PageDownload Node command</div></div>",3482:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3482\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a PageDownload Response object</div></div>",3484:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3484\" class=\"NDPrototype NoParameterForm\">ByteStream m_dataPoints</div><div class=\"TTSummary\">The data points that make up the &quot;page&quot; that was downloaded from the Node</div></div>",3485:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3485\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_matchedPart1</div><div class=\"TTSummary\">Whether or not part 1 (the Command Byte) of the response has been matched</div></div>",3487:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3487\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the DataBuffer passed in matches the expected response pattern\'s bytes</div></div>",3488:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3488\" class=\"NDPrototype NoParameterForm\">ByteStream dataPoints()</div><div class=\"TTSummary\">Gets the dataPoints that were downloaded from the Node</div></div>",3489:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3489\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchSuccessResponsePart1(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the DataBuffer passed in matches the first part (Command Byte) of the response bytes</div></div>",3490:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3490\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the DataBuffer passed in matches the success response bytes</div></div>",3491:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Checks if the DataBuffer passed in matches the fail response bytes</div></div>"});