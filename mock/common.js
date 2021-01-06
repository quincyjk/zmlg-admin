module.exports = [{
  url: '/vue-element-admin/common/menus',
  type: 'get',
  response: config => {
    return {
      code: 20000,
      data: {
        "code": 0,
        "message": "操作成功",
        "data": [{
          "path": "/",
          "component": "Layout",
          "children": [{
            "name": "Console",
            "path": "console",
            "component": "console",
            "meta": {
              "title": "控制台",
              "icon": "console-k",
              "noCache": true,
            }
          }]
        }, {
          "path": "/switchingPlatforms",
          "component": "Layout",
          "name": "SwitchingPlatforms",
          "meta": {
            "title": "切换管理平台",
            "icon": "switch-k",
            "noCache": true
          },
          "children": [{
              "name": "My_ruanwen_list",
              "path": "/my_ruanwen_list",
              "component": "ruanwen-management/my_ruanwen_list",
              "flatform": 1,
              "meta": {
                "title": "广告营销平台",
                "noCache": true,
              }
            },
            {
              "name": "My_order_list",
              "path": "/my_order_list",
              "component": "media-management/my_order_list",
              "flatform": 2,
              "meta": {
                "title": "媒体接单平台",
                "noCache": true,
              }
            },
            {
              "name": "My_apply",
              "path": "/my_apply",
              "component": "oem/my_apply",
              "flatform": 3,
              "meta": {
                "title": "定制代理平台",
                "noCache": true,
              }
            }
          ]
        }, {
          "path": "/ruanwen",
          "component": "Layout",
          "name": "ruanwen",
          "hidden": true,
          "flatform_type": 1,
          "meta": {
            "title": "选择软文发布平台",
            "icon": "choice-k",
            "noCache": true,
          },
          "children": [{
              "name": "Website_list",
              "path": "/website_list",
              "component": "ruanwen/website_list",
              "meta": {
                "title": "商业新闻媒体",
                "noCache": true
              }
            },
            {
              "name": "Wemeida_list",
              "path": "/wemeida_list",
              "component": "ruanwen/wemeida_list",
              "meta": {
                "title": "自媒体",
                "noCache": true
              }
            },
            {
              "name": "Weibo_list",
              "path": "/weibo_list",
              "component": "ruanwen/weibo_list",
              "meta": {
                "title": "微博",
                "noCache": true
              }
            },
            {
              "name": "Weixin_list",
              "path": "/weixin_list",
              "component": "ruanwen/weixin_list",
              "meta": {
                "title": "微信公众号",
                "noCache": true
              }
            },
            {
              "name": "Friend_list",
              "path": "/friend_list",
              "component": "ruanwen/friend_list",
              "meta": {
                "title": "朋友圈",
                "noCache": true
              }
            },
            {
              "name": "Bbs_list",
              "path": "/bbs_list",
              "component": "ruanwen/bbs_list",
              "meta": {
                "title": "论坛",
                "noCache": true
              }
            }
          ]
        }, {
          "path": "/media",
          "component": "Layout",
          "name": "ruanwen",
          "hidden": true,
          "flatform_type": 2,
          "meta": {
            "title": "我的资源管理",
            "icon": "resource-k",
            "noCache": true,
          },
          "children": [{
            "name": "My_website_list",
            "path": "/my_website_list",
            "component": "media/my_website_list",
            "meta": {
              "title": "商业新闻媒体",
              "noCache": true
            }
          }, {
            "name": "My_media_list",
            "path": "/my_media_list",
            "component": "media/my_media_list",
            "meta": {
              "title": "自媒体资源",
              "noCache": true
            }
          }, {
            "name": "My_friend_list",
            "path": "/my_friend_list",
            "component": "media/my_friend_list",
            "meta": {
              "title": "微信朋友圈",
              "noCache": true
            }
          }, {
            "name": "My_weixin_list",
            "path": "/my_weixin_list",
            "component": "media/my_weixin_list",
            "meta": {
              "title": " 微信公众号",
              "noCache": true
            }
          }, {
            "name": "My_weibo_list",
            "path": "/my_weibo_list",
            "component": "media/my_weibo_list",
            "meta": {
              "title": " 新浪微博",
              "noCache": true
            }
          }, {
            "name": "SetMediaTop",
            "path": "/setMediaTop",
            "component": "media/setMediaTop",
            "meta": {
              "title": " 设置媒体置顶",
              "noCache": true
            }
          }, {
            "name": "MediaQuotationSheet",
            "path": "/mediaQuotationSheet",
            "component": "media/mediaQuotationSheet",
            "meta": {
              "title": " 批量导入媒体报价表",
              "noCache": true
            }
          }]
        },{
          "path": "/account-management",
          "component": "Layout",
          "name": "account-management",
          "hidden": false,
          "meta": {
            "title": "我的帐号管理",
            "icon": "account-k",
            "noCache": true
          },
          "children": [{
              "name": "getMediaList",
              "path": "/getMediaList",
              "component": "account-management/getMediaList",
              "meta": {
                "title": "我的收藏",
                "noCache": true
              }
            },{
              "name": "email_note",
              "path": "/email_note",
              "component": "account-management/email_note",
              "meta": {
                "title": "设置邮件提醒",
                "noCache": true
              }
            }
          ]
        },{
          "path": "/amount-order",
          "component": "Layout",
          "name": "amount-order",
          "hidden": false,
          "meta": {
            "title": "我的财务管理",
            "icon": "finance-k",
            "noCache": true
          },
          "children": [{
              "name": "to_pay",
              "path": "/to_pay",
              "component": "amount-order/to_pay",
              "meta": {
                "title": "我要充值",
                "noCache": true
              }
            },{
              "name": "my_amount_report",
              "path": "/my_amount_report",
              "component": "amount-order/my_amount_report",
              "meta": {
                "title": "消费财务报表",
                "noCache": true
              }
            }
          ]
        }, {
          "path": "/oem",
          "component": "Layout",
          "name": "oem",
          "hidden": true,
          "flatform_type": 3,
          "meta": {
            "title": " 我的代理管理",
            "icon": "agent-k",
            "noCache": true,
          },
          "children": [{
            "name": "My_apply",
            "path": "/my_apply",
            "component": "oem/my_apply",
            "meta": {
              "title": "定制代理平台",
              "noCache": true
            }
          }, {
            "name": "My_income",
            "path": "/my_income",
            "component": "oem/my_income",
            "meta": {
              "title": " 我的代理收益",
              "noCache": true
            }
          }, {
            "name": "Price_set",
            "path": "/price_set",
            "component": "oem/price_set",
            "meta": {
              "title": "设置对外价格",
              "noCache": true
            }
          }, {
            "name": "IncomeDetails",
            "path": "/incomeDetails",
            "component": "oem/incomeDetails",
            "meta": {
              "title": "发稿收益明细",
              "noCache": true
            }
          }, {
            "name": "My_agent_list",
            "path": "/my_agent_list",
            "component": "oem/my_agent_list",
            "meta": {
              "title": "我的分销代理",
              "noCache": true
            }
          }, {
            "name": "Oem_user_list",
            "path": "/oem_user_list",
            "component": "oem/oem_user_list",
            "meta": {
              "title": "我的客户管理",
              "noCache": true
            }
          }, {
            "name": "My_link",
            "path": "/my_link",
            "component": "oem/my_link",
            "meta": {
              "title": "我的推广链接",
              "noCache": true
            }
          }]
        },  {
          "path": "/ruanwen-management",
          "component": "Layout",
          "name": "ruanwen-management",
          "hidden": true,
          "flatform_type": 1,
          "meta": {
            "title": "软文营销管理",
            "icon": "ruanwen-marketing-k",
            "noCache": true
          },
          "children": [{
              "name": "post_select",
              "path": "/post_select",
              "component": "ruanwen-management/post_select",
              "meta": {
                "title": "创建订单活动",
                "noCache": true
              }
            },
            {
              "name": "my_ruanwen_list",
              "path": "/my_ruanwen_list",
              "component": "ruanwen-management/my_ruanwen_list",
              "meta": {
                "title": "订单进度查询",
                "noCache": true,
              }
            }

          ]
        }, {
          "path": "/media-management",
          "component": "Layout",
          "name": "media-management",
          "hidden": true,
          "flatform_type": 2,
          "meta": {
            "title": "媒体营销管理",
            "icon": "media-marketing-k",
            "noCache": true
          },
          "children": [{
              "name": "pay_record_list",
              "path": "/pay_record_list",
              "component": "media-management/pay_record_list",
              "meta": {
                "title": "订单结算提现",
                "noCache": true
              }
            },
            {
              "name": "My_order_list",
              "path": "/my_order_list",
              "component": "media-management/my_order_list",
              "meta": {
                "title": "我的订单列表",
                "noCache": true,
              }
            }
          ]
        }, {
          "path": "/help-document",
          "component": "Layout",
          "name": "help-document",
          "meta": {
            "title": "帮组及文档",
            "icon": "help-document-k",
            "noCache": true
          },
          "children": [{
              "name": "20500",
              "path": "/20500",
              "component": "help-document/20500",
              "meta": {
                "title": "发布注意事项",
                "noCache": true
              }
            },{
              "name": "22984",
              "path": "/22984",
              "component": "help-document/22984",
              "meta": {
                "title": "发稿来源白名单",
                "noCache": true
              }
            }
          ]
        }]
      }
    }
  }
}]
