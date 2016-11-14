angular.module('dataModule')
    .value('mockValues',
    {
        'menu':
        {
            hpAddress: 'http://www.starhill.ed.jp/'
        },
        'movieList':
        {
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
            }, ],
            content: [
            {
                contentId: 1,
                categoryId: 1,
                name: '野球部',
                description: '野球部です。よろしくお願いします。',
                image: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/jLNpt3dbTUoymo0Q/publicFiles/thumbnail_sample.jpg',
                type: '',
                data: 'https://www.youtube.com/embed/8M8ChETpWRQ',
                startDate: '',
                endDate: '',
                flag: true
            },
            {
                contentId: 2,
                categoryId: 1,
                name: 'バドミントン部',
                description: 'バドミントン部です。よろしくお願いします。',
                image: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/jLNpt3dbTUoymo0Q/publicFiles/thumbnail_sample.jpg',
                type: '',
                data: 'https://www.youtube.com/embed/8M8ChETpWRQ?modestbranding=1&showinfo=0&controls=0&rel=0',
                startDate: '',
                endDate: '',
                flag: true
            },
            {
                contentId: 3,
                categoryId: 1,
                name: 'テニス部',
                description: 'テニス部です。よろしくお願いします。',
                image: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/jLNpt3dbTUoymo0Q/publicFiles/thumbnail_sample.jpg',
                type: '',
                data: 'https://www.youtube.com/embed/8M8ChETpWRQ',
                startDate: '',
                endDate: '',
                flag: true
            },
            {
                contentId: 4,
                categoryId: 2,
                name: '漫画部',
                description: '漫画部です。よろしくお願いします。',
                image: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/jLNpt3dbTUoymo0Q/publicFiles/thumbnail_sample.jpg',
                type: '',
                data: 'https://www.youtube.com/embed/8M8ChETpWRQ?modestbranding=1&showinfo=0&controls=0&rel=0',
                startDate: '',
                endDate: '',
                flag: true
            },
            {
                contentId: 5,
                categoryId: 2,
                name: '写真部',
                description: '写真部です。よろしくお願いします。',
                image: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/jLNpt3dbTUoymo0Q/publicFiles/thumbnail_sample.jpg',
                type: '',
                data: 'https://www.youtube.com/embed/8M8ChETpWRQ?modestbranding=1&showinfo=0&controls=0&rel=0',
                startDate: '',
                endDate: '',
                flag: true
            },
            {
                contentId: 6,
                categoryId: 2,
                name: '理科部',
                description: '理科部です。よろしくお願いします。',
                image: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/jLNpt3dbTUoymo0Q/publicFiles/thumbnail_sample.jpg',
                type: '',
                data: 'https://www.youtube.com/embed/8M8ChETpWRQ?modestbranding=1&showinfo=0&controls=0&rel=0',
                startDate: '',
                endDate: '',
                flag: true
            },
            {
                contentId: 7,
                categoryId: 3,
                name: '高校1年生の行事',
                description: '高校1年生の行事です。',
                image: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/jLNpt3dbTUoymo0Q/publicFiles/thumbnail_sample.jpg',
                type: 'high_school',
                data: 'https://www.youtube.com/embed/8M8ChETpWRQ?modestbranding=1&showinfo=0&controls=0&rel=0',
                startDate: '',
                endDate: '',
                flag: true
            },
            {
                contentId: 8,
                categoryId: 3,
                name: '高校2年生の行事',
                description: '高校2年生の行事です。',
                image: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/jLNpt3dbTUoymo0Q/publicFiles/thumbnail_sample.jpg',
                type: 'high_school',
                data: 'https://www.youtube.com/embed/8M8ChETpWRQ?modestbranding=1&showinfo=0&controls=0&rel=0',
                startDate: '',
                endDate: '',
                flag: true
            },
            {
                contentId: 9,
                categoryId: 3,
                name: '中学1年生の行事',
                description: '中学1年生の行事です。',
                image: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/jLNpt3dbTUoymo0Q/publicFiles/thumbnail_sample.jpg',
                type: 'junior_high_school',
                data: 'https://www.youtube.com/embed/8M8ChETpWRQ?modestbranding=1&showinfo=0&controls=0&rel=0',
                startDate: '',
                endDate: '',
                flag: true
            },
            {
                contentId: 10,
                categoryId: 4,
                name: '施設紹介',
                description: '学園内の施設をまとめました。',
                image: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/jLNpt3dbTUoymo0Q/publicFiles/thumbnail_sample.jpg',
                type: '',
                data: 'https://www.youtube.com/embed/8M8ChETpWRQ?modestbranding=1&showinfo=0&controls=0&rel=0',
                startDate: '',
                endDate: '',
                flag: true
            },
            {
                contentId: 11,
                categoryId: 4,
                name: '一日の生活',
                description: '投稿から下校まで一日を追いました。',
                image: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/jLNpt3dbTUoymo0Q/publicFiles/thumbnail_sample.jpg',
                type: '',
                data: 'https://www.youtube.com/embed/8M8ChETpWRQ?modestbranding=1&showinfo=0&controls=0&rel=0',
                startDate: '',
                endDate: '',
                flag: true
            },
            {
                contentId: 12,
                categoryId: 5,
                name: '高校入試',
                description: '高校の入試情報。',
                image: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/jLNpt3dbTUoymo0Q/publicFiles/thumbnail_sample.jpg',
                type: '',
                data: 'https://www.youtube.com/embed/8M8ChETpWRQ?modestbranding=1&showinfo=0&controls=0&rel=0',
                startDate: '',
                endDate: '',
                flag: true
            },
            {
                contentId: 13,
                categoryId: 5,
                name: '中学入試',
                description: '中学の入試情報。',
                image: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/jLNpt3dbTUoymo0Q/publicFiles/thumbnail_sample.jpg',
                type: '',
                data: 'https://www.youtube.com/embed/8M8ChETpWRQ?modestbranding=1&showinfo=0&controls=0&rel=0',
                startDate: '',
                endDate: '',
                flag: true
            },
            {
                contentId: 14,
                categoryId: 6,
                name: '学園祭',
                description: '文化祭は6月10日です。',
                image: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/jLNpt3dbTUoymo0Q/publicFiles/thumbnail_sample.jpg',
                type: '',
                data: 'https://www.youtube.com/embed/8M8ChETpWRQ?modestbranding=1&showinfo=0&controls=0&rel=0',
                startDate: '20161101',
                endDate: '20171101',
                flag: true
            },
            {
                contentId: 15,
                categoryId: 6,
                name: '運動会',
                description: '運動会は6月10日です。',
                image: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/jLNpt3dbTUoymo0Q/publicFiles/thumbnail_sample.jpg',
                type: '',
                data: 'https://www.youtube.com/embed/8M8ChETpWRQ?modestbranding=1&showinfo=0&controls=0&rel=0',
                startDate: '20161101',
                endDate: '20171101',
                flag: true
            },
            ]
        }
    })

