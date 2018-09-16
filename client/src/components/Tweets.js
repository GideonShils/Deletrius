import React, { Component } from 'react';
import axios from 'axios';
import Tweet from 'react-tweet';

class Tweets extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTweets: null
    }
    
  }

  render() {
    const linkProps = { target: '_blank', rel: 'noreferrer' };
    return (
      <div>
        {tweets.map(t =>
          <Tweet data={t} key={t.id_str} linkProps={linkProps} />
        )}
      </div>
    );
  }
}

const tweets = [
  {
    "created_at": "Wed Sep 12 18:51:02 +0000 2018",
    "id": 1039949525060935680,
    "id_str": "1039949525060935681",
    "text": "RT @hijinxfest: Let the #HiJinx begin! Lineup drops tomorrow 👁👁 https://t.co/dHvqEbpTM1",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "HiJinx",
          "indices": [
            24,
            31
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "hijinxfest",
          "name": "hijinx",
          "id": 1030149448968679420,
          "id_str": "1030149448968679430",
          "indices": [
            3,
            14
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 1039923688743821310,
          "id_str": "1039923688743821313",
          "indices": [
            64,
            87
          ],
          "media_url": "http://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
          "url": "https://t.co/dHvqEbpTM1",
          "display_url": "pic.twitter.com/dHvqEbpTM1",
          "expanded_url": "https://twitter.com/hijinxfest/status/1039923761355476993/photo/1",
          "type": "photo",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 1200,
              "h": 1200,
              "resize": "fit"
            },
            "medium": {
              "w": 1200,
              "h": 1200,
              "resize": "fit"
            },
            "small": {
              "w": 680,
              "h": 680,
              "resize": "fit"
            }
          },
          "source_status_id": 1039923761355476990,
          "source_status_id_str": "1039923761355476993",
          "source_user_id": 1030149448968679420,
          "source_user_id_str": "1030149448968679430"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 1039923688743821310,
          "id_str": "1039923688743821313",
          "indices": [
            64,
            87
          ],
          "media_url": "http://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
          "url": "https://t.co/dHvqEbpTM1",
          "display_url": "pic.twitter.com/dHvqEbpTM1",
          "expanded_url": "https://twitter.com/hijinxfest/status/1039923761355476993/photo/1",
          "type": "photo",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 1200,
              "h": 1200,
              "resize": "fit"
            },
            "medium": {
              "w": 1200,
              "h": 1200,
              "resize": "fit"
            },
            "small": {
              "w": 680,
              "h": 680,
              "resize": "fit"
            }
          },
          "source_status_id": 1039923761355476990,
          "source_status_id_str": "1039923761355476993",
          "source_user_id": 1030149448968679420,
          "source_user_id_str": "1030149448968679430"
        }
      ]
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client<\/a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 17045526,
      "id_str": "17045526",
      "name": "Gideon Shils",
      "screen_name": "GideonShils",
      "location": "Philadelphia, PA",
      "description": "Pitt \u201818 - Computer Science | Sometimes I take photos",
      "url": "https://t.co/MxkptYfTmB",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/MxkptYfTmB",
              "expanded_url": "http://www.instagram.com/gideonshils",
              "display_url": "instagram.com/gideonshils",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 915,
      "friends_count": 418,
      "listed_count": 19,
      "created_at": "Wed Oct 29 17:06:01 +0000 2008",
      "favourites_count": 4207,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 1440,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "FFFFFF",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/748428662639296513/aCI7eM8B_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/748428662639296513/aCI7eM8B_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/17045526/1536692972",
      "profile_link_color": "298F9B",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D9D9D9",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "regular"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Wed Sep 12 17:08:40 +0000 2018",
      "id": 1039923761355476990,
      "id_str": "1039923761355476993",
      "text": "Let the #HiJinx begin! Lineup drops tomorrow 👁👁 https://t.co/dHvqEbpTM1",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "HiJinx",
            "indices": [
              8,
              15
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": [],
        "media": [
          {
            "id": 1039923688743821310,
            "id_str": "1039923688743821313",
            "indices": [
              48,
              71
            ],
            "media_url": "http://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
            "url": "https://t.co/dHvqEbpTM1",
            "display_url": "pic.twitter.com/dHvqEbpTM1",
            "expanded_url": "https://twitter.com/hijinxfest/status/1039923761355476993/photo/1",
            "type": "photo",
            "sizes": {
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 1200,
                "h": 1200,
                "resize": "fit"
              },
              "medium": {
                "w": 1200,
                "h": 1200,
                "resize": "fit"
              },
              "small": {
                "w": 680,
                "h": 680,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 1039923688743821310,
            "id_str": "1039923688743821313",
            "indices": [
              48,
              71
            ],
            "media_url": "http://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
            "url": "https://t.co/dHvqEbpTM1",
            "display_url": "pic.twitter.com/dHvqEbpTM1",
            "expanded_url": "https://twitter.com/hijinxfest/status/1039923761355476993/photo/1",
            "type": "photo",
            "sizes": {
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 1200,
                "h": 1200,
                "resize": "fit"
              },
              "medium": {
                "w": 1200,
                "h": 1200,
                "resize": "fit"
              },
              "small": {
                "w": 680,
                "h": 680,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client<\/a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1030149448968679420,
        "id_str": "1030149448968679430",
        "name": "hijinx",
        "screen_name": "hijinxfest",
        "location": "Philadelphia, PA",
        "description": "Philly\u2019s newest music festival is coming Dec 28 & 29. Keep your eyeballs peeled for more info 👁️👁️",
        "url": "https://t.co/gSNCxNN84w",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/gSNCxNN84w",
                "expanded_url": "http://hijinxfest.com",
                "display_url": "hijinxfest.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 397,
        "friends_count": 0,
        "listed_count": 0,
        "created_at": "Thu Aug 16 17:49:02 +0000 2018",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 2,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "F5F8FA",
        "profile_background_image_url": null,
        "profile_background_image_url_https": null,
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1037019667259432960/d62g3rkT_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1037019667259432960/d62g3rkT_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1030149448968679430/1536080040",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": true,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 37,
      "favorite_count": 80,
      "favorited": false,
      "retweeted": true,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 37,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": true,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Wed Sep 12 17:49:07 +0000 2018",
    "id": 1039933943464779780,
    "id_str": "1039933943464779779",
    "text": "RT @richeeeeee: EDM stands for edamame",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "richeeeeee",
          "name": "pineapples✨",
          "id": 67754603,
          "id_str": "67754603",
          "indices": [
            3,
            14
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client<\/a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 17045526,
      "id_str": "17045526",
      "name": "Gideon Shils",
      "screen_name": "GideonShils",
      "location": "Philadelphia, PA",
      "description": "Pitt \u201818 - Computer Science | Sometimes I take photos",
      "url": "https://t.co/MxkptYfTmB",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/MxkptYfTmB",
              "expanded_url": "http://www.instagram.com/gideonshils",
              "display_url": "instagram.com/gideonshils",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 915,
      "friends_count": 418,
      "listed_count": 19,
      "created_at": "Wed Oct 29 17:06:01 +0000 2008",
      "favourites_count": 4207,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 1440,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "FFFFFF",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/748428662639296513/aCI7eM8B_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/748428662639296513/aCI7eM8B_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/17045526/1536692972",
      "profile_link_color": "298F9B",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D9D9D9",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "regular"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Mon Sep 10 17:57:10 +0000 2018",
      "id": 1039211193628418050,
      "id_str": "1039211193628418049",
      "text": "EDM stands for edamame",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": []
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone<\/a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 67754603,
        "id_str": "67754603",
        "name": "pineapples✨",
        "screen_name": "richeeeeee",
        "location": "toronto, ontario, canada 🇨🇦",
        "description": "EDM & fitness & fruits 💕💪🏽✨🎉😎🍍➕✖️【=◈︿◈=】[✖️\u203f✖️] #pineapplegang",
        "url": "https://t.co/oyiwr9s22c",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/oyiwr9s22c",
                "expanded_url": "http://Instagram.com/riche_a",
                "display_url": "Instagram.com/riche_a",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 13159,
        "friends_count": 13110,
        "listed_count": 125,
        "created_at": "Fri Aug 21 23:39:51 +0000 2009",
        "favourites_count": 47895,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 11744,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0099B9",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme4/bg.gif",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme4/bg.gif",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/961740093470932992/IVHe2CHS_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/961740093470932992/IVHe2CHS_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/67754603/1523775267",
        "profile_link_color": "0099B9",
        "profile_sidebar_border_color": "5ED4DC",
        "profile_sidebar_fill_color": "95E8EC",
        "profile_text_color": "3C3940",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 2371,
      "favorite_count": 8557,
      "favorited": true,
      "retweeted": true,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 2371,
    "favorite_count": 0,
    "favorited": true,
    "retweeted": true,
    "lang": "en"
  },
  {
    "created_at": "Wed Sep 12 18:51:02 +0000 2018",
    "id": 1039949525060935680,
    "id_str": "1039949525060935681",
    "text": "RT @hijinxfest: Let the #HiJinx begin! Lineup drops tomorrow 👁👁 https://t.co/dHvqEbpTM1",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "HiJinx",
          "indices": [
            24,
            31
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "hijinxfest",
          "name": "hijinx",
          "id": 1030149448968679420,
          "id_str": "1030149448968679430",
          "indices": [
            3,
            14
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 1039923688743821310,
          "id_str": "1039923688743821313",
          "indices": [
            64,
            87
          ],
          "media_url": "http://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
          "url": "https://t.co/dHvqEbpTM1",
          "display_url": "pic.twitter.com/dHvqEbpTM1",
          "expanded_url": "https://twitter.com/hijinxfest/status/1039923761355476993/photo/1",
          "type": "photo",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 1200,
              "h": 1200,
              "resize": "fit"
            },
            "medium": {
              "w": 1200,
              "h": 1200,
              "resize": "fit"
            },
            "small": {
              "w": 680,
              "h": 680,
              "resize": "fit"
            }
          },
          "source_status_id": 1039923761355476990,
          "source_status_id_str": "1039923761355476993",
          "source_user_id": 1030149448968679420,
          "source_user_id_str": "1030149448968679430"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 1039923688743821310,
          "id_str": "1039923688743821313",
          "indices": [
            64,
            87
          ],
          "media_url": "http://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
          "url": "https://t.co/dHvqEbpTM1",
          "display_url": "pic.twitter.com/dHvqEbpTM1",
          "expanded_url": "https://twitter.com/hijinxfest/status/1039923761355476993/photo/1",
          "type": "photo",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 1200,
              "h": 1200,
              "resize": "fit"
            },
            "medium": {
              "w": 1200,
              "h": 1200,
              "resize": "fit"
            },
            "small": {
              "w": 680,
              "h": 680,
              "resize": "fit"
            }
          },
          "source_status_id": 1039923761355476990,
          "source_status_id_str": "1039923761355476993",
          "source_user_id": 1030149448968679420,
          "source_user_id_str": "1030149448968679430"
        }
      ]
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client<\/a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 17045526,
      "id_str": "17045526",
      "name": "Gideon Shils",
      "screen_name": "GideonShils",
      "location": "Philadelphia, PA",
      "description": "Pitt \u201818 - Computer Science | Sometimes I take photos",
      "url": "https://t.co/MxkptYfTmB",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/MxkptYfTmB",
              "expanded_url": "http://www.instagram.com/gideonshils",
              "display_url": "instagram.com/gideonshils",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 915,
      "friends_count": 418,
      "listed_count": 19,
      "created_at": "Wed Oct 29 17:06:01 +0000 2008",
      "favourites_count": 4207,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 1440,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "FFFFFF",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/748428662639296513/aCI7eM8B_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/748428662639296513/aCI7eM8B_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/17045526/1536692972",
      "profile_link_color": "298F9B",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D9D9D9",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "regular"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Wed Sep 12 17:08:40 +0000 2018",
      "id": 1039923761355476990,
      "id_str": "1039923761355476993",
      "text": "Let the #HiJinx begin! Lineup drops tomorrow 👁👁 https://t.co/dHvqEbpTM1",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "HiJinx",
            "indices": [
              8,
              15
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": [],
        "media": [
          {
            "id": 1039923688743821310,
            "id_str": "1039923688743821313",
            "indices": [
              48,
              71
            ],
            "media_url": "http://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
            "url": "https://t.co/dHvqEbpTM1",
            "display_url": "pic.twitter.com/dHvqEbpTM1",
            "expanded_url": "https://twitter.com/hijinxfest/status/1039923761355476993/photo/1",
            "type": "photo",
            "sizes": {
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 1200,
                "h": 1200,
                "resize": "fit"
              },
              "medium": {
                "w": 1200,
                "h": 1200,
                "resize": "fit"
              },
              "small": {
                "w": 680,
                "h": 680,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 1039923688743821310,
            "id_str": "1039923688743821313",
            "indices": [
              48,
              71
            ],
            "media_url": "http://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
            "url": "https://t.co/dHvqEbpTM1",
            "display_url": "pic.twitter.com/dHvqEbpTM1",
            "expanded_url": "https://twitter.com/hijinxfest/status/1039923761355476993/photo/1",
            "type": "photo",
            "sizes": {
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 1200,
                "h": 1200,
                "resize": "fit"
              },
              "medium": {
                "w": 1200,
                "h": 1200,
                "resize": "fit"
              },
              "small": {
                "w": 680,
                "h": 680,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client<\/a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1030149448968679420,
        "id_str": "1030149448968679430",
        "name": "hijinx",
        "screen_name": "hijinxfest",
        "location": "Philadelphia, PA",
        "description": "Philly\u2019s newest music festival is coming Dec 28 & 29. Keep your eyeballs peeled for more info 👁️👁️",
        "url": "https://t.co/gSNCxNN84w",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/gSNCxNN84w",
                "expanded_url": "http://hijinxfest.com",
                "display_url": "hijinxfest.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 397,
        "friends_count": 0,
        "listed_count": 0,
        "created_at": "Thu Aug 16 17:49:02 +0000 2018",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 2,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "F5F8FA",
        "profile_background_image_url": null,
        "profile_background_image_url_https": null,
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1037019667259432960/d62g3rkT_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1037019667259432960/d62g3rkT_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1030149448968679430/1536080040",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": true,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 37,
      "favorite_count": 80,
      "favorited": false,
      "retweeted": true,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 37,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": true,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Wed Sep 12 17:49:07 +0000 2018",
    "id": 1039933943464779780,
    "id_str": "1039933943464779779",
    "text": "RT @richeeeeee: EDM stands for edamame",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "richeeeeee",
          "name": "pineapples✨",
          "id": 67754603,
          "id_str": "67754603",
          "indices": [
            3,
            14
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client<\/a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 17045526,
      "id_str": "17045526",
      "name": "Gideon Shils",
      "screen_name": "GideonShils",
      "location": "Philadelphia, PA",
      "description": "Pitt \u201818 - Computer Science | Sometimes I take photos",
      "url": "https://t.co/MxkptYfTmB",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/MxkptYfTmB",
              "expanded_url": "http://www.instagram.com/gideonshils",
              "display_url": "instagram.com/gideonshils",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 915,
      "friends_count": 418,
      "listed_count": 19,
      "created_at": "Wed Oct 29 17:06:01 +0000 2008",
      "favourites_count": 4207,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 1440,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "FFFFFF",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/748428662639296513/aCI7eM8B_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/748428662639296513/aCI7eM8B_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/17045526/1536692972",
      "profile_link_color": "298F9B",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D9D9D9",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "regular"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Mon Sep 10 17:57:10 +0000 2018",
      "id": 1039211193628418050,
      "id_str": "1039211193628418049",
      "text": "EDM stands for edamame",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": []
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone<\/a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 67754603,
        "id_str": "67754603",
        "name": "pineapples✨",
        "screen_name": "richeeeeee",
        "location": "toronto, ontario, canada 🇨🇦",
        "description": "EDM & fitness & fruits 💕💪🏽✨🎉😎🍍➕✖️【=◈︿◈=】[✖️\u203f✖️] #pineapplegang",
        "url": "https://t.co/oyiwr9s22c",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/oyiwr9s22c",
                "expanded_url": "http://Instagram.com/riche_a",
                "display_url": "Instagram.com/riche_a",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 13159,
        "friends_count": 13110,
        "listed_count": 125,
        "created_at": "Fri Aug 21 23:39:51 +0000 2009",
        "favourites_count": 47895,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 11744,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0099B9",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme4/bg.gif",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme4/bg.gif",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/961740093470932992/IVHe2CHS_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/961740093470932992/IVHe2CHS_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/67754603/1523775267",
        "profile_link_color": "0099B9",
        "profile_sidebar_border_color": "5ED4DC",
        "profile_sidebar_fill_color": "95E8EC",
        "profile_text_color": "3C3940",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 2371,
      "favorite_count": 8557,
      "favorited": true,
      "retweeted": true,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 2371,
    "favorite_count": 0,
    "favorited": true,
    "retweeted": true,
    "lang": "en"
  },
  {
    "created_at": "Wed Sep 12 18:51:02 +0000 2018",
    "id": 1039949525060935680,
    "id_str": "1039949525060935681",
    "text": "RT @hijinxfest: Let the #HiJinx begin! Lineup drops tomorrow 👁👁 https://t.co/dHvqEbpTM1",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "HiJinx",
          "indices": [
            24,
            31
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "hijinxfest",
          "name": "hijinx",
          "id": 1030149448968679420,
          "id_str": "1030149448968679430",
          "indices": [
            3,
            14
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 1039923688743821310,
          "id_str": "1039923688743821313",
          "indices": [
            64,
            87
          ],
          "media_url": "http://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
          "url": "https://t.co/dHvqEbpTM1",
          "display_url": "pic.twitter.com/dHvqEbpTM1",
          "expanded_url": "https://twitter.com/hijinxfest/status/1039923761355476993/photo/1",
          "type": "photo",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 1200,
              "h": 1200,
              "resize": "fit"
            },
            "medium": {
              "w": 1200,
              "h": 1200,
              "resize": "fit"
            },
            "small": {
              "w": 680,
              "h": 680,
              "resize": "fit"
            }
          },
          "source_status_id": 1039923761355476990,
          "source_status_id_str": "1039923761355476993",
          "source_user_id": 1030149448968679420,
          "source_user_id_str": "1030149448968679430"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 1039923688743821310,
          "id_str": "1039923688743821313",
          "indices": [
            64,
            87
          ],
          "media_url": "http://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
          "url": "https://t.co/dHvqEbpTM1",
          "display_url": "pic.twitter.com/dHvqEbpTM1",
          "expanded_url": "https://twitter.com/hijinxfest/status/1039923761355476993/photo/1",
          "type": "photo",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 1200,
              "h": 1200,
              "resize": "fit"
            },
            "medium": {
              "w": 1200,
              "h": 1200,
              "resize": "fit"
            },
            "small": {
              "w": 680,
              "h": 680,
              "resize": "fit"
            }
          },
          "source_status_id": 1039923761355476990,
          "source_status_id_str": "1039923761355476993",
          "source_user_id": 1030149448968679420,
          "source_user_id_str": "1030149448968679430"
        }
      ]
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client<\/a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 17045526,
      "id_str": "17045526",
      "name": "Gideon Shils",
      "screen_name": "GideonShils",
      "location": "Philadelphia, PA",
      "description": "Pitt \u201818 - Computer Science | Sometimes I take photos",
      "url": "https://t.co/MxkptYfTmB",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/MxkptYfTmB",
              "expanded_url": "http://www.instagram.com/gideonshils",
              "display_url": "instagram.com/gideonshils",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 915,
      "friends_count": 418,
      "listed_count": 19,
      "created_at": "Wed Oct 29 17:06:01 +0000 2008",
      "favourites_count": 4207,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 1440,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "FFFFFF",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/748428662639296513/aCI7eM8B_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/748428662639296513/aCI7eM8B_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/17045526/1536692972",
      "profile_link_color": "298F9B",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D9D9D9",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "regular"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Wed Sep 12 17:08:40 +0000 2018",
      "id": 1039923761355476990,
      "id_str": "1039923761355476993",
      "text": "Let the #HiJinx begin! Lineup drops tomorrow 👁👁 https://t.co/dHvqEbpTM1",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "HiJinx",
            "indices": [
              8,
              15
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": [],
        "media": [
          {
            "id": 1039923688743821310,
            "id_str": "1039923688743821313",
            "indices": [
              48,
              71
            ],
            "media_url": "http://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
            "url": "https://t.co/dHvqEbpTM1",
            "display_url": "pic.twitter.com/dHvqEbpTM1",
            "expanded_url": "https://twitter.com/hijinxfest/status/1039923761355476993/photo/1",
            "type": "photo",
            "sizes": {
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 1200,
                "h": 1200,
                "resize": "fit"
              },
              "medium": {
                "w": 1200,
                "h": 1200,
                "resize": "fit"
              },
              "small": {
                "w": 680,
                "h": 680,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 1039923688743821310,
            "id_str": "1039923688743821313",
            "indices": [
              48,
              71
            ],
            "media_url": "http://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Dm6NFc0W4AE4SOp.jpg",
            "url": "https://t.co/dHvqEbpTM1",
            "display_url": "pic.twitter.com/dHvqEbpTM1",
            "expanded_url": "https://twitter.com/hijinxfest/status/1039923761355476993/photo/1",
            "type": "photo",
            "sizes": {
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 1200,
                "h": 1200,
                "resize": "fit"
              },
              "medium": {
                "w": 1200,
                "h": 1200,
                "resize": "fit"
              },
              "small": {
                "w": 680,
                "h": 680,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client<\/a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1030149448968679420,
        "id_str": "1030149448968679430",
        "name": "hijinx",
        "screen_name": "hijinxfest",
        "location": "Philadelphia, PA",
        "description": "Philly\u2019s newest music festival is coming Dec 28 & 29. Keep your eyeballs peeled for more info 👁️👁️",
        "url": "https://t.co/gSNCxNN84w",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/gSNCxNN84w",
                "expanded_url": "http://hijinxfest.com",
                "display_url": "hijinxfest.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 397,
        "friends_count": 0,
        "listed_count": 0,
        "created_at": "Thu Aug 16 17:49:02 +0000 2018",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 2,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "F5F8FA",
        "profile_background_image_url": null,
        "profile_background_image_url_https": null,
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1037019667259432960/d62g3rkT_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1037019667259432960/d62g3rkT_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1030149448968679430/1536080040",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": true,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 37,
      "favorite_count": 80,
      "favorited": false,
      "retweeted": true,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 37,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": true,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Wed Sep 12 17:49:07 +0000 2018",
    "id": 1039933943464779780,
    "id_str": "1039933943464779779",
    "text": "RT @richeeeeee: EDM stands for edamame",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "richeeeeee",
          "name": "pineapples✨",
          "id": 67754603,
          "id_str": "67754603",
          "indices": [
            3,
            14
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client<\/a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 17045526,
      "id_str": "17045526",
      "name": "Gideon Shils",
      "screen_name": "GideonShils",
      "location": "Philadelphia, PA",
      "description": "Pitt \u201818 - Computer Science | Sometimes I take photos",
      "url": "https://t.co/MxkptYfTmB",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/MxkptYfTmB",
              "expanded_url": "http://www.instagram.com/gideonshils",
              "display_url": "instagram.com/gideonshils",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 915,
      "friends_count": 418,
      "listed_count": 19,
      "created_at": "Wed Oct 29 17:06:01 +0000 2008",
      "favourites_count": 4207,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 1440,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "FFFFFF",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/748428662639296513/aCI7eM8B_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/748428662639296513/aCI7eM8B_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/17045526/1536692972",
      "profile_link_color": "298F9B",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D9D9D9",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "regular"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Mon Sep 10 17:57:10 +0000 2018",
      "id": 1039211193628418050,
      "id_str": "1039211193628418049",
      "text": "EDM stands for edamame",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": []
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone<\/a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 67754603,
        "id_str": "67754603",
        "name": "pineapples✨",
        "screen_name": "richeeeeee",
        "location": "toronto, ontario, canada 🇨🇦",
        "description": "EDM & fitness & fruits 💕💪🏽✨🎉😎🍍➕✖️【=◈︿◈=】[✖️\u203f✖️] #pineapplegang",
        "url": "https://t.co/oyiwr9s22c",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/oyiwr9s22c",
                "expanded_url": "http://Instagram.com/riche_a",
                "display_url": "Instagram.com/riche_a",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 13159,
        "friends_count": 13110,
        "listed_count": 125,
        "created_at": "Fri Aug 21 23:39:51 +0000 2009",
        "favourites_count": 47895,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 11744,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0099B9",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme4/bg.gif",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme4/bg.gif",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/961740093470932992/IVHe2CHS_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/961740093470932992/IVHe2CHS_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/67754603/1523775267",
        "profile_link_color": "0099B9",
        "profile_sidebar_border_color": "5ED4DC",
        "profile_sidebar_fill_color": "95E8EC",
        "profile_text_color": "3C3940",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 2371,
      "favorite_count": 8557,
      "favorited": true,
      "retweeted": true,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 2371,
    "favorite_count": 0,
    "favorited": true,
    "retweeted": true,
    "lang": "en"
  }
]

export default Tweets;
