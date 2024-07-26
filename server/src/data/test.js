import fs from 'fs/promises';
import { fileURLToPath } from 'url';



const result = {
    "FeaturedBundle": {
        "Bundle": {
            "ID": "70cfcd46-2b2c-4fe1-b004-b48597268f21",
            "DataAssetID": "35815cab-429d-79e4-43f5-e0af8fdac22b",
            "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
            "Items": [
                {
                    "Item": {
                        "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                        "ItemID": "9f09d408-4e55-b9bb-580a-9fa37e3730b5",
                        "Amount": 1
                    },
                    "BasePrice": 4350,
                    "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                    "DiscountPercent": 0.23,
                    "DiscountedPrice": 3350,
                    "IsPromoItem": false
                },
                {
                    "Item": {
                        "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                        "ItemID": "31ae0595-4ee7-57c8-f61c-2e808a6b77ed",
                        "Amount": 1
                    },
                    "BasePrice": 2175,
                    "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                    "DiscountPercent": 0.23,
                    "DiscountedPrice": 1675,
                    "IsPromoItem": false
                },
                {
                    "Item": {
                        "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                        "ItemID": "a519475f-4326-481c-6900-989911df4ce0",
                        "Amount": 1
                    },
                    "BasePrice": 2175,
                    "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                    "DiscountPercent": 0.23,
                    "DiscountedPrice": 1675,
                    "IsPromoItem": false
                },
                {
                    "Item": {
                        "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                        "ItemID": "96770195-4aa7-3ed9-a251-7ca4fb8bd0d9",
                        "Amount": 2
                    },
                    "BasePrice": 475,
                    "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                    "DiscountPercent": 1,
                    "DiscountedPrice": 0,
                    "IsPromoItem": false
                },
                {
                    "Item": {
                        "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                        "ItemID": "76ca86c6-4fdf-9799-f091-9d873c61b87e",
                        "Amount": 1
                    },
                    "BasePrice": 575,
                    "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                    "DiscountPercent": 1,
                    "DiscountedPrice": 0,
                    "IsPromoItem": false
                },
                {
                    "Item": {
                        "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                        "ItemID": "7e4984e0-4ec8-5dd8-acd7-2cbc960116a9",
                        "Amount": 1
                    },
                    "BasePrice": 325,
                    "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                    "DiscountPercent": 1,
                    "DiscountedPrice": 0,
                    "IsPromoItem": false
                }
            ],
            "ItemOffers": null,
            "TotalBaseCost": null,
            "TotalDiscountedCost": null,
            "TotalDiscountPercent": 0,
            "DurationRemainingInSeconds": 643943,
            "WholesaleOnly": false
        },
        "Bundles": [
            {
                "ID": "70cfcd46-2b2c-4fe1-b004-b48597268f21",
                "DataAssetID": "35815cab-429d-79e4-43f5-e0af8fdac22b",
                "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                "Items": [
                    {
                        "Item": {
                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                            "ItemID": "9f09d408-4e55-b9bb-580a-9fa37e3730b5",
                            "Amount": 1
                        },
                        "BasePrice": 4350,
                        "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                        "DiscountPercent": 0.23,
                        "DiscountedPrice": 3350,
                        "IsPromoItem": false
                    },
                    {
                        "Item": {
                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                            "ItemID": "31ae0595-4ee7-57c8-f61c-2e808a6b77ed",
                            "Amount": 1
                        },
                        "BasePrice": 2175,
                        "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                        "DiscountPercent": 0.23,
                        "DiscountedPrice": 1675,
                        "IsPromoItem": false
                    },
                    {
                        "Item": {
                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                            "ItemID": "a519475f-4326-481c-6900-989911df4ce0",
                            "Amount": 1
                        },
                        "BasePrice": 2175,
                        "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                        "DiscountPercent": 0.23,
                        "DiscountedPrice": 1675,
                        "IsPromoItem": false
                    },
                    {
                        "Item": {
                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                            "ItemID": "96770195-4aa7-3ed9-a251-7ca4fb8bd0d9",
                            "Amount": 2
                        },
                        "BasePrice": 475,
                        "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                        "DiscountPercent": 1,
                        "DiscountedPrice": 0,
                        "IsPromoItem": false
                    },
                    {
                        "Item": {
                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                            "ItemID": "76ca86c6-4fdf-9799-f091-9d873c61b87e",
                            "Amount": 1
                        },
                        "BasePrice": 575,
                        "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                        "DiscountPercent": 1,
                        "DiscountedPrice": 0,
                        "IsPromoItem": false
                    },
                    {
                        "Item": {
                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                            "ItemID": "7e4984e0-4ec8-5dd8-acd7-2cbc960116a9",
                            "Amount": 1
                        },
                        "BasePrice": 325,
                        "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                        "DiscountPercent": 1,
                        "DiscountedPrice": 0,
                        "IsPromoItem": false
                    }
                ],
                "ItemOffers": [
                    {
                        "BundleItemOfferID": "9f09d408-4e55-b9bb-580a-9fa37e3730b5",
                        "Offer": {
                            "OfferID": "9f09d408-4e55-b9bb-580a-9fa37e3730b5",
                            "IsDirectPurchase": true,
                            "StartDate": "0001-01-01T00:00:00Z",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 4350
                            },
                            "Rewards": [
                                {
                                    "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                    "ItemID": "9f09d408-4e55-b9bb-580a-9fa37e3730b5",
                                    "Quantity": 1
                                }
                            ]
                        },
                        "DiscountPercent": 0.23,
                        "DiscountedCost": {
                            "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                        }
                    },
                    {
                        "BundleItemOfferID": "31ae0595-4ee7-57c8-f61c-2e808a6b77ed",
                        "Offer": {
                            "OfferID": "31ae0595-4ee7-57c8-f61c-2e808a6b77ed",
                            "IsDirectPurchase": true,
                            "StartDate": "0001-01-01T00:00:00Z",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                            },
                            "Rewards": [
                                {
                                    "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                    "ItemID": "31ae0595-4ee7-57c8-f61c-2e808a6b77ed",
                                    "Quantity": 1
                                }
                            ]
                        },
                        "DiscountPercent": 0.23,
                        "DiscountedCost": {
                            "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1675
                        }
                    },
                    {
                        "BundleItemOfferID": "a519475f-4326-481c-6900-989911df4ce0",
                        "Offer": {
                            "OfferID": "a519475f-4326-481c-6900-989911df4ce0",
                            "IsDirectPurchase": true,
                            "StartDate": "0001-01-01T00:00:00Z",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                            },
                            "Rewards": [
                                {
                                    "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                    "ItemID": "a519475f-4326-481c-6900-989911df4ce0",
                                    "Quantity": 1
                                }
                            ]
                        },
                        "DiscountPercent": 0.23,
                        "DiscountedCost": {
                            "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1675
                        }
                    },
                    {
                        "BundleItemOfferID": "96770195-4aa7-3ed9-a251-7ca4fb8bd0d9",
                        "Offer": {
                            "OfferID": "96770195-4aa7-3ed9-a251-7ca4fb8bd0d9",
                            "IsDirectPurchase": true,
                            "StartDate": "0001-01-01T00:00:00Z",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                            },
                            "Rewards": [
                                {
                                    "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                    "ItemID": "96770195-4aa7-3ed9-a251-7ca4fb8bd0d9",
                                    "Quantity": 2
                                }
                            ]
                        },
                        "DiscountPercent": 1,
                        "DiscountedCost": {
                            "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 0
                        }
                    },
                    {
                        "BundleItemOfferID": "76ca86c6-4fdf-9799-f091-9d873c61b87e",
                        "Offer": {
                            "OfferID": "76ca86c6-4fdf-9799-f091-9d873c61b87e",
                            "IsDirectPurchase": true,
                            "StartDate": "0001-01-01T00:00:00Z",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 575
                            },
                            "Rewards": [
                                {
                                    "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                    "ItemID": "76ca86c6-4fdf-9799-f091-9d873c61b87e",
                                    "Quantity": 1
                                }
                            ]
                        },
                        "DiscountPercent": 1,
                        "DiscountedCost": {
                            "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 0
                        }
                    },
                    {
                        "BundleItemOfferID": "7e4984e0-4ec8-5dd8-acd7-2cbc960116a9",
                        "Offer": {
                            "OfferID": "7e4984e0-4ec8-5dd8-acd7-2cbc960116a9",
                            "IsDirectPurchase": true,
                            "StartDate": "0001-01-01T00:00:00Z",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                            },
                            "Rewards": [
                                {
                                    "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                    "ItemID": "7e4984e0-4ec8-5dd8-acd7-2cbc960116a9",
                                    "Quantity": 1
                                }
                            ]
                        },
                        "DiscountPercent": 1,
                        "DiscountedCost": {
                            "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 0
                        }
                    }
                ],
                "TotalBaseCost": {
                    "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 10075
                },
                "TotalDiscountedCost": {
                    "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 6700
                },
                "TotalDiscountPercent": 0.335,
                "DurationRemainingInSeconds": 643943,
                "WholesaleOnly": false
            }
        ],
        "BundleRemainingDurationInSeconds": 643943
    },
    "SkinsPanelLayout": {
        "SingleItemOffers": [
            "e96f3e84-471a-b20f-a3c8-39b3a607c9c8",
            "94456e3a-459f-4447-cc0d-7e9b5d01b81e",
            "604fa485-43ba-0fcf-4bad-f9a4e3b6c652",
            "a6fe7710-4edc-5e23-223d-aeaef3d17866"
        ],
        "SingleItemStoreOffers": [
            {
                "OfferID": "e96f3e84-471a-b20f-a3c8-39b3a607c9c8",
                "IsDirectPurchase": true,
                "StartDate": "2024-07-24T10:07:36.626658195Z",
                "Cost": {
                    "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                },
                "Rewards": [
                    {
                        "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                        "ItemID": "e96f3e84-471a-b20f-a3c8-39b3a607c9c8",
                        "Quantity": 1
                    }
                ]
            },
            {
                "OfferID": "94456e3a-459f-4447-cc0d-7e9b5d01b81e",
                "IsDirectPurchase": true,
                "StartDate": "2024-07-24T10:07:36.626641283Z",
                "Cost": {
                    "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1775
                },
                "Rewards": [
                    {
                        "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                        "ItemID": "94456e3a-459f-4447-cc0d-7e9b5d01b81e",
                        "Quantity": 1
                    }
                ]
            },
            {
                "OfferID": "604fa485-43ba-0fcf-4bad-f9a4e3b6c652",
                "IsDirectPurchase": true,
                "StartDate": "2024-07-24T10:07:36.626657171Z",
                "Cost": {
                    "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1775
                },
                "Rewards": [
                    {
                        "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                        "ItemID": "604fa485-43ba-0fcf-4bad-f9a4e3b6c652",
                        "Quantity": 1
                    }
                ]
            },
            {
                "OfferID": "a6fe7710-4edc-5e23-223d-aeaef3d17866",
                "IsDirectPurchase": true,
                "StartDate": "2024-07-24T10:07:36.626627196Z",
                "Cost": {
                    "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1775
                },
                "Rewards": [
                    {
                        "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                        "ItemID": "a6fe7710-4edc-5e23-223d-aeaef3d17866",
                        "Quantity": 1
                    }
                ]
            }
        ],
        "SingleItemOffersRemainingDurationInSeconds": 49943
    },
    "UpgradeCurrencyStore": {
        "UpgradeCurrencyOffers": [
            {
                "OfferID": "f9cfa034-c7e1-4995-904c-1a296e7b1760",
                "StorefrontItemID": "187c8a5e-47de-f4ca-b02b-7697611cff5b",
                "Offer": {
                    "OfferID": "f9cfa034-c7e1-4995-904c-1a296e7b1760",
                    "IsDirectPurchase": true,
                    "StartDate": "2020-01-01T00:00:00Z",
                    "Cost": {
                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1600
                    },
                    "Rewards": [
                        {
                            "ItemTypeID": "ea6fcd2e-8373-4137-b1c0-b458947aa86d",
                            "ItemID": "e59aa87c-4cbf-517a-5983-6e81511be9b7",
                            "Quantity": 20
                        }
                    ]
                },
                "DiscountedPercent": 0.2
            },
            {
                "OfferID": "da0edbc8-31fb-468e-95a8-27ac25cd76ed",
                "StorefrontItemID": "9483b151-4f66-298b-fb32-b58224324e67",
                "Offer": {
                    "OfferID": "da0edbc8-31fb-468e-95a8-27ac25cd76ed",
                    "IsDirectPurchase": true,
                    "StartDate": "2020-01-01T00:00:00Z",
                    "Cost": {
                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2800
                    },
                    "Rewards": [
                        {
                            "ItemTypeID": "ea6fcd2e-8373-4137-b1c0-b458947aa86d",
                            "ItemID": "e59aa87c-4cbf-517a-5983-6e81511be9b7",
                            "Quantity": 40
                        }
                    ]
                },
                "DiscountedPercent": 0.3
            },
            {
                "OfferID": "a61e8526-bb1f-4135-b7df-95e67b416efe",
                "StorefrontItemID": "f86f9999-452b-3d4c-788a-cda895ddf923",
                "Offer": {
                    "OfferID": "a61e8526-bb1f-4135-b7df-95e67b416efe",
                    "IsDirectPurchase": true,
                    "StartDate": "2020-01-01T00:00:00Z",
                    "Cost": {
                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 4800
                    },
                    "Rewards": [
                        {
                            "ItemTypeID": "ea6fcd2e-8373-4137-b1c0-b458947aa86d",
                            "ItemID": "e59aa87c-4cbf-517a-5983-6e81511be9b7",
                            "Quantity": 80
                        }
                    ]
                },
                "DiscountedPercent": 0.4
            }
        ]
    },
    "AccessoryStore": {
        "AccessoryStoreOffers": [
            {
                "Offer": {
                    "OfferID": "f6c1112e-73c1-5e21-a8c3-a5e446f87fd9",
                    "IsDirectPurchase": true,
                    "StartDate": "2012-01-01T00:00:00Z",
                    "Cost": {
                        "85ca954a-41f2-ce94-9b45-8ca3dd39a00d": 4000
                    },
                    "Rewards": [
                        {
                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                            "ItemID": "9d7df4cc-4311-42da-1220-2c9f3bc8c2cc",
                            "Quantity": 1
                        }
                    ]
                },
                "ContractID": "ed0b331b-45f2-115c-c958-3c9683ff5b5e"
            },
            {
                "Offer": {
                    "OfferID": "6878561e-c99f-5074-942b-e466f2f5a42d",
                    "IsDirectPurchase": true,
                    "StartDate": "2012-01-01T00:00:00Z",
                    "Cost": {
                        "85ca954a-41f2-ce94-9b45-8ca3dd39a00d": 4000
                    },
                    "Rewards": [
                        {
                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                            "ItemID": "f0110ce4-4455-0e00-0b9c-7c81f4fbe159",
                            "Quantity": 1
                        }
                    ]
                },
                "ContractID": "fa6cc82f-4248-a92d-da2e-c180f51d13c5"
            },
            {
                "Offer": {
                    "OfferID": "692ace8f-7fad-537d-a51a-2854cc586676",
                    "IsDirectPurchase": true,
                    "StartDate": "2012-01-01T00:00:00Z",
                    "Cost": {
                        "85ca954a-41f2-ce94-9b45-8ca3dd39a00d": 6500
                    },
                    "Rewards": [
                        {
                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                            "ItemID": "4d3d6d63-45a6-7ecb-81de-5098329612c5",
                            "Quantity": 1
                        }
                    ]
                },
                "ContractID": "d1dfd006-4efa-7ef2-a46f-3eb497fc26df"
            },
            {
                "Offer": {
                    "OfferID": "bcaead36-6942-5398-911c-f80a74417db3",
                    "IsDirectPurchase": true,
                    "StartDate": "2012-01-01T00:00:00Z",
                    "Cost": {
                        "85ca954a-41f2-ce94-9b45-8ca3dd39a00d": 6000
                    },
                    "Rewards": [
                        {
                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                            "ItemID": "63ce8a2b-40c9-f8c7-e15d-77b6e310dfbe",
                            "Quantity": 1
                        }
                    ]
                },
                "ContractID": "60f2e13a-4834-0a18-5f7b-02b1a97b7adb"
            }
        ],
        "AccessoryStoreRemainingDurationInSeconds": 481943,
        "StorefrontID": "6ca0fd17-98c4-5682-8ae6-d15052f8631d"
    },
    "PluginStores": [
        {
            "PluginID": "ceb42151-ad87-4b46-8dc1-ac26166b9afb",
            "PluginOffers": {
                "StoreOffers": [
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "32bded83-4a99-3efb-c549-8ba97d5db99a",
                            "OfferID": "9fa40f80-5d8a-4141-845a-2104ae58df7e",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "96bd34e5-4ee4-701c-fb88-a38fa768e81b",
                                    "OfferID": "96bd34e5-4ee4-701c-fb88-a38fa768e81b",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "96bd34e5-4ee4-701c-fb88-a38fa768e81b",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "1da5c322-47fa-f7e2-00da-96bed9c2a917",
                                    "OfferID": "1da5c322-47fa-f7e2-00da-96bed9c2a917",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "1da5c322-47fa-f7e2-00da-96bed9c2a917",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "89605a51-4778-0f1d-067a-22acea6d19ff",
                                    "OfferID": "89605a51-4778-0f1d-067a-22acea6d19ff",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "89605a51-4778-0f1d-067a-22acea6d19ff",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "632061ef-441f-a54c-6b45-ab9f7945f0b5",
                                    "OfferID": "632061ef-441f-a54c-6b45-ab9f7945f0b5",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "632061ef-441f-a54c-6b45-ab9f7945f0b5",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "28f40987-4c73-669d-d990-bbbe84af5521",
                            "OfferID": "fc4b5b0b-d870-4177-8777-a141912b0377",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2650
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1880
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "f2863c0f-4b80-cc7c-c888-108b222863a6",
                                    "OfferID": "f2863c0f-4b80-cc7c-c888-108b222863a6",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "f2863c0f-4b80-cc7c-c888-108b222863a6",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "8a45ab10-4fd8-78cf-7d8b-8b9d5b589d79",
                                    "OfferID": "8a45ab10-4fd8-78cf-7d8b-8b9d5b589d79",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 357
                                    },
                                    "DiscountedPercentage": 25,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "8a45ab10-4fd8-78cf-7d8b-8b9d5b589d79",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "344bf553-4168-397c-9d7d-a4bfa5aeb68a",
                            "OfferID": "b34a84e2-0c7c-42e5-8fbc-1d1094caefc1",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "eb030ddc-4c6a-9766-ed1b-e29385c529dc",
                                    "OfferID": "eb030ddc-4c6a-9766-ed1b-e29385c529dc",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "eb030ddc-4c6a-9766-ed1b-e29385c529dc",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "433c58e6-4f58-ee49-b5a7-02a2d131bf18",
                                    "OfferID": "433c58e6-4f58-ee49-b5a7-02a2d131bf18",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "433c58e6-4f58-ee49-b5a7-02a2d131bf18",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "b9a4a3e7-4f0f-d0bc-5576-97a8eb6dc437",
                                    "OfferID": "b9a4a3e7-4f0f-d0bc-5576-97a8eb6dc437",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "b9a4a3e7-4f0f-d0bc-5576-97a8eb6dc437",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "a3b6d008-4d6a-ab8d-7bd7-9582d52e8f77",
                                    "OfferID": "a3b6d008-4d6a-ab8d-7bd7-9582d52e8f77",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "a3b6d008-4d6a-ab8d-7bd7-9582d52e8f77",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "ada117e5-4bae-c704-de94-c5a3246c3664",
                            "OfferID": "46b0157c-97bd-42c4-8d28-d2d44b9aea98",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "a18c0c4a-45a5-723d-8e01-91854d1fcb65",
                                    "OfferID": "a18c0c4a-45a5-723d-8e01-91854d1fcb65",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "a18c0c4a-45a5-723d-8e01-91854d1fcb65",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "0f5f1946-42e3-da4b-fd1f-ce830c8730c6",
                                    "OfferID": "0f5f1946-42e3-da4b-fd1f-ce830c8730c6",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "0f5f1946-42e3-da4b-fd1f-ce830c8730c6",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "309a2f16-4798-8ae5-83b9-91809e525efc",
                                    "OfferID": "309a2f16-4798-8ae5-83b9-91809e525efc",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "309a2f16-4798-8ae5-83b9-91809e525efc",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "194abf52-4f24-1244-1270-e687a34cb54e",
                                    "OfferID": "194abf52-4f24-1244-1270-e687a34cb54e",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "194abf52-4f24-1244-1270-e687a34cb54e",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "440c7d5d-4581-8a56-4966-d98385dd50f0",
                            "OfferID": "172bbefe-99e0-44d2-b645-b8836ec894d7",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2650
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1880
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "a9df1457-46bf-0431-007d-c2a6dc98e706",
                                    "OfferID": "a9df1457-46bf-0431-007d-c2a6dc98e706",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "a9df1457-46bf-0431-007d-c2a6dc98e706",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "8ed0bb13-4859-1c8d-0210-4f8ca88b10c6",
                                    "OfferID": "8ed0bb13-4859-1c8d-0210-4f8ca88b10c6",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 357
                                    },
                                    "DiscountedPercentage": 25,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "8ed0bb13-4859-1c8d-0210-4f8ca88b10c6",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "1a9b1b7b-4123-a1d1-3352-b9be6458dede",
                            "OfferID": "c9f2347c-84de-4ef7-85ea-1a08a0a0f84a",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "48e72ddc-434a-4172-38b3-f98db1e0d5f2",
                                    "OfferID": "48e72ddc-434a-4172-38b3-f98db1e0d5f2",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "48e72ddc-434a-4172-38b3-f98db1e0d5f2",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "72ebd023-47be-7aa0-efef-0aa9b029dbe0",
                                    "OfferID": "72ebd023-47be-7aa0-efef-0aa9b029dbe0",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "72ebd023-47be-7aa0-efef-0aa9b029dbe0",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "354f26eb-4ce0-462c-8eb6-4f9bd7c86131",
                                    "OfferID": "354f26eb-4ce0-462c-8eb6-4f9bd7c86131",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "354f26eb-4ce0-462c-8eb6-4f9bd7c86131",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "5a14332a-4801-2205-e050-c8b162ac243e",
                                    "OfferID": "5a14332a-4801-2205-e050-c8b162ac243e",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "5a14332a-4801-2205-e050-c8b162ac243e",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "480b426d-4b04-76f2-8465-57897bd3e244",
                            "OfferID": "de8e09c1-9cf9-4a76-8b5d-1f7152ad53e0",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "aaa3a9af-4d9b-f711-fd7d-2ea51b80f303",
                                    "OfferID": "aaa3a9af-4d9b-f711-fd7d-2ea51b80f303",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "aaa3a9af-4d9b-f711-fd7d-2ea51b80f303",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "9952d019-4b8b-6bb6-302c-0086b02a7471",
                                    "OfferID": "9952d019-4b8b-6bb6-302c-0086b02a7471",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "9952d019-4b8b-6bb6-302c-0086b02a7471",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "319352c9-4ded-ad5a-2d7c-a38ceeb272be",
                                    "OfferID": "319352c9-4ded-ad5a-2d7c-a38ceeb272be",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "319352c9-4ded-ad5a-2d7c-a38ceeb272be",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "63e191ef-4968-1b67-ca69-1e80a5ca1e9e",
                                    "OfferID": "63e191ef-4968-1b67-ca69-1e80a5ca1e9e",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "63e191ef-4968-1b67-ca69-1e80a5ca1e9e",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "d53bb083-4dee-e698-60fa-acbe1d71306e",
                            "OfferID": "5e1dfa6b-0eb6-4dfb-a0bd-310cff73d8fa",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2650
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1880
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "d4b5084d-4b05-f607-6e0b-78abd16d84e3",
                                    "OfferID": "d4b5084d-4b05-f607-6e0b-78abd16d84e3",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "d4b5084d-4b05-f607-6e0b-78abd16d84e3",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "7c65b9ba-44d7-7077-20c0-cabb0bba6723",
                                    "OfferID": "7c65b9ba-44d7-7077-20c0-cabb0bba6723",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 357
                                    },
                                    "DiscountedPercentage": 25,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "7c65b9ba-44d7-7077-20c0-cabb0bba6723",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "7a1a52d2-4e27-5d7e-b858-a6bd185342c2",
                            "OfferID": "d65ae432-4e22-4af5-b44e-158ae4cf7943",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "a495652c-41a8-b15d-2be3-409f3618f6c0",
                                    "OfferID": "a495652c-41a8-b15d-2be3-409f3618f6c0",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "a495652c-41a8-b15d-2be3-409f3618f6c0",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "407fef41-462d-b034-d294-4da2028218ed",
                                    "OfferID": "407fef41-462d-b034-d294-4da2028218ed",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "407fef41-462d-b034-d294-4da2028218ed",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "c284a536-4a93-a3ec-1bf8-339e502882ab",
                                    "OfferID": "c284a536-4a93-a3ec-1bf8-339e502882ab",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "c284a536-4a93-a3ec-1bf8-339e502882ab",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "923cf367-4da8-76ea-b674-d58c99ef40cb",
                                    "OfferID": "923cf367-4da8-76ea-b674-d58c99ef40cb",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "923cf367-4da8-76ea-b674-d58c99ef40cb",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "de1d35f2-4711-ecb6-f4f0-5192e74ae9dc",
                            "OfferID": "9d06dec2-25f5-4c01-9f83-f3e4edcb0fe5",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2650
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1880
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "62f4cd94-4a8f-8d08-9255-d59776694b36",
                                    "OfferID": "62f4cd94-4a8f-8d08-9255-d59776694b36",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "62f4cd94-4a8f-8d08-9255-d59776694b36",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "0622fbe6-437d-579c-84cc-08973bbef5ae",
                                    "OfferID": "0622fbe6-437d-579c-84cc-08973bbef5ae",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 357
                                    },
                                    "DiscountedPercentage": 25,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "0622fbe6-437d-579c-84cc-08973bbef5ae",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "b71158fe-483d-24d9-ef84-f583342aec7e",
                            "OfferID": "e8a6a7c7-8f53-4f19-8a4a-03f35a68d17a",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "f7ff0083-47b0-450d-4385-5280d35290f2",
                                    "OfferID": "f7ff0083-47b0-450d-4385-5280d35290f2",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "f7ff0083-47b0-450d-4385-5280d35290f2",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "66a26b45-46a3-0de1-e12c-79afbc90c471",
                                    "OfferID": "66a26b45-46a3-0de1-e12c-79afbc90c471",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "66a26b45-46a3-0de1-e12c-79afbc90c471",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "19fe2aae-4cdb-44fc-164d-15a4b4f2d317",
                                    "OfferID": "19fe2aae-4cdb-44fc-164d-15a4b4f2d317",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "19fe2aae-4cdb-44fc-164d-15a4b4f2d317",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "b87ae9a3-42ab-9dbf-9e8e-b9aa5ddf13e2",
                                    "OfferID": "b87ae9a3-42ab-9dbf-9e8e-b9aa5ddf13e2",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "b87ae9a3-42ab-9dbf-9e8e-b9aa5ddf13e2",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "a4e0b3bb-4c8a-06f2-c37c-2cbd5e0e68c8",
                            "OfferID": "f9a0a3c6-83cc-4e3c-b6dc-24b6f21b0d50",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "d9afd29a-4f08-ad0d-f13f-549e4dc871f9",
                                    "OfferID": "d9afd29a-4f08-ad0d-f13f-549e4dc871f9",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "d9afd29a-4f08-ad0d-f13f-549e4dc871f9",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "7b24aa46-4894-48cb-865d-099a6eb66487",
                                    "OfferID": "7b24aa46-4894-48cb-865d-099a6eb66487",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "7b24aa46-4894-48cb-865d-099a6eb66487",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "246d503f-42cd-a42e-1c03-c8972fcfc40e",
                                    "OfferID": "246d503f-42cd-a42e-1c03-c8972fcfc40e",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "246d503f-42cd-a42e-1c03-c8972fcfc40e",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "27fc4c2f-4af1-5b53-571f-0d9ff5ad6ff0",
                                    "OfferID": "27fc4c2f-4af1-5b53-571f-0d9ff5ad6ff0",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "27fc4c2f-4af1-5b53-571f-0d9ff5ad6ff0",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "72c9f9d0-4e44-e78d-7a9d-709f204fdc42",
                            "OfferID": "74545e96-5525-413c-90cb-f85a52c1d9d7",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2650
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1880
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "b00b1cb6-48f8-26f7-85cc-0c95bc57f1ac",
                                    "OfferID": "b00b1cb6-48f8-26f7-85cc-0c95bc57f1ac",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "b00b1cb6-48f8-26f7-85cc-0c95bc57f1ac",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "9843bd71-44d6-a4c2-6e54-32b3fbdd4fc6",
                                    "OfferID": "9843bd71-44d6-a4c2-6e54-32b3fbdd4fc6",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 357
                                    },
                                    "DiscountedPercentage": 25,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "9843bd71-44d6-a4c2-6e54-32b3fbdd4fc6",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "8b55c656-4917-b4fb-14da-9cbd52e5a4ac",
                            "OfferID": "f3b2e545-cf06-492b-a4a9-afee7018c868",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "99ae20db-4e92-6afa-f1ef-3184127e88dc",
                                    "OfferID": "99ae20db-4e92-6afa-f1ef-3184127e88dc",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "99ae20db-4e92-6afa-f1ef-3184127e88dc",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "e73eeb7c-483e-4f4d-90f9-e19802f2f94c",
                                    "OfferID": "e73eeb7c-483e-4f4d-90f9-e19802f2f94c",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "e73eeb7c-483e-4f4d-90f9-e19802f2f94c",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "9bdef801-49f4-51c5-c7b8-a1b14007fcb8",
                                    "OfferID": "9bdef801-49f4-51c5-c7b8-a1b14007fcb8",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "9bdef801-49f4-51c5-c7b8-a1b14007fcb8",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "8d4cef22-4d88-80f9-7c97-2dad22d646e0",
                                    "OfferID": "8d4cef22-4d88-80f9-7c97-2dad22d646e0",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "8d4cef22-4d88-80f9-7c97-2dad22d646e0",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "63a7bd33-4fb7-d17d-1564-138e82c10b21",
                            "OfferID": "fb37a809-c77e-4311-aae8-6a587e12b0f0",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "4c615178-4b55-e52e-9e76-9c8b78a33e98",
                                    "OfferID": "4c615178-4b55-e52e-9e76-9c8b78a33e98",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "4c615178-4b55-e52e-9e76-9c8b78a33e98",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "d4abc260-4b80-e334-cff0-76a631375666",
                                    "OfferID": "d4abc260-4b80-e334-cff0-76a631375666",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "d4abc260-4b80-e334-cff0-76a631375666",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "29d6aced-4f66-e000-15eb-71b1906a113a",
                                    "OfferID": "29d6aced-4f66-e000-15eb-71b1906a113a",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "29d6aced-4f66-e000-15eb-71b1906a113a",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "7802b33c-4202-dd95-abbc-05b94571c418",
                                    "OfferID": "7802b33c-4202-dd95-abbc-05b94571c418",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "7802b33c-4202-dd95-abbc-05b94571c418",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "816f1b9f-431f-c029-62cb-ddb8932cf8be",
                            "OfferID": "f2de8ab0-747e-467e-a412-07ab7a998afd",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "a08831cb-467a-aafd-3c5d-f2809578a9d4",
                                    "OfferID": "a08831cb-467a-aafd-3c5d-f2809578a9d4",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "a08831cb-467a-aafd-3c5d-f2809578a9d4",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "b4556546-413e-c4d2-3660-edaa7575d376",
                                    "OfferID": "b4556546-413e-c4d2-3660-edaa7575d376",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "b4556546-413e-c4d2-3660-edaa7575d376",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "24335ffe-4eea-7e77-0e17-959a1d132d31",
                                    "OfferID": "24335ffe-4eea-7e77-0e17-959a1d132d31",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "24335ffe-4eea-7e77-0e17-959a1d132d31",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "7ec14c69-43c8-e4b3-8690-2db516be6ebe",
                                    "OfferID": "7ec14c69-43c8-e4b3-8690-2db516be6ebe",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "7ec14c69-43c8-e4b3-8690-2db516be6ebe",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "6c4ceac0-4d4b-3f4f-f9ad-df9b353c59cd",
                            "OfferID": "a12f0c34-a567-4957-92e5-9edc5a580e52",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "674ca7c1-448c-2d7c-e968-8e90ab8b75e1",
                                    "OfferID": "674ca7c1-448c-2d7c-e968-8e90ab8b75e1",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "674ca7c1-448c-2d7c-e968-8e90ab8b75e1",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "b3d49cc0-44f8-c5d1-31f5-94ae74af7d26",
                                    "OfferID": "b3d49cc0-44f8-c5d1-31f5-94ae74af7d26",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "b3d49cc0-44f8-c5d1-31f5-94ae74af7d26",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "011debcd-4a50-9235-8089-24ac730c58cd",
                                    "OfferID": "011debcd-4a50-9235-8089-24ac730c58cd",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "011debcd-4a50-9235-8089-24ac730c58cd",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "adc21c11-4c90-5e4f-e996-35bac2796830",
                                    "OfferID": "adc21c11-4c90-5e4f-e996-35bac2796830",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "adc21c11-4c90-5e4f-e996-35bac2796830",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "3ad6d97b-4ed6-16e3-62e2-4eae0b31439c",
                            "OfferID": "a5d30a41-65a2-40d9-b2de-0c5bb9212f10",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "d93f227b-49a9-cc1a-f068-9fa6e7b9313c",
                                    "OfferID": "d93f227b-49a9-cc1a-f068-9fa6e7b9313c",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "d93f227b-49a9-cc1a-f068-9fa6e7b9313c",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "fe3e55a4-4964-6a04-3911-f298cae09e33",
                                    "OfferID": "fe3e55a4-4964-6a04-3911-f298cae09e33",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "fe3e55a4-4964-6a04-3911-f298cae09e33",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "bf094046-4177-8ff2-c2ca-e5aa9b52df0e",
                                    "OfferID": "bf094046-4177-8ff2-c2ca-e5aa9b52df0e",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "bf094046-4177-8ff2-c2ca-e5aa9b52df0e",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "dd6530b4-4869-9a1d-b788-0bacaa9e8027",
                                    "OfferID": "dd6530b4-4869-9a1d-b788-0bacaa9e8027",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "dd6530b4-4869-9a1d-b788-0bacaa9e8027",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "d906185e-448c-168b-7392-bbb997f22d6f",
                            "OfferID": "a89f6dd0-5f50-409a-a594-bc5b28df2457",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "c9918687-49d7-1cc3-4f7c-12a0f38296d4",
                                    "OfferID": "c9918687-49d7-1cc3-4f7c-12a0f38296d4",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "c9918687-49d7-1cc3-4f7c-12a0f38296d4",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "ba25c0b8-41f0-a361-3f4f-d284b1e1d585",
                                    "OfferID": "ba25c0b8-41f0-a361-3f4f-d284b1e1d585",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "ba25c0b8-41f0-a361-3f4f-d284b1e1d585",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "7905e3a2-4da2-df1b-760d-b68754a8d1db",
                                    "OfferID": "7905e3a2-4da2-df1b-760d-b68754a8d1db",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "7905e3a2-4da2-df1b-760d-b68754a8d1db",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "e7eedc68-49c6-3821-541a-7dbf3710eeb8",
                                    "OfferID": "e7eedc68-49c6-3821-541a-7dbf3710eeb8",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "e7eedc68-49c6-3821-541a-7dbf3710eeb8",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "4289b941-4bca-3f59-d5c1-368ae30c2b4d",
                            "OfferID": "392d196e-a0dd-450f-8e4f-d4e456be72ee",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2650
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1880
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "a394be65-42a5-3e28-e162-a2b9667b6db7",
                                    "OfferID": "a394be65-42a5-3e28-e162-a2b9667b6db7",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "a394be65-42a5-3e28-e162-a2b9667b6db7",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "9f9ae2c1-4336-97f5-bbd3-ca98a1946a7a",
                                    "OfferID": "9f9ae2c1-4336-97f5-bbd3-ca98a1946a7a",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 357
                                    },
                                    "DiscountedPercentage": 25,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "9f9ae2c1-4336-97f5-bbd3-ca98a1946a7a",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "a2c8eeb0-4111-c305-97e4-c196a6dc90fe",
                            "OfferID": "b0ae45e0-9d31-4a21-86b8-a682b916e5a3",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "ec94d7fc-4c9f-0943-395a-d9905c66a24e",
                                    "OfferID": "ec94d7fc-4c9f-0943-395a-d9905c66a24e",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "ec94d7fc-4c9f-0943-395a-d9905c66a24e",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "e6598cb0-4443-eb11-ab6e-6186f9ecd56a",
                                    "OfferID": "e6598cb0-4443-eb11-ab6e-6186f9ecd56a",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "e6598cb0-4443-eb11-ab6e-6186f9ecd56a",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "12fa17ef-4c6d-e1b6-3131-b1a7b7f0c376",
                                    "OfferID": "12fa17ef-4c6d-e1b6-3131-b1a7b7f0c376",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "12fa17ef-4c6d-e1b6-3131-b1a7b7f0c376",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "1f29742c-429b-a99e-a0ab-cc950f46bfc0",
                                    "OfferID": "1f29742c-429b-a99e-a0ab-cc950f46bfc0",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "1f29742c-429b-a99e-a0ab-cc950f46bfc0",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "53ab69ca-4106-222f-1108-2c8b0e37fc8c",
                            "OfferID": "c0d8a1b2-5430-4c4b-9a48-645d1ba41630",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "6164ba11-4f6e-460f-f4ae-788547c978e5",
                                    "OfferID": "6164ba11-4f6e-460f-f4ae-788547c978e5",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "6164ba11-4f6e-460f-f4ae-788547c978e5",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "75e003b0-477b-bca1-0a01-d28c33a2c217",
                                    "OfferID": "75e003b0-477b-bca1-0a01-d28c33a2c217",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "75e003b0-477b-bca1-0a01-d28c33a2c217",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "6c0c5803-4ad4-e32c-c354-038eafd58755",
                                    "OfferID": "6c0c5803-4ad4-e32c-c354-038eafd58755",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "6c0c5803-4ad4-e32c-c354-038eafd58755",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "5613d238-4ef2-4e9f-fb87-6dadb4b89a60",
                                    "OfferID": "5613d238-4ef2-4e9f-fb87-6dadb4b89a60",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "5613d238-4ef2-4e9f-fb87-6dadb4b89a60",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "9374455b-42eb-279a-ac16-78ab89a4a259",
                            "OfferID": "d5a2e192-36a2-43b6-8a9a-9fe17c79a630",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "77f94390-43b1-cceb-b8b5-549cea343434",
                                    "OfferID": "77f94390-43b1-cceb-b8b5-549cea343434",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "77f94390-43b1-cceb-b8b5-549cea343434",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "4adfae38-415f-5f18-b439-8aaa7ef93f39",
                                    "OfferID": "4adfae38-415f-5f18-b439-8aaa7ef93f39",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "4adfae38-415f-5f18-b439-8aaa7ef93f39",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "adb00c74-4505-4e29-e359-74adfc0ead87",
                                    "OfferID": "adb00c74-4505-4e29-e359-74adfc0ead87",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "adb00c74-4505-4e29-e359-74adfc0ead87",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "e82fae5e-4be4-bbb1-37c4-f88b2470452d",
                                    "OfferID": "e82fae5e-4be4-bbb1-37c4-f88b2470452d",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "e82fae5e-4be4-bbb1-37c4-f88b2470452d",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "8fd1fe02-4337-40d6-ce06-51b047e0db1e",
                            "OfferID": "e6c8e093-8b60-49b4-baad-0a1c5b763e34",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "3b182a0c-4d12-d3a3-c1e7-36b8067dc351",
                                    "OfferID": "3b182a0c-4d12-d3a3-c1e7-36b8067dc351",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "3b182a0c-4d12-d3a3-c1e7-36b8067dc351",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "92fced4c-4b94-88dc-8fb0-ab93e7b1ba1c",
                                    "OfferID": "92fced4c-4b94-88dc-8fb0-ab93e7b1ba1c",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "92fced4c-4b94-88dc-8fb0-ab93e7b1ba1c",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "c4c56dea-4e64-2e94-e360-63ac2a726e0f",
                                    "OfferID": "c4c56dea-4e64-2e94-e360-63ac2a726e0f",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "c4c56dea-4e64-2e94-e360-63ac2a726e0f",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "82539f42-4355-c7a1-205c-8990bd93d3ac",
                                    "OfferID": "82539f42-4355-c7a1-205c-8990bd93d3ac",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "82539f42-4355-c7a1-205c-8990bd93d3ac",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "10363d3f-4fed-b351-b8c8-7a8b5faf4e59",
                            "OfferID": "e9a17a1d-3f4b-4fbb-9a19-45d773b496c0",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "c7625320-4c19-f977-71fe-1a81080b1154",
                                    "OfferID": "c7625320-4c19-f977-71fe-1a81080b1154",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "c7625320-4c19-f977-71fe-1a81080b1154",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "282a66b5-41a9-e5bf-7573-baa79364a550",
                                    "OfferID": "282a66b5-41a9-e5bf-7573-baa79364a550",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "282a66b5-41a9-e5bf-7573-baa79364a550",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "d15f7bf8-4eaa-1e64-3b7b-1ea507711dde",
                                    "OfferID": "d15f7bf8-4eaa-1e64-3b7b-1ea507711dde",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "d15f7bf8-4eaa-1e64-3b7b-1ea507711dde",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "51115382-48c7-8f54-599d-ca913ec7fb9f",
                                    "OfferID": "51115382-48c7-8f54-599d-ca913ec7fb9f",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "51115382-48c7-8f54-599d-ca913ec7fb9f",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "c110bd5d-4520-2583-2481-b9b021a4579b",
                            "OfferID": "361ba073-0668-4b71-bca2-9d65c2a0c010",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "4d350010-4d39-6639-d2a0-f493183904a9",
                                    "OfferID": "4d350010-4d39-6639-d2a0-f493183904a9",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "4d350010-4d39-6639-d2a0-f493183904a9",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "52dc4ffe-47a8-31a5-ba63-33824f655c23",
                                    "OfferID": "52dc4ffe-47a8-31a5-ba63-33824f655c23",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "52dc4ffe-47a8-31a5-ba63-33824f655c23",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "1f413062-4824-817f-d0c1-839a41f72108",
                                    "OfferID": "1f413062-4824-817f-d0c1-839a41f72108",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "1f413062-4824-817f-d0c1-839a41f72108",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "b1d38f57-4ebd-654e-d560-aab5106e1165",
                                    "OfferID": "b1d38f57-4ebd-654e-d560-aab5106e1165",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "b1d38f57-4ebd-654e-d560-aab5106e1165",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "48877ea3-4eca-8841-6535-4db618d06af7",
                            "OfferID": "f1b2c3d4-5678-90ab-cdef-1234567890ab",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "d062d82e-4669-5749-2f46-e09c9156f015",
                                    "OfferID": "d062d82e-4669-5749-2f46-e09c9156f015",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "d062d82e-4669-5749-2f46-e09c9156f015",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "cf4d3fd5-4a05-3add-cadc-d781b4fae059",
                                    "OfferID": "cf4d3fd5-4a05-3add-cadc-d781b4fae059",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "cf4d3fd5-4a05-3add-cadc-d781b4fae059",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "c75868b2-4900-f8d0-9c9f-ca880d8c8979",
                                    "OfferID": "c75868b2-4900-f8d0-9c9f-ca880d8c8979",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "c75868b2-4900-f8d0-9c9f-ca880d8c8979",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "4090836c-4016-f728-2e8f-2c8d14548dcf",
                                    "OfferID": "4090836c-4016-f728-2e8f-2c8d14548dcf",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "4090836c-4016-f728-2e8f-2c8d14548dcf",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "117eb86a-4535-03a4-0164-96800efaba8a",
                            "OfferID": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "1855c39c-4f9d-67a8-a5ec-edae8ee4f743",
                                    "OfferID": "1855c39c-4f9d-67a8-a5ec-edae8ee4f743",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "1855c39c-4f9d-67a8-a5ec-edae8ee4f743",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "732e95bd-4994-3535-db2c-b08e77996745",
                                    "OfferID": "732e95bd-4994-3535-db2c-b08e77996745",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "732e95bd-4994-3535-db2c-b08e77996745",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "0c33e65b-4937-7d17-af76-0cb1b010b161",
                                    "OfferID": "0c33e65b-4937-7d17-af76-0cb1b010b161",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "0c33e65b-4937-7d17-af76-0cb1b010b161",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "4ac07f27-4696-b3ba-7b71-6da5efee5976",
                                    "OfferID": "4ac07f27-4696-b3ba-7b71-6da5efee5976",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "4ac07f27-4696-b3ba-7b71-6da5efee5976",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "99ee9d58-4b3b-0e50-6848-84af61da2768",
                            "OfferID": "0eab2a62-4630-4e91-9662-1ebe6e139605",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2650
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1880
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "35541bf2-4b81-199d-04df-cdbc8d063daf",
                                    "OfferID": "35541bf2-4b81-199d-04df-cdbc8d063daf",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "35541bf2-4b81-199d-04df-cdbc8d063daf",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "4df2fa37-423c-b917-f985-bbbeb51ce646",
                                    "OfferID": "4df2fa37-423c-b917-f985-bbbeb51ce646",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 357
                                    },
                                    "DiscountedPercentage": 25,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "4df2fa37-423c-b917-f985-bbbeb51ce646",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "2fafe248-4890-79cf-bfd4-4691d7d32651",
                            "OfferID": "b2c3d4e5-6789-01bc-def1-2345678901ab",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "a50e26fa-4a84-a186-cb51-a6bb4216e906",
                                    "OfferID": "a50e26fa-4a84-a186-cb51-a6bb4216e906",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "a50e26fa-4a84-a186-cb51-a6bb4216e906",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "1486d953-4ddd-67a3-0d2c-dfb3c7b85a29",
                                    "OfferID": "1486d953-4ddd-67a3-0d2c-dfb3c7b85a29",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "1486d953-4ddd-67a3-0d2c-dfb3c7b85a29",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "2b80254c-497d-462b-67f4-f281389defb5",
                                    "OfferID": "2b80254c-497d-462b-67f4-f281389defb5",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "2b80254c-497d-462b-67f4-f281389defb5",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "0f74cd6f-4c7a-0d57-a33d-38a5c06f2d36",
                                    "OfferID": "0f74cd6f-4c7a-0d57-a33d-38a5c06f2d36",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "0f74cd6f-4c7a-0d57-a33d-38a5c06f2d36",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "12095a0a-4c66-5b4b-f2e4-fe9b08027e6e",
                            "OfferID": "88ee6423-1983-4b89-b6d5-a0b21eea7a66",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "1aa0ea7c-4368-1672-b518-e7bd0fa57fcc",
                                    "OfferID": "1aa0ea7c-4368-1672-b518-e7bd0fa57fcc",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "1aa0ea7c-4368-1672-b518-e7bd0fa57fcc",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "30731b6b-455c-db26-b6e0-adac2029d41b",
                                    "OfferID": "30731b6b-455c-db26-b6e0-adac2029d41b",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "30731b6b-455c-db26-b6e0-adac2029d41b",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "8106e1dc-45ca-8160-75cf-d288a51bd891",
                                    "OfferID": "8106e1dc-45ca-8160-75cf-d288a51bd891",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "8106e1dc-45ca-8160-75cf-d288a51bd891",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "4c4a090a-43ff-2f78-4c11-6ea53bff587d",
                                    "OfferID": "4c4a090a-43ff-2f78-4c11-6ea53bff587d",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "4c4a090a-43ff-2f78-4c11-6ea53bff587d",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "efb4a515-480e-12cd-e0fc-a0a96ef1c2c0",
                            "OfferID": "c12ce2fb-ee33-48fc-add4-e4f311a9054c",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "2ab2293c-4e55-933f-1612-a0a2131384d9",
                                    "OfferID": "2ab2293c-4e55-933f-1612-a0a2131384d9",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "2ab2293c-4e55-933f-1612-a0a2131384d9",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "c1437a9c-4477-7980-948e-baa3ccf9332b",
                                    "OfferID": "c1437a9c-4477-7980-948e-baa3ccf9332b",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "c1437a9c-4477-7980-948e-baa3ccf9332b",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "44829fdf-442a-0cb6-2945-0abe9d5ca4c5",
                                    "OfferID": "44829fdf-442a-0cb6-2945-0abe9d5ca4c5",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "44829fdf-442a-0cb6-2945-0abe9d5ca4c5",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "e90b8d2e-4c39-c265-a46a-d6b15c44018a",
                                    "OfferID": "e90b8d2e-4c39-c265-a46a-d6b15c44018a",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "e90b8d2e-4c39-c265-a46a-d6b15c44018a",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "6e5ebf52-42e9-fc40-ab98-2eac16f74eaf",
                            "OfferID": "bafc6e2d-ccf4-4d31-91c4-cf24b53efe90",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "418564c8-4828-9ee8-e7b3-f58cd4984357",
                                    "OfferID": "418564c8-4828-9ee8-e7b3-f58cd4984357",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "418564c8-4828-9ee8-e7b3-f58cd4984357",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "82a5b9e7-4aaf-e1e9-9318-6385f11c3c5b",
                                    "OfferID": "82a5b9e7-4aaf-e1e9-9318-6385f11c3c5b",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "82a5b9e7-4aaf-e1e9-9318-6385f11c3c5b",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "67d7faa4-4b40-e16a-1c54-0f9b41919849",
                                    "OfferID": "67d7faa4-4b40-e16a-1c54-0f9b41919849",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "67d7faa4-4b40-e16a-1c54-0f9b41919849",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "164dd101-4698-5204-3c4d-b2ab8e221ee1",
                                    "OfferID": "164dd101-4698-5204-3c4d-b2ab8e221ee1",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "164dd101-4698-5204-3c4d-b2ab8e221ee1",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "1cfb033a-4569-0690-a2d0-0a826a5ec363",
                            "OfferID": "818a2ebc-4e65-47ed-87b8-5fdce869f90b",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "ace1d95c-4eeb-da37-b584-2683fd3f40d7",
                                    "OfferID": "ace1d95c-4eeb-da37-b584-2683fd3f40d7",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "ace1d95c-4eeb-da37-b584-2683fd3f40d7",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "816e4eae-4ceb-36d2-7129-dca33d33acbe",
                                    "OfferID": "816e4eae-4ceb-36d2-7129-dca33d33acbe",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "816e4eae-4ceb-36d2-7129-dca33d33acbe",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "1a04ca5e-43a7-d404-239b-968a327f8450",
                                    "OfferID": "1a04ca5e-43a7-d404-239b-968a327f8450",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "1a04ca5e-43a7-d404-239b-968a327f8450",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "3018fc97-4e59-93c5-e217-25a2ee0951e8",
                                    "OfferID": "3018fc97-4e59-93c5-e217-25a2ee0951e8",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "3018fc97-4e59-93c5-e217-25a2ee0951e8",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "7333f7de-48d7-9217-cb99-b6893b16f33f",
                            "OfferID": "933c2b28-4879-4f7c-87ab-822aca8ee8fe",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2650
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1880
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "745b1f55-43eb-2599-a2c5-03b4ddc8363a",
                                    "OfferID": "745b1f55-43eb-2599-a2c5-03b4ddc8363a",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "745b1f55-43eb-2599-a2c5-03b4ddc8363a",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "ba0e7ddd-4cce-8e7d-7e67-3080dc8a7947",
                                    "OfferID": "ba0e7ddd-4cce-8e7d-7e67-3080dc8a7947",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 357
                                    },
                                    "DiscountedPercentage": 25,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "ba0e7ddd-4cce-8e7d-7e67-3080dc8a7947",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "e2a35d90-43c3-1f09-228b-2cb901f6f437",
                            "OfferID": "de66d0cc-f5e3-4c16-aa90-cd41ee398adc",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2650
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1880
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "215ba5b7-429e-bed3-7c97-099fc9a17bf2",
                                    "OfferID": "215ba5b7-429e-bed3-7c97-099fc9a17bf2",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "215ba5b7-429e-bed3-7c97-099fc9a17bf2",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "93cad3e5-45aa-e891-bf81-43af958003a4",
                                    "OfferID": "93cad3e5-45aa-e891-bf81-43af958003a4",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 357
                                    },
                                    "DiscountedPercentage": 25,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "93cad3e5-45aa-e891-bf81-43af958003a4",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "f8f7a18d-4781-5518-82a5-1daabfdec01c",
                            "OfferID": "5c55f4d9-b9df-40c4-8eb4-f0b4a73bdac7",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "229041e1-461d-eca9-b671-4d97110f3f6e",
                                    "OfferID": "229041e1-461d-eca9-b671-4d97110f3f6e",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "229041e1-461d-eca9-b671-4d97110f3f6e",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "ab2e08c2-4535-39a2-deed-eca2908663be",
                                    "OfferID": "ab2e08c2-4535-39a2-deed-eca2908663be",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "ab2e08c2-4535-39a2-deed-eca2908663be",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "40f33c2d-404b-a9ec-6832-a48011c9e804",
                                    "OfferID": "40f33c2d-404b-a9ec-6832-a48011c9e804",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "40f33c2d-404b-a9ec-6832-a48011c9e804",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "e58a80b2-4419-f4d2-e8d1-3889f63b1537",
                                    "OfferID": "e58a80b2-4419-f4d2-e8d1-3889f63b1537",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "e58a80b2-4419-f4d2-e8d1-3889f63b1537",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "a4384542-4f5a-e31f-1e4e-fb875160ce91",
                            "OfferID": "37041804-8abf-4360-bfe7-308649798981",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "77c2d06b-4591-8d3e-896e-a8aec24419e6",
                                    "OfferID": "77c2d06b-4591-8d3e-896e-a8aec24419e6",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "77c2d06b-4591-8d3e-896e-a8aec24419e6",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "640f98e9-4597-1d9e-2b8a-1a8191c0474c",
                                    "OfferID": "640f98e9-4597-1d9e-2b8a-1a8191c0474c",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "640f98e9-4597-1d9e-2b8a-1a8191c0474c",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "b280be83-47e9-fd7e-476c-ecb187285563",
                                    "OfferID": "b280be83-47e9-fd7e-476c-ecb187285563",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "b280be83-47e9-fd7e-476c-ecb187285563",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "96d25963-4242-72de-3b82-409bae2306d3",
                                    "OfferID": "96d25963-4242-72de-3b82-409bae2306d3",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "96d25963-4242-72de-3b82-409bae2306d3",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "a2f641cd-461d-909c-d21e-1db2b4a4c964",
                            "OfferID": "1441784d-2504-4894-ae89-5698b89d0249",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "a41ebba1-4201-543a-21d0-30a9ddf78032",
                                    "OfferID": "a41ebba1-4201-543a-21d0-30a9ddf78032",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "a41ebba1-4201-543a-21d0-30a9ddf78032",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "571aa05b-40da-831a-827c-dd9cada4a502",
                                    "OfferID": "571aa05b-40da-831a-827c-dd9cada4a502",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "571aa05b-40da-831a-827c-dd9cada4a502",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "d027b793-4032-83aa-e61b-04b0effd07fb",
                                    "OfferID": "d027b793-4032-83aa-e61b-04b0effd07fb",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "d027b793-4032-83aa-e61b-04b0effd07fb",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "b31a9e48-4260-72cd-97cd-b58d97fcc220",
                                    "OfferID": "b31a9e48-4260-72cd-97cd-b58d97fcc220",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "b31a9e48-4260-72cd-97cd-b58d97fcc220",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "e92ad258-4121-76da-92b8-7ab3e0446979",
                            "OfferID": "7b9f7251-e4cb-41e0-8ba9-1af43634ecf3",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "02df003f-4d42-6f5b-52ce-1484793cf18c",
                                    "OfferID": "02df003f-4d42-6f5b-52ce-1484793cf18c",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "02df003f-4d42-6f5b-52ce-1484793cf18c",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "d71985c3-4894-c049-9cc1-ddaa87a95f58",
                                    "OfferID": "d71985c3-4894-c049-9cc1-ddaa87a95f58",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "d71985c3-4894-c049-9cc1-ddaa87a95f58",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "b00f1f61-4280-47fb-60fd-8ab9499ad337",
                                    "OfferID": "b00f1f61-4280-47fb-60fd-8ab9499ad337",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "b00f1f61-4280-47fb-60fd-8ab9499ad337",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "265916e2-4d17-dd77-732c-c89a4712eb10",
                                    "OfferID": "265916e2-4d17-dd77-732c-c89a4712eb10",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "265916e2-4d17-dd77-732c-c89a4712eb10",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "a29cc5fa-464d-f7ff-2de1-1da07eae7229",
                            "OfferID": "d601a420-41f3-4b08-ba19-ef3c110cf40d",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2650
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1880
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "c9d83af0-40b6-3edb-eac0-99b35483a17a",
                                    "OfferID": "c9d83af0-40b6-3edb-eac0-99b35483a17a",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "c9d83af0-40b6-3edb-eac0-99b35483a17a",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "faa38f30-4701-7e4d-1b47-a992f5f1a3b6",
                                    "OfferID": "faa38f30-4701-7e4d-1b47-a992f5f1a3b6",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 357
                                    },
                                    "DiscountedPercentage": 25,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "faa38f30-4701-7e4d-1b47-a992f5f1a3b6",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "240f2ec5-49f2-c575-0fbb-4c9c2b07c154",
                            "OfferID": "febd1081-8b3d-4939-96d8-0f18c66b51cd",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "513f0d31-4212-4057-b1cb-b6b0d4d51c8f",
                                    "OfferID": "513f0d31-4212-4057-b1cb-b6b0d4d51c8f",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "513f0d31-4212-4057-b1cb-b6b0d4d51c8f",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "fd170cad-4f99-2398-7002-8f82873a49a2",
                                    "OfferID": "fd170cad-4f99-2398-7002-8f82873a49a2",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "fd170cad-4f99-2398-7002-8f82873a49a2",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "c12d89f5-46f5-9f2e-474b-23ac9017bbd3",
                                    "OfferID": "c12d89f5-46f5-9f2e-474b-23ac9017bbd3",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "c12d89f5-46f5-9f2e-474b-23ac9017bbd3",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "bb66acac-472d-329b-c9e6-94b3b62f2327",
                                    "OfferID": "bb66acac-472d-329b-c9e6-94b3b62f2327",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "bb66acac-472d-329b-c9e6-94b3b62f2327",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "0667837d-42f6-a5e9-409a-6eab70b0d330",
                            "OfferID": "16bf36f5-b532-40d3-a72b-3b2662c85dc8",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2650
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1880
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "06b4ef09-4096-edfe-6240-57ab5e73387e",
                                    "OfferID": "06b4ef09-4096-edfe-6240-57ab5e73387e",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "06b4ef09-4096-edfe-6240-57ab5e73387e",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "dacba5b7-483a-17a8-ba7e-de9b7bd80806",
                                    "OfferID": "dacba5b7-483a-17a8-ba7e-de9b7bd80806",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 357
                                    },
                                    "DiscountedPercentage": 25,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "dacba5b7-483a-17a8-ba7e-de9b7bd80806",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    },
                    {
                        "PurchaseInformation": {
                            "DataAssetID": "285ce9b7-4eff-19af-8370-7fb2e62b05c5",
                            "OfferID": "ec010569-6caf-4b44-9b99-9c8660b53902",
                            "StartDate": "0001-01-01T00:00:00Z",
                            "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                            "Cost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3350
                            },
                            "DiscountedCost": {
                                "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2340
                            },
                            "DiscountedPercentage": 30,
                            "Rewards": [],
                            "AdditionalContext": [],
                            "WholesaleOnly": true
                        },
                        "SubOffers": [
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "eebc735c-4933-2278-bcbe-db83a55828b0",
                                    "OfferID": "eebc735c-4933-2278-bcbe-db83a55828b0",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 2175
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1523
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                                            "ItemID": "eebc735c-4933-2278-bcbe-db83a55828b0",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "589344c5-479c-213f-0162-c2b4f537ab44",
                                    "OfferID": "589344c5-479c-213f-0162-c2b4f537ab44",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 333
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                                            "ItemID": "589344c5-479c-213f-0162-c2b4f537ab44",
                                            "Quantity": 2
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "4b089bca-4757-d727-d4c0-19baa12a206b",
                                    "OfferID": "4b089bca-4757-d727-d4c0-19baa12a206b",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 263
                                    },
                                    "DiscountedPercentage": 30,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                                            "ItemID": "4b089bca-4757-d727-d4c0-19baa12a206b",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            },
                            {
                                "PurchaseInformation": {
                                    "DataAssetID": "640d996e-427c-7754-80f4-fd94bba4b5fe",
                                    "OfferID": "640d996e-427c-7754-80f4-fd94bba4b5fe",
                                    "StartDate": "0001-01-01T00:00:00Z",
                                    "PrimaryCurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                                    "Cost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                                    },
                                    "DiscountedCost": {
                                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 221
                                    },
                                    "DiscountedPercentage": 32,
                                    "Rewards": [
                                        {
                                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                                            "ItemID": "640d996e-427c-7754-80f4-fd94bba4b5fe",
                                            "Quantity": 1
                                        }
                                    ],
                                    "AdditionalContext": [],
                                    "WholesaleOnly": false
                                }
                            }
                        ]
                    }
                ],
                "RemainingDurationInSeconds": 0
            }
        }
    ]
}

//const uuids = result.SkinsPanelLayout.SingleItemOffers;
const uuids = [
    'e96f3e84-471a-b20f-a3c8-39b3a607c9c8',
    '94456e3a-459f-4447-cc0d-7e9b5d01b81e',
    '604fa485-43ba-0fcf-4bad-f9a4e3b6c652',
    'a6fe7710-4edc-5e23-223d-aeaef3d17866'
  ]

const readJsonFile = async () => {
    const filePath = new URL('./skins.json', import.meta.url);
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data).data;
    } catch (error) {
        console.error('Error reading or parsing JSON file:', error);
        return [];
    }
};

const findSkinByUUID = async (uuid) => {
    const skins = await readJsonFile();
    return skins.find((skin) => skin.levels.some((level) => level.uuid === uuid));
};


const skinsDataPromises = uuids.map((uuid) => findSkinByUUID(uuid));
const skinsData = await Promise.all(skinsDataPromises);
console.log(skinsData[0].levels);