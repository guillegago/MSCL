NDSummary.OnToolTipsLoaded("CClass:MipPacketCollector",{1533:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1533\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipPacketCollector</div></div></div><div class=\"TTSummary\">Class that sets/matches expected responses, and stores all the Inertial packets</div></div>",1535:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1535\" class=\"NDPrototype NoParameterForm\">MipPacketCollector()</div><div class=\"TTSummary\">The default constructor for the MipPacketCollector</div></div>",1536:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1536\" class=\"NDPrototype NoParameterForm\">~MipPacketCollector()</div><div class=\"TTSummary\">The destructor for the MipPacketCollector</div></div>",1538:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a circular buffer of a MipDataPacket</div></div>",1540:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The maximum number of data packets that can be stored in the circular buffer</div></div>",1542:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1542\" class=\"NDPrototype NoParameterForm\">circular_data_buffer m_dataPackets</div><div class=\"TTSummary\">A circular buffer that holds MipDataPackets</div></div>",1543:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1543\" class=\"NDPrototype NoParameterForm\">std::mutex m_packetMutex</div><div class=\"TTSummary\">A mutex used for thread safety when accessing/modifying the m_dataPackets buffer</div></div>",1544:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1544\" class=\"NDPrototype NoParameterForm\">std::condition_variable m_emptyBufferCondition</div><div class=\"TTSummary\">Allows the write to buffer thread to tell the reading thread when data is available</div></div>",1545:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1545\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>()&gt; m_notifyDataAddedFn</div><div class=\"TTSummary\">The function to call when data packets are added.</div></div>",1546:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1546\" class=\"NDPrototype NoParameterForm\">std::map&lt;MipTypes::DataClass, MipDataPacket&gt; m_previousPackets</div><div class=\"TTSummary\">A map of previous MipDataPackets for each MipTypes::DataClass</div></div>",1548:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1548\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> adjustPacketTimestamp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipDataPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adjusts the collected timestamp of the MipDataPacket if possible, by using the GPS time field in the packet and comparing it with the previous packet.</div></div>",1549:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1549\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> requestDataAddedNotification(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>()&gt;&nbsp;</td><td class=\"PName last\">fnToCall</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Register a function to call when data packets arrive</div></div>",1550:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1550\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addDataPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a data packet to the data packets circular buffer</div></div>",1551:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1551\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> getDataPackets(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;MipDataPacket&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">packets,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">maxPackets&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of data packets that have been collected.</div></div>",1552:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1552\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalPackets()</div><div class=\"TTSummary\">Gets the total number of data packets that are currently in the buffer.</div></div>"});