NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Commands/GenericMipCommand.h",{1564:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1564\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GenericMipCmdResponse</div></div></div><div class=\"TTSummary\">Represents the response to a GenericMipCommand.</div></div>",1566:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1566\" class=\"NDPrototype NoParameterForm\">GenericMipCmdResponse()</div><div class=\"TTSummary\">Creates a GenericMipCmdResponse with default values.</div></div>",1567:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1567\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">GenericMipCmdResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ResponsePattern::</td><td class=\"PType\">State&nbsp;</td><td class=\"PName last\">state,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">success,</td></tr><tr><td class=\"PModifierQualifier first\">MipPacket::</td><td class=\"PType\">MipAckNack&nbsp;</td><td class=\"PName last\">errorCode,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cmdName,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GenericMipCmdResponse with the given parameters.</div></div>",1568:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1568\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GenericMipCmdResponse ResponseSuccess(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">cmdName,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">ByteStream&nbsp;</td><td></td><td class=\"PName\">data&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ByteStream()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GenericMipCmdResponse with a successful response.</div></div>",1569:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1569\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GenericMipCmdResponse ResponseFail(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ResponsePattern::</td><td class=\"PType\">State&nbsp;</td><td></td><td class=\"PName last\">errorState,</td></tr><tr><td class=\"PModifierQualifier first\">MipPacket::</td><td class=\"PType\">MipAckNack&nbsp;</td><td></td><td class=\"PName last\">errorCode,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">cmdName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GenericMipCmdResponse with a fail response.</div></div>",1571:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1571\" class=\"NDPrototype NoParameterForm\">ByteStream m_data</div><div class=\"TTSummary\">The &lt;ByteStream that holds the data received from the response, if any.</div></div>",1573:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1573\" class=\"NDPrototype NoParameterForm\">ByteStream data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data that was received from the response, if any.</div></div>",1574:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1574\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GenericMipCommand</div></div></div><div class=\"TTSummary\">Represents a base class for MIP commands</div></div>",1576:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The byte index of a command\'s descriptor set identifier</div></div>",1577:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The byte index of a command\'s field descriptor</div></div>",1578:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The byte index of a command\'s function selector (if present)</div></div>",1580:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1580\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">descSetByte,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">cmdByte,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">fieldData&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Bytes()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the command for a MIP command, and returns a ByteStream containing the bytes to send</div></div>",1581:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1581\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName\">commandId,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">fieldData&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Bytes()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the command for a MIP command, and returns a ByteStream containing the bytes to send</div></div>",1582:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1582\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipTypes::Command peekCommandId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">commandBytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Read the descriptor set and field descriptor from the provided command bytes.&nbsp; Note: The provided command bytes are assumed to be formatted properly, no validation occurs.</div></div>",1583:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1583\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipTypes::FunctionSelector peekFunctionSelector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">commandBytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Read the function selector from the provided command bytes.&nbsp; Note: The provided command bytes are assumed to be formatted properly, no validation occurs.</div></div>",1584:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1584\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">fieldData&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">Bytes()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the command for a derived MIP command, and returns a ByteStream containing the bytes to send</div></div>",1585:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets the MipTypes::Command</div></div>",1586:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1586\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the MIP command</div></div>",1588:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1588\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_ackNackResponse</div><div class=\"TTSummary\">Whether or not an ack/nack response field is expected</div></div>",1589:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1589\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_dataResponse</div><div class=\"TTSummary\">Whether or not a data response field is expected</div></div>",1590:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1590\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipTypes::Command m_command</div><div class=\"TTSummary\">The command enumeration</div></div>",1591:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1591\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_commandName</div><div class=\"TTSummary\">The name of the command</div></div>",1592:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1592\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_fieldDataByte</div><div class=\"TTSummary\">The field data byte.</div></div>",1593:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1593\" class=\"NDPrototype NoParameterForm\">MipResponseMatchValues m_matchData</div><div class=\"TTSummary\">The &lt;MipResponseMatchValues&gt; map to check when determining a response data match</div></div>",1594:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1594\" class=\"NDPrototype NoParameterForm\">GenericMipCmdResponse m_result</div><div class=\"TTSummary\">The GenericMipCmdResponse that holds the result of the GenericMipCommand</div></div>",1596:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1596\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MipTypes::Command for the MIP command</div></div>",1597:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1597\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data field byte that should be received with the data field (if any)</div></div>",1598:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1598\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> descSetByte() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the descriptor set byte for the MIP command</div></div>",1599:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1599\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> cmdByte() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the command byte for the MIP command</div></div>",1600:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1600\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldAckNackByte() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ack/nack byte that should be received with the ack/nack field</div></div>",1601:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1601\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> checkMatchData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Function to loop through the &lt;MipResponseMatchValues&gt; and check that they match in the response data</div></div>",1602:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1602\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName\">MipTypes::Command&amp;,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">ackNackResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">dataResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">cmdName,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">fieldDataByte&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a default constructor Response.&nbsp; Note: You will need to use the &lt;setResponseCollector&gt; function before being used.</div></div>",1603:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1603\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName\">MipTypes::Command&amp;,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">ackNackResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">dataResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">cmdName,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipResponseMatchValues&nbsp;</td><td class=\"PName\">matchData,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">fieldDataByte&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a default constructor Response.&nbsp; Note: You will need to use the &lt;setResponseCollector&gt; function before being used.</div></div>",1604:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1604\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td></td><td class=\"PName\">MipTypes::Command&amp;,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td></td><td class=\"PName\">collector,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">ackNackResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">dataResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">cmdName,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">fieldDataByte&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Response object</div></div>",1605:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1605\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td></td><td class=\"PName\">MipTypes::Command&amp;,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td></td><td class=\"PName\">collector,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">ackNackResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">dataResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">cmdName,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipResponseMatchValues&nbsp;</td><td></td><td class=\"PName\">matchData,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">fieldDataByte&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Response object</div></div>",1606:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1606\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the MipDataField passed in matches the expected response pattern\'s bytes</div></div>",1607:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1607\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> match_ackNack(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the MipDataField matches the ACK/NACK field for this command (if one is even expected)</div></div>",1608:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1608\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match_data(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the MipDataField matches the data field for this command (if one is even expected)</div></div>",1609:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1609\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> wait(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Waits for a certain amount of time for the response pattern to be matched</div></div>",1610:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1610\" class=\"NDPrototype NoParameterForm\">GenericMipCmdResponse result()</div><div class=\"TTSummary\">Gets the GenericMipCmdResponse that holds the result of the response</div></div>"});