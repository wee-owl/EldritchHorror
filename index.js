import { ancientsData } from "./data/ancients.js";
import { difficulties } from "./data/difficulties.js";
import { cardsData as blueCardsData } from "./data/mythicCards/blue/index.js";
import { cardsData as brownCardsData } from "./data/mythicCards/brown/index.js";
import { cardsData as greenCardsData } from "./data/mythicCards/green/index.js";

var _$_c5cf=["\x2E\x61\x6E\x63\x69\x65\x6E\x74","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72\x41\x6C\x6C","\x2E\x64\x69\x66\x66\x69\x63\x75\x6C\x74\x69\x65\x73\x2D\x77\x72\x61\x70","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x2E\x64\x69\x66\x66\x69\x63\x75\x6C\x74\x79","\x2E\x6D\x69\x78\x2D\x77\x72\x61\x70","\x2E\x73\x74\x61\x67\x65\x73\x2D\x77\x72\x61\x70","\x2E\x63\x61\x72\x64\x2D\x64\x65\x63\x6B","\x2E\x63\x75\x72\x72\x65\x6E\x74\x2D\x63\x61\x72\x64","\x2E\x74\x72\x61\x63\x6B\x65\x72\x2D\x74\x65\x78\x74","\x66\x69\x72\x73\x74\x53\x74\x61\x67\x65","\x73\x65\x63\x6F\x6E\x64\x53\x74\x61\x67\x65","\x74\x68\x69\x72\x64\x53\x74\x61\x67\x65","\x67\x72\x65\x65\x6E\x43\x61\x72\x64\x73","\x62\x72\x6F\x77\x6E\x43\x61\x72\x64\x73","\x62\x6C\x75\x65\x43\x61\x72\x64\x73","\x63\x6C\x69\x63\x6B","\x61\x6E\x63\x69\x65\x6E\x74\x2D\x61\x63\x74\x69\x76\x65","\x63\x6F\x6E\x74\x61\x69\x6E\x73","\x63\x6C\x61\x73\x73\x4C\x69\x73\x74","\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79","\x73\x74\x79\x6C\x65","\x76\x69\x73\x69\x62\x6C\x65","\x68\x69\x64\x64\x65\x6E","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x49\x6D\x61\x67\x65","\x6E\x6F\x6E\x65","\x6D\x69\x78\x2D\x61\x63\x74\x69\x76\x65","\x61\x64\x64","\x72\x65\x6D\x6F\x76\x65","\x66\x6F\x72\x45\x61\x63\x68","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x64\x69\x66\x66\x69\x63\x75\x6C\x74\x79\x2D\x61\x63\x74\x69\x76\x65","\x69\x64","\x70\x75\x73\x68","\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74","\x6C\x65\x6E\x67\x74\x68","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x65\x61\x73\x79","\x68\x61\x72\x64","\x64\x65\x66\x61\x75\x6C\x74","\x64\x69\x66\x66\x69\x63\x75\x6C\x74\x79","\x73\x70\x6C\x69\x63\x65","\x70\x6F\x70","\x6E\x6F\x72\x6D\x61\x6C","\x63\x61\x72\x64\x46\x61\x63\x65","\x63\x6F\x6C\x6F\x72","\x67\x72\x65\x65\x6E","\x62\x72\x6F\x77\x6E"];
const ancients=document[_$_c5cf[1]](_$_c5cf[0]);//0
const difficultiesWrap=document[_$_c5cf[3]](_$_c5cf[2]);//1
const difficultiesBut=document[_$_c5cf[1]](_$_c5cf[4]);//2
const mixWrap=document[_$_c5cf[3]](_$_c5cf[5]);//3
const stagesWrap=document[_$_c5cf[3]](_$_c5cf[6]);//4
const cardDeckBg=document[_$_c5cf[3]](_$_c5cf[7]);//5
const tableCurrCard=document[_$_c5cf[3]](_$_c5cf[8]);//6
const trackers=document[_$_c5cf[1]](_$_c5cf[9]);//7
const stageNum=[_$_c5cf[10],_$_c5cf[11],_$_c5cf[12]];//8
const cardColors=[_$_c5cf[13],_$_c5cf[14],_$_c5cf[15]];//9
let currentAncient;//10
let currentDifficulty;//11
let currentTracks;//12
ancients[_$_c5cf[29]]((_0x235A2,_0x235AD)=>
{
	_0x235A2[_$_c5cf[30]](_$_c5cf[16],()=>
	{
		if(!_0x235A2[_$_c5cf[19]][_$_c5cf[18]](_$_c5cf[17]))
		{
			difficultiesWrap[_$_c5cf[21]][_$_c5cf[20]]= _$_c5cf[22];stagesWrap[_$_c5cf[21]][_$_c5cf[20]]= _$_c5cf[23];cardDeckBg[_$_c5cf[21]][_$_c5cf[20]]= _$_c5cf[23];tableCurrCard[_$_c5cf[21]][_$_c5cf[24]]= _$_c5cf[25];if(currentDifficulty)
			{
				mixWrap[_$_c5cf[19]][_$_c5cf[27]](_$_c5cf[26])
			}
			
		}
		//16
		currentAncient= ancientsData[_0x235AD];ancients[_$_c5cf[29]]((_0x235B8,_0x235C3)=>
		{
			if(_0x235C3=== _0x235AD)
			{
				_0x235B8[_$_c5cf[19]][_$_c5cf[27]](_$_c5cf[17])
			}
			else 
			{
				_0x235B8[_$_c5cf[19]][_$_c5cf[28]](_$_c5cf[17])
			}
			
		}
		)
	}
	)
}
);difficultiesBut[_$_c5cf[29]]((_0x235A2,_0x235AD)=>
{
	_0x235A2[_$_c5cf[30]](_$_c5cf[16],()=>
	{
		if(!_0x235A2[_$_c5cf[19]][_$_c5cf[18]](_$_c5cf[31]))
		{
			stagesWrap[_$_c5cf[21]][_$_c5cf[20]]= _$_c5cf[23];cardDeckBg[_$_c5cf[21]][_$_c5cf[20]]= _$_c5cf[23];mixWrap[_$_c5cf[19]][_$_c5cf[27]](_$_c5cf[26]);tableCurrCard[_$_c5cf[21]][_$_c5cf[24]]= _$_c5cf[25]
		}
		//38
		currentDifficulty= difficulties[_0x235AD][_$_c5cf[32]];difficultiesBut[_$_c5cf[29]]((_0x235B8,_0x235C3)=>
		{
			if(_0x235C3=== _0x235AD)
			{
				_0x235B8[_$_c5cf[19]][_$_c5cf[27]](_$_c5cf[31])
			}
			else 
			{
				_0x235B8[_$_c5cf[19]][_$_c5cf[28]](_$_c5cf[31])
			}
			
		}
		)
	}
	)
}
);const setTrackers=()=>
{
	currentTracks= [];stageNum[_$_c5cf[29]]((_0x235A2)=>
	{
		cardColors[_$_c5cf[29]]((_0x235B8)=>
		{
			currentTracks[_$_c5cf[33]](currentAncient[_0x235A2][_0x235B8])
		}
		)
	}
	);trackers[_$_c5cf[29]]((_0x235A2,_0x235AD)=>
	{
		_0x235A2[_$_c5cf[34]]= currentTracks[_0x235AD]
	}
	)
}
;//55
const shuffleCards=(_0x235CE)=>
{
	for(let _0x235AD=_0x235CE[_$_c5cf[35]]- 1;_0x235AD> 0;_0x235AD--)
	{
		let _0x235C3=Math[_$_c5cf[37]](Math[_$_c5cf[36]]()* _0x235AD);//69
		let _0x235D9=_0x235CE[_0x235AD];//70
		_0x235CE[_0x235AD]= _0x235CE[_0x235C3];_0x235CE[_0x235C3]= _0x235D9
	}
	
}
;//67
const getMythDeck=(_0x2363C,_0x23605,_0x235EF,_0x235E4,_0x23673,_0x23626)=>
{
	const _0x2361B=[_0x2363C,_0x23605,_0x235EF];//77
	const _0x23652=[[],[],[]];//78
	const _0x2365D=[[],[],[]];//79
	const _0x2367E=[[],[],[]];//80
	let _0x23647=_0x235E4[_$_c5cf[10]][_$_c5cf[13]]+ _0x235E4[_$_c5cf[11]][_$_c5cf[13]]+ _0x235E4[_$_c5cf[12]][_$_c5cf[13]];//82
	let _0x23610=_0x235E4[_$_c5cf[10]][_$_c5cf[14]]+ _0x235E4[_$_c5cf[11]][_$_c5cf[14]]+ _0x235E4[_$_c5cf[12]][_$_c5cf[14]];//83
	let _0x235FA=_0x235E4[_$_c5cf[10]][_$_c5cf[15]]+ _0x235E4[_$_c5cf[11]][_$_c5cf[15]]+ _0x235E4[_$_c5cf[12]][_$_c5cf[15]];//84
	const _0x23668=[_0x23647,_0x23610,_0x235FA];//85
	const _0x23689=[_$_c5cf[38],_$_c5cf[39],_$_c5cf[40]];//86
	const _0x23631=(_0x2369F,_0x23694)=>
	{
		_0x2361B[_$_c5cf[29]]((_0x235A2,_0x235AD)=>
		{
			_0x235A2[_$_c5cf[29]]((_0x235B8)=>
			{
				if(_0x235B8[_$_c5cf[41]]!== _0x23694)
				{
					_0x23652[_0x235AD][_$_c5cf[33]](_0x235B8)
				}
				
			}
			)
		}
		);_0x23652[_$_c5cf[29]]((_0x235A2)=>
		{
			shuffleCards(_0x235A2)
		}
		);if(currentDifficulty=== `very ${_0x2369F}`)
		{
			for(let _0x235AD=0;_0x235AD< 2;_0x235AD++)
			{
				_0x23652[_$_c5cf[29]]((_0x235A2,_0x235AD)=>
				{
					_0x235A2[_$_c5cf[29]]((_0x235B8,_0x235C3)=>
					{
						if(_0x235B8[_$_c5cf[41]]=== _0x2369F&& _0x2365D[_0x235AD][_$_c5cf[35]]< _0x23668[_0x235AD])
						{
							_0x2365D[_0x235AD][_$_c5cf[33]](_0x235B8);_0x23652[_0x235AD][_$_c5cf[42]](_0x235C3,1)
						}
						
					}
					)
				}
				)
			}
			
		}
		//101
		_0x23652[_$_c5cf[29]]((_0x235A2,_0x235AD)=>
		{
			while(_0x2365D[_0x235AD][_$_c5cf[35]]< _0x23668[_0x235AD])
			{
				_0x2365D[_0x235AD][_$_c5cf[33]](_0x235A2[_$_c5cf[43]]())
			}
			
		}
		)
	}
	;//88
	if(currentDifficulty=== _$_c5cf[38])
	{
		_0x23631(_0x23689[0],_0x23689[1])
	}
	//121
	if(currentDifficulty=== _$_c5cf[39])
	{
		_0x23631(_0x23689[1],_0x23689[0])
	}
	//124
	if(currentDifficulty=== _$_c5cf[44])
	{
		_0x23631(_0x23689[2],_0x23689[2])
	}
	//127
	_0x2365D[_$_c5cf[29]]((_0x235A2)=>
	{
		shuffleCards(_0x235A2)
	}
	);_0x2365D[_$_c5cf[29]]((_0x235A2,_0x235AD)=>
	{
		_0x2367E[_$_c5cf[29]]((_0x235B8,_0x236AA)=>
		{
			for(let _0x235C3=0;_0x235C3< _0x235E4[_0x23673[_0x236AA]][_0x23626[_0x235AD]];_0x235C3++)
			{
				_0x235B8[_$_c5cf[33]](_0x235A2[_$_c5cf[43]]())
			}
			
		}
		)
	}
	);_0x2367E[_$_c5cf[29]]((_0x235A2)=>
	{
		shuffleCards(_0x235A2)
	}
	);setTrackers();return [..._0x2367E[2],..._0x2367E[1],..._0x2367E[0]]
}
;//76
let gameDeck;//150
mixWrap[_$_c5cf[30]](_$_c5cf[16],()=>
{
	mixWrap[_$_c5cf[19]][_$_c5cf[28]](_$_c5cf[26]);stagesWrap[_$_c5cf[21]][_$_c5cf[20]]= _$_c5cf[22];cardDeckBg[_$_c5cf[21]][_$_c5cf[20]]= _$_c5cf[22];cardDeckBg[_$_c5cf[21]][_$_c5cf[24]]= `url('./assets/mythicCardBackground.jpg')`;gameDeck= getMythDeck(greenCardsData,brownCardsData,blueCardsData,currentAncient,stageNum,cardColors)
}
);cardDeckBg[_$_c5cf[30]](_$_c5cf[16],()=>
{
	if(gameDeck[_$_c5cf[35]]> 0)
	{
		const _0x236C0=gameDeck[_$_c5cf[43]]();//162
		tableCurrCard[_$_c5cf[21]][_$_c5cf[24]]= `url(${_0x236C0[_$_c5cf[45]]})`;let _0x236B5=_0x236C0[_$_c5cf[46]]=== _$_c5cf[47]?[0,3,6]:_0x236C0[_$_c5cf[46]]=== _$_c5cf[48]?[1,4,7]:[2,5,8];//164
		let _0x236CB=currentTracks[_0x236B5[0]]> 0?_0x236B5[0]:currentTracks[_0x236B5[1]]> 0?_0x236B5[1]:_0x236B5[2];//165
		currentTracks[_0x236CB]--;trackers[_0x236CB][_$_c5cf[34]]= currentTracks[_0x236CB];if(gameDeck[_$_c5cf[35]]=== 0)
		{
			cardDeckBg[_$_c5cf[21]][_$_c5cf[24]]= `none`
		}
		
	}
	
}
)
