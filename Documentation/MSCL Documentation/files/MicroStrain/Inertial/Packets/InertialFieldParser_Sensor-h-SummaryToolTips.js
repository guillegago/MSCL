NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Packets/InertialFieldParser_Sensor.h",{1030:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1030\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_RawAccelVector</div></div></div><div class=\"TTSummary\">The Field Parser for raw accelerometer data</div></div>",1032:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1032\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipDataPoints&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div><div class=\"TTSummary\">Parses an MipDataField for MipDataPoints and stores them in the valid or invalid result vectors</div></div>",1033:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1033\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static bool</span> registerParser()</div><div class=\"TTSummary\">The static function that registers this parser with the list of parsers (called immediately)</div></div>",1035:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The 2-byte field type (Descriptor ID + Field ID) for this parser</div></div>",1036:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">Whether this parser is registered. This will always be true. This is used to call registerParser() immediately</div></div>",1037:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1037\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_RawGyroVector</div></div></div><div class=\"TTSummary\">The field parser for raw gyro data</div></div>",1038:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1038\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_RawMagVector</div></div></div><div class=\"TTSummary\">The field parser for raw magnetometer data</div></div>",1039:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1039\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledAccelVector</div></div></div><div class=\"TTSummary\">The field parser for scaled accelerometer data</div></div>",1040:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1040\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledGyroVector</div></div></div><div class=\"TTSummary\">The field parser for scaled gyro data</div></div>",1041:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1041\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledMagVector</div></div></div><div class=\"TTSummary\">The field parser for scaled magnetometer data</div></div>",1042:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1042\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_DeltaThetaVector</div></div></div><div class=\"TTSummary\">The field parser for delta theta data</div></div>",1043:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1043\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_DeltaVelocityVector</div></div></div><div class=\"TTSummary\">The field parser for delta velocity data</div></div>",1044:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1044\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_OrientationMatrix</div></div></div><div class=\"TTSummary\">The field parser for orientation matrix data</div></div>",1045:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1045\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_Quaternion</div></div></div><div class=\"TTSummary\">The field parser for quaternion data</div></div>",1046:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1046\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_OrientationUpdateMatrix</div></div></div><div class=\"TTSummary\">The field parser for orientation matrix data</div></div>",1047:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1047\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_EulerAngles</div></div></div><div class=\"TTSummary\">The field parser for Euler Angles data</div></div>",1048:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1048\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_InternalTimestamp</div></div></div><div class=\"TTSummary\">The field parser for Internal Timestamp data</div></div>",1049:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1049\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_BeaconedTimestamp</div></div></div><div class=\"TTSummary\">The field parser for Beaconed Timestamp data</div></div>",1053:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1053\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_StabilizedMagVector</div></div></div><div class=\"TTSummary\">The field parser for Stabilized Mag Vector (North)</div></div>",1054:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1054\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_StabilizedAccelVector</div></div></div><div class=\"TTSummary\">The field parser for Stabilized Accel Vector (Up)</div></div>",1055:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1055\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_GpsCorrelationTimestamp</div></div></div><div class=\"TTSummary\">The field parser for GPS Correlation Timestamp</div></div>",1059:"<div class=\"NDToolTip TClass LC\"><div class=\"TTSummary\">The field parser for GPS Correlation Timestamp</div></div>",1063:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1063\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledAmbientPressure</div></div></div><div class=\"TTSummary\">The field parser for Scaled Ambient Pressure.</div></div>",1064:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1064\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_RawAmbientPressure</div></div></div><div class=\"TTSummary\">The field parser for Raw Ambient Pressure.</div></div>"});