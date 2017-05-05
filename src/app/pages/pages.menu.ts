export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'home',
        data: {
          menu: {
            title: "general.menu.home",
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
            title: 'general.menu.basicData',
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
                title: 'general.menu.enterprise',
              }
            }
          },
          {
            path: 'productAdd',
            data: {
              menu: {
                title: 'general.menu.productAdd',
              }
            }
          },
          {
            path: 'productList',
            data: {
              menu: {
                title: 'general.menu.productList',
              }
            }
          }
        ]
      },
      {
        path: 'retrospectiveManag',
        data: {
          menu: {
            title: 'general.menu.retrospectiveManag',
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
                title: 'general.menu.retrospectiveAppl',
              }
            }
          },
          {
            path: 'retrospectiveUpload',
            data: {
              menu: {
                title: 'general.menu.retrospectiveUpload',
              }
            }
          }
        ]
      },
      {
        path: 'userManag',
        data: {
          menu: {
            title: 'general.menu.userManag',
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
                title: 'general.menu.userGroup',
              }
            }
          },
          {
            path: 'userList',
            data: {
              menu: {
                title: 'general.menu.userList',
              }
            }
          }
        ]
      }
    ]
  }
];
