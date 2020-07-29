NDSummary.OnToolTipsLoaded("CClass:NodeEeprom",{3889:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3889\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeEeprom</div></div></div><div class=\"TTSummary\">Used to read and write to Wireless Nodes\' eeproms and provide caching functionality.</div></div>",3891:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3891\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">NodeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNode_Impl&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">node,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">base,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">NodeEepromSettings&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">settings</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an Eeprom object.</div></div>",3893:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3893\" class=\"NDPrototype NoParameterForm\">BaseStation m_baseStation</div><div class=\"TTSummary\">The BaseStation to use for communication with the Node.</div></div>",3894:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3894\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_useGroupRead</div><div class=\"TTSummary\">Whether we can use a group eeprom read when reading from eeprom.</div></div>",3896:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3896\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> updateCacheFromDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Attempts to update the cache by reading the value from the Node with the nodeAddress given at initialization.&nbsp; Any values that are read from the Node will be updated in the cache.</div></div>",3897:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3897\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parseEepromPage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">pageData,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">pageIndex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parses a page download result containing eeprom values.&nbsp; The eeprom cache will be updated with all the parsed values.</div></div>",3898:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3898\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parseBatchEepromResult(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">map&lt;<span class=\"SHKeyword\">uint16</span>, <span class=\"SHKeyword\">uint16</span>&gt;&nbsp;</td><td class=\"PName last\">eepromMap</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parses the response from a Batch Node Eeprom Read command.&nbsp; The eeprom cache will be updated with all the parsed values.</div></div>",3899:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3899\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> updateSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">NodeEepromSettings&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">settings</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the settings for this eeprom object.</div></div>",3900:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3900\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setBaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">base</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Updates the BaseStation object that is set for use in communicating with the Node.</div></div>",3901:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3901\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint16</span> readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Attempts to read an eeprom value from the Node.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the Node.</div></div>",3902:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3902\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Attempts to write an eeprom value to the Node.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the Node and this function will have no affect.</div></div>"});