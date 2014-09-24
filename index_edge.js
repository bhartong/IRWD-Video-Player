/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'app',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'app',
                symbolName: 'app',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1920px'],
                ["style", "height", '1080px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 60000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"btn_video11": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '550px', '424px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '424px'],
                ["style", "width", '550px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '424px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '550px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"btn_video21": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '550px', '424px', 'auto', 'auto'],
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '424px'],
                ["style", "width", '550px']
            ],
            "${_RectangleCopy3}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "height", '424px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '550px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"btn_video31": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '550px', '424px', 'auto', 'auto'],
                    id: 'RectangleCopy4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '424px'],
                ["style", "width", '550px']
            ],
            "${_RectangleCopy4}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "height", '424px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '550px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"app": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                    id: 'player',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/player.jpg', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                    id: 'menu',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/menu.jpg', '0px', '0px']
                },
                {
                    rect: ['1270px', '325px', '550px', '425px', 'auto', 'auto'],
                    id: 'btn_video3',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/btn_video3.png', '0px', '0px']
                },
                {
                    rect: ['685px', '325px', '550px', '425px', 'auto', 'auto'],
                    id: 'btn_video2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/btn_video2.png', '0px', '0px']
                },
                {
                    rect: ['100px', '325px', '550px', '425px', 'auto', 'auto'],
                    id: 'btn_video1',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/btn_video1.png', '0px', '0px']
                },
                {
                    rect: ['360px', '70px', '1200px', '815px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'blackoutScreen',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['1698px', '29px', '184px', '184px', 'auto', 'auto'],
                    id: 'btn_back',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/btn_back.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['266', '148', 'auto', 'auto', 'auto', 'auto'],
                    id: 'video_viewer'
                }
            ],
            symbolInstances: [
            {
                id: 'video_viewer',
                symbolName: 'video_viewer',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_btn_video3}": [
                ["style", "top", '325px'],
                ["style", "height", '425px'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '1270px'],
                ["style", "width", '550px']
            ],
            "${_btn_video1}": [
                ["style", "top", '325px'],
                ["style", "height", '425px'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '100px'],
                ["style", "width", '550px']
            ],
            "${_btn_back}": [
                ["style", "top", '35px'],
                ["style", "height", '142px'],
                ["style", "display", 'none'],
                ["style", "left", '1736px'],
                ["style", "width", '142px']
            ],
            "${_btn_video2}": [
                ["style", "top", '325px'],
                ["style", "height", '425px'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '685px'],
                ["style", "width", '550px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1080px'],
                ["style", "width", '1920px']
            ],
            "${_video_viewer}": [
                ["style", "display", 'none']
            ],
            "${_blackoutScreen}": [
                ["style", "top", '148px'],
                ["style", "height", '780px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '266px'],
                ["style", "width", '1387px']
            ],
            "${_menu}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_player}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 60000,
            autoPlay: true,
            labels: {
                "home": 0,
                "player": 1000,
                "video1": 2000,
                "video2": 6000,
                "video3": 10000,
                "menu1": 14000,
                "menu2": 18000,
                "menu3": 22000
            },
            timeline: [
                { id: "eid69", tween: [ "style", "${_btn_video1}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 2000 },
                { id: "eid107", tween: [ "style", "${_btn_video1}", "opacity", '0', { fromValue: '1'}], position: 10000, duration: 2000 },
                { id: "eid204", tween: [ "style", "${_btn_video1}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 0 },
                { id: "eid166", tween: [ "style", "${_btn_video1}", "opacity", '1', { fromValue: '1'}], position: 15000, duration: 0 },
                { id: "eid205", tween: [ "style", "${_btn_video1}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 0 },
                { id: "eid223", tween: [ "style", "${_btn_video1}", "opacity", '1', { fromValue: '0'}], position: 19000, duration: 2000 },
                { id: "eid226", tween: [ "style", "${_btn_video1}", "opacity", '0', { fromValue: '1'}], position: 22000, duration: 0 },
                { id: "eid243", tween: [ "style", "${_btn_video1}", "opacity", '1', { fromValue: '0'}], position: 23000, duration: 2000 },
                { id: "eid120", tween: [ "style", "${_btn_back}", "width", '142px', { fromValue: '142px'}], position: 2000, duration: 0 },
                { id: "eid7", tween: [ "style", "${_player}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_player}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_player}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid77", tween: [ "style", "${_btn_video2}", "width", '1387px', { fromValue: '550px'}], position: 6000, duration: 2000 },
                { id: "eid99", tween: [ "style", "${_btn_video2}", "width", '550px', { fromValue: '1387px'}], position: 10000, duration: 0 },
                { id: "eid209", tween: [ "style", "${_btn_video2}", "width", '1387px', { fromValue: '550px'}], position: 18000, duration: 0 },
                { id: "eid219", tween: [ "style", "${_btn_video2}", "width", '550px', { fromValue: '1387px'}], position: 19000, duration: 2000 },
                { id: "eid75", tween: [ "style", "${_btn_video2}", "left", '266px', { fromValue: '685px'}], position: 6000, duration: 2000 },
                { id: "eid97", tween: [ "style", "${_btn_video2}", "left", '685px', { fromValue: '266px'}], position: 10000, duration: 0 },
                { id: "eid207", tween: [ "style", "${_btn_video2}", "left", '266px', { fromValue: '685px'}], position: 18000, duration: 0 },
                { id: "eid217", tween: [ "style", "${_btn_video2}", "left", '685px', { fromValue: '266px'}], position: 19000, duration: 2000 },
                { id: "eid78", tween: [ "style", "${_btn_video2}", "height", '780px', { fromValue: '425px'}], position: 6000, duration: 2000 },
                { id: "eid100", tween: [ "style", "${_btn_video2}", "height", '425px', { fromValue: '780px'}], position: 10000, duration: 0 },
                { id: "eid210", tween: [ "style", "${_btn_video2}", "height", '780px', { fromValue: '425px'}], position: 18000, duration: 0 },
                { id: "eid220", tween: [ "style", "${_btn_video2}", "height", '425px', { fromValue: '780px'}], position: 19000, duration: 2000 },
                { id: "eid43", tween: [ "style", "${_btn_video1}", "height", '780px', { fromValue: '425px'}], position: 2000, duration: 2000 },
                { id: "eid131", tween: [ "style", "${_btn_video1}", "height", '425px', { fromValue: '780px'}], position: 6000, duration: 0 },
                { id: "eid94", tween: [ "style", "${_btn_video1}", "height", '425px', { fromValue: '425px'}], position: 10000, duration: 0 },
                { id: "eid198", tween: [ "style", "${_btn_video1}", "height", '780px', { fromValue: '425px'}], position: 14000, duration: 0 },
                { id: "eid170", tween: [ "style", "${_btn_video1}", "height", '425px', { fromValue: '780px'}], position: 15000, duration: 2000 },
                { id: "eid46", tween: [ "style", "${_blackoutScreen}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid59", tween: [ "style", "${_blackoutScreen}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid79", tween: [ "style", "${_blackoutScreen}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid88", tween: [ "style", "${_blackoutScreen}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid112", tween: [ "style", "${_blackoutScreen}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid245", tween: [ "style", "${_blackoutScreen}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0 },
                { id: "eid246", tween: [ "style", "${_blackoutScreen}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid247", tween: [ "style", "${_blackoutScreen}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
                { id: "eid248", tween: [ "style", "${_blackoutScreen}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid249", tween: [ "style", "${_blackoutScreen}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0 },
                { id: "eid49", tween: [ "style", "${_blackoutScreen}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 1000 },
                { id: "eid82", tween: [ "style", "${_blackoutScreen}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 0 },
                { id: "eid84", tween: [ "style", "${_blackoutScreen}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 1000 },
                { id: "eid85", tween: [ "style", "${_blackoutScreen}", "opacity", '0', { fromValue: '1'}], position: 10000, duration: 0 },
                { id: "eid115", tween: [ "style", "${_blackoutScreen}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 1000 },
                { id: "eid152", tween: [ "style", "${_blackoutScreen}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 1000 },
                { id: "eid212", tween: [ "style", "${_blackoutScreen}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 1000 },
                { id: "eid232", tween: [ "style", "${_blackoutScreen}", "opacity", '0', { fromValue: '1'}], position: 22000, duration: 1000 },
                { id: "eid44", tween: [ "style", "${_btn_video1}", "top", '148px', { fromValue: '325px'}], position: 2000, duration: 2000 },
                { id: "eid63", tween: [ "style", "${_btn_video1}", "top", '325px', { fromValue: '148px'}], position: 6000, duration: 0 },
                { id: "eid92", tween: [ "style", "${_btn_video1}", "top", '325px', { fromValue: '325px'}], position: 10000, duration: 0 },
                { id: "eid196", tween: [ "style", "${_btn_video1}", "top", '148px', { fromValue: '325px'}], position: 14000, duration: 0 },
                { id: "eid168", tween: [ "style", "${_btn_video1}", "top", '325px', { fromValue: '148px'}], position: 15000, duration: 2000 },
                { id: "eid33", tween: [ "style", "${_btn_video2}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 2000 },
                { id: "eid60", tween: [ "style", "${_btn_video2}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 0 },
                { id: "eid106", tween: [ "style", "${_btn_video2}", "opacity", '0', { fromValue: '1'}], position: 10000, duration: 2000 },
                { id: "eid174", tween: [ "style", "${_btn_video2}", "opacity", '1', { fromValue: '0'}], position: 15000, duration: 2000 },
                { id: "eid211", tween: [ "style", "${_btn_video2}", "opacity", '1', { fromValue: '1'}], position: 18000, duration: 0 },
                { id: "eid225", tween: [ "style", "${_btn_video2}", "opacity", '0', { fromValue: '1'}], position: 22000, duration: 0 },
                { id: "eid244", tween: [ "style", "${_btn_video2}", "opacity", '1', { fromValue: '0'}], position: 23000, duration: 2000 },
                { id: "eid24", tween: [ "style", "${_btn_video3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${_btn_video3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid30", tween: [ "style", "${_btn_video3}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid179", tween: [ "style", "${_btn_video3}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid182", tween: [ "style", "${_btn_video3}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid185", tween: [ "style", "${_btn_video3}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid188", tween: [ "style", "${_btn_video3}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid191", tween: [ "style", "${_btn_video3}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid194", tween: [ "style", "${_btn_video3}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid39", tween: [ "style", "${_btn_video1}", "left", '266px', { fromValue: '100px'}], position: 2000, duration: 2000 },
                { id: "eid62", tween: [ "style", "${_btn_video1}", "left", '100px', { fromValue: '266px'}], position: 6000, duration: 0 },
                { id: "eid90", tween: [ "style", "${_btn_video1}", "left", '100px', { fromValue: '100px'}], position: 10000, duration: 0 },
                { id: "eid195", tween: [ "style", "${_btn_video1}", "left", '266px', { fromValue: '100px'}], position: 14000, duration: 0 },
                { id: "eid167", tween: [ "style", "${_btn_video1}", "left", '100px', { fromValue: '266px'}], position: 15000, duration: 2000 },
                { id: "eid111", tween: [ "style", "${_btn_video3}", "height", '780px', { fromValue: '425px'}], position: 10000, duration: 2000 },
                { id: "eid202", tween: [ "style", "${_btn_video3}", "height", '425px', { fromValue: '780px'}], position: 14000, duration: 0 },
                { id: "eid160", tween: [ "style", "${_btn_video3}", "height", '425px', { fromValue: '425px'}], position: 15000, duration: 0 },
                { id: "eid230", tween: [ "style", "${_btn_video3}", "height", '780px', { fromValue: '425px'}], position: 22000, duration: 0 },
                { id: "eid242", tween: [ "style", "${_btn_video3}", "height", '425px', { fromValue: '780px'}], position: 23000, duration: 2000 },
                { id: "eid117", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid118", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid22", tween: [ "style", "${_btn_video1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_btn_video1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_btn_video1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid177", tween: [ "style", "${_btn_video1}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid180", tween: [ "style", "${_btn_video1}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid183", tween: [ "style", "${_btn_video1}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid186", tween: [ "style", "${_btn_video1}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid189", tween: [ "style", "${_btn_video1}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid192", tween: [ "style", "${_btn_video1}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid76", tween: [ "style", "${_btn_video2}", "top", '148px', { fromValue: '325px'}], position: 6000, duration: 2000 },
                { id: "eid98", tween: [ "style", "${_btn_video2}", "top", '325px', { fromValue: '148px'}], position: 10000, duration: 0 },
                { id: "eid208", tween: [ "style", "${_btn_video2}", "top", '148px', { fromValue: '325px'}], position: 18000, duration: 0 },
                { id: "eid218", tween: [ "style", "${_btn_video2}", "top", '325px', { fromValue: '148px'}], position: 19000, duration: 2000 },
                { id: "eid8", tween: [ "style", "${_menu}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_menu}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid18", tween: [ "style", "${_menu}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid34", tween: [ "style", "${_btn_video3}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 2000 },
                { id: "eid70", tween: [ "style", "${_btn_video3}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 2000 },
                { id: "eid101", tween: [ "style", "${_btn_video3}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 0 },
                { id: "eid203", tween: [ "style", "${_btn_video3}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 0 },
                { id: "eid175", tween: [ "style", "${_btn_video3}", "opacity", '1', { fromValue: '0'}], position: 15000, duration: 2000 },
                { id: "eid206", tween: [ "style", "${_btn_video3}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 0 },
                { id: "eid224", tween: [ "style", "${_btn_video3}", "opacity", '1', { fromValue: '0'}], position: 19000, duration: 2000 },
                { id: "eid45", tween: [ "style", "${_btn_video1}", "width", '1387px', { fromValue: '550px'}], position: 2000, duration: 2000 },
                { id: "eid130", tween: [ "style", "${_btn_video1}", "width", '550px', { fromValue: '1387px'}], position: 6000, duration: 0 },
                { id: "eid96", tween: [ "style", "${_btn_video1}", "width", '550px', { fromValue: '550px'}], position: 10000, duration: 0 },
                { id: "eid197", tween: [ "style", "${_btn_video1}", "width", '1387px', { fromValue: '550px'}], position: 14000, duration: 0 },
                { id: "eid169", tween: [ "style", "${_btn_video1}", "width", '550px', { fromValue: '1387px'}], position: 15000, duration: 2000 },
                { id: "eid121", tween: [ "style", "${_btn_back}", "left", '1736px', { fromValue: '1736px'}], position: 2000, duration: 0 },
                { id: "eid139", tween: [ "style", "${_video_viewer}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid140", tween: [ "style", "${_video_viewer}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid141", tween: [ "style", "${_video_viewer}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid142", tween: [ "style", "${_video_viewer}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid143", tween: [ "style", "${_video_viewer}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid144", tween: [ "style", "${_video_viewer}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid145", tween: [ "style", "${_video_viewer}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
                { id: "eid150", tween: [ "style", "${_video_viewer}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0 },
                { id: "eid109", tween: [ "style", "${_btn_video3}", "top", '148px', { fromValue: '325px'}], position: 10000, duration: 2000 },
                { id: "eid200", tween: [ "style", "${_btn_video3}", "top", '325px', { fromValue: '148px'}], position: 14000, duration: 0 },
                { id: "eid158", tween: [ "style", "${_btn_video3}", "top", '325px', { fromValue: '325px'}], position: 15000, duration: 0 },
                { id: "eid228", tween: [ "style", "${_btn_video3}", "top", '148px', { fromValue: '325px'}], position: 22000, duration: 0 },
                { id: "eid240", tween: [ "style", "${_btn_video3}", "top", '325px', { fromValue: '148px'}], position: 23000, duration: 2000 },
                { id: "eid119", tween: [ "style", "${_btn_back}", "height", '142px', { fromValue: '142px'}], position: 2000, duration: 0 },
                { id: "eid110", tween: [ "style", "${_btn_video3}", "width", '1387px', { fromValue: '550px'}], position: 10000, duration: 2000 },
                { id: "eid201", tween: [ "style", "${_btn_video3}", "width", '550px', { fromValue: '1387px'}], position: 14000, duration: 0 },
                { id: "eid159", tween: [ "style", "${_btn_video3}", "width", '550px', { fromValue: '550px'}], position: 15000, duration: 0 },
                { id: "eid229", tween: [ "style", "${_btn_video3}", "width", '1387px', { fromValue: '550px'}], position: 22000, duration: 0 },
                { id: "eid241", tween: [ "style", "${_btn_video3}", "width", '550px', { fromValue: '1387px'}], position: 23000, duration: 2000 },
                { id: "eid23", tween: [ "style", "${_btn_video2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_btn_video2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_btn_video2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid178", tween: [ "style", "${_btn_video2}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid181", tween: [ "style", "${_btn_video2}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid184", tween: [ "style", "${_btn_video2}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
                { id: "eid187", tween: [ "style", "${_btn_video2}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid190", tween: [ "style", "${_btn_video2}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
                { id: "eid193", tween: [ "style", "${_btn_video2}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
                { id: "eid108", tween: [ "style", "${_btn_video3}", "left", '266px', { fromValue: '1270px'}], position: 10000, duration: 2000 },
                { id: "eid199", tween: [ "style", "${_btn_video3}", "left", '1270px', { fromValue: '266px'}], position: 14000, duration: 0 },
                { id: "eid157", tween: [ "style", "${_btn_video3}", "left", '1270px', { fromValue: '1270px'}], position: 15000, duration: 0 },
                { id: "eid227", tween: [ "style", "${_btn_video3}", "left", '266px', { fromValue: '1270px'}], position: 22000, duration: 0 },
                { id: "eid239", tween: [ "style", "${_btn_video3}", "left", '1270px', { fromValue: '266px'}], position: 23000, duration: 2000 },
                { id: "eid122", tween: [ "style", "${_btn_back}", "top", '35px', { fromValue: '35px'}], position: 2000, duration: 0 }            ]
        }
    }
},
"video_viewer": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    preload: 'auto',
                    rect: ['0px', '0px', '1387px', '780px', 'auto', 'auto'],
                    source: ['media/Ground_Water.mp4'],
                    id: 'Ground_Water',
                    type: 'video',
                    tag: 'video'
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '1387px', '780px', 'auto', 'auto'],
                    id: 'blackout',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'none',
                    fill: ['rgba(0,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blackout}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ],
            "${_Ground_Water}": [
                ["style", "height", '780px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1387px']
            ],
            "${symbolSelector}": [
                ["style", "height", '780px'],
                ["style", "width", '1387px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 60000,
            autoPlay: true,
            labels: {
                "home": 0,
                "video1": 1000,
                "video2": 60000
            },
            timeline: [
                { id: "eid147", tween: [ "style", "${_blackout}", "display", 'block', { fromValue: 'none'}], position: 48000, duration: 0 },
                { id: "eid149", tween: [ "style", "${_blackout}", "opacity", '1', { fromValue: '0'}], position: 48000, duration: 1616 },
                { id: "eid146", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_Ground_Water}', [] ], ""], position: 1000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "Index");
