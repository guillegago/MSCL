NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/MipNodeFeatures.h",{2927:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2927\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by an InertialNode.</div></div>",2929:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2929\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipNodeFeatures(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipNodeInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipNodeFeatures object.</div></div>",2931:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2931\" class=\"NDPrototype NoParameterForm\">MipNodeInfo m_nodeInfo</div><div class=\"TTSummary\">The MipNodeInfo.</div></div>",2933:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2933\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::unique_ptr&lt;MipNodeFeatures&gt; create(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipNodeInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds and returns a MipNodeFeatures pointer based on the given parameters.</div></div>",2934:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2934\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> isChannelField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">descriptor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the uint16 descriptor value is a Channel field or not.</div></div>",2935:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2935\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsCategory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not a given MipTypes::DataClass is supported by the Node.</div></div>",2936:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2936\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> supportsCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">commandId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether or not the given MipTypes::Command is supported by the Node.</div></div>",2937:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2937\" class=\"NDPrototype NoParameterForm\">MipTypes::MipCommands supportedCommands() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported &lt;MipTypes::MipCommands&gt; that are supported by the Node.</div></div>",2938:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2938\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipTypes::MipChannelFields supportedChannelFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the supported channel fields for a given MipTypes::DataClass.</div></div>",2939:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2939\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SampleRates&amp; supportedSampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the supported sample rates for a given MipTypes::DataClass.</div></div>",2940:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2940\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> GnssReceivers&amp; gnssReceiverInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of GnssReceiverInfo for supported GNSS receivers.</div></div>",2941:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2941\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> useLegacyIdsForEnableDataStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">true if the device uses Legacy IDs for the IMU/AHRS, GNSS, and EF data sets in the Enable Data Stream command (0x0C, 0x11)</div></div>",2942:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2942\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> HeadingUpdateOptionsList supportedHeadingUpdateOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported heading update control options for this node.</div></div>",2943:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2943\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> StatusSelectors supportedStatusSelectors() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported device data status selectors for this node.</div></div>",2944:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2944\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> EstimationControlOptions supportedEstimationControlOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets an object containing the estimation control options supported by this node.</div></div>",2945:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2945\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> VehicleModeTypes supportedVehicleModeTypes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of the supported vehicle mode types for this node.</div></div>",2946:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2946\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> AdaptiveMeasurementModes supportedAdaptiveMeasurementModes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets an object containing the adaptive measurement modes supported by this node.</div></div>",2947:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2947\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> KinematicConstraintOptions supportedAccelerationConstraintOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the acceleration constraint options supported by this device.</div></div>",2948:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2948\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> KinematicConstraintOptions supportedVelocityConstraintOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the velocity constraint options supported by this device.</div></div>",2949:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2949\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> KinematicConstraintOptions supportedAngularConstraintOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the angular constraint options supported by this device.</div></div>",2950:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2950\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> PpsInputOutputOptions supportedPpsSourceOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the PPS source options supported by this device.</div></div>",2951:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2951\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> PpsInputOutputOptions supportedPpsOutputOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the PPS output options supported by this device.</div></div>"});