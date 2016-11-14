
/*  */

function GetMockData(){
    var getmockdata = function(){
        var mockData = {
            menu: {
                hpAddress: 'http://www.starhill.ed.jp/'
            },
            movieList: {
                headerImage: 'views/img/sports_clubs.png',
                listItem: [
                    {
                        thumbnail: 'views/img/thumbnail.png',
                        name: 'テニス部',
                        description: 'テニス部です。頑張ります。'
                    },
                    {
                        thumbnail: 'views/img/thumbnail.png',
                        name: 'テニス部',
                        description: 'テニス部です。頑張ります。'
                    },
                    {
                        thumbnail: 'views/img/thumbnail.png',
                        name: 'テニス部',
                        description: 'テニス部です。頑張ります。'
                    },
                    {
                        thumbnail: 'views/img/thumbnail.png',
                        name: 'テニス部',
                        description: 'テニス部です。頑張ります。'
                    },
                    {
                        thumbnail: 'views/img/thumbnail.png',
                        name: 'テニス部',
                        description: 'テニス部です。頑張ります。'
                    },
                    {
                        thumbnail: 'views/img/thumbnail.png',
                        name: 'テニス部',
                        description: 'テニス部です。頑張ります。'
                    },
                    {
                        thumbnail: 'views/img/thumbnail.png',
                        name: 'テニス部',
                        description: 'テニス部です。頑張ります。'
                    },
                    {
                        thumbnail: 'views/img/thumbnail.png',
                        name: 'テニス部',
                        description: 'テニス部です。頑張ります。'
                    },
                    {
                        thumbnail: 'views/img/thumbnail.png',
                        name: 'テニス部',
                        description: 'テニス部です。頑張ります。'
                    },
                    {
                        thumbnail: 'views/img/thumbnail.png',
                        name: 'テニス部',
                        description: 'テニス部です。頑張ります。'
                    },
                ]
            }
        }
        return mockData;
    }
        return getmockdata;
}


angular
    .module('dataModule')
    .service('GetMockData', GetMockData);