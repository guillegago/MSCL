NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Packets/WirelessDataPacket.h",{5139:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5139\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessDataPacket</div></div></div><div class=\"TTSummary\">A class representing a Wireless Data Packet.</div></div>",5141:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5141\" class=\"NDPrototype NoParameterForm\">WirelessDataPacket()</div><div class=\"TTSummary\">The default constructor for a Wireless Data Packet</div></div>",5142:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Represents meta data about Math Data Packets.</div></div>",5144:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5144\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DerivedDataPacketAlgorithmId algorithmId</div><div class=\"TTSummary\">The WirelessTypes::DerivedDataPacketAlgorithmId.</div></div>",5145:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5145\" class=\"NDPrototype NoParameterForm\">ChannelMask channelMask</div><div class=\"TTSummary\">The ChannelMask to which the algorithm is applied.</div></div>",5146:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5146\" class=\"NDPrototype NoParameterForm\">std::vector&lt;DataSweep&gt; m_dataSweeps</div><div class=\"TTSummary\">Contains one or more data sweeps</div></div>",5147:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5147\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_sweepPos</div><div class=\"TTSummary\">The current position into m_dataSweeps to get the next sweep at</div></div>",5148:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5148\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataType m_dataType</div><div class=\"TTSummary\">The type of data that is present in the packet</div></div>",5149:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5149\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_sweepSize</div><div class=\"TTSummary\">The size of a single sweep within this packet</div></div>",5150:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5150\" class=\"NDPrototype NoParameterForm\">std::size_t m_numSweeps</div><div class=\"TTSummary\">The number of sweeps within this packet</div></div>",5151:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5151\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_payloadOffsetChannelData</div><div class=\"TTSummary\">The offset into the payload of the data packet where channel data starts.</div></div>",5153:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5153\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addSweep(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">DataSweep&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sweep</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a single DataSweep to the data packet</div></div>",5154:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5154\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addDataPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">ChannelData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">container,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">channelNumber,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">channelDataIndex,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sweepIndex,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessChannel::</td><td class=\"PType\">ChannelId&nbsp;</td><td></td><td class=\"PName last\">channelId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds a WirelessDataPoint from a payload to the given &lt;ChannelData&gt; container.</div></div>",5155:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5155\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessChannel::ChannelId wirelessChannelFromChNum(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">channelNum</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts a channel number to a WirelessChannel</div></div>",5156:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5156\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> getPayloadData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td></td><td class=\"PName last\">payloadPosition,</td></tr><tr><td class=\"PType first\">anyType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a value out of the packet\'s payload based on the given position and the data\'s DataType.</div></div>",5157:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5157\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> timestampWithinRange(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Timestamp&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">timestamp</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if a timestamp is within the valid range that MSCL accepts.</div></div>",5158:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5158\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> angleWithinRange(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if an angle from a Wireless Packet is within the valid range that MSCL accepts.</div></div>",5159:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5159\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> WirelessChannel::ChannelId getMathChannelId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DerivedDataPacketAlgorithmId&nbsp;</td><td class=\"PName last\">algorithmId,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a math algorithm ID and a channel number (1 = ch1, 8 = ch8) and determines the WirelessChannel::ChannelId.</div></div>",5160:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5160\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> getNextSweep(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataSweep&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sweepResult</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the next DataSweep in the packet</div></div>",5161:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5161\" class=\"NDPrototype NoParameterForm\">std::size_t numSweeps() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total number of DataSweeps that are in this data packet</div></div>",5162:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5162\" class=\"NDPrototype NoParameterForm\">std::size_t numSweepsRemaining() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of remaining DataSweeps that have not been obtained by the user</div></div>",5163:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5163\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> moreSweeps() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Whether or not there are more DataSweeps in the data packet</div></div>"});