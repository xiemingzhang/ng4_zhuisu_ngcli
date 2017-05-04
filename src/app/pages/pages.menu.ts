export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'home',
        data: {
          menu: {
            title: "home",
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'basicData',
        data: {
          menu: {
            title: 'basicData',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'enterprise',
            data: {
              menu: {
                title: 'enterprise',
              }
            }
          },
          {
            path: 'productAdd',
            data: {
              menu: {
                title: 'productAdd',
              }
            }
          },
          {
            path: 'productList',
            data: {
              menu: {
                title: 'productList',
              }
            }
          }
        ]
      },
      {
        path: 'retrospectiveManag',
        data: {
          menu: {
            title: 'retrospectiveManag',
            icon: "ion-monitor",
            /*icon: 'ion-edit',*/
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'retrospectiveAppl',
            data: {
              menu: {
                title: 'retrospectiveAppl',
              }
            }
          },
          {
            path: 'retrospectiveUpload',
            data: {
              menu: {
                title: 'retrospectiveUpload',
              }
            }
          }
        ]
      },
      {
        path: 'userManag',
        data: {
          menu: {
            title: 'userManag',
            icon: 'ion-person-stalker',
            /*icon: 'ion-gear-a',*/
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'userGroup',
            data: {
              menu: {
                title: 'userGroup',
              }
            }
          },
          {
            path: 'userList',
            data: {
              menu: {
                title: 'userList',
              }
            }
          }
        ]
      }
    ]
  }
];
