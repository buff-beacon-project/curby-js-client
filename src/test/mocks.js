import { mockFetch, setIsVerbose, setIsUsingBuiltInFetchFallback } from '@aryzing/bun-mock-fetch'

setIsUsingBuiltInFetchFallback(false)
setIsVerbose(true)

mockFetch('https://random.colorado.edu/api/chains/bafyriqci6f3st2mg7gq733ho4zvvth32zpy2mtiylixwmhoz6d627eo3jfpmbxepe54u2zdvymonq5sp3armtm4rodxsynsirr5g3xsbd3q4s', {
  headers: { 'Content-Type': 'application/json' },
  data: {
    "cid": {
      "/": "bafyriqci6f3st2mg7gq733ho4zvvth32zpy2mtiylixwmhoz6d627eo3jfpmbxepe54u2zdvymonq5sp3armtm4rodxsynsirr5g3xsbd3q4s"
    },
    "data": {
      "content": {
        "key": {
          "alg": "RS256",
          "e": "AQAB",
          "kty": "RSA",
          "n": "x3sSObDCh_YT65mtij0zkO0utlvrzL0tXUWv_s9AyWEPH9EDP4GQpqOkN3fNbqDUbLlAfeGvufAfCTB_bEC_cl4PMi1KDR0fgnJdwUOv5wJ_evhenUPvsJKzBM4VvYD2mEl8aODrVyoqGYUL8nKpzukIgMASG5_v4XgGf1lqVugBF7AxGACX0znWudzQZRumeMPVs--VnZ-I5Zi6rpDeXK0SHD33l1ZM4MhE0p3LNIr6GUBVADq_NYWPb9UAgsrhSYnLddqY4B1mm9xn018xQCjyiURJxRb82XxcCGuCg8-BbR-sOBxW3GRubm3XrSA76aBiMaDdAAEvQ7hSlwwJjV5JfRxnARZWCHKZP2aRpA5J75s2OfhgNN2lMGKLxi3i6HZmjbXpvxNEFmGmFuTsvnf7vhSykMZXtQRMJvR2QEGX2-S7m7FphUivk_4ZHOtOYYVgSZLu1eJ8Gm2hnz0GG_hLe4WloRaKQxbPcmrJsVqCL5zhtgU7J-Zm3nAEvtGAZIdy89md5WDhjpu0u2SK7TFDowuqCbkTi7ll19ayapUNSoYp43_7siy-L0PSeSeWkwieozZuSs_YAv65tSZaGTWiJKtXusR4nTU6k54r9BGT55p_AGRxOJC7pnIySJrnxCXK0m638xHkjKI5IgkH2vb4qnsOB3e6Kaj_2o1ko48"
        },
        "links_radix": 32,
        "meta": {
          "description": "Random number chain using a modified version of the NIST Randomness Beacon protocol",
          "genesis": "2023-10-26T17:36:10.620Z",
          "group": "CURBy",
          "name": "CURBy-RNG"
        },
        "mixins": [

        ],
        "source": "random.colorado.edu",
        "specification": "twine/1.0.x/rng/1.0.x"
      },
      "signature": "eyJhbGciOiJSUzI1NiJ9.FEA8fZyQ7oraJGE-iRrsHlUVz5JJ-uCMWIXijLR8v17qa1XqgzsuCKMmiwQhB1bV-fpZFe-vbpkQ1BYpqkJGOgAG.AfyDr4i-Usxuap7G5rvhaCoguiBGQOwOpp69P3hmU2-L8vQxjQPc3rnxFM1mMunNo8I1fUU2g0oQ8yO7Xf7gQs-TJAIgsErej9Vxk4l3Sr2xjvNk85WENZyNOKooJqX6z3HVo6q-dv-mU3B3L6RX1a2so-YqdoV1KQymZiTNTA7Ds610SotAkQyR4pMR_pv0PQqsHVVWxH3b9bwgHxttwsEpM3gVT_kDMXD2tA_JRK0j6xzWt73CJ6HUQb7HPb72rpKuqzNBgKdcaZnuWNdDcJPsR2lzSuZ6U71ibUvRNs--kmnKFMWpdtvbCsacS6s6imQVY-viJ7Lk3WJi4ZteGRVYpxUgtcFp7qlyK6XxlHj_RbtJuAqZdq3Bhv-aN_S-L2XM6RM-D1ZILO47p__55I043pV9MwdvA-YNpCWPHdDU3FrJtEv0xabKYpCN-JKMD_3tE3CRJce6704KbVjTAMNokRYJ33VkysLBpY8Uqnpq-KpU1Nq0xO-AFxO_cJ0ENb_EDqbyNBRcLwWN0FvBdpBLIMRzJJc6XjmxSCpFmJZSeuCWa9PstB4bCnRvsv4JMzYg93wUU28UlDZcSe4SlnqgPLB-RTYi8TwvezlvXT5-UJTliRUvnlzhNyvJO8P-oTrAOD5EgJeYEINfyTiXE4fD6URmjvL6DCVBXZxj7OQ"
    }
  }
})

mockFetch('https://random.colorado.edu/api/chains/bafyriqci6f3st2mg7gq733ho4zvvth32zpy2mtiylixwmhoz6d627eo3jfpmbxepe54u2zdvymonq5sp3armtm4rodxsynsirr5g3xsbd3q4s/pulses/latest', {
  headers: { 'Content-Type': 'application/json' },
  data: {
    "cid": {
      "/": "bafyriqbodbgue3fjpqfhkg32hpxvonjhkiwagjd2wxmont3bxviyfbohiqvxwbiojq5hfggex5p6lutf2pbr3coza4iixwh5hqhgxe7zqxupy"
    },
    "data": {
      "content": {
        "chain": {
          "/": "bafyriqci6f3st2mg7gq733ho4zvvth32zpy2mtiylixwmhoz6d627eo3jfpmbxepe54u2zdvymonq5sp3armtm4rodxsynsirr5g3xsbd3q4s"
        },
        "index": 534323,
        "links": [
          {
            "/": "bafyriqd4ppudk6na3lq5qzelkgwcc2xglsdz52icgn6myuwdxaaalwztgbqekegmr7hku42jzdcyvg4aqbylp5oxyweweozrj4wug7vg5pxdu"
          },
          {
            "/": "bafyriqdslnqhuhvvtufmb4jexhu35skaksrwzlresczgibl7jz6mae7equxkpcofoibkxcrb7fxlmmktdi2zgxubzonidckp7dywzvd34ld46"
          },
          {
            "/": "bafyriqckanwlo4tfl7ek6yqmx6oxuxpj7e5kevff7hugljjdmipbzl44w36o63eoilosvlsf7em4z4vyfgtnsb4xlvb47rkxk7z3kkpjybuuu"
          },
          {
            "/": "bafyriqfju76rchj2szxppuyb6fuqzh6sacaiu4keeponym2h6kk5dvgmf7vcqbtucoe5f5l3cgyvjo5vri6zgi2nu247eid47bk5hzrzrajck"
          }
        ],
        "mixins": [
          {
            "chain": {
              "/": "bafyriqa5k2d3t3r774geicueaed2wc2fosjwqeexfhwbptfgq7rcn5mwucnhfeuxu2nxbrch3rl6yqjlozhuswo5ln3xwjm35iftt3tpqlcgs"
            },
            "value": {
              "/": "bafyriqex7ubcavdk5wtj2p6chqfr42rdiuvaxzj2b2sxemppvys6ashq3ljjwf4divr3hkrag3trzii57654k3ey3xsijpaap7z37dcf5od64"
            }
          },
          {
            "chain": {
              "/": "bafyriqgdssb6xcnhimkaosz2rndn4cqwqa4iute5ebyldwcucbk7pgzrrhscaslqc4omaqoqezhqp3r7yi2qcrvu6hwrjce7ccj77ukengwa2"
            },
            "value": {
              "/": "bafyriqaqtqvft67qod24qeaj74w4j6fzdnopnf55n5v5dxyaxeocnqtvnty7bqlepghdfvsdoxi7effche7tekte7ceedbxj4psc5y3n27dq2"
            }
          },
          {
            "chain": {
              "/": "bafyriqei75kvbmjdbw5rixjmmm6nsoc4ik2wnd2vuk62zerd54geirmhewywnirfuzlwub45wgaft44tf3wabzxv6fcursbkgcaqouulhyfsc"
            },
            "value": {
              "/": "bafyriqbwdg4t4x3nshoqup4x77cdhdeuuasufq7r2tqrjjid7dc3zjm2dkr3tqgyp22tqprggsg3vqeeoavcqgavb5phep3ion434wovjfgka"
            }
          },
          {
            "chain": {
              "/": "bafyriqhijw5soalbtppuwwjbskfiriqy6swa5qd5trgbzx4nypnu7mp7iyhx7m2iin2nxnglmngvjgirzb7bvlisxq3uygoik7ozbybxnftiw"
            },
            "value": {
              "/": "bafyriqbz7kw2h2jwv53ivwmpekel37emos25iu57eyest4lpu5eegnmx5zoti2tnutmm3xlobovug3iklpir55ot2csnt5yo4ql5fayotkuvw"
            }
          },
          {
            "chain": {
              "/": "bafyriqe3zxf5g4ifgqhea5zozxpdcfi5qcpkfpogtxzbizmmuxdjuzuq44a2cifbr7xplo4kcfsdz2c5pxfxektavrqxxb3nvbmclxz7qiz6e"
            },
            "value": {
              "/": "bafyriqfporpydf3otcb2wkuwazptxfazx2aogj4oqixiidv3hancjybogcm3642ird4vnuul7iu67t3nvxhns7o5aey3nketncy24ss6fkukk"
            }
          }
        ],
        "payload": {
          "pre": {
            "/": {
              "bytes": "FEC1/Uod5Fhz9/iKqEI0lHrwedR6z6SvZZo5xZsNlJLaa21V+0lFlBIvUz/Fd4v1rudX2Ow3UpCSVVyzyNqa3zsn"
            }
          },
          "salt": {
            "/": {
              "bytes": "OlBktjwP5A1UVMENtQsO6NLw4DNmma2YsojYQ76Zn7EhXML1EMdFH6DzVjwYmI55SOH79pcETAkOeO0CwLX1yQ"
            }
          },
          "timestamp": "2024-10-31T20:04:00.503Z"
        },
        "source": "random.colorado.edu"
      },
      "signature": "eyJhbGciOiJSUzI1NiJ9.FEBk5A2sV9b-PBSGFkSUM5yCS6NsAV4aWWn0zt7ueCKqRVxa2jssnvC0wCDQoBKFe0JXmd3QerKglxO7yyK77SR_.Tvd9wKczKHxGlPvSYfnomSfttlZwBanBgwQiWi58goiBVKmp-ak_QKPHgF5i4U31wHGMiCqoq-ySOvFHKrNPg1jh1oZy85oEePjYKt-dmHKDH_Ozm9D6kbxjL-S-f1oHEQiOj6xrFLyLxedHjrHNZ5C2-OBF4GwjtWjmEgTk7vCTbz8cC2zvgnd6cQl-vqMtpsJ0Gi_drRpY9rtBNuQeyx0nWgDalQ3VdmF7BCEMeFxqIyevx3Np8BKkykNTc6MWMqR-uyFF8GMRcK1owax2jCWMDcTaYO51rzWZNq2ObIqYrZb1cSg40zZu5eCNjVZoeV_EJWsA_w8-uwOLZhgyhS-Blyj0IM0MARVJ3DrUWDig5C3focYeJF1lCZJNwKlnyy2Ttt71ZC_U2zNACBTUd0Pg_0dy_umpAdBaDqJLsm_LTe4-MfYDGev_hhkwcpHvyiqDuZxqoISC9qd0gIEetsz_V-XhNaI_0PR_mnZWGKvHw__gjkeaKpF_ly_-0XJcOzvZBe5dql6XNc-3wsTm_FyEU4yGmd1czK7m_R83gjC9mZhprTOf_DcqgD_UtxzGIbjrMVdzrjIXIu2krPW-tE05Kuk4n3sEFlqNEzuRJevY4z5DvGAdlXAgfbP9RncvqKcso0pvUn84tOl6p8abXEM91mpeveZBg9edOKzdgM8"
    }
  }
})

mockFetch('https://random.colorado.edu/api/chains/bafyriqci6f3st2mg7gq733ho4zvvth32zpy2mtiylixwmhoz6d627eo3jfpmbxepe54u2zdvymonq5sp3armtm4rodxsynsirr5g3xsbd3q4s/pulses/bafyriqd4ppudk6na3lq5qzelkgwcc2xglsdz52icgn6myuwdxaaalwztgbqekegmr7hku42jzdcyvg4aqbylp5oxyweweozrj4wug7vg5pxdu', {
  headers: { 'Content-Type': 'application/json' },
  data: {
  "cid": {
    "/": "bafyriqd4ppudk6na3lq5qzelkgwcc2xglsdz52icgn6myuwdxaaalwztgbqekegmr7hku42jzdcyvg4aqbylp5oxyweweozrj4wug7vg5pxdu"
  },
  "data": {
    "content": {
      "chain": {
        "/": "bafyriqci6f3st2mg7gq733ho4zvvth32zpy2mtiylixwmhoz6d627eo3jfpmbxepe54u2zdvymonq5sp3armtm4rodxsynsirr5g3xsbd3q4s"
      },
      "index": 534322,
      "links": [
        {
          "/": "bafyriqebw7wz4z6n3bi3yxe5ersst5wpm6dbcpoat4adzkx4gkznz3q3xq7mx6qpgyt74jxibz4ve7wt2gleiavoabnludyaqjzqe66ap6xee"
        },
        {
          "/": "bafyriqdslnqhuhvvtufmb4jexhu35skaksrwzlresczgibl7jz6mae7equxkpcofoibkxcrb7fxlmmktdi2zgxubzonidckp7dywzvd34ld46"
        },
        {
          "/": "bafyriqckanwlo4tfl7ek6yqmx6oxuxpj7e5kevff7hugljjdmipbzl44w36o63eoilosvlsf7em4z4vyfgtnsb4xlvb47rkxk7z3kkpjybuuu"
        },
        {
          "/": "bafyriqfju76rchj2szxppuyb6fuqzh6sacaiu4keeponym2h6kk5dvgmf7vcqbtucoe5f5l3cgyvjo5vri6zgi2nu247eid47bk5hzrzrajck"
        }
      ],
      "mixins": [
        {
          "chain": {
            "/": "bafyriqa5k2d3t3r774geicueaed2wc2fosjwqeexfhwbptfgq7rcn5mwucnhfeuxu2nxbrch3rl6yqjlozhuswo5ln3xwjm35iftt3tpqlcgs"
          },
          "value": {
            "/": "bafyriqg4rwszscgicealforbbzqnjrszfntup7exz27nwqv3cynw2xzuztrtzcomrgboui54srb7w57lfx64pmdbsym52blttbfcl7ou7qo46"
          }
        },
        {
          "chain": {
            "/": "bafyriqgdssb6xcnhimkaosz2rndn4cqwqa4iute5ebyldwcucbk7pgzrrhscaslqc4omaqoqezhqp3r7yi2qcrvu6hwrjce7ccj77ukengwa2"
          },
          "value": {
            "/": "bafyriqaqtqvft67qod24qeaj74w4j6fzdnopnf55n5v5dxyaxeocnqtvnty7bqlepghdfvsdoxi7effche7tekte7ceedbxj4psc5y3n27dq2"
          }
        },
        {
          "chain": {
            "/": "bafyriqei75kvbmjdbw5rixjmmm6nsoc4ik2wnd2vuk62zerd54geirmhewywnirfuzlwub45wgaft44tf3wabzxv6fcursbkgcaqouulhyfsc"
          },
          "value": {
            "/": "bafyriqhupp3i2wztq43fgeu2an6y2qj72r7sfqu6d7uv6bk5nawvj42pwlo34ekq4x55eizpjjqir5iwuhr2gsvmtgp6gxty4fwamxnedqd6a"
          }
        },
        {
          "chain": {
            "/": "bafyriqhijw5soalbtppuwwjbskfiriqy6swa5qd5trgbzx4nypnu7mp7iyhx7m2iin2nxnglmngvjgirzb7bvlisxq3uygoik7ozbybxnftiw"
          },
          "value": {
            "/": "bafyriqbz7kw2h2jwv53ivwmpekel37emos25iu57eyest4lpu5eegnmx5zoti2tnutmm3xlobovug3iklpir55ot2csnt5yo4ql5fayotkuvw"
          }
        },
        {
          "chain": {
            "/": "bafyriqe3zxf5g4ifgqhea5zozxpdcfi5qcpkfpogtxzbizmmuxdjuzuq44a2cifbr7xplo4kcfsdz2c5pxfxektavrqxxb3nvbmclxz7qiz6e"
          },
          "value": {
            "/": "bafyriqfporpydf3otcb2wkuwazptxfazx2aogj4oqixiidv3hancjybogcm3642ird4vnuul7iu67t3nvxhns7o5aey3nketncy24ss6fkukk"
          }
        }
      ],
      "payload": {
        "pre": {
          "/": {
            "bytes": "FECrk5vR8+sJr5eSEQl7500ATa52OO+Ty1QwjI68pDtreaL6IMZgvZz4sg36EAYwmAEtXOrvtW7PdonwNoG00OeC"
          }
        },
        "salt": {
          "/": {
            "bytes": "Hwy4/QjkvpCfe/lhzyHla4nJ1FRDGxrMlfYbIusZiGCFH3RhAFGo9kNnwh7sxDNnME4jBwyzeCmvfiGB1PWg1g"
          }
        },
        "timestamp": "2024-10-31T20:03:00.551Z"
      },
      "source": "random.colorado.edu"
    },
    "signature": "eyJhbGciOiJSUzI1NiJ9.FEDiTMXTtWY3uHRrm3roFAzIKqXCdqhjBC_5qwfO7FNtYRM6WDpQNB1eHe8wy6kTpZbDOWEseWIRaQM03-DKR9mG.mX7nW6vBWMkgrGkR-ucUlpdAfGXmcP-_UoGRYPe8U9IXk6W9uA_0_UPr4yoJEXuMQE7gwnbNqvIPWPoXMhP6YeXYG3ZuTZ6jxxkjnrRTyCkhmBdrwpSO0XID8gsYMpMJs8Z-5DyWCi_OhcYDY_WUE3Md_5_FUJkcWAe-eby9pJlJBAYjRJ9j31EZ8Qt5QfL8ZBQd0qWfZxLreKTufrmH463UKsh3lZ7lhqLa1PbWbWzzVCKNASJgDlwP-paj60MbkDBe5y4A4b2MrsgZ4tL5YZPDOqpnRkl6Sr1BDWMjM0P0-o-qmAQWO3W0EDcSshQE3WB5bNSABoHQEp7SXKcl-mj-iYASgeKnb2ybZV7ilVtIbcgYP0cnQwm08t97SUm7Ai7LgN0SZ_43hWqJTU_DfofU8ktq4KdbdF3rajcQfZ-kPoV68FCdrubawvFL73MgHNlF9Q9AVr8trqLKZ08Hsl8T0E1GRzVcLrekgoKiPdiGUF70ReQL1NjrGInm3ETMaTtpiyHceJhAkCmdPP9ChnZP81di27jF-K2roh5AKI-wjShbIszhV_r78TX2ZsJ2o_qxyGvHtE8itWHaN3IP_VJpv0BA35_nN6hT_gY5AFD0xm-Q2N2GDfH5zzyS6aXTGMRjJibpsN_l8Bc-h1OgJWnigxLboZk2YwpOBeL-JUU"
  }
}
})

mockFetch('https://api.entwine.me/chains/bafyriqa5k2d3t3r774geicueaed2wc2fosjwqeexfhwbptfgq7rcn5mwucnhfeuxu2nxbrch3rl6yqjlozhuswo5ln3xwjm35iftt3tpqlcgs', {
  headers: { 'Content-Type': 'application/json' },
  data: {
    "cid": {
      "/": "bafyriqa5k2d3t3r774geicueaed2wc2fosjwqeexfhwbptfgq7rcn5mwucnhfeuxu2nxbrch3rl6yqjlozhuswo5ln3xwjm35iftt3tpqlcgs"
    },
    "data": {
      "content": {
        "key": {
          "alg": "RS256",
          "e": "AQAB",
          "kty": "RSA",
          "n": "x3sSObDCh_YT65mtij0zkO0utlvrzL0tXUWv_s9AyWEPH9EDP4GQpqOkN3fNbqDUbLlAfeGvufAfCTB_bEC_cl4PMi1KDR0fgnJdwUOv5wJ_evhenUPvsJKzBM4VvYD2mEl8aODrVyoqGYUL8nKpzukIgMASG5_v4XgGf1lqVugBF7AxGACX0znWudzQZRumeMPVs--VnZ-I5Zi6rpDeXK0SHD33l1ZM4MhE0p3LNIr6GUBVADq_NYWPb9UAgsrhSYnLddqY4B1mm9xn018xQCjyiURJxRb82XxcCGuCg8-BbR-sOBxW3GRubm3XrSA76aBiMaDdAAEvQ7hSlwwJjV5JfRxnARZWCHKZP2aRpA5J75s2OfhgNN2lMGKLxi3i6HZmjbXpvxNEFmGmFuTsvnf7vhSykMZXtQRMJvR2QEGX2-S7m7FphUivk_4ZHOtOYYVgSZLu1eJ8Gm2hnz0GG_hLe4WloRaKQxbPcmrJsVqCL5zhtgU7J-Zm3nAEvtGAZIdy89md5WDhjpu0u2SK7TFDowuqCbkTi7ll19ayapUNSoYp43_7siy-L0PSeSeWkwieozZuSs_YAv65tSZaGTWiJKtXusR4nTU6k54r9BGT55p_AGRxOJC7pnIySJrnxCXK0m638xHkjKI5IgkH2vb4qnsOB3e6Kaj_2o1ko48"
        },
        "links_radix": 32,
        "meta": {
          "description": "Publishes the latest randomness pulse from drand.love",
          "genesis": "2023-10-26T17:36:12.589Z",
          "group": "CURBy",
          "name": "drand Mirror"
        },
        "mixins": [

        ],
        "source": "random.colorado.edu",
        "specification": "twine/1.0.x/mirror/1.0.x"
      },
      "signature": "eyJhbGciOiJSUzI1NiJ9.FECxk83wL6maM3LZ-1-jmFR_cO72HI3e0nU-PQrUbtz-HMniVpLYiPqUXRSeJo8uSZD5rVKvB10mBz9adG27Rkuo.CydzpdOJyX3P3Kej3dz0tI0EHC8k8ME5qJyV_Mz9H27F21Fv0jF8m1FvXGpF75ASBmR4dHLjWvNOZtZjLuJplY-mos4T7EbkqnemmdoL3TZ9vamYTa-rjM3xp4sQ2o6MYqvd1_pZDuByE7-yRtbIyrpEm33P4FtFyY3oy6ak8fFpyo6ADpVGwBDNeGO7ggOB4nXKbKbxfX0gEG2pG3jWlkf1fnoFOJ2mAZYfiqdI57Rk4WXiU_tiFYeRKL7_C06Zs9vevcaUCNCiKp92xZwtcySc9G2LdounsuJykArp33ZWmFS_4-GGDQREZKpFlE1S4g06o0mpExBTFdgHXDRoDPf9H4pBolqU_HuwPoumfy4TrjJQ5hoPYmAH9znlIIi8sBK18ShRoEbnLjoVjR1nWdbzwLLlnX-j9E7VMJg2PuJbgBDKO46mTKgXHuj-ZTpU-63c5VcTy3aAlG01-ZXuKF9xplvFCMuoIrR6O_jNOJwFUiWEr6U7ZCz-WKYOMGRYXDYUW_eYhC80lN3dnnodzIYeIfkMowm5R-OLxgG9FkjWp2aE9pG_KrYy0xZQY35gLdvn7XisTMa-DBpE3dVysXGx1Yvg0iz3WHm5QXoDkbxscUeojQIsge1D1saLu1flLdTnKIzfsveVxqOgBWF0gUGiCDR0swwbTr6AZlX5SQg"
    }
  }
})

mockFetch('https://api.entwine.me/chains/bafyriqe3zxf5g4ifgqhea5zozxpdcfi5qcpkfpogtxzbizmmuxdjuzuq44a2cifbr7xplo4kcfsdz2c5pxfxektavrqxxb3nvbmclxz7qiz6e', {
  headers: { 'Content-Type': 'application/json' },
  data: {
    "cid": {
      "/": "bafyriqe3zxf5g4ifgqhea5zozxpdcfi5qcpkfpogtxzbizmmuxdjuzuq44a2cifbr7xplo4kcfsdz2c5pxfxektavrqxxb3nvbmclxz7qiz6e"
    },
    "data": {
      "content": {
        "key": {
          "alg": "RS256",
          "e": "AQAB",
          "kty": "RSA",
          "n": "zI7ywpS55pGdNZ3NwaWmFNVnYMeaxwNdAtfc8nTewwvkKJ4LE1wzYcWXebZjt_D9NtoB2BS9Lo_HYSIwfsIdTLymCdEn9iJvBANRU6ZjO_OeOIFTeCzBb-nZ7_XFXLUl8Xv2GGYFl1yZoKwWVwypcfWVKKDsUz9OxXKWZ4sq9ACwrLjY-w9U_EgqTbRSZvfZQOk1c6CbORjXNRaoVCgEU6_jzgHzWMMiDZIgTf_lRWy5vIiJJV-fd0c0XAJpAZjO1ZqzwaBMUe64KLjcLNxIV2VdeOrJbiis9s8QGVGZAYw40sk74B-OMssrftXD-_cRORR8FP4FMAaybuyQvDB8w0pqw5lHOZ3_2WkmS8tDm6X_CKFxBI6ZzO3Z4m8yEaSTK2-YrWchWlmQ4ADiGdpGCymoowEnv366zi86_Plqqla8e8vcCLkq9KGMOICVZsL4juvptOD_wEdLYBiHrSL8kLCyK7fJj2dT7eJ1S5H2UJ_SaI1jb5Y0zTY0fgHfatzmc2ZG8T0tobaC_1RtM4Y5bzm7eMqXt3S0vFlXdZhySw1_2bxW-rA1WcM2PUiIYqvaXtrHbAXDJCvZ_pLUdi98JA1TCzUuemKwu3kbROuwNiakev8vq7NDWBipo_cIOYs4GaXb3FhElzC7W4F22jHiNI_uT_wERSlQhzXnSxqIRYc"
        },
        "links_radix": 32,
        "meta": {
          "description": "Experiment status information",
          "genesis": "2023-10-26T17:38:30.848Z",
          "name": "NIST-bell-experiment"
        },
        "mixins": [

        ],
        "source": "random.colorado.edu",
        "specification": "twine/1.0.x/bell/1.0.x"
      },
      "signature": "eyJhbGciOiJSUzI1NiJ9.FEARpnMB4MWvXMDIzMlU7DagYYKyLzHI7-TSj8Oq-VdrSCVS5PFty6U5QdkFWl3zp65R3aE54FTNkqsO2maRnC8K.H39yBRvIygMLalQIPQo84sypZuV5EnUvS5dplfRSC4Fk4Isy1xqIKcoAKT8FO9liDxZXelx27n9-e7tYivdq35fHnDWC3aH6dv72S_5Iy2e0zRJ25D-kHZoOOctLknbTAG6i-nLJZOrnfzHAIi8XOnK83TyMfIfBbnbUJvUMYvtYkYvRtkonAVvkFhWPg5o7ZFnbhu1XsWvY92PRQ-xzUbo0BY6nxNT7l6GAWKzyHeSCFrLFIC5AR4tEZ75lvWQnfTeUDcNds4w-SD7RmDZJ-3aBqSLS89uZoxh7UVKRWPxz80XJD3iveE2Kv3qLN9iqGFFPoActrECYusEUdbn12dHS2zgKLyDbOpxZFuSPI2DjFUmYLZpWK5WnuTI9KmE9t8dFtNZT-HB02C9iuO0K24AB5i59nq3TSpRTUjQMRBfK45N0tWN5wTukonKAxjxxZl-IBwka1fhA85C34XIsb7OuIp4OH9p_nUgchHg_jMc3IiwIRovlytd_l4fmxkKdmzr5qVl0B6xUJHXydIo77BCvDbv7OW3Hxrz9r73EidwINzH_yrAKyb4xV0xHKo_nHoFdpAd5sW7cxsF_USrfA5axuyGYRrsS_RjdhkDLseKRDxtYkM0nIuLwZogG6a5HJ1729kJiSEkNSrFhfYFmBh7hpLLAkzRqqc1bqha4xIQ"
    }
  }
})

mockFetch('https://api.entwine.me/chains/bafyriqe3zxf5g4ifgqhea5zozxpdcfi5qcpkfpogtxzbizmmuxdjuzuq44a2cifbr7xplo4kcfsdz2c5pxfxektavrqxxb3nvbmclxz7qiz6e/pulses/bafyriqbfnqbqgocvddrauqlt25trk6rszcuie5fckiz3itacfc5murzudczuwjgs4d3fd3xrwhjjyoevf2x7dnlyvnvtnkbytfrgi2uof7jyg', {
  headers: { 'Content-Type': 'application/json' },
  data: {
    "cid": {
      "/": "bafyriqbfnqbqgocvddrauqlt25trk6rszcuie5fckiz3itacfc5murzudczuwjgs4d3fd3xrwhjjyoevf2x7dnlyvnvtnkbytfrgi2uof7jyg"
    },
    "data": {
      "content": {
        "chain": {
          "/": "bafyriqe3zxf5g4ifgqhea5zozxpdcfi5qcpkfpogtxzbizmmuxdjuzuq44a2cifbr7xplo4kcfsdz2c5pxfxektavrqxxb3nvbmclxz7qiz6e"
        },
        "index": 88,
        "links": [
          {
            "/": "bafyriqcwhozcxghhucfteitnpodvqrylnet42oxgyzx4l2s4yem7pltukoxyzmhbmmv7uhp5a6oiyzeq5bb6jgu2qh267ciljscptfsdbulxy"
          },
          {
            "/": "bafyriqf4gnrlp7yrtarfwzao3jgly4qdzq46b5pyveqv3ktavzmdxjotsbmousbryxeqka4576cjbqwhkkcopvhv3ejf3fyetyvziqiqwtzxy"
          }
        ],
        "mixins": [
          {
            "chain": {
              "/": "bafyriqhijw5soalbtppuwwjbskfiriqy6swa5qd5trgbzx4nypnu7mp7iyhx7m2iin2nxnglmngvjgirzb7bvlisxq3uygoik7ozbybxnftiw"
            },
            "value": {
              "/": "bafyriqa4d4dz2drgvvhits7xujwrav46rauk6u6avd6x256otkqmuobtmoyf67dgwberdihxqb3j73hnm4zxdvcopyk4jfi3f43dk2yrnq7fs"
            }
          }
        ],
        "payload": {
          "dataHash": "ce4ab9e992527c4f801eee58174be9b0845673f3aa565f293896a5491b9bee3dedc6bccc99b5ac3275fd2a9fa2f65c5a51785976cb9487ae0d08efd3ce6b34c7",
          "ref": {
            "/": "bafyriqa4d4dz2drgvvhits7xujwrav46rauk6u6avd6x256otkqmuobtmoyf67dgwberdihxqb3j73hnm4zxdvcopyk4jfi3f43dk2yrnq7fs"
          },
          "spacelikeSeparation": {
            "alice": {
              "margin": 32.2,
              "uncertainty": 3.5
            },
            "bob": {
              "margin": 50.1,
              "uncertainty": 3.6
            },
            "units": "ns"
          },
          "status": 0,
          "timestamp": "2023-10-26T20:59:32.388Z",
          "type": "result"
        },
        "source": "random.colorado.edu"
      },
      "signature": "eyJhbGciOiJSUzI1NiJ9.FEA-xMxr3eQ934TOlU2jq5zXAnO8_nBhnuduMX3QX8r14kqedfd6BRkUb48gisJcohGemk_mDRja6qAP9ektcpa2.Ljo3KGs4Amzdu8H7nx_23E7RzX8-gzVv_eCwGE46YRGQFXrT9ZPxFt_5RaR3uvUpOTGqfPCQBtfov9RguxXGzZl3Zl2Nm0TqmWbFkixigNc7sHcpl2EIYQj3LkVBo4Qd9sMSDHeJan8NsT9jnqAYIQ25lYmCx22u34L2hpjD4zf5vQaKdPPempDgyblL_Zdv4q2Zb1ReRo9WB3sPDj9drco3Uwf77M7f-kfIsa4bQXmgGd1kHguqd2oxVBH31Q3kZYOxl2iZPT3IMFBlLp6MVAo5l_Oa7xELxVrIdstProfx_XO37bTp0KXuk3NHPhlLrpzNG9LFyl-hz3mV0i17Ej9oZXGtwKCHasU45FTcowdk6f3aOiwW5Yj36AZdhv0RMHwWXtI7n13f_9-4yxLSCJ6eMo805TbppILJAQld8K4NxDu29SOk3BgWlI7RsL3zQqwYNwDqyvl32heb_ckZMPZZyTb6R7kEGa0S21ssiJ6gIthPqDKEk5yI0n6AGw1T6IIfRNpr3QGw_4YwBIX1VeFdoXm5UtV6sB1dHRcTn0chsZYxf3hznjGGSCTl_G59s0Hm83ObSwNetrv6Wm6SvDfVCozrvLimtGdC-lY7OglippJ7h289nMmnq5hK4qi3LcqJ5ireFBYt25Xf4JwHKoZGmRdyzteWaJbPAO0rEhM"
    }
  }
})

mockFetch('https://api.entwine.me/chains/bafyriqa5k2d3t3r774geicueaed2wc2fosjwqeexfhwbptfgq7rcn5mwucnhfeuxu2nxbrch3rl6yqjlozhuswo5ln3xwjm35iftt3tpqlcgs/pulses/bafyriqejxy6aira7vp77y3asalqt53lwidxeetqtdj2wwvq2q7nu5ckgro5xdznlkrhax3yazcxlgpoluabjxucsiuf57drgcaj2uv7nxrmfo', {
  headers: { 'Content-Type': 'application/json' },
  data: {
    "cid": {
      "/": "bafyriqejxy6aira7vp77y3asalqt53lwidxeetqtdj2wwvq2q7nu5ckgro5xdznlkrhax3yazcxlgpoluabjxucsiuf57drgcaj2uv7nxrmfo"
    },
    "data": {
      "content": {
        "chain": {
          "/": "bafyriqa5k2d3t3r774geicueaed2wc2fosjwqeexfhwbptfgq7rcn5mwucnhfeuxu2nxbrch3rl6yqjlozhuswo5ln3xwjm35iftt3tpqlcgs"
        },
        "index": 400,
        "links": [
          {
            "/": "bafyriqd23f73dxpvczfon4grshy5sb2zt5ek2yklnii5evbj2nehpgjgymx3jx7lbkq6lrtfhbnmxgqvu4wo2uhgidq7swo5w2lz3kikhtrni"
          },
          {
            "/": "bafyriqab5qp553x4lnxs4u3uawiv6s5jwjisogkrmstpo6nrea6miaj2sq45fvdu6dzo7e6gu3cqgu5xyb4nnhvbeqasi5gq25dbn2lpn4too"
          }
        ],
        "mixins": [
          {
            "chain": {
              "/": "bafyriqgdssb6xcnhimkaosz2rndn4cqwqa4iute5ebyldwcucbk7pgzrrhscaslqc4omaqoqezhqp3r7yi2qcrvu6hwrjce7ccj77ukengwa2"
            },
            "value": {
              "/": "bafyriqajzpccmhodexvh6nvyx5pi7nntx3sgus276dacvtplzrllkb5nqbeguh62xkega2qlbq3ycpfpufwdtihw7qrixhjbta7iz7ndq3lm2"
            }
          },
          {
            "chain": {
              "/": "bafyriqci6f3st2mg7gq733ho4zvvth32zpy2mtiylixwmhoz6d627eo3jfpmbxepe54u2zdvymonq5sp3armtm4rodxsynsirr5g3xsbd3q4s"
            },
            "value": {
              "/": "bafyriqdx547v6ucsnavckdxl6lh4gg4icbm4ofbafk454usrpcrjar5cwsyzffcwres7axz6gdioog5mq7l572uluweub3w7crnc6ljohjjra"
            }
          },
          {
            "chain": {
              "/": "bafyriqei75kvbmjdbw5rixjmmm6nsoc4ik2wnd2vuk62zerd54geirmhewywnirfuzlwub45wgaft44tf3wabzxv6fcursbkgcaqouulhyfsc"
            },
            "value": {
              "/": "bafyriqbdmdzhxwwl7ytp3qttwtg6sd7wpibf2nnuph66xb7w25wey6fa2rgdxa4k3hhw6j6a5hwakch6dziwkqq4lhux5wmacc3ghseeyqclc"
            }
          },
          {
            "chain": {
              "/": "bafyriqhijw5soalbtppuwwjbskfiriqy6swa5qd5trgbzx4nypnu7mp7iyhx7m2iin2nxnglmngvjgirzb7bvlisxq3uygoik7ozbybxnftiw"
            },
            "value": {
              "/": "bafyriqecnpoeomgloimevqrcwwmtyrrmxk2eqnca2hshsi47wo5vvr3popmyfs4jk26dzbizkhvt4i7vt3ovirubx3soetxffsxsscld6jo6y"
            }
          },
          {
            "chain": {
              "/": "bafyriqe3zxf5g4ifgqhea5zozxpdcfi5qcpkfpogtxzbizmmuxdjuzuq44a2cifbr7xplo4kcfsdz2c5pxfxektavrqxxb3nvbmclxz7qiz6e"
            },
            "value": {
              "/": "bafyriqbfnqbqgocvddrauqlt25trk6rszcuie5fckiz3itacfc5murzudczuwjgs4d3fd3xrwhjjyoevf2x7dnlyvnvtnkbytfrgi2uof7jyg"
            }
          }
        ],
        "payload": {
          "previous_signature": "af01873d6e993e7887f7332ba61163ae21a1a432314c3cb7277a32cd9f862c897a839e359b67ab12eae1928e397f5d930557bf394ee37c775ddb1cf3be46c77532d0e0756d92460d415c1eb549faf80dc94919d973568d9ecc95e3ec3f5dcf3f",
          "randomness": "02bc371e46e9ce6d9d05078aef9992a526affe207fec316110184671d7fe94f1",
          "round": 3430767,
          "signature": "b24e86cedf694b692676bb75c2f72ee771cf192bdd9b2bd86919078f24263d6112b7c5316604711ccee2297440093e450eb1871cef659bd2c8099074417fa0839d49ef05daf862ef2255388170339d7f3af980c1aacec93ffc38139f4f5a3525"
        },
        "source": "random.colorado.edu"
      },
      "signature": "eyJhbGciOiJSUzI1NiJ9.FEAhgxVm5sJy3QMBNyS1lkqKCFRdtGa0x4iNZ13hHxRsDKCP0omPoeTy9MRBSWdw4gsQzPCehWjGWBSaTFnw44Yl.piUz4fwiU4dNA86qkveKXgrE4-GQp9G3wZgwrMNVCeEgV22bUnowGuzaO5h_kVZOZ9itKBfD3GOsYUXS_bLXijNXG-2NszvaQmUzCFmjnMP3Xeuc6G79iQbTmd49vMsQwAnVGbb5xjZcPViY6iJpivOISpcNyTDoauMbTskL1ieHfazgsg3Ii4b-xqi6eVoJHIcMURrzS0snjm2yBv5-CsHlxQSFtR-grpASaYWh4GT2ywBfVuOFKpckTITfVGDb_p2RNtN3ExNFkZGOXaiWLd340aooK22rX7D8HjAcgtjUQBQnoAT8AqhYT_4z16iZX3NhcO4X73rL464w-x9CYFyvW1ipvttY3Fpch_A-QqS4TX8o-fcF9EtqskRbu3iFV2MZ7KrL5ocG7wyPKund0e4x87Ljad2G8MPZDE7TlEXMc23r2aKtlIQtv6Np6N17AYF2hW5wIUIwzpIY5a20czm_zBCY_eEwFhMylH6LWpIOmKTPV18jgAXkw3tUeGD-Hny3J-gPS7u8dPK-WWBhe5WDvTuFbZmBYAsiA3vc8C3Vsg49ZdVJ_AiXeA_al2-edE8ZceG0C_XkIXiGWRQHhPNH90fZp32M_VTL6IEe3SzV2ThnJhn1XKFdo1OnvrKtNRn1aYsh_w9FRJ1KtjI92jQlGJ_JLJ_4qmCxfSdaQuU"
    }
  }
})

mockFetch('https://api.entwine.me/chains/bafyriqhijw5soalbtppuwwjbskfiriqy6swa5qd5trgbzx4nypnu7mp7iyhx7m2iin2nxnglmngvjgirzb7bvlisxq3uygoik7ozbybxnftiw', {
  headers: { 'Content-Type': 'application/json' },
  data: {
    "cid": {
      "/": "bafyriqhijw5soalbtppuwwjbskfiriqy6swa5qd5trgbzx4nypnu7mp7iyhx7m2iin2nxnglmngvjgirzb7bvlisxq3uygoik7ozbybxnftiw"
    },
    "data": {
      "content": {
        "key": {
          "alg": "RS256",
          "e": "AQAB",
          "kty": "RSA",
          "n": "x3sSObDCh_YT65mtij0zkO0utlvrzL0tXUWv_s9AyWEPH9EDP4GQpqOkN3fNbqDUbLlAfeGvufAfCTB_bEC_cl4PMi1KDR0fgnJdwUOv5wJ_evhenUPvsJKzBM4VvYD2mEl8aODrVyoqGYUL8nKpzukIgMASG5_v4XgGf1lqVugBF7AxGACX0znWudzQZRumeMPVs--VnZ-I5Zi6rpDeXK0SHD33l1ZM4MhE0p3LNIr6GUBVADq_NYWPb9UAgsrhSYnLddqY4B1mm9xn018xQCjyiURJxRb82XxcCGuCg8-BbR-sOBxW3GRubm3XrSA76aBiMaDdAAEvQ7hSlwwJjV5JfRxnARZWCHKZP2aRpA5J75s2OfhgNN2lMGKLxi3i6HZmjbXpvxNEFmGmFuTsvnf7vhSykMZXtQRMJvR2QEGX2-S7m7FphUivk_4ZHOtOYYVgSZLu1eJ8Gm2hnz0GG_hLe4WloRaKQxbPcmrJsVqCL5zhtgU7J-Zm3nAEvtGAZIdy89md5WDhjpu0u2SK7TFDowuqCbkTi7ll19ayapUNSoYp43_7siy-L0PSeSeWkwieozZuSs_YAv65tSZaGTWiJKtXusR4nTU6k54r9BGT55p_AGRxOJC7pnIySJrnxCXK0m638xHkjKI5IgkH2vb4qnsOB3e6Kaj_2o1ko48"
        },
        "links_radix": 32,
        "meta": {
          "description": "Computation chain responsible for coordinating and extracting device-independent certified random numbers",
          "genesis": "2023-10-26T17:36:11.627Z",
          "group": "CURBy",
          "name": "CURBy-Q"
        },
        "mixins": [

        ],
        "source": "random.colorado.edu",
        "specification": "twine/1.0.x/diqrng/1.0.x"
      },
      "signature": "eyJhbGciOiJSUzI1NiJ9.FEB76bE0WVGtpUA_ZE2GorCY3f-QSYQDEJR8VEHN4S0_5Fjbn-mCQ5cwh_4HMzSwqdVPEduQf75EpuVMA2GDSzRa.FQ3qG15tbCLa_Y33tig7zELQ65F8sCmnNZIcYbgbHhA3Q9XOILv4tDsZ6Dkc_tJ0V35Wrbc6Zi6hUq8HkMF35LhsOCn2zl-jRMFKnGo96K055WJuLRQ9BO6qtgw0whwzbT7Yenn6zbzS_ZO_v00Oce0__hKOMBoB286TscT_WXkwPXvjJLkeYvW42ZRxOtcete4UzG1AI1pinCVNU5p-FcLBqASN8V8qjts8bnckdvCND4KosLaX3JyA9MknN4ikvizV5gCpdhV5Oup9bX71oyT-OQbhzX9FIXZd58dRS-ZTBegRRXxko7up5WtaCXg3N1D9CdYV7WjfV534GV5uSkNqcPhNIHf6OUOXADnWSuJdp4s1r11F-p16DrkOlv9kVKDF0idMSo1v7MFeBuroHnHWvztCdoxbat9sGu6qx1tYtfIUeVEJpeucKPha5LAcZhkNbMmYVNoxSzqPjhieFKrlQaSqQj6RfGU6kQQjRYoZjZyV68hH3fD8AImRI5sDNmiu7vOTh43gukELp-zz_xj8Jf2ptGc3yclOqbvSpWtME-zkWfei6m66LUbPRp07udTo4N7WEm7ocHt8e8qhjWJpUEC1UQFk2LTbOkKNhTg55B7Cwh7MsY_Uf2j0vyDfv8mG-DkhiKtJkf-hUSpmd9mYL_I4MxJbzNLHASth4F4"
    }
  }
})

mockFetch('https://api.entwine.me/curbyq/round/latest', {
  headers: { 'Content-Type': 'application/json' },
  data: [
    {
      "cid": {
        "/": "bafyriqa4d4dz2drgvvhits7xujwrav46rauk6u6avd6x256otkqmuobtmoyf67dgwberdihxqb3j73hnm4zxdvcopyk4jfi3f43dk2yrnq7fs"
      },
      "data": {
        "content": {
          "chain": {
            "/": "bafyriqhijw5soalbtppuwwjbskfiriqy6swa5qd5trgbzx4nypnu7mp7iyhx7m2iin2nxnglmngvjgirzb7bvlisxq3uygoik7ozbybxnftiw"
          },
          "index": 126,
          "links": [
            {
              "/": "bafyriqe7ehfg65ww4zxmyyu42y5hfyownf5ufswe5jg55l6kucuxjv5otd3lhpeii7nroq4bglxabmzik5mltf7zya4xmkbsfdrzhzoa4t76y"
            },
            {
              "/": "bafyriqho3unucm3rtrnokidt6esuhlel5wyhmqref7q4vitossbyj356sktbfbkhf4b72phrxbbsazwl5aswl2hopvmnwwqcxq32txa57lpfy"
            }
          ],
          "mixins": [
            {
              "chain": {
                "/": "bafyriqa5k2d3t3r774geicueaed2wc2fosjwqeexfhwbptfgq7rcn5mwucnhfeuxu2nxbrch3rl6yqjlozhuswo5ln3xwjm35iftt3tpqlcgs"
              },
              "value": {
                "/": "bafyriqgpq266jxgfdswdoaydjgovanrqfo3kgxg63pw4q2nskwixbuqejl54fabss7qrewufk7chxvy6rmuzb3q4b6rojvu7p3gtbx67lcokc"
              }
            },
            {
              "chain": {
                "/": "bafyriqci6f3st2mg7gq733ho4zvvth32zpy2mtiylixwmhoz6d627eo3jfpmbxepe54u2zdvymonq5sp3armtm4rodxsynsirr5g3xsbd3q4s"
              },
              "value": {
                "/": "bafyriqfzf2tkdkurnnfvta6a5hgen4ld3h6i2jiu4vuuojv5wage2q6jkbc3rco3p7bduniox5s2zok6olfoajduhd3rtdbqts3aqwx2epevi"
              }
            },
            {
              "chain": {
                "/": "bafyriqgdssb6xcnhimkaosz2rndn4cqwqa4iute5ebyldwcucbk7pgzrrhscaslqc4omaqoqezhqp3r7yi2qcrvu6hwrjce7ccj77ukengwa2"
              },
              "value": {
                "/": "bafyriqexooztvwj3vxs6mp4c6yfw4c77bij5pc6xuz5wgmo33squr5lvnozdlzcxjeroa6vmwx6vqjuspytihmljr2nayxg4a54uk4u6wtzau"
              }
            },
            {
              "chain": {
                "/": "bafyriqei75kvbmjdbw5rixjmmm6nsoc4ik2wnd2vuk62zerd54geirmhewywnirfuzlwub45wgaft44tf3wabzxv6fcursbkgcaqouulhyfsc"
              },
              "value": {
                "/": "bafyriqfxpoge6ouen4ajof5vuk5is757fyhsxl6a4ojmutjzltdeelswxshxt2hzbhudgzkxmhcxrgnkwg7z774wumvihnym7ozuoa3humeog"
              }
            },
            {
              "chain": {
                "/": "bafyriqe3zxf5g4ifgqhea5zozxpdcfi5qcpkfpogtxzbizmmuxdjuzuq44a2cifbr7xplo4kcfsdz2c5pxfxektavrqxxb3nvbmclxz7qiz6e"
              },
              "value": {
                "/": "bafyriqcjxoewqs27wvg24ianfjuc2be6y5vupu7pcbam6pj4dvyiigests5pp5jcp2gfl2hirfnmivg77fmejxqdipmofrmxbt6nmhtctwn2i"
              }
            }
          ],
          "payload": {
            "parameters": {
              "beta": 0.02588813317054728,
              "epsilonBias": 0.001,
              "errorExtractor": 1.0842021724855042e-20,
              "errorSmoothness": 4.336808689942018e-20,
              "gain": 0.002108530448904805,
              "isQuantum": false,
              "nBitsOut": 512,
              "nBitsThreshold": 820,
              "nTrialsNeeded": 1421185,
              "pefs": [
                [
                  0.9999999999999982,
                  0.8901463959005033,
                  0.8895169121130755,
                  1.0618720583663228
                ],
                [
                  0.9999999999998411,
                  0.9826789025414312,
                  0.8277220147234465,
                  1.0927209401773097
                ],
                [
                  1.0000000000000462,
                  0.8270931762794625,
                  0.9830733605074146,
                  1.0924884272651938
                ],
                [
                  1.0000000000001128,
                  1.01725195136088,
                  1.0168590680776008,
                  0.7516792897487737
                ]
              ],
              "seedLength": 243608,
              "stoppingCriteria": 15000000
            },
            "round": 42,
            "stage": "request",
            "timestamp": "2023-10-26T20:57:10.609Z"
          },
          "source": "random.colorado.edu"
        },
        "signature": "eyJhbGciOiJSUzI1NiJ9.FEBsSxwUXWsqHeZPXBTKg8a3-j1GMPQGi_wX3do_GJWafTq2_dwfYtadMCvP6xHBp2kjf17BDhABfg0gcHCT1atn.JRF0JKtXAPn_PfuHbUheXWkw6IoZmQF1mM7k9uAP5Tj6kD0Rd_zS1qb4LYo2q4bXA3JfNAQ8SyZCLFahpELTPJofr7R_PiyPb3sE0iYNrolLBb6YEnUFENo-hzhquOTLrW7tC-B9Gle5FzhMsa38K-mJ40USlsQfU7fYtR8SvDWLaRpzyf1jLRwcnGFBzEHhKeL7dCQQZBiwyxvh0gyMgLwWqOCKC4xcwtWnhTFlicL4ixbyCCEkV435_D8XbeFalXjYR-EOZcfa-Psmg1Tp8HkLjGi4vEl4hOjFo-8fvZfuywNcwGjsm8q2qODavSlSqYZMiyCIdwe_rDBgP_PaPZQHAMgBiXGyITa8HR8xXC6zC70TJy6RtSuv9_pQqlZ4ldau-U_WHUIJMxVBkAyU4zfwNMeaeNhG6jvhadC8PnmlXRL9de5SQqps5urYGm09gHLQld624MAhgok0YsBWNSnw7pRxNhWz5kL0zhIXwouetOFf8UH4tnezHfBPIHa1-XFxM3fmOQ2vHrROijWR-wEJ3N7C58mqunca4ntLxq87avFWE-M_XiHgSZZtqlbd3YpAwrVnxDDiI7VB7iiRrXiXGpaazu_LheIAUwrBbmXQypsr9g938BPZRnhiKHLESdBLZ0uOZ8IRrlGPKI9fUMzCnJ5fI_-JOqbfnVsLXlQ"
      }
    },
    {
      "cid": {
        "/": "bafyriqecnpoeomgloimevqrcwwmtyrrmxk2eqnca2hshsi47wo5vvr3popmyfs4jk26dzbizkhvt4i7vt3ovirubx3soetxffsxsscld6jo6y"
      },
      "data": {
        "content": {
          "chain": {
            "/": "bafyriqhijw5soalbtppuwwjbskfiriqy6swa5qd5trgbzx4nypnu7mp7iyhx7m2iin2nxnglmngvjgirzb7bvlisxq3uygoik7ozbybxnftiw"
          },
          "index": 127,
          "links": [
            {
              "/": "bafyriqa4d4dz2drgvvhits7xujwrav46rauk6u6avd6x256otkqmuobtmoyf67dgwberdihxqb3j73hnm4zxdvcopyk4jfi3f43dk2yrnq7fs"
            },
            {
              "/": "bafyriqho3unucm3rtrnokidt6esuhlel5wyhmqref7q4vitossbyj356sktbfbkhf4b72phrxbbsazwl5aswl2hopvmnwwqcxq32txa57lpfy"
            }
          ],
          "mixins": [
            {
              "chain": {
                "/": "bafyriqa5k2d3t3r774geicueaed2wc2fosjwqeexfhwbptfgq7rcn5mwucnhfeuxu2nxbrch3rl6yqjlozhuswo5ln3xwjm35iftt3tpqlcgs"
              },
              "value": {
                "/": "bafyriqhrjzpqd3oyqj5l57sxr5m5hmxxkjzols5mqn2yceydssik7tha24hqvtoe4jmrebq4ffmjrldkdueriggzx75u3uykj2i2jqcg3qxmu"
              }
            },
            {
              "chain": {
                "/": "bafyriqci6f3st2mg7gq733ho4zvvth32zpy2mtiylixwmhoz6d627eo3jfpmbxepe54u2zdvymonq5sp3armtm4rodxsynsirr5g3xsbd3q4s"
              },
              "value": {
                "/": "bafyriqay4pejiehef4zebhnn3zzr77hj6a3jmyvw7x24sp4tjtspbbie6q534o3nc2hhoar44w4dsivhibmsisjbmrijnorzomgvxstsdbl7i"
              }
            },
            {
              "chain": {
                "/": "bafyriqgdssb6xcnhimkaosz2rndn4cqwqa4iute5ebyldwcucbk7pgzrrhscaslqc4omaqoqezhqp3r7yi2qcrvu6hwrjce7ccj77ukengwa2"
              },
              "value": {
                "/": "bafyriqcitpzgls7agljo4dmvaaqkefpafmhizyyy4zeflqxa6igycorqzzlhlsfysyz74txmizlwfrasmpm6hzihzmi3r2v3jtobd25akbeko"
              }
            },
            {
              "chain": {
                "/": "bafyriqei75kvbmjdbw5rixjmmm6nsoc4ik2wnd2vuk62zerd54geirmhewywnirfuzlwub45wgaft44tf3wabzxv6fcursbkgcaqouulhyfsc"
              },
              "value": {
                "/": "bafyriqbdmdzhxwwl7ytp3qttwtg6sd7wpibf2nnuph66xb7w25wey6fa2rgdxa4k3hhw6j6a5hwakch6dziwkqq4lhux5wmacc3ghseeyqclc"
              }
            },
            {
              "chain": {
                "/": "bafyriqe3zxf5g4ifgqhea5zozxpdcfi5qcpkfpogtxzbizmmuxdjuzuq44a2cifbr7xplo4kcfsdz2c5pxfxektavrqxxb3nvbmclxz7qiz6e"
              },
              "value": {
                "/": "bafyriqbfnqbqgocvddrauqlt25trk6rszcuie5fckiz3itacfc5murzudczuwjgs4d3fd3xrwhjjyoevf2x7dnlyvnvtnkbytfrgi2uof7jyg"
              }
            }
          ],
          "payload": {
            "dataHash": "ce4ab9e992527c4f801eee58174be9b0845673f3aa565f293896a5491b9bee3dedc6bccc99b5ac3275fd2a9fa2f65c5a51785976cb9487ae0d08efd3ce6b34c7",
            "round": 42,
            "rule": {
              "after": "self",
              "count": 1
            },
            "seedAlgorithm": "shake256",
            "seedChain": {
              "/": "bafyriqa5k2d3t3r774geicueaed2wc2fosjwqeexfhwbptfgq7rcn5mwucnhfeuxu2nxbrch3rl6yqjlozhuswo5ln3xwjm35iftt3tpqlcgs"
            },
            "seedLength": 243608,
            "stage": "precommit",
            "timestamp": "2023-10-26T20:59:47.037Z"
          },
          "source": "random.colorado.edu"
        },
        "signature": "eyJhbGciOiJSUzI1NiJ9.FEDcEurNdWsAjg8ZOxyTvTOU8QbpKG6iUQo55COCMOstI4HGb9d7xPn70ny6zcnKbQ5Ahu_RPu7Uq3ibkA4WJ0yE.eJAReB3DycaaYqj4yY85n1JWJ-xani8Qx2wQ_mkfaHPj4z8TpQFRfOuh5GMHVUrRWr7aARzNe8LPJ7jkL8jWhVpOc7UVzEisyJIE0ozPpR78kMvVTChb6NUKoFPXNzrHFsPFSTr0Xeb5FptXDlyN568reGP_a97Pv8UDXrrckFOwtvu_jtWh_2BxGEAeTzO1fstaYeEQ262sD_Q6-pOTuwtV2ZQ592djQ1WCoN6nwKWFid6wjNXB_038H1dTu-cXWBxIougX_oIEOHyznNMesTGDX-QiJ4EF1nJXVibLfLmBVyLYrL08NixOQwQMM-igUMBSmbihOaLbV-CweFweMT17RToxTEneuQQtiNgtHg8At47JhcgdIe34YD7Zf1d4VSb2ZX08PWX3ASexaftPQG4Hm5RFpKBUQ4VxAhcDC0LjPlUIJB97TtUbjInP-OzweK_Yfq4KC60hG2uBjnAUgWjZjiJZUpWdF44gCPl3OAUNGC97MSbHhEzfbIOa8H-Td2DQxpo0MXM39oRpN9d9TKxAzsh-TIaX8tHSw7RnCNlf8Qo1DrrvKNgH1U57ts9sO7dbTXdgsXUJPX9rsy2GqpzdfBvIRt4gHcVKaFA6w0GD0aRdCUO528vKzLbmwGcAJsV4L6WEdkNtm9aAWPHO0uRNJN8wpRWAbYLFlzPe5rQ"
      }
    },
    {
      "cid": {
        "/": "bafyriqgocskvip3zpzfsrbhexc2i6gfoeyodnhibfwenl4lcjnt6dxyecmqaklkbcpl3hwj2hlbj54f3krfayd3oi7q3yiftg2dod76uamhv4"
      },
      "data": {
        "content": {
          "chain": {
            "/": "bafyriqhijw5soalbtppuwwjbskfiriqy6swa5qd5trgbzx4nypnu7mp7iyhx7m2iin2nxnglmngvjgirzb7bvlisxq3uygoik7ozbybxnftiw"
          },
          "index": 128,
          "links": [
            {
              "/": "bafyriqecnpoeomgloimevqrcwwmtyrrmxk2eqnca2hshsi47wo5vvr3popmyfs4jk26dzbizkhvt4i7vt3ovirubx3soetxffsxsscld6jo6y"
            },
            {
              "/": "bafyriqho3unucm3rtrnokidt6esuhlel5wyhmqref7q4vitossbyj356sktbfbkhf4b72phrxbbsazwl5aswl2hopvmnwwqcxq32txa57lpfy"
            }
          ],
          "mixins": [
            {
              "chain": {
                "/": "bafyriqa5k2d3t3r774geicueaed2wc2fosjwqeexfhwbptfgq7rcn5mwucnhfeuxu2nxbrch3rl6yqjlozhuswo5ln3xwjm35iftt3tpqlcgs"
              },
              "value": {
                "/": "bafyriqejxy6aira7vp77y3asalqt53lwidxeetqtdj2wwvq2q7nu5ckgro5xdznlkrhax3yazcxlgpoluabjxucsiuf57drgcaj2uv7nxrmfo"
              }
            },
            {
              "chain": {
                "/": "bafyriqci6f3st2mg7gq733ho4zvvth32zpy2mtiylixwmhoz6d627eo3jfpmbxepe54u2zdvymonq5sp3armtm4rodxsynsirr5g3xsbd3q4s"
              },
              "value": {
                "/": "bafyriqdx547v6ucsnavckdxl6lh4gg4icbm4ofbafk454usrpcrjar5cwsyzffcwres7axz6gdioog5mq7l572uluweub3w7crnc6ljohjjra"
              }
            },
            {
              "chain": {
                "/": "bafyriqgdssb6xcnhimkaosz2rndn4cqwqa4iute5ebyldwcucbk7pgzrrhscaslqc4omaqoqezhqp3r7yi2qcrvu6hwrjce7ccj77ukengwa2"
              },
              "value": {
                "/": "bafyriqajzpccmhodexvh6nvyx5pi7nntx3sgus276dacvtplzrllkb5nqbeguh62xkega2qlbq3ycpfpufwdtihw7qrixhjbta7iz7ndq3lm2"
              }
            },
            {
              "chain": {
                "/": "bafyriqei75kvbmjdbw5rixjmmm6nsoc4ik2wnd2vuk62zerd54geirmhewywnirfuzlwub45wgaft44tf3wabzxv6fcursbkgcaqouulhyfsc"
              },
              "value": {
                "/": "bafyriqbdmdzhxwwl7ytp3qttwtg6sd7wpibf2nnuph66xb7w25wey6fa2rgdxa4k3hhw6j6a5hwakch6dziwkqq4lhux5wmacc3ghseeyqclc"
              }
            },
            {
              "chain": {
                "/": "bafyriqe3zxf5g4ifgqhea5zozxpdcfi5qcpkfpogtxzbizmmuxdjuzuq44a2cifbr7xplo4kcfsdz2c5pxfxektavrqxxb3nvbmclxz7qiz6e"
              },
              "value": {
                "/": "bafyriqbfnqbqgocvddrauqlt25trk6rszcuie5fckiz3itacfc5murzudczuwjgs4d3fd3xrwhjjyoevf2x7dnlyvnvtnkbytfrgi2uof7jyg"
              }
            }
          ],
          "payload": {
            "dataHash": "ce4ab9e992527c4f801eee58174be9b0845673f3aa565f293896a5491b9bee3dedc6bccc99b5ac3275fd2a9fa2f65c5a51785976cb9487ae0d08efd3ce6b34c7",
            "paramsHash": "8ece595c1a59f8715e2e689730def646a1ec25d7a151049fbd5347edd58e905165dd2429d86436901cf485f2af6fe4c48c7deea165a76c18bf9a820c8367dacf",
            "randomness": {
              "/": {
                "bytes": "gqBsYv4DaBU7ql4F8sVAe1e/jnEFpFENjYV8FR7VeOMy34+eEA74Q+gBcE2IZUv7fZTPIU99hSf9EdOM/u0ygw"
              }
            },
            "round": 42,
            "stage": "randomness",
            "timestamp": "2023-10-26T21:00:38.527Z"
          },
          "source": "random.colorado.edu"
        },
        "signature": "eyJhbGciOiJSUzI1NiJ9.FEBZPveR9sAVlx---OfhakwqoRUPoB2tgSG2SmUBTh3U8elaHVyJCo7NUk43sfX-M1E_ZTWN8gWUrKqxRB2c6J7A.CKhnU6fQnLefh5GF60iA7UqJkfMLjLKkv5tCf5GW8iRpuO7AJFRZ72NrGJUHby8Rd_YfQqdosBKP0Y_ahGQxp5q-eFQ6uMIfF0akTd5A4phupg8kZD9f-2HJJNSUfaiVb92ZOL_ujRai4bvZF__vUgTVl2xECDN9ec0C2hld9HTWhAjmhNzTDqZdzZfwJQ0K3O6tk6_ktZMW75eo2_3MwLKINtcLh5nWT6wbhFftR2w0hO6c6K766gVhHuLwF47lvkAmSfCxydQjD-DGvpnbeROA4ktKDdNlkxGrTTfSr9TISEq5QqEU8VKtEJlYVl_9jzGhYXI0wTqts2UDkq8qyMxgBQ6t29gC9bCKImprshS14qkt_Q3zsK7rM4Rz4d6fujFyfGgXnHlJZnYoKbEUUMs4XkJ4yb7VvQQsz4fm9QRqpzdUzyz54TbC1wlTLDC_iKemdOIpbFSaZ7ltmZgRRuea7jTgXcc2nSPzujVSsX4ckZ4SBjx7K0B0zX7eaa0Js-l3nb86P3B6eLG2dvQ4wS9fuEYkDAHdOe09EgEPlFzkPtIyiV1ih6EMRA9zdCYvaefrgWiSPsZ-tfvm9AyJuoS123hAjc77P_oMCO_j3bAtrh7rt6-4I6E_YRvd3AY5J5Q-S-Ymfjzlzwlx-jaqKmFrR4id811RNQK_Cl-YfUQ"
      }
    }
  ]
})

mockFetch('https://api.entwine.me/curbyq/round/42/params?autoParse=false', {
  headers: { 'Content-Type': 'text/plain' },
  data: `{"beta":0.02588813317054728,"gain":0.002108530448904805,"pefs":[[0.9999999999999982,0.8901463959005033,0.8895169121130755,1.0618720583663228],[0.9999999999998411,0.9826789025414312,0.8277220147234465,1.0927209401773097],[1.0000000000000462,0.8270931762794625,0.9830733605074146,1.0924884272651938],[1.0000000000001128,1.01725195136088,1.0168590680776008,0.7516792897487737]],"nBitsOut":512,"isQuantum":false,"seedLength":243608,"epsilonBias":0.001,"nTrialsNeeded":1421185,"errorExtractor":1.0842021724855042e-20,"nBitsThreshold":820,"errorSmoothness":4.336808689942018e-20,"stoppingCriteria":15000000,"entropy":25788.590280945587,"seed":"Idq0hPWm7im0sXAHxt6C/gpjIv8KEEiqhIWkLp8LP7digH7vZKwnn1vDe6ZpG26bfp219kYMmee/fVGShafMyeFovytOgaJknG1aaGk5kcxrfvapekjkB2TgOdqlepwzSkM7Be2NuAf2RR/03v0YM6ECiSP07iuxdOfyrSzICt3rdIkTC9c0ba18y94TMFeaDSzPCJH4AheAGuz8B471q612kVCp+pkg4dORmw7PAstFgH3YLP+Nw7u243bFfjg6jC8+IWXxbp9Rd/aBPPfOPLaOiw7ki473m2+ROPKkXaF4YwQQYgJTULiDT8garlwOpUVSqxvzdVf2CKAkM3cVJzzgqlmUTsAoGGrc70fk4TRBPodUKW+/y2tB6kuCEAB8HAvPtXyIztbqkogXEzMa5r5uTXG//9ruP0+34q8b04MVlz60Osr5HnhJDQ3tsmeP1qsJYeZGGdbbcr5k7G8yp19xuNxWnomHbCuD/Ibi59CyXhtakcNf318KOdDrCFxf164G6G3RYChkn5asPP9uwOgHQOviXWo5J2XZI9sveuqjCBsR7yrfVOOIO1TKiJkUnoOZSxlg/4Q6KmFqpZU/1++sqdLrh4BjuLXrvgLTYKU6Rq1acgienLmHvTxkBpJARBC/V9cZhAzTUAG5eKp15kCv11+2OujGDbieVbEG4dIUNSyKhgKuDkpkg9x/NLrTMm5Qtzzf7M6KJCnOcH/d/2aVIFPViDw/j8mh+HQ7fKl/ySkbynzi3El/vlT3yyjc3WQT29Cuz14qNWW7gwwX/bcnAyJ60coJKZNWz40q8jTbqylnipzKb49Xb63zCi4Ho8XKLqVTXa5+obvQNZ/SnuAn+GId4QZ2UNJnCDtudBI/uhnE3ZxEvHTBrpHbx0KEhHKDNMQM5uw2eEhARPbn9ffcFofGDG/kvpVhgaTT3H5AN22HH32PZRnyfZD3kYPqDL/0oYDd52Bswch1yL82mplUEsKuleej1VSywtIYp02lOXz35Gre5FDRlLNSrWUcWxyChcjjFetwSSrvhubtBxDzTbNrihDod3ey+M0FoeBqSsBIkURp6RB4uggnPBnJwWx9Z4ELH2yn5W/AeUmKMqC+Z/2etxtee5ac4gih9T3EFn60KNs6kGYaFsDk4gqY28OtGLaMjjV7WFXY/TjX1I5mErIBDoBT6yJdeJvCua17l3NnxRX9Ups45fiHlo2lqUK0c6HWfYOsDqVmdkGXakaCKtxz2yBTk2QCzrIyQB2BdxiCulHjPBXE4heupdgOXKIdT0A5YaX2uQbZ/TwuoVgEILxu4QbNgngflqwGuOQ7wRwVK9TXjBqBb7ALumTjR3O4G+Q3FwcvxLfaVcCoGirBrP5OtglYSepYu6EHiQ+2j8w4kXkFB/wFdDk0+/HKA7ZGVFK0U7ZInmv1YUfshXbvmL0CL8guG5l50j407meMQQ7wFjnPxhpMp243dveWmKOnwlVuuYuaE1ERIPVhkOkFUh1HhE6c6LGBMm7X0kIs//M17NH2dEbKyNcnTIq0uwYRox7lRTjBbwwr50RjYk+jDtgUbtXQmXVHM4IHBCbeBQZOaeQwidf24SfV71BeqZCSiua/3LE5r2NbOsOM2HqG7lXkYmBCwhGRXVqKC7fETerjaqFe0WO3+Fbrqs6M5qWkQjp3IIMoV4Ql24mDN9iSchXDkwL5V1KU8xvZ58Dwe3/Oo+tnb8vafpVHqC4oH/IdJtEPSF1rtgJ/0O/hqBUHQclmNd8zSEWXRnVgiDjKQCgaYr21Ty1qyY+xS3sukyV5Cvr00ymzFyHIZ2TbKouPzyAplmeAKly5zfilyhpmKCARoNdpqRM0O40NEbWJjOblpfBlRoZBrsMeIGgw3kBzFb3QReN2393MeCL2gdn9ZjwFFzW9a8XN82ABO8E99ClZy7W/xm00UEOM/AqV8g20eRU7AOodd75UrfhDoWHYxG6R3IaO37yJHgRjTU44JT21N7P4PfgqlVfT4Hgmu3SY1OY4mAFjF7DHI6C28KIzaUppnz3TU9SSPE78iWeSK2PTi+1lVqECmK9+J2CFY/5UJprYmSgvntN2on887/MaKWhkCCpFLN52zwzw1UOSJWe8hkar90koagEwdYX7mpPT/gXKr7CcTNKJ2QdThp1BcmQ7MFNfq79ro4BSntIRdVmOES0Mp0YbA40VXNMG8neQJHitNb9yItADHOz44cZVRCRyh6lfAMNn8y0pYpNmAGyc8uPY5zAtNSB1NJZXZoFYbNr5DkvmoOv/FZPF8gog0gHhg226E+dd34VhQB8jTkNYqW1gq1yOD3m9/N7ymlsNAM531lCczh+J80zUe/zqbVjd8gOGNOm+h+AP3yCp7e92zKZQGB2XVpIt4pObxo6YnnuqEkq3e8PwGKWrYsfGU9Rxu2j9C1z4Nk1AzGLrfS7PxN6BGrwWEddAnOL1OwUPnUVtrs61qjlkP9IovnLR9qx39xjbW49nSvfVb3QydjqdLjBEwrzSA6pwHPavVdPWH8ToB6MqsZyNjVYMWwn0BeQ6ma/Uc6LzTENKM0GYyJzqR6u1SaJ56qQsA38h77JrMgOAuIHz0n0E/enkycdwqYO1ITDM0zZfv+e63Hk4zVlLv1ikcid/EHM30KdAcwOD4FFzkTQp96S8L5F8MhnYpZp7YX939Tl6TTFLFyX4s7qPGLLxa0Gu6QTVHp2HfTfsOVPr1nXHprf49laAdm+ka6BQnkIzaOwhJoNQ0qp1Q0JcE4lWYE2EHgBai+V916jirdJ6nYUzKKUgi8NGpTZIFJWmgbI5w0B3m+DzwapcpeQp1BOcEJY+pyQtqRSwXWCRfQ3QVqUQayy/OJZMmyzB+bfw9Fhjo7e46yGtxvT4ZpIRdbg+PJ+XgL9d3XNfvAn1UhAJqIELM1exVllPLs+mLxJKM5wz16p3dY3B4izSSv1k+1j8De5IG8LXErPBLFb2LSHQJD6A4I+h9YmqdM3zov2x2oVUcEQKkGg8GCwW79BwQjfND36nSfw41SxDeuwtMFzPAmph8PdqI5SO4dtjSV7YspZoxvQC0TJgJAjDq+SKmWw2VKaf2YDiQO4qjHiHnhoYyRTwUp7JPdA6zQqiCecD9T5CYTFnTWfsdT5lFW3WtYfkVbGlahYkDCahqdao9bno0EuSfdtmbo+Yo5f4WmMSGg0xERHAA8AsRDtxAM9Dmf2UwtH8ybLOwAaR4qcuDKcj9vc/eirMxLG3c4yTwwCa9uwwejiX1/RlDhFqD6u8kXw3/wYRGk+SscLLuxMA489OjXRgMfl5WTgPjugtfU67Yp1K6Njvvxpw4uNo8XEdK501oY/amTtgnk1mK3yK+Bsa/UaBnwugID4uu8Zpl+WK9WncnBITCNLhxCa+7c/4k69G4XmbXwjQ8y6yZMbewN6ncJyyloDgsJ9RGQPMDg8h7Bkvs1JXA5ulpM1/EuhjG5DSZvFZg0glsSSwU+mqY1njeCeJBYbxQjjsVLTtifjKOeRHWRwte+bgrrHavonpgPYVRsuKSHWVFhsFzflu5c8RdUfFbUSByiw4hQjsBny/h36JEPC3mXdi3PDsCPZ+3LEhgUpRj390PaLukkZnuDcYVBwOxxsaF9JXzsGZcGq5T/K7kJbKMBAdg+3w1M7WeAtMOsWzwutx24JoqfiPdBWlz6EDjE+PcxKt4As9ctty2+gYJTy+SMa/fVqqi4bp8NGVdxorLnzvg4I5WFN6VKlCzbGC6T9nWGI2lsOLyxjfwz6KHmWMkcf93Kc+YcAFm4NmZiO0Gf50bLakCbi7RISo6k3Qf2Dj7+m403anfuphZVwkgIjbIvcLJdOIIkwiJp2vhWdDj2JLfBhAL5dZpRqQLtfGc2PGfU8WL9T6CBobuUWSxkCc8vk/gFSPAN+Vaw3suhhe1SVW+P5JL9TKdvJMOo++hNw4Yn+G1vkhT4PGAlB4/wUQ6ih7UN2ga1jlFYaSsyKjV8Z9DLd6Dl9kaur380zThpN0CV4aOhos+Z9Fxf5bcsrSTEdcJNkC7ZmRdY0dPB0IjyshMI9gIXip7AcxhctyEH4xpAoxnTmWolWQubn9F0xq1LN8b6AnrDIDZNYZkspq0kbMCP7H9u2mEGyZYzLmBbuDsrmpBq7/kN7gPu3lVOpeWQajSXPLrh78nLyx9miCJSREDm0VwCa7Aefed2u+pnR8CCVv2NzJ5a4k09domTovRFeEBUtoqJEI/cYEaloSLPbKjcIOQnULnL9BR/uSyD19TNDFyQg1BnQMXqrPwAOQSRFvpTi34KCBBxdnD16DRScUOBgIM/bqyqxDUPZSRR8a3zOZDrkP7LHyJO+X465f5NTNiMxXCoLTuQ/nC+Jug1lxpcsSSHIM85qldxo+BB8bipLxPq2UKEStO0RKGOP+ayEEquZVkM3NtMYWFKssrHWWBm2XJQvSEyzWov/gN8vgVPIcOm/AJyRvRNhIRfltMXXLazgA+7Rqk2CmgAQwMY1dyr1OvZi1DYBHBVAqWGS3EBngsc2h+bdU9/8Nth9C8k67kcBVBYzFDXSjZeu3aqKnjl0BMEo1GDkItMFNDBA1WmHs1f4mxpgDADpP3WFoikVbVckb7/1isgZrGlXL6zdTQkZDDtldttKD3nO18lP9IMRhx9dRdOehL5nO4RMou4/6s6pMPeoDAeDB5ilphcOfj4Zq6O0LLPCMRoC3lL9bDf3s//RjdrUqe/fSpNa1yOToKXIRPZsf69pCR9nHSQO3yKaIobXd7usetKTkDZEh8tpoRQ/eYQipKeVOA9NJBcLEf+mUL22+tUOKzPOD2mSmK2MzmRyc67d/ONiF5QGIiVW/Usy+1sqd8cPJhc/V0qdVLxRakH9/z4aiZcM75p01/tQfgz/rRMaJh8J9HA/vlmxav2zwSfOAn6c8fJ2skmpl+LYxO1Mv4VxmN7m5y0tZsgiD5rgJ8+fus4MHT31bHjgmiEyoBGW8N4+U2y+WvbrV399AWAZImKNvhUr7sGqWY67pdzvxeOrZAvto8BkR8IjVMWJjDdyU0Yg3bjkekQ4nZOBejsAfKBczop/wWP/Luh+DJxhb4R2tF12qchDk5FqsiEeVMn/H1YliZ0whhPECviQsGjJxS+4oH/AI7WJxIL8MqUWW69jAWCPykzZtF/prnqeQtj9I+aFRNg0Y2ANCi7dOiOjSJDKWflGQ7LDR21D51Q4YTZ5wxmITvI7Kc4mIsIKJT4m04aYEQdCxoHrpreInEuF47gmfpZPFa9qXxb6ugvVXCqu2cHIy841fmFlSap63hMF+ry8ILqUsNeDMBFmP3k6FK43sN3m2g0nO7cReY+WFSmdb6dVwG2KEtOIoP1nOk8qUpFcd3vYqVtdCyRd3EvG4pd+gbraGGPG6QEu0ExKnDhqHuMHgcqlYlZaPLQrtEryADQQny7raki2EFfTbrtKQQ51j4RYWQkvuA7kzzoTswXpQ86V6OlRl9GiSR4wA5Fl9mz8N6otrwX3A/QgARrj6bVYVRKp2kJIcUk9rnpF2U2GEdUSQAQCiXXVTzcutn+I8f9XuOtxRECmTjzRMLNfkyrwCZPbiUxfb54THgnBLtE8w5C+rL/2YSKvgZ23yTbAv6uk9IByGuMw5Wq1MTQBYaqNpgCIugQiUFWlz3QcqkmvIf459orDNHHeLUbMqwztpDNKcbzkLZYFgQ/wReOXFiHA3GzubJxEC9WLtrOCmkQ7TpXk4774sL4eKWm9WDmSqZstSQeGjaN35iiqHvxORIO9Qj+nFlib/rABiVry+yKugjFbOTXPJBhAlCMxIRsLo+qfcIKoASTnh3Gnpx2nB7+chc19FFD6X8eVRGiALx6HHjWf4vl3cXmMDc2+pp/mg75jMLN7NO8DKbnK6UtOsneXZaU+FGQJqn/eFxZdRrxz4N0Xj5piM9CUTmzQ00HAFNdls/ApuOUoVJAb7/xpZaqBb7/5jIxbUUgdyhaKl/aeMxr4/LzubNXWORE6mWS/C7y0QGdvvoL2IblsUww5+utdJLmXv7JASQON2Rg/obXotS77lkslMWEwnh05BpzMwC9NqWnByVBuI8ZhUj51pzrd/I2+0IcOdgRKAHAVV5DgHaa//Gm7SpAyQj2H0+JCEjxGXNjMS+rw+1jd6qhW7vavqJs6Wgi4ubhUPm78CJrEfe9coIxGQHQMwgSbDaMIBKFm4TcvUkAISqop6s6vnSMliuIRmT2p6gvWu4+Jb3ZuPBVGlGllFxm5eDXKkSN1mUC7ugo3XBPhJWjoERjxptapOOi79A/7ldbE/2hFLfqXqcAv7C2DkIDkBudR/afbCsjBQwMr63Nx6NKHGY1rwvR7EStssXYN6tcYzOyj8WqFpHKerd8CWYnSstRtvolre2Di02C5De8T5RLFlTBYBYvdiGJYbEDugRvhokzaimIRqr1VEY83wORvEwBTjsBLFiSnsajqK3+3EA7BZt22CfGQ115JyLpXHuaTnYMuADm1y6t4Wb//g1qzGdN1e+hCaXCKP0KrbO0CP70g13FEGdgGfWxhyxY+MVMAIRMFLd1YUQk/dIirhrRBkifG3ToUM1mbnGIUtr+wn9cdBsCjPmwlSqX31VP9iqBSlb/do2ZBujxjqJDLqRYSMCN3Ld/bxlaa/gS9eeFeaEOeNAm7amaZw4YgtRVHbzj5jkPwiErDfC06gxTILM58dLswcaqeje4o+oZm4cu7ac1SLPc9dPyuRj7QkPWbGfwJaxJyru3XOZAzCEjW33TiPs9R84P4Lvq9zKo+GK65zdGMnGUG6wcbq2qB+LXcCUhU/ejscyO9/1ku+xWXwWUygNUn5oMoAFuJIfdX9zIHDfpUaD4dKiLoLFRym7FW7DKaUeN8pag4BVBbIUXOhVdC4/wMG02fwOPO+5BVVWmgWdjK7HF4yNfzjy2qE5ddqJevIb9z342/JelDCuks+YdDf5e7y3YfKXSJ+R7kNGptlo3znW7sYdHxbmEI41WIXGMXTGtmM+rwn4mWsk1t+vO25lmJ9V6rOyI7YMObniVOjjuNdgRBKuvaEmZY1RzJqai0yxeivgduOqUV/9iaIl4BP+Nkdd5MxgI+IaeUMne7w1LddEcYKpXCnba6ZmTpp6P2avzRmhXroM7CPNaFqISqjmU/GUywnAIwedPP6TsZC0gJWAF5XEGB5IBqZ86ftIVw1cZKAoqDR8DR8p6Xp3FzOlz83qlf02v0MWJ6jJVtElJF8ZBvSQg/2EDVrljUpouf1ucRYFrcjVFszv0ZchysGHsbOuK88XcX1bHhgHRvhuODt29uPsc1QpCfLlTlLmG6wJNWck7+YAxXI+GLpppaLAapZX4d9iCbcTcxIEVhitwieQYstySx4tz4wQlHFbYFrtkW6Q31kpJlW999F5c/AOYTA02LkrjdDv75NNONk69BNlyLfSW7EvnDimdkcf1uaNIvVRxnOXQdfQpwxoUirVjSEgDH9edPDJXL8PgTtRTBjE6nEx1TFQtX3o2gIe0RqtwEmI9WEIQTkTKecR2DteQMDn8v++r8XCqr5BRYRf/9y7AxhDGYn3X9KuJjapUhHhYMbLllVF//E6deh2h12HqAvJBaM86JnmIne+KmORuWcynFt0JkLVBNDzQmQTtjgMuHJN2z437eek1mmTVnBSNUdN9qPzzeSn9V8jI3CIsyW0+C+XTt2BSa0rZpNBq5ZPWinGaQ+x1dzdteu3RG+Fd80VrhYOlXCqk9biLfaI+r+HRJdRDaucfDHnZ8p1wa6mws8sVW+Y5W1/uqJpDcK9ioIx5uZ7P4aH7kEn9oOrGNWiXXScb+Q10nT16CEgI94uD9TimF4pQ6fYrkJYV92NLtlPfxIHDFWp0rmZ6VwuT4ofkKOqmC73lbUAXrbxnJF/QcSXYqBvX7L1rW4vz2HUJ2IuRhzPpF/jylKjlpGr0fcHFhIpDtkQfc1nB3ftmY3SUEI4chUPvL2zvhvYrYQIo8bxElcXwMWB7fXYuqOz18OhZIznGRxvK3Pe6R35f8xOaS8gYY53Prs41Zp2kMkp6iEo2k4sIC6Jss0CKUZuISxTOpsDSi7B7BY6VHNIHF1M18yA+BI0c9OyrzyF9sBBENmBbyv6+6BIMFaGhTCpHSd+lDsudoJpVUVrrP5K1RAKaWjxo8QQitqsEFLr+STrH4mpTS17d7qXbra9G0PR6jr4vMJ/UzlxvcHcRTKzsfiLfTz4zfcjFkeCzTKb+lVpAfmPZIclvkutmU5+RX4RThMEGB2KZxgiTf75SpBfBafXrRgktijTPO3sTtCWVHSU7iq2A+zydNRo7HWNDaCmnhSMEy0RlGj6ljLNLlPhxVQqDxMzGDzCSkpJIFd3LtvUPtSmN5cBzfZLN5HwC4Aoo+XNL3yhL8+v6Tze4l2/EStcca3Q5pLNU/pyLw7oodWkfPk2aB8Lfv0peh+tHuidJOSKWTu8VZRGhYzBNhqdHDjqzDvCNRpmp2KY01Z/C9jiq5GaIelNF1EnVwY8ZGo1v9JihCGrtaoj3q3eVRz0b/G8Vm38vDBXZqWtnJPyvflZwWFbzJ7u0JrUbeqEHav5fap/zOHfrS62eSgOFlMBnzvBpV8MDuKZp3VSkVVU/vgqAtWUblQ3T5gxtNDzs8cQnjn69fHSv72cJqyanJK39mzlb7e0KYFaAYMDIdA78kVUYyNM17FDGOo7JP75SXSJSYaWYYYrK4sgwPmSjYJq/flgaGE/V/AvGKVBIIUYI77Rc1xgmR/HirsrWkFeMGCHxY5TgqEFK9UOoe81BXolSmvPSozdqm9ld7GImVUOFM2k1yJSujgcdHIhQaOa58Gjyqsu7tJXwLZ+JMRLsCaHf/4aTzPBTxHi9v1w/b93zZEYHakUCqOes3p9S1V4V50ZeXwHdIa2EPsp6hQKm39thSVC4d8G/5TzxceJkz0ShHLIl0doLoiKWjueJa69GRK6Lfbc4s53fsBmCbgRNRu4wCyw0pUM3voS9DFqUn9pZrLBhJlX1wY62DRv69OYtE5el3uSAWXdvrOOo6SF1mkULcMIHRaep/8gazwyq4BxgCwiMTpjxP5rla/fhvPsiA3PneXEolzVq0fGKxXEGYHrtsK2rqXYPq/TLlCla6TUZRgBlwHl1QEqLcKgSLv7lr3bhFyyYTkTHt3Dx7aWl4zI7agXWl24z3B7HOyl76TZgKiEP1dsWVMV4bptGtJGlha473+N1DnT9QZzdFpAzr8UlaDmW9Uq5bS7K8dDUcxwC5jrbl4Wh/UiCH2Nj2fGnRlkvby9Tn8v4GtT8z0wHK4GdN7N10axZpqaDqK9gSp1fpTgXREmhqqU4bLZnre/5f45p0VCPieJ3FLsvtOxeSca0V4Aya03UarhfkhlJ+mxliBT2XyDQo7qF7bx6db0rGTEg9dCN7R3nyMN3/q+3UkaNMsVW+6Uu+IIFseGugwhkCq3WaEOdgiOZga+cm0OrjtpKTbi+vUf81Y328BO+reNVEg0m2xB1dZobUi9VvlQb7CQv1LL7x+zxtg8sO6/mMurddKGSJxtvxCROTs44LosaDZhD8pmXcJGuM71IDSq3fZJ82DOZ6HOVHH1XD2YFMpROvRe/frBSpWYjjY8v/Ou5LDoJcnejQQ5AEpB2aVwUF07LuzqICDUCOLmsn+g9eJ/jaPgKBdSWIUAbQXkc5TM7gz6EHoNA80CvszoKQJJGUlc2TyQRHxhXySTP2Kf+fUnWfxx/uOm9qQ1XNgu3ygAQdwh0KdhAB2a+ngWdhn5Sz3aj/mCTaFkVTqvT8r5Jzu/TTrF6dASoq9bOJkP5mkaet5LoPe10Meu5hILMH5hidP6S3NIasoJV+apNk00q3F3aYTCKwm+bnYiKP35dgP5Ao/YaBxKsWjSX0rbFwe5irm36JFgwzmD1GUWzDKr5ZsoAJymOTE6ZnbKlcQr0NKNVUxXwslESWs4u0Q3b4ikCaM42sLVrpC/VBMCnevTe3BT0vJruKEaIQgBn8SoSedJOiSi7cl+5TmvxuFdUmVFwmp0zL4pY4HYp3TMt75InFcynoO4ONCr1CsNYAF8kPRS4CaWkAQGBD75dWnpOQ4axpVOU+JoCZ19m/nkTNTLVRzkHUwZ86cKKbq9zD3I4FFzUb1yz87rCuSjQPvK8o+JTIaHZZzQr+1z/gxheSf/RKdvsde5h0Ds6leJpf0nVKBdtU33lb9SuAWRlJUsOpOWekchi6cBkrCEgNgTLHcjsGctkdFOHl+CO7P83G5jJIVALBCw6nzEEPLU60raSCYvpxnpV7lJk97rODxanzmxnin3jWhxRBVu8hyFusLYL+EIHER/eGNDLWDjdJvAX2z67B5r6YwkGRHhWTOVZ9JcJzFopUfonYJCDf4p8lQxXx+CVomounmubqWr+m5H3hvWsv2f5/6cx6wgWfUwdqxdssz1oOFyV0uPlveRHgVgtjF7TkN92PgfnTlD/EIvnOeyiWd9hXJEiJW3n/zjhwdX3f0ZapOUgKJJR3BEnGOs+MIMo/IRVZxdCrDed7BL4g0FQFp0TUTr2BaHeXDoMDdciDMZAuD+R2u7XVD+nmgNIdM8R1r466oNy+mAsvMU7g8ahlD9bLlaKixHjAIgnsjwtN/3NFdVERxbqsKhXv75klZq7h6slQCefXRd0CtRzOLBKngscqvt6Iy1a5HX4kaBiK6SakfB6Fxpmrr5Po+vrU7ghGFbMAdotbBpr6r/2Vw3Jj8rCXkm8xkAsdFlVjREflfiPBndv/E5MRsAkrwzV34qidYcx6XunHCwUktC74uPh7fCC4fACKX80po9CWijJM1V/4PAVxCGnE3mDZWAtrIou6sRG0dZ2PdPBajGzqxY0i6giJ+lD9mQqRCI8efgegL2iAyDcmi/pDIybuxxtg71ch4HZlaKFWGXqV6q8GIkrjXcph92T8+7QQHhq1fgmtZ10HnlgZ+H03uJ7nFuXQLhpZWZzz8/rj4PNiMW2msJGsP3cJiuucjAYdZdLXe8kyQDc+OjfuKhPPhe4fH6RsH6KC6LK6RtJSnFrMRVj03D5c0GtpYJbTYaTZA0iEiIxBYJBFvG9p8HfkH5tqVup3m02EQFRxF0yzAD9bgbY1UBdrC6BN9+M2O6hTozAV+WF10tvNX764dEg9MYUXINNQoE+haIaExwTFCqxrwszwM9xbNx/eThqwqAgbA7OnMICewYy8ByeCKwfamy+Ym1XlKzimJkOk3/rdGTIv/ZDy48g9KIx55b5OR4gtDhgx+gHGWkaqeTrkJ145N8IrU9uPuCGXs0hLAqYRtaUjonNxHBVXnIimsOdIdRLfpqGIUIJEl40k/GVh3rhth+r83pKszbC0MQHKdd5kfG5OdY/nFSa2ABQe/QLLkyoCJqeMakAQ4WE5uAu/dR2NsTErqLaWfmeAdxFttK3rMCIR2KobvZRhMcUvjgu4fcuWvfYTpxhoS8dhT25ROgj41CHZfk7Jrsg8twtSWJNpY4xfBf7THzE6ctViqQFgWznGcXo8OolBU1Jrcc2GEOz1fVi+dP0/6QOTMCK9xeIYKt83k/SUigLKsSXJyhvGvkQTbIQiadhGwu4FvTqD54HIOPyJ+pgdZYUG/YFq0BxRW7aI28Y7B1LVIlCwSsmXHnAmtQVbkEg6KhwdU48892Mjw17msqu8u2TroEv+E/Q4OJprKxBm1W72bhWKEk8arA6RxgSVBhZlD/9WtjzZpSp2pRAPCGciHOugnaEcqJpiOPUUblonnWnGePXI/sgGnADAaOmZ5HFi3Qrbdnl4b7KgiDLIxk7au0DDk/eCyJZCXP0p9hXdvO8jyxGfbHfPKU8Vsc2zIB1XAERP3ED/Wgh4hPxR0UZqEhfg/3SfF3RMuCTSOXP0m1CVaOmXXaC5R4oscnbv9mYaHkMRbKlypXtRrUl+Nsm1ZzsmvsNv+HhWGi8V7UOur+MRPxxVii1NSCOn4fExq/W8eLIVBFRo/2CPojGEKYK4O9sOwc1n7YYet9xZTWhZsk2BbqVua41YwJhmQxxuY4riGh0RAG1tuvlXwy8KayLpVrkF8U7urPtvWrBUYJqXx4f1m3/Iq5m5hFEVDy42WmvgqFp2buEQWK/7mwEfCynd//FE+lx/LYTtSthWZ0pDQcro0+8A52J9Dg8+HUqwfvlDEZjawsk+8lJw/wz8yca8jFDUBwpI64TM8eefdNE4pFbBzvSQOV1oG62+GyKO37paZnbft2I+p7g7JJLntxxK4bzscR7iPLaEzCeHCZzhjmb1sSy2P+Y1mdw7osA4FE8cWFpzPFXGaDapySNP7Vd+BltKt+Z/cHcEVg1MHsqnNuG78ihx981/toKwC3jlqJVCjCdFd1IsCtxIngO0mUdt/PKqCsrEIcOhTVSUADP8bNSmHMA+i2J2aGf0jvMvH0Yo+hixMWtLTRue92T1ZK7n4qrL7PItEzSf5Yt3x2Ruo7a34s5kREi+ogEIgzO0EkATQQyoPPILh6ssoEddGr4Oazl/c99M5U8kx7XdeVp7oSvRq+15g6AlThnSdK0Ge58SZ4plEWNqVDopbAgUl+S0Cl9KhRD4kcx4qm5TL3AbVDAumgzmPr3WGXGtQ9rvFB91/Pk/GWkf7iOZbcol/81QNPuUHqTk9IXxOpIAj7ynD7TYW0ywyzDoKMWjd9RvI21xE7U48DfKxH023EI9ASh3YMf5JKHS2cy9Sr7azN/jBemKVVGtiKAZ8E0amh8W27wPYBizkRELc3mG1tYAWo7i2CoICR874homi9aNVV08/RKK71S/Y4/97BRG3lrt2pnxol3pJJY3Zr20DB6lz4wwpP6L9nQ4jEZnmio03QAB1m6WRtqBdKDknWJ4VIUKny+9nxw1I6k2mKdERpyGN0ArspueYc4bgrmnuvF5gP1+c9lD+WZTEJ/aLhETBgabeCNXAx0C3WOyjBj83DC6rtpBPYKbiBisd0Fk8YaWMlheWUqsLANSQtwbVXGnMu6Z1vZAK+FEMDnik+4YfOGn+Hq2M5ysQxjrsnlXWcG5yB6tnyOxJTyo64Akugs6xIE8+QCZauzJQySKaCXFVnjgU1V1TW7+x7IjTl6zhsSnVhwwVuq2VssrhNBwAAB2UCWXJpLBpoN6yHQfFXKj5gidkv8PPJedpJbgaE0+uoXjBayOx94BEIiJSahUhXDXjudJuwl6KckwZgLWqBITv1Kq3B/Bv2xald7727Cy0OlZQKnyqpmoBxLP+oknb8Lr/81NvY0lv1jh1hzWfRxVcbP5dN6/QHSFKHJ2OBY4RkjRejt7Ct0pt0D70fibrt2CTC1MnjZOetgKmeRzFkXtnIsq1KZXo4Csip0gsyEz8q0745JQDXFcvXKwFaaCo00WQH1zB/WXpjyCUejFEnnHIwxZCCAJpTbhGYZLubNJQGovq6i/Iw5T0sQj3bzTjSkaHcFB53bY55r60Ri80+jm7GsvIKAivsViJmsgJEHVCk1qd2OJO0IBJDX08iCXQMmApqySJsIa/o4VUAKEJEh3N57361U3EJWI/85R3ifX7tE0Z+0cRNwysOzxCdFkD1Lma8f4K15gD0qfmo2QQE5WCs/RMPVmsPEez/xaTP50zJ6zBDX+N+DCGDAeAlcbtD3Qp5meEdyei8tNL11J0cdDgKXc+wroELZB7UXI09xIoQlahTIFc2WXUYWetyzzuVG/H/xd2OIyG9f86/7cQZZASmrNZnYGrXYFw2r66OAlurZqpbnvjqTFjp+GZ2NRZmhjp3lWs32ShIJKAEruVKrk5v7+/6ZS/8vswj6VniDkUj3JHQzLUv19wucha6bY7Izpd0EA7bX5IR3sAO74aCjKOCsLKtXZ05TjEqokpGl1MXcenPknuBCe+7ixb2UGsgtaTyXMZBMD26SSbj7gp163woiEK7l01cecAENNsv3PaCnL7jJMVgrdY1DUz0n821WBfMwhLPUTG3HHaClj4KBBilcVm3SehdVL51Gxm7xBu2jVm1tyGUsQW8orcL8WZqb+SsLW/7bVALlvlnQOGfUHqjaGjzSptwKTn2H5Hxn4DyPa72A1k8EVpl1200wJnGxqU4/zTv+PT3KWdam871fWE5oHCjr2Y2mbuGqnaTbcVEHj4gA20yMD8RvyR4WLQDRw5EqNn+jcYVAzHLAs8vAjCAwTYULdSts82rOUfNVxqgxrEGwaXyAoBqbPw5Kxe/BKJCU3hohWsdXtVVpoyN/2K8fGBXMFB1Yv9aauGtsMhm/qBfqENcFYnWCl/2P8HnLrdPaF8iQwLxmxis6KrrJ3BZzwlyj9pRix43Tz7VBYddfEHqx2bGZ0rCEkklenEtQtTvFwjil5Y748rSi7uk/ywEdKt83I58c8oZe7Ob6c3AbBuRG/j0ffujzgUNOoyFztdLIdS+65Fqugbh9fSjmYtoVbYNdDW9UcpG2MIqdAxmce+VgBL+iIGYWryuoXJBB9eOGCvD309ILth7srY++pCNDDX0Jt4F0JFvELpYc/beN9CdTPDC9rXc9Q8tgKt+oAL6E1jwmJcfjoEH1SL/sQDjYr2Yem1PRaEk3V37SZguDfDB7lVBqI8/XuEH2/ON2j4wgNcpzXQEG1j/UZGLwfUcdxdeBjpeYhezU8Byr8weXWutRhfkwhvRsRd89vPDydyXtDIszHrcQa31X50lJ4liKqzxOYujlDZ0dGvdE2Szi0y4Fvn5vxA+lqvBD+G7HeawZvUUZNAn0oYIxjZUZzW9M4GXxz1duSTNFn29lPGHWrKQusjy2YvU+3d0X36NgRU+qV6zwFvdYafv8jcWxViZvWaLvyfm2v04/VG6D5iVy6bEMwL8mOfylojLHigoXXfJCHc1S0sZ4KOUJfyou0lR0eHEp296643LY/L2M5XJEmy1lIJDk83k8bqlykAq58PkBCBtujsUIuDF8cxAwnn6aRfmcJ3aXlfitL+pxtj5MrLShFzhigUfV51F53gkg0Ev4RVbB5AFf39JQFXSI2pMlLQHnjkWvyUj47lYzkiDgzjYi9U+NIU9/jMam1sbXnyeIN9vov8r69jDv0+D5HbdoGEjg+XQsZOB/CCxfcO+kRqDLGbVcKbMOgA2lJZlQZO1F/SuiLyQwj7WsqVBInP/AFIKJ+tm8QRU9EoDCbjJMkBlJzKJUI3rQfUiFfez3Wos+xK62Hr/VIoeS/I+i+QxpjdrXKjWxg/SmvdcGhJPBJBO8v7SxLXRDdCB1qf4xYPncQzn/KY+sBl6MXY8j+ktgr/iZALO3okeTuOrH04+G2903bDY/uTV6Zjdb9yuejsphZj6+o/hAGvdiZIDlr0ZW+Xe4MmgX2yadlAsJN4LBglaWA9iVzPOaC3wlOZbFyKIrTxpI4d1TN9n6h389CbgAKrhtxveO58syEWOWCg9rpPNSYuaTNwB2hI5ZZsmG1VL29kS7kfXEdI2gBLQX87n1ureIfc2ppSxLGuV4LxC3Xx2nBqOEte2JL8aKrky4fr0I83XvSo/KRP5plRyQMuP5a9ctFbsf7zK3UoOq8TooLBXeJxd3/Qp/YferthX78zNVIzvkE88EV8Ankf5B+2fcgB1C+QB1MEKIFIVA9wqaWAUce8Y+ts6vP3mCXBo5TEgqeqRaaczvYznc5IYBlnqnB8FJ9BwkLFOsruiU8Vr7/JJ2ZKqjLHdyvkp39dkdrmcvHaF9z9jShBVvyi+YTdk/3FVMuVzjts7a3QbwDmyHUibIOVaQG3AfruVRPh6RfYAQMI+rwWJ4eXdsoHkyrrQar/JKsidsH8SQ/iN+OsSAAJnzdQM64WphUFwKEJvUG4S24Ook5rcwgf3HQo4F4f5idsl4SVOKn6mgXjsvS59xgk6KmKvZiknGwLND52gW5OfirH0uZxkD1OYSW5vHY8Sfi2BqjybCRoV/A7Vz2d+nD16q6w6NZbYFu7MTwqpL646gprSslRhNNob1MwApjITZwUAa3j0X12hvAEGE/Rfc9NVeaYye6gQK0PQ6VIibxR1XnfdU8vJnZvvb3XWjiVc80CKxUdU34wyU2EtDBFnrlGlMT5HKbkJ/DzJPbpPHF669HbUAfhYIaCanfNDYgCTsn4o8+SaISAnqZkdt+MamORKgtiJtIam3lN5MhUgXkabwU+/mP5VBqukux+A+wztnKlNz7pDsHn0B9hax7f6mv50Wps+A/ZHai6Udv8/NkEDv+6CzjkQtzj90Xefs9NiNX09sWwDit9D4Exr4We1aaMOaEU4op/+mCXq/XX60fSE+acx+8qJi8OySWd1ZKbn8A6IAk2rNR1JgDgzBZpJ4se22rPuirVm2toqmiUtUVviulGPAXALU3IkbA5MyCMtySWt1BQJLU012pci1rBaRt4hiCqAK37HC0PkYtf408tC72WROU7qMXlvf6cFlRyXUZT3QHOZbni+0IjXiLqWa2YaEt2DgLUIobgTbLSZqmOj+R23BgUesapc5aEHWFaxm+xQQKF4LDM58zeaWhqELbJQGBSYklDMBY7RJW8FzxOnSksw8zv7rB4DUUr+/56v3sKMD3hvqMdHuZcZ4j2qwYGPzAd+WqgAtpfEiH60g/UCZZHlvBtcecTjjuBtXFzpZnHPIjJUktfxWWOzp/Rsv7N0WdkLtWX/Uwv33YzkndrW/7CsYEiDllNsQ5Maq/etu6YBUop1NjPI8poppRztzISYoc89tMSqahIZlXdOAGT/NdWhRiDg2rPOvqTP/Dw73VlVU913fPo6clr7XcPzD9WPoCAnTST0W65p1HXAZ5HGf7mDtxRFIkhZCKEBP06O6aFBYzywjrRvtsGwhB46XfCaoDZTzeNclQRMdYglvbQTLVG5aQc3bqI1OgSVVn7wQrBaHOYNxhu2lES3k+AXFn+bppfRNZaoM/ap0cwEAzlULVyNNRlOIDBnpp1iRaebM4mTSQZUofGzV7sToY8/iR5lSZEsADmtLtzC2Nakb8BRHGLU83f5z9oXdGZvYao5i9N2FSQ+eK5rERuRBy3ALpbv1AuL9gyk9LSoCMjfxCuflp4V5DoY17DrnNU7OxC12rneeBfNcPRjXsCdG6ly8x+b/wwMKihcRcJdu6xPVBtIPPG6z/mnkQPMqaZTWu4Am2pozR8OhMnGN+MPuAsFOAB7kGkxKZSfZTpyVO7qEPF4FL/ATP5K827BC9Jx49lyDW83KtweKjWC7j3oL1GmQrvwojdUh5QMCcOYorFoj2TABacqJpMMnMGuvxK3tvHX7FJ7y9onQDsBzSR2+v8ylDPQXvyIgHQ7kSDn88zY3KApxvVabKV5Rmn3YXdAT+EjUchberg/8wzCbZlGQdJQOUrmnbwQwqj+X4otxFEbukGUsCE7k6QWbGVo/Le7C7g6kbV5ipWgJehQ/dqVKXoSPpKKUIGxcsGNW0Ah9TymYTk5RZMDZ2E3k5Fc3VEXAHS8K7WHh9JnnOvVuwORvLW48CaQnhjQVRb/4kTEvmoJ/KZ4KY/PnvP9lX2Z6rcSGt8Yehl+/PzjnMLvqPBMKrf2x6PyT6OTOBSmy5h9JElwkOe2qxYG1eLYMMd07Q2ZdOC5pfGYtEOb8/WW3pVYLO1QukmivGUsvCJIpVaHolVpKCd/R94ktMzeqw5ZLyfsQfiOJFZISVQYRZvga5QeNCcAFslU4cz6tMuu93W55M1lhoHcSH2vEorB1L+ZEbCBoFQU0Nwc7WwsPLt+swfZd1AFfgHprrYT/D+e1uhNHIOz660xwemUt1HSyy4rUenlcdFOcAh1B++/WTjgtxr/krU5cUhSULknGHkUan7eJkZeoincGKktETFxZb3aNl0NQC4LoXvE7zAzP3/zLNmVdqmdUq1mJV1AxQ9PF7NjdzDNKb4FJ0D9CjQSh1zZfzMVFiRgQWnMXJdTM2UCaX5kNRrdHQYqUGMQ+m2HNCaGQFbIJ3C9R37mU28fT/u7Zvbk3hbjV+oEwL0kHkLm/UM/8A461qpjCPFxXErf4HXn4QT0qFY7oLpGod4cx1+2xkCLA6xriTe+3vYcMDPxKpwVEplfdecAar2fQALpvhtdV0v3+sdOy34xu0VWFheYxx33HSVkooKXL7QqAG6KzbTMkD7ANJ7RUKdtyoPHF8RsEYdEYQ4gZmHSvX9kqNXAIgrGkHWjGqPW2m1eeyKRlNavZhKOjFKZHxZEZ1TjzgD2GVNw98O695+z/7yAR45akKa4zPOA5R9vFBA1tb2R8Qj4gdIZhMfn6cT4qEZZYaROlyWthadJU23PfaTSQjpLCDRNjrVNSViASfhGWKPG34Yx7yOAUKrTwEBnWsXb3waegJwXgX/AxQl00Py/wjzlIEhSA+SRN1jYGAw+7D7NfCZOBdPa0N7LjTj5CN+4nsYup1nkBG7Olj74aZ3Sm4EaJdZ0sbacGjBL9fvdJyWnohyhak/H817Nx0iQ8Rz9Bro8LKpIUVGZvFUKzuDrr/0bMdgv0HdmfHT3gbA/51/zhNnZRDuyB/iLaUwWt0DvPCr3afnvX17tQ0gvgU2m0m0rozSQBoVneHheI1KQV6Hcge/cUyR46sER9Dj6EsoBwZtzS1Syw3uwmZT5XIspQM/FfExRTtLpXZU8kocl7GFyE3ePuO3EFU7G7QI1XZcrONsDogvGw1fuOyOIx/K6Lnga1uzOAmCiaRO+ZdwC9WXasEjTvOcNNIhKMyqJ0PJ1Jro3Xl1So6NHgNFmVFG1KCPCVnMX/55Yv/KR9fDRr7cOdfnizBm3GjvdZGPKItR9yu1piOY3xNv4bEOCvFpItScYiFsfkVDbPgGTzam3E4Ta7r3nqhgIwD1cecKIptUeBtpgivdEV/uShhrEq4H5hicSncIjyYn63d/nMxGKejH3dC5R1T2RmdKZP/t4blpCNLRuM+KOdtKeaDAWeU0iCacQvZ6OMjYdB4857bUhXnMTnzgaTJYBDBlgbf55cwx5AczqWb/H2Nx7bvHZWuc+uv9sKo4WWcMfiJ7oufH2pzjKxkb4GmHfayezx2Ny2uTz82wg3UAcXD0fnonSncUvQ6AMDtafend0kK54L22KoI1SyZaJybB2bRfvXT/bUMcu8nCXRBvKMnejWE+nD49mfJZ2iiuk82c26zAFtNuyLjzOztfU65pIqS2p3m6C8AErFMHYnOYdn+7LJ/fuhD57dxURgpWaaPrUaKy1mpmjMkc7HLP4999vttIE7Sp4FVLKtp3VDYJUoLVoHNZ4vB/XyQ0lnWVMYfzpBoVpgOgUmf5EOWERve7Ypo6GRoEdZCyMPBSUaxaquE/IPlygw2dz47RsfOh6qO/0AnP7A0nHxjDt5FCELS09uXgRShMM5FGko+P0iVEGHtaHbyAhFPHTadMj+byirqxG3gcKjRtxjHvPxXcAaaxnlm6aZ87Q2C1aD2XYHyWNMhLMcHruYv2IYe9Kum5aJN6gnwAoXxTuzapfohImfD9JEFuRoDDosBFJK+W/09f3zgdNS0kgRbQtneZhEm6DMVAXy8KTaHfeNQXTlKmq1DLhtvnBjaJyGrsMA9RKaxJHGqcwBsdeptUNEVtOf31DjwvApSg1Cp0O7r8UpCTYtkpaqLLpGwAZExl7ep1XmWs5PvMcTLuVvXf1FQDRyOB6SDLFUoeO50AxYi3rMAgb8lU3WtKgTOQiN3VFA6ssqgceRRxvnLeUCJoad3rolcyoFPd395Nc4+GhHlAC5GZNgYtWr2qUG2D/Spvo8TE5biLLv3LzT/IP/BAdfKXetDWQrD30b82eLse6dv9z6MNXRpYjAhtyLFvaHRdfZZc5Li3UUQ2u7qripmEQKbhU5XP1ApQo1rBSObOT8dfSPT5gjbiSxsX3s41dVDWZ0kdDq0VBPMhMAzDmPrQMc9C8A1mqHGv0uoqLHsoZnFhnYQQk7VK3vuACQL5VaAcTOHgLT1mb9CLMLLtV6L4p9cYn8UUTdrlj0jUytCy589VrHYe8Ljgu8e84LsCH3RMiURZXmZot8xyebSJZPP8HYQqoGX5e++KGbkqF26ASIvRtNOitBHeGLr06XBWTI7rk9EFKIWQsrorfrLgkFelFxhiwTml3bLJwnsfFZl6hy73ms8j8NxcD4FZh9359iVT5Cc6veQegRi/HDRd0E1I9CHngsmq55FNSmt94RpbMyoCQ+woir3BaVtvHulwG3MmEqWNIuhI+CVi6vqGIojcbUImZ7AX1R4mPh4RGgUKvNyQvGvspzL+0olefzzPsEljxxeQCrVTiDPhoK8a3oaOeztfhtVQNwCiMRAmMeOsT3g/6u9GRw7QExzn03kMDFjaNAwEpylWUKwtXJ6QIwLULKRXS3MDDuQVXo3Tq2eere2eRidnj+T/HEF5XxUC1k75grsh4ojVUn50Vi/uoaLEVuOPL7iPgS4dzh6FzjR6dwhPfPcOKoCO3ncUQchT2u4hfQnTKfVFWcX0QfNBs/WYHcHD0R2DKNj8j9OkyaByI0WEICzbxdIl96rU3m6tmKPwpBP1UjPcACDIo99YyCDsQhuyNTJy0KZOUyCDO/jzaJY+9kqI7KIZVhZEDhaf2dY4NvDQ2mSkpmYWXWjAGpU+AKIu11Dbu4TN8saUWY1ibRSuXeoFDk58nbxdxjoLACAQ/SM2Cnl1EvG3MsQ5lJ5ZL9CjiIiJl3Em/WDOXT5OvzmncG6IJY7JI1bZoxzxVVFFWTGyTNngR9fwHT5B746XF/e2tB7OBUl4/NOcBlzwnXLoehXLHTndeLbQ0PaujShsevaQdFzaWSTDU9T3WDgIxCzTQBhJJSIopLz7qoWhyu6r1w4tIYdQmoDhi5VyuCoKJ0z4LuLe5pRyZJsryzrJGdTjz2G8A1TsWOzRPY41a2BdiSOx2DtAd4ZAGDuM5kYDP1FkBR6q7b9Dziug/XfRbiVfciIhEgZ2YruVLXX2W3dP3AMc0I2383K9bTPbtVDfrCiKTT5Vn3uJDYhcQoG3JiI00uKObH4kJmdty4sNd9iyXCczFcZYaoZOik4fs/DN7PrtEGpCxRybL4YnLW3GKWzc8YHFychtB1Np5CBhI/+ZyKQD/Y5pKQdwrRUdHFvDipfErxKiyUXcz7QqNM3sjVEZe4DGo9QlL/qwMu68/2R80QTXScdKcnBbzhM0L3jfI7hiA+ieaew8rvXFkRMf/VldrfxRO2+Mrz7B3GguzIlNevImFlp9fLxLqlHj2BUZZETwE/YRhAM1bB4sT3Xbfty6EFdUE0VETk/deDRV3CLDIzZvaq6FlZF2XNpolCjYGoNntWKjO67WwzlRbwc1whC9L+lBjJgMBIr4NjZifDr8T2dqxTG0h8pmOi93ZIGJKkqr5tEJ+kV6aHmtb5Py/TBwFjfndOEipDiMdmaB5Ww+/qa9ugZdzN9FaWVuyLxn7nX6bthVTTWtLsD1Vp/Ovkw5F0RnW61awNpNI4fU6DAQjVCVouM61qUSIalL2jKKKhJ1KmQeyGF5MYw4Z8BnJB4vyu3RGS3uKL3W4hIy20lSpn7HJhJOvKPRy2GplFQ5bWwyXYur9M8RjnLW2HQw1e2+c9jkd+gRvreEUMdVZ8k3AZ2yf73YSmET+uTPG8+qDoy7CHOYczM7MANZbRayKEZHeHd+bMTfEFIOAuXd1o1TMusPVgXIDeDFhmZVb7XJsphnuEduEhCbfOH+jGI7DB6MjyqVILz3lTbH3gZh77IrF1HoM6MrCGVpZtcxpMDXqxAbH2S+qFdCtP5BQ9Qf5J/c2XYcSPbbigjiVcZ6ceZ3rnLpVfz5A8ijHUt8VBtTsIkhNMrB7gAyFVP1orxPUb1pnpi/JT3HtjC92Ai/LGu25JnXFiBQJuBzq4CpYnY+TbQpTGdsU5r/UST+MR2Y3RY8cGilPwVOini3FjmOZDOVSTMThIdu31/ZDeeAsiD881/apQurp1SH9PSt1lsdvIEhojpAw1G39MiR15GaAX1aGaj9oK8DgABpf0RqgkAiphkejnq2tdeXohU1D+7C1/pUc98bET5Z09C/sB/ppTggF1fpw9nH53TY12ZkcbzaI/OzvEuUFh5ZBacsgJ42okFWtFUOVscD+cwf2f7RBVXLe1AwVuVir0TwjiKZ2yGPKNTQhYRZqHqBweJYEfbV2zC6a1mL5PHH6QeZv9pCTJkUJEoPzVRKs+nyV/Vp/z4fY0JdK0YdoTUS2ALsibmQPEkvohfDjYvabp4gVbDxDU790GAXn/ozkRNVVXo8s5xT+k1yuYdgEKuHJ5vhFUG9uUvPmS70NDOXa3H2Ml0jY/ohox7MOTUpD5RBqKuSEJuaA2z2ETm7IMn6WCaW9KUHwCQHHk1zqatLt4lopJutu3Dc9MLxkjuKxjw6zTOTf38gMwWvkJXrwO8+cUDMBDv+cK5HEXEOxb5nbwkzjvGy3qmOC9rbLb6ISVE7jIghki+geF3MwRqpehRudhBZ9MUsG9MnKm2u7794R40n4VJnh1ReDiIZc6HoD15cAV1W4cY4V6DgFnwFefnW7ojwZTcqQD7sbuVzvr1BqXogQzbaLSuCm7MQTGnYSydNRhjWT3xKy0iW4/1yNwodlx2xZ9OmTqjdN8T3nSdH2ogT4uwhkHPXLt7kSPtjTM3bbe4wzvbVRvy8/6Wi2Prod99EcInEcbCCN7vQHT+YpZpbpSeL5u+TBkOPk/OevnFAOvLd4i5DwCUUjlU5r0YwCFzR4XLR/Fa+geNh2+DxO3Zx1f5/WXvQSB/TK+l8mFQRb2366u/bKd/sW4E0znqOjru7bXUme8UeRaGTd7GULi/GHnVB564G97wDtwHA7YB+KiyesZgVEKIhmiAd4cRDV3JxcVdB7XCam68ohy8ck6Vuz5C7FXGKjqc+x+H3FRpIh0Y7BGJoFskT1lmgAr+xDgntFED9zmZQqoGazN7kEXYoqBHn9mIi956GK5djfSVhYdRBzqkPBsqUSQO5ofJ09nGggrGW3tzMAM4IJZm+OY9GtEp3XrqLcdjOPZBKEo0cUi+/BJXl7gyo2vWtuB+V/6CLTyMy9J9/+qXqbxLwcXBZucSsJ2z2eSqAl8jYZvdzG+/Qa3a1bdKhH0sHnRd72u/Th6+fvk8bUQMHVq+f4dnf0x/QwXCdZyoNZFo5IRXRMqOfnpFfcbgq7FfhLVYUCEsiQQ0jmaJjmmiDI+dW2RfsBwjDr/+wOvsdEXVHEI8D8Ffv4nHKfGRiUPHr7F35JTpLUaRZK3gKiCo/ykiub+oD7PZJFq5Tlm/QZnid6tuskMSgE6GfEK6gsn1deFWPpS9C/wS7DqQkN3BMkW2YpFJ5CMC3YYXA22lCh1SgWcyGCvidOVOKfuJaUPteDKN1zEQ7NBag2aeeC9K4lynNMJuLOFye2NSzQIFqOvVMQES7YEpFP1t2PzG7vjdgQKAopInQZ4yTdNlkeLdmUi/rM9mej6EhKfvSg6J6u9DcBmtlBQ0QZ7hTFdl62+Wryg3kfQo6DY2ePFTL3W9cv318uRS4EWd4rey29wechHfiRQTdx28r64OpNAo6lQcy3/oFnCa5PQQYFondEYCTvKFHvnN3NTstMQi4OXeungTTsI+iEFG2SJFgnHx7dvLUitqqiovbUNj2pDaFWHQ2ylp2wgpFTLwJg6ys3YTXnOheTUS5HZFbbMgv48d15L9DQ/uYyviFAl/jyofZQjhYrwrohdI3UjJRuMTe+2w3qZ6194QxrpT9jbZdMHme5nIAvutSxwHNho+2w2+eI69AtR7NbAveM55Ss1EmS259UItd/B71UVX90u2qhCU/IOxX5jEVFYFxrK3pK0X6gxcg1ax0wZ6eoAsEtzbcQfM6PUnbqzhf3assQGZovIeiZFknAtOvAKEZTRuwJiW2Qd1LtyKvuH87DemnaVo/YGMiRcVFfm1nsF0ZS41I/B4oZmu6l6BKVF5ETQzqobDk3EKv3sjVzt2jTBpMwsy70FnoQ5j8X4nL8L9J5dom+vSpvSm4c+GOJf6jnci+zRSbi+hKj7ZbRxa3SJfiHTHfU8E4n1GfCk9rixKYwcGZqkIRsoz8iVYaFMsQDsZM6qHwg/Nwv8EELi1nFPO7FFxjK7BjUjRjDytTnZrFYC9zJCnTOseokWp5fwuNds/WaLX4bGZVyI6ZxVh3i8WuHt5w2ZGHTHsMI/G12HKsSChIlvKDKwL6QGUEykVSQwu6x6X5qB+3aEASGsEu22YVh8dWnG7hot2bbu9v8ez0rehLjLZKf5uIgwcLZCKpfLV2n2KOTkaUuep+A5iHO6oiYQav4lUt4vMtmhL27R1QuWDdijkPOOC1jmLb8KDdOL1Hosns2hxK3NKrrr2rvwK7tOWFhoxxQxxce5FBDUTOccuQVf0sAckkDvVf/Ltmhn5ypq2OE3EmbyhPRZt8H5x2RTWQV68ubKmMfzs4MuZxFDfzKzevEynLQfCSLMr3tssg08ia1sE26mNxeBMmsvUyXrTJ7JV1fUsTNc2Wk0bB6fjrZud0644tbmuxMf5yi8JkQlRnbVVSZ5tYvnKf5SexyMw6UTD88jkntwKCoDSD/dV0D2aoba8LPCiJOuKXHQv/ANaOz2dCjnjilGIBbsg4a9/Xo58FeHx4BaKSPMS4KmyRw0IJ9j1s7AkNOmO5nebsK7jvKzLJLdeVAAGuSp01X8Tfb1nGwx2Cs2B/PUU/lGYjT9JFgoqFzXLMIqTooS+8DH3Q4YuyBEEC9ecokzP/Mlho9o9EByhlA9wAnivkLlwk0hTlPloPhFC3mpstA1eYL9VvoXfDqLXUH8JAuTcVxXZtT3K867IJai+SaNpri2ETKRoh4HH2O5BQS3Ce05JZEmWQ+A7lFTzSOjGZ265AeQ+jhoeYSrNSaN/Et5eaGlMLUwRvFlCOET/c7as3c7t6vaXn5B1nu+oE9a0ah2bgN7FGyHGgmhW0gyCLSZzN0I42FbHUoHpE5KqJwbwt0PB//72b+ct1xXDSHLA1tvK9ivG1Cim+jjXKfp1lK/f8JnKc5H7yaE13H+0DdjYpZLk0WLB7x/jO/wkkfMx+/pzg730q/8GG/QXo40EsH1hxz8W9U6S0MyFVo+Az/xCPzd1F6zTZ8MhJP8wTTYSCUr7UH99sMuPZBa72BwriVekS9N1qlxbTiGJuy+WFi5t2TujbrVcHRL1hrPObmhREGmZ9Eid3ZEFwcjFPdOCcP5EdhtcP4sHtpXCB3JCJOLbzEcsPLuNf0hXTkmigqhsqHsUXcAUO2dW9ayymuyxvyQmrN2YHk2dAr6NeZL2zNNS+sq35v8OaaEqJ8KVyRiJsfa2Un7dQPQIXGJit9i9GqUkL1QDup2ddiN2DcER/sfk1RNLGpkAyqfGgFTOFAHjoUQ9o4AN7KZz4v0TmL5PEsqbrk0IE0Mu3QJnNChvCZW90ydzQpYxz4luDbq81I/OgADK/g9N8dI7lNJNDDT3DWgdwIaQslx0XNimauvoND28qOsa3uSjcOJvLF4oRoHZm4Whjd67lzKpFsyPpqqTP4NyhvhFQgZGixoH0P1XuMOibGsDwS71ylgW8YoxoDBVCYxo6kZJLGfmDFzGr2l1sEc2Xu6zPe2or39hjT/aZ4zqgzzIrYTQIZNPk8wNBptuW+xy8uO/VZeORVZOXZno30RoSGcom9uXhKcqBhC5HiUz2MqwscKCE37fpv2Pss8a7916zZw5Axqsg4lb6MY/bLkxVxbLGCajqYi2bICEJhXDTshZiOZB+JwGJieUE3pAWO7DVagOaxP3V25i6pEYdFpyGF51Q6ShVq1tpJ6w747mohwL4yU78NajGENVeXux97TycZCKUIv/2tJHWr0v+VCL/CdNqoc8ro7+Ij069WvU2zEr86UC6fwWeGCwG2GF0WqtXcGuGgCTOP1RqHAyYZBwKfUFsu0bgsCWUtboka8A5VVjgE/rmDzGHj9Fi+u23Zor1M6qSzGqvDnc31WnhD1cvB0IP+JBhOO0WzJiPtVaGR4CYNb1awhYC5kMulADaSowG2eJ5uHYoe9kBDmT3X3X3Rvwn7H022LD/c/tiOV1pnulTEDzwmvOUNxS8DkkjePe9Cu5oZUGdYJf+9ayUHVkEl3Kki2v4eCXnF7OYyCT9PmRfAqHn0k7/KmNqCQuUjR5niMAFkYYU338rtCx3kAm35LWKjJcY24H454ZWL2JdZAbsjF34lXG6PR1rnzzXi1TSgkP3vsQQHxKSKX9WJGSRBUF49UjphWjVqPL9j156bJ/U+6+M+AqB7/qIanw+U3v9Sb2/TjqjpuxNZGspXXq0RloqXY8g9Qduknsb2BM9y/G3aKeJqcEYdunJxM/4bbyNwSTre5LfcSyun0zCzVqIBmx+xNwfCDF3nywvRy/v12wZ9W0rbwde3b23H3vv0pXWRwtczCgahW+B3N1kQITrXl8GZXSpse02maO+TH7FmvOhvEgGa7EyyGGjbOhRequykIeae6nycriR+rFaOPJQ3ggKTR+rZSgnjFvH+/qfj4yn9TmWXcb7cNi+NYlKRa9sq6ldmDYhsSTWC8leo6pNdqy0B/uSOzP9BN1bC7G+4T/uyosRuMHJE2TRpAmA8+9Rh7fMFSIx2kALljtrum1bptqhJNIvqmFChneFsFAGtnyYR5WdNMlLeu31rzY60Ws5SWTPLsWOM+3+73yUt9OnK9kmQy+XnXVBPujl5uCnxCLsKtmQJox0wY9U97e4xAedFfyjqt1w97WNLyWT1utyVqfH1bJbMsGtvkBvVMtIbPpj7rXKBMB+qwFw4q5SYCJbzdCvLRb/5+vLJk95OCUCs2AekKIMpJF7E91292eKHpux3KEtRIM3OT2RsesnsAfNbkFcJ+Pq+JUdNvh2pIDTkn02nJWWQeXc9WNM0+uBjzMzJPc8PraacdhVA+IcISPXWnNlikOdaMdTBfFEgKPHHjj2Qj4FWG3eYW3NWwKjedvTfxDLwhAlLQpfzyYpxS3fqOvowKGv/ujPjwvCVEwHa5t2xphzf0ujYCSDOFnSqrkBlhf23rbwb4coCbLPB03hgRd3Fsj4oITdWnQON27qZ1S8RixwECtLsj6Sk6nrIFX9CVAIihkIuvuTmZVNSX0mBYzyOfgOwOgTpw6/2gR2RUB/vqpafdmJ/Cwf5TIIK5ex3osBb3YMyUcSi5Nd2DmZy6J3H2m4pGjJK6GA/Hxa++JLwTeblQnWkOwpKw4dizbzKDRv9q3WxqJeLRHb+iP5dHo0AGkSNiR6B6Kz0cybmRxjUDhE906aZg98W/U//D9pmiZ6/TwhQR5uQxUahvjMQ1kq8Yo7pCX0u4aVsqxS1xhzTaqWgZeWCNKi4KJUNsoz6o83JJqL4o8T3QcPheTYYUcivtQEHpQfgUqBooayUVrKEuHzVyYBN/r33cR1xUE60jdOG1CYLbzAoUVYZWZI4g/cfHB5EAtdiW+yM0u0OMZy09XBv0W6Yb9C7ZhEq3I2F2WLTC9M84GgSc5u/D9bP0KegvFt9YmbkAYWMEwR/m+8T3hspOtg8skLLcdL9iOX8UB5HuFfCtw/gR/XQgk9sSDueoh7+//yQ9DxWaghjanpaurTu7qpWSy/mXLbmOH68h56S8PVSYSqKPq56FX3/wpbbHj/ZbrhyMf2cAy5inQnW08eurEPoNmi8TvDE3iH123NwZAYGUoT4j5HbPPm+NVRDsXL41Au1VXinAhTDkFrJq/iFbAIJbmGFHb+oAUOWptXJkHt5DhZ1mV0/BKDl9RAx8QjNcOo3NBZ7mXsfbuL34sLDBKymyyi1dFsuoNr6OePdSCBxZ7fdOV7qkCgzIJoLOm43V+MakS9ej8wozVCLO3S3bzZT/kQhrt4y+Z+CaSs/xFaTf81aUtUVqNd6Vr1XVovz73tFvu44p28KRGDkXglh/1/vtcI10tNaBrVdZQj02Ou9BhzawoXIgea6aQjlg9u7yyvNnUGYSueebSFDI5DwF/+iKOq4YNltu0mcq6Z/eN4YIJfNrqu63qxaY2HMrvCN+D3vUbvikAOGV0fUZ4XJmMATuyuT+E84ssvrYQYq7jK13Bx3g1M18ffsBwwT+sIEJdM5R81HrkYRo09MyPcBGBtS+DQHm9iJdqm0cvwDG/4ZmPdABBxtboS0pV6RHOei3oMNoCmTIJsRS+6/+DmlKdN+avf8wB1rccEe1FmW0DEM3OZ+O6BvuCbKeiOzNTTo3ymF3YXSXxC9gVpLP7z9XSQQilSLmgMhrWd55BYSKUEIfZl2uS0rj8enIWAnCJNcZD7kTOG+VSgH/XtCdphUJh7qAiO5cUZ9vZdp1y9LpeGanyUik83gXmluaTG2Yt/4tJNH70VYtysndyPuIfLPtgoLDyjcSPGPoRuKBk5k6KaPJbDcVjCgArJI53OIjMtixccHOBxzErCrcY+5vlF22AtGt5oLPnKzBHLmwwB44vQy8HmxyW7bkDkjcEHpGfPUFgTGFSdByBfVIYN2PngP7FulxBAhDkhEsds8Z+rEIJ59zMyIMwcf6VoWX4FbLsdBm0odaaQ2wUScrRfvknrMTtY9KUYmONjXPnwhbPu0OrGNNxgrbQmhGVYLvem2a+RniPTHxboEpL+WDlz6n4FmiGDoM0Nr3QIgfkcYR6F6R0N8THAx/jQDxp5GZjTELtidQs0joANgax6DO9aqiYCbQ8k+vH52JqAk76k8Kaah7wdZv8xzz1zzdjGpAo0HNFgtHN5TSEGVS4RbTcxY15YDjfcidr5JCK1cOWRGezvvQp03BgdZ6Bjqi4UYDQ1XwvIaAv1EPJs6uTRyemDK9RSehGKjOO4pHWmNaezmnPUvi9/n2/XBDCQRTtgUYPQEYh1AOjWaX6xVof0zVPbdPToKZS1X9Bnqs6CighT60FteJEY++VC4YHqQFJxjp46SlMH2i5iKJ+RqJPBGnueKagE/gE5OaG/w7fMGJdsTjKsnBn0V+NzKsSUYn0LGXEAf6yYX2GqM18KWtrt5wR4TG4kH1eDTaOHy1kSLTMLBqS+YdI6plZ0ZUy+lwwRtfXHehZIQfrYFzniJyzbZ1m7pwSeCMUnB6pbXHIinc7d+wioZ2gR9BlY/G63OuWRREqqU88vDF/uTGpBUoTT8EA4DKwjz1i7+26Bg+elfwk4SgkY5bZCLQEh1ZYCaUy4CS8K80L7+dclmJ11sPIT0F34SGVeAdmFY4Hozxf1jvck4UbkHz9vGhIpEBOx0CKG6d+3LXSv1+vxbuqsbDYxPDfaFTXrl9fWEAeeLhgQM/HlPCPzzpTnqTF3uNh9BPhkrgg1HR5aPwlaIX4FfQV6l+o8/bs8x9c0/eLcrXxYwmZYo6UWvaOmRcI4x4TaHRoSkvoDqMdF8+jTZBS/C5dJk4G6vu0t7j6UH/CCfFZ5IjtfuvCXGYsuDbjIqnQ6fvJz12smExoolNAEkvvQ8jd7sig0L+xqK30gmmZpGySJnzHAWZeIE0S/aUe7a1hatXjMZ4Dz8xwePwTkTW/f7zwDm3c9U6t5/W/hwVJVwN4He8QFUCIgEiuiYmwDBnq1HwS0Gtm08WYqwyCK/+idYBSjKZwuVx7kHkLp0gsFJxGpFyVVVhcdMSKusygFF7yX1srB92PjLkCH5zfg+IfzFtFasgHieZMf7AHnKBrv3D9fsSVPKOlTtYhjY8WFIKNWemI18QltcCPqmTLmzWz7teBw0KXVsEVxTnnhuNluXja91waQxfVWsRVFG3OlWmxkq8/uAXdV0FyHJQDnqKz4kOIaYSJm1/LPwx5WkTGYMgRgHYvyOCNQ9b6ubT8slUuwO7f9JM//UxYHJ1QQQZs00d8hvhHo3TEgiz/eWYzMPREIiGbpxVpjaWN0QU10N+fD3iHqCuUfc0CcQMxykULYAAeuopTYTB2hOTmguu2QLR2xmtDPQOmvTDNl3kUEefccaI5YfjwS9TsCGewVSWY/l94VUjLq2cF6TJADBfIQOf1nqDTEvKOKUsZ0N461rbOCj7c7eMd+vQvZWfPGffmN8uLcvWtZT/ZzkXrSQswzFMzzCx/OibOyV36obTqSwk+5KqAoOXl6zNviDIz6tauDA4xi8Jxro0Cm2hZyk+kH6K+MWbNNllUHA+z3DbrWWlI7IUN5xBLBaKTGOOi81QdFHAz7Vu2z4zw4tyUqvCkFqi+efdXyfUvXXco2alq4N5jfvw5MKmPFvlyJNQTMFfRytHF2VEs/dEXjkYyhHiJ814a+BUK1ZPf4sPWT6yjryEgwyC34SMs06uSWT2EsMODvDqFLKU+n3c/4ZNKinLyJknEPSR6W7pYPpaRYW3JbHZwgZgiXMy+grRtQsyQTTNo+JwyYHmo4qF8QygIFrFDCv+dHIb2l+rD4ClEydd2qNu3bQuLgjgsXx7h8GnWc+TqC20VWRwl8yDv1LHaArP/zd2/GU7ucJmWq0Ydzt9cWvcYK4zUlJC3Rgz/sl6ZtX2/ybhJrPLnN/0DR2QNUtRSrnHgM2bSscfO2f8Es6PrpCgyrlD5n6VZGfEQNOhrKK1cLcw2PEA/jvyh91YOLGgg2lPUO62KnGZpNcwZtpaYe7WxBZRn/Vl9GQ03M0XE+vSdLssCPibDsmJa1377PDJAW4lEK1psMvsIWOOXXSSOyKP820Nn4A4Lm70w2fB6pqCPjtus849hIOF6Vjcvo71exFsE8yOXuV3yBodh93bKBc0mY6yZpj1FjjV1LA3xiZSiCYsBebg5CDwRwpI5e3kaqnf0nlSFenpc+0sjQygTRtAcOOPFfBqzKBS0NtcbTHwhfwflZZLJZQj5A3p1jnsRomQfG0l7sD/6TUThn8MvB+sLMY1XIBpy0GSzburXa4+DaKGT9igX8h0KtQRAZH/1T/dl/tQpF1S55rAOuDiQqAEyN5G3rltF/6KAX5fg7+zDV7fpD42qhnjQlaonTaUL6ZbpmGgp713C5tbt4Nbm+sKPRlIpjt1sGRTzpdrG7LeMsQQQQ6oakBUDK/805ZsqV9GloDWApgfiip4AiA4mKN36RBCrWxnXDALy6z4tmAfj6EJfftcuJynyqZNjqy9PpN7FywpP09M9ZSPmfv7UHv/9FQPJn6nP+C9iqpdRn6vq9MMODOK77KT9b6o0SodiiU+RuRY2AKqLgYIwfRsHQpKN/MU/yDxO1jcpbP98Lbpi1y7N48eAp7R0Vzd0nDdnEtMd2hshRsOOYFYG1u7SnAAiITCLBEfw9B2nccDDTm2VBKaRyVyC2oIb0H2VACUKbEX+ZldEoDxC9DLNC5ChQjgmGHhXPzB900bb7zxzqCRIP8f5z/hPbiFwqTYPmiW2c3ayECiqRb+wdvylRJG9iCIfMrTYWUiFxsXjjngGIKtL6QE+dFHO97oerDwyT3UkZ8IadhiKnq2xWYINtrPrVt6I+yppQ1BWjFYrqq7cGoD8V9MqCwuicttdmp1n/xIHy6x5o9vdTth2/yvytg6DoNAblk9QY2i6i3D8lE47PYa5BfXkjH0i1dCvb6nUL0LYfjUhYJTCuFiVNg0vqsy4sACXaUOOCmIIBRSSFJEsJ8wY+jzhW6YSyqOZU16upikB6JVF2J4exINNhTukOioQ62XZ6/eL31vnoll3JTGd7JCEyg6KbyID3lhL+QPChBb2By4ND2eq97ycOLmnE7rNW/ArapGK82LbDHS4MkCJWyUP2D55Bq8NHl+a3bfPaIt1SG7EEKhViDJf2/MInprIyJLTrtzXKOXOt2m9EquyFJlTEsTf+s2PNK/uNHViywsoo2kEsi4ETUeDIRnhd/uFjJXPTJ78+sisvBTjU/wufZ0gE6Q78u6GObh2L8XcyODyV49Z3Y1Z7HS4i15Hfq9do/uL8bwPMtyBO2WVikNwDXn0vZ0CcTUTbhcCiKtQxjAOowf7NuDIMm9ILmjC2XM43Q6TjrCrH/VxZ3SmoIWTtSZStim0+iC44yUUIcMO555FtUkYZc5Kvv9VTmu3ogq7rvsc+8k3EBqp2kKtPLk8fv648JUuURlrgMu7ixK7VsGh6N7xxfOCKdhQCMMGKY2QnIiX/fSSwbFn3gAPaLl7BdRYV7O+pVRCZvP/0CCrw+Wz2T7m8te7muxV+ddOOj3yJbxiSXjmn2ySHm1WJ46q1U193YFQqtsVwCWVhVg9LxVKuY29+YDr6mi9OLQeXgchOjeLESYgUZhqRgvsLI4eNNmMn2AZ2Qi9+mwvcUFF1BHgBh6xw0F4tA3XwkxwePjeNKFKhhiEzG+c+kXlhtY/33KOGvpYPv5YJ1DYD8yJwihx80dqhOFC1jS+ePpA8qeWW01oHJCEF7Hr1iDDzKVR9vxbikA2+OCo4gl57KC02TMTCpRWzKHzx5LOHQj65GTFGLCpuITfSriv448rHRsXwJTcCfz4lIPKQPoYngbqeOGaGQ9bGI+a1Tw8rQ085avbR9SU9HnTywzQIcneqpcF4URL6OzsdOoPZioySj8ty4iFEPB0QGuwu/NPej91uMacFbt/fQGUymoRhgbUVz2PMft3uMm+tbulbU6RNYVu6w7meLIBbMPqwSxjwXVld4c2Pz+rpcuPqEqLybAn2iEHzLcpC+kkfypXqn7b/hPeD7CzaO5iZo5MIVKuAEYx2pTGJLz0SfAQvo++YTdyLrNSI99Y04CLodBaYvAgR1aqdIufy+MeOPHPiX5C4YAqLVXQnxHKUAZMeNUWWCfnZBLyPX8n93M0EXbeEOGVdbcsWxA5SpqlnM+qZ10OagFrhKuI088jiNwsBPfCoWvMQ74GpRbEGjZBIwXSYqiNbFTsyMBOohXnGooVjPha3hkVWxtPlL4COJ3TXPG0+EEjpHtFAEOaW3Tv2yGyThQ/2ZJ2MK+InKdDyYROKIHEpUBqtIB/5cS6xZTqWcXd+aORiywTWgu31MP9AdluS/69aK9j2nN4lz8a+Gwh7OT+n7PB8hPj/8WnUI/H41mJU0t5sQ+wUwRlJOitk+/nt+lroVa60Y8Mv80kELnOdDkQ7EfyK6WUMkxTfI90afY74/RUYfFZnct3KaVyIs3+fOw2n47qwBVaRPEcDJPZutqmo7qkvKY7G/iNOKvbJIIVs6u1PaN2yrTkfTUQqRxBsSPUYtj434I8rWS6WzqJu41dn6OgH2WuiAUkOqGYjCLnIn6reuuOOH8fmEwXLrXpROFgTMEtaPNDVT1fp3we15obKHq3bt/ha8OqCB0rgTszxsuaPaIGcoz+VDYRvUMYOUKhTNNnY8rhPPDW2fMMsSGq5pXuj9i+HAbxeDeKf7KWqOuS9MHbCZ20Yxo1jXGOF54ZhS0pUTT6Fz2cjQZO8GArgHWe9v9NUHz15/J8nJbYrKbb0xsOOrTepXbLJupzyf5uddUR8vezuUDBBx+ygHq/ZWt4AkCBHCsjkaeCUPzXigShSpx2dVOZ0q8OAaZNCazfOMVDRnbJfOT+7wIG+e0VVzIRYkK4WL1+LmWCL56WPX9EIpSeGM5W3aRyNh+vVKz1DRYhfM80/2lYF8S5SiDFJEJCgRolQpnx72yIXrLP48xct9WeWw0cvkonZi4UrEuVB0N38zGymAyp6C8U2GIzbkfsumx/64FQc740py2OOs27B9kVDqksxgCQ5aVbcu8QJXPKDzVRtZ+cm0BHmNaSbSBvYcDw6RcfPWXmxVEteoU4+qtePdvZfEzRwTCh9t4/ZgBWHOEuEb+hU7RD9/uIPtdejKVnxvrC/p5Yci4fJ1Pgu0b9qxCeJH276RIJdiFcDkMs4H8eEU92LQBdEttDGCZ7WhzWKNpZru2+BxNHs1ZpyYGEZlLhYLvV4ik/3YDnP9RyXIKRdV8biMi+4PBRMwh/RH0jfcf4J2UNLxcKxpt9hbXlFl45t/VDh3zjwdUBYGfcUgr0OjPi19dw3KMZFGsqdSbMcL0K3fUCbYr75/WTTlgC8lME/UQO8XuOCHzWim/+FBgEvkfFl3Asj+qGhTWA742U/UTUq7mxc8MHqc4DUIVGPUJBEj7HobeWljdIPmjgoZvkFLneXZc/gCrdIDhfMkpxankcQCqiji9nh53C/kbHkJJ5/H8CD3Vw//ns/8st5O9HS6jZuabrvmQtGysZJlSD6yI2jFAtLT7wdsCc8OuXKYI+tMU9T9fiaBCsZXkYrpFO9Bjhzomn0pJuksU7nJ9NRLPo4fqFPOAU3fHqprjgooolhSbs9UXPYoYLmWV/LjCVNYqkPwjhriAaH9XBbkpW23AeTQNHQsPMn3/NunEzUw2kSiLPUGjeQ6IqBnv3wCR/IcOS7cmbdyTHKL/zXG6lXTm5Fs73oFByZeMOJNYoaPoDNWfUsJ6H+ZhTFatNq8n1RJK3MfNBZUvoK8WZ90sLVsZBZ6ftuPTesS5t+xAXMKhH0aEl3dhYWkDT1LnQNOiBIfpFKZ+Ib+yjLQNh1msLudoJWGvg34dmMResQL1/ZtqBnWY0u7ZjGYyM4d4mVaF7Z2KbODWNvXLIrXpRXb4GhjlofE5JQcWgYzJNDCaIi9Kk0PqoJ/dzMIXoeMJv9Zm3CKMoBKGQHtHLxKNjTMuQBVzEb9RIfMIZvr/Oks6WHrFOkZu4wAOH6Yq8uvsO/KH/c3is1C8Jb3Fc7c18ISNGzJtQLRQhWkbR2scWLXMk1NN5D9U9nFKEEofv1vXXdjMo6sg8pSLFgEdC6OU6m7aFqE8RGgU7FevVNGnV4/FqE6ywxEDUYyittaAstWRsv3m4ALiJrXEvIZs6RejpTN2GLAN/GFzQX1PouAavtrlYgcds6ZwCjnzr8Vt89OkqbueA1/3ZZ6fWq/HB1XsGZRP0I/DojRKuFVk3f3+cHNLX07ZY32VJ6+OzsG7BLeWm7EfYKXB7i26WWbHa8PlqDCmWqhGbA3+gKYIKS8V2cKFPmOz1qdIGhpWW79O0GnaW4KwTjJi0PXAMgnyyHDXn2MvrG97Oso5kH/6imLrY4yhZLanfgXMKymK/iE2RotOr7eABiLDQMfzcbP3GEnbs6tbmIXqVD0yOxAwkgZlEMsc3gS23L/A+nzNwS52CkjeSOnFFX6JNEl7M1zYSsC9b17MX6U6GHBjL2gMPTXkihF8YyGX9kNqHk44OflYi+HDxXj3tbQIwwsPqcD/iMvxTRC3MXV5Gf77lKsi5e8p/LES1h91hJ9YgX9VVyqvc5oPehfcldsMbRKyUKkjTKTbNbyVg8tG0CyXsSD3Ofj3Mw8W06s7Hide8rcncgXTWl7d3+Yc/mGSICF9AHEiBywbQXzQYLt3JFZnQiRk4VPWx4T9idyF4+wfUpMFGfWtQaAz10f4SFOquA6KrZOy7JAMOt0dJCaAs73yy14/5gzuvctWaXVxsXsacpaT1G6ONZhsZtiCWBO2rGmRn9B6nbPZY010S5q65kGTpcJUs6lPk2W0ImRQoDpLV4CrsoXVY1o6UMmG7uGpoBjtU7gkkudY8CwUcPeGBAauOnjaH/gi0iYESkVUCJVGHtzSsuw1GCp0Qm68iXUx/U5DPuCqONoEPeCTgqisde5D2FJTUxEbGKbhivqGEuDihha2blVkB/RxzMUCoa67aaBBhGKjr94Sqb/fW1eMIMS5q9ZceKsX2SmNnZ+5Fw4ejxKd2afR6gf794k8m+eecJkoX1M67PHDL9KUxIHkIk8mXxh44lY1LjH3nfRCoyRpdZW366E7AVqIJTLHgAH/PWXFwoMcyk6yxAXLHhAIikwouKmUEUGj958SEM4JGbvGFeCdj9naDJgB/acgyfDiFHKABwIZaPzX0qyo4xcjan7MyTknfhiol5KzkfIUBz0oZX7iKUWpbqp0yRRTWgV+ZfS1u0VPAggeL9H5zbhMTBF/AR2T30aCz4FXJeWc++sVJ16H9CxcAsLI6gKXti1ZbNw7VSC9k7xTHwO2mF6H1jgbyd6U5pi9xPB2ztTLdO/MElUjMY/ngLky9u7xlI47ouj2mcfYcPvnCqv9bDIXhX22we+JPeYc65vM4oRCscK8pBAxwXYDJrqUQM4MR/ovorc7flvxa0FYqIld987B/DLFSecc7CKzC2Hgsubi20UIsh53CxyRIC9D+0rFyQjpRNti2B9Rh5icIhLovM7b0KI0JDs0mCEDfTwR1NfCjUwqN9cuvERdGliU6jw9ggD50g9QHQz0SLEss5cf289el89OqGgmIEJfeM/T6/4Rz8sgBKP5ZO5B7lX2GkM0bWh9bzid2m4vr9YMDlSmONn+rUDp4m/9KsboOCOPAo+8WHcoF2aNYkEUeBzv+oqLNf1fW3TDjNztC4EdxIQ8qUGvsYUDtPu+1dkOggWaPISc6Dat8fLTyOUb5ONtOLCCBWUuuc6zJ4hDtAzmNfvGwMuAW7K/JQ0y2vOyViRMsGscCR0nvUO4h0Tw07Hm+hdUkAWcvxC8UsFe8D1/2S5XETdt2y9zYSnlku6kvTU2HjCUXPdagiBlYy1QcCYOs8WN+7OgVYZ9idZTIjp24CNe+q89mnrA2mQ8w9CCk+F1Z9j4gKXBhxmwLABe+BJPWMKrIxF8CQenuaTRUBkwan/CN8fefwNqlPkAExFyO4Hik1HZm5Dco9jBpSbmBN9uis9JSsEcsQmFr7+HdigQBTM/j6b7E0LmCbA7fKrtNDASYZIwoMChD0zU8Rnl4s2ljrv00OD4ajBOuUeeqErFZnzDTytD0r7pOauVxayED/ArLeWuVZcXGVXhYNv2gIsqmFF/r3aOWD665Ohps41rIZ1hPQFp+rXvdANSwLJG7rtad8sp6lzpSWrkuyxj5Kn0FBsr3Odw4h6wrzRm6cLjqQPO3QnpWlNFeHeoY97WUHae+Namv6uUTqZllzLWgMbpwXzpU4+kEoytnROiyDc6YBfraVOMX5fFiNfGoO71ddRccM2w9KRpE6vqlxPLK1aQEEi4/m7y356P3VwPIzT5a88NTgYd6A1ttVhID/3NPM1s1H2uOEdi/IFM2vW2cGkk+mszUIzKTigH7ns3k9eiVzUNaXPKn8KFvNAt2bfvER7hQe0M6SADbyOpbVYnUo0R1JIObBzzyczvKCOrzH/2iLHrYTCvGGMn+0E4c4N7kbxCtDqdTZrGWOZHuclCRqtVO7CCBCZLsEtZJzyeePWrWKmK5l9MGdJk/elfLWgE9LHWU+4FrxrSb1UkPl1lfTxV+c21uGCmd2veawbxYgu4C8Je2ADwCILFf37HXagun2TlehIr8IRezrWR5Q8wq3tXr328PNI3FfleYTSY9lDQm3huRTQ5vulvYV1S2EDDfVUpLgIv23mLcsgAoIk26eGcVMLe3anhB6sx6wA2xh0dtkxpyffumNCHYEEh6/nZzR9cavkTixFDii2LRoKEcOl8dr4bU9YeP/CsxJmgajTavq34Kr//HeDhdJCRZfiVthJdLkXbuzEikD9Pnuagfqag40AeXbHHMB4S7AKCPfCHRPIwSZyoPQSOWaD+2VzFJ2+6GmsipcMDYFVIoY97wODIngzKVVez5WjeqXyxLF2icKNjnoMKCXOCfsKxci+yS3LtWSiai1hF4pT7hO91XaV38R7D8fD73TNGi/h5fn9QpNrKx+c+jSy7X8PM1ZYR9quB7Zeau/t2aC3ZDrbRtjhArpQk9lznaZRB6rWdNuPE4XuaQ4hNRKVjZFYq46Wah+4QSBWzidygBec3B6DsNzbEhQMYSLBpC1wxpBujxlxuLKq0zc0fOlIx11aK+hIQJoihoSrmr61Iu9/FLvTH9i+STVk2acbNvUYtmxBsG/hjPV8ZNDBWFGPliA1EFvQrSOALAkWHSY/kijzaJ31ige7GWd5cP79F8DzKbGthDA46uygs75eezEDWxKije7mGX91o0fESyO/mzwmDEWR10LwMTSjNrIIKr8SuTVnjU+yH3dDuM6sriJHCM/YxBS5MhLlXVH4aEMr2j582oS1sA/0gYJbixR7IVuWF0HUZP2ItFg1tReWEqnetBJDWVHmpngxLip5mctDYHu+GgLviLgErao/WjkYkajXpEHByrKRx5Q0utBwg5E87rYR6ApMz8vr/JhRJr+zyeJ+NWeq4RdPhOHu1kRXgaTPctE5e+Oqqhsg30n9Ix3GzsPg1TKrhBgXnVJ9rSVyv1bA9bw88BWPoV3hXFQzoO7dp9DbUyUhN+pdHVteEuUKlT3beibQj8T8FzaIuQTH2vPJsNb4Hv9REAAcBA1/OA46wRnRUNEQ4rFvNFEjudD9PZ0+1ptl97IdItZn5x/6JIyUKsdgI6i2Yw7e54zDBzvpMIASX1xPep7hldFK3JdsDSBGTWuQfHMer1m0S4BbbGVQUHVDNdtgl6fWAperTQ1QP52lkZ5QltqOc8EnX58jiDg+YE5IXSaTEIlHR0fMvphjnPRdB4BYk8RFTIM2n6XwoP20ZjJpJ6cXMu4VX1AGCD3XBn0jeZjnxJZfva6AQkeDegE1db2PoWRiq3Iz5MLqncztiapLeG05A1nF/ucEJxvJoA12oCnb89xMIvF3XD5S0Vq+MK1Z4Nmma+iSpND/g7CrxqDYluh/+BKig/fr8IjhaKg802cG9gqAimI/ewxC9VSm7D+vxQ41GJO9JmgO+Zp6QH+NQNdrRDlA6QlHUHoh8xqrEB2u2jn3w9/ttZr4A1g7ujnq7nQc5YC7Q/BuDfLZav/xMtjgDWlxHY24uZnjXREgL/9Zu04Ky42qCxMpArTUprhbOf5JFFiTIVtTFZJzMpMJ8qpo8DfwUK/QsKmqLUwENX9EhIIuX9j1kX4E8TV9WzFcduJreU4JgeYu7qwGDeGrwRaOtc9Fai86WsGChJVeXmMs6zsAhNs0lzcJyasxpOAfUxqv+PxRZHFY1kLFcwsZxLF7Jmu/CXm0zryT8lm5wjUzytzxLa1DGaKSR97LrUM8ZwLwPf8mnrtL6TNyG5ybPBJsuBJZZD/fQQC3BV1zsq5zZuhoa00h8JdfmrwCEMdCracRqM4hFYuVmWx+d3pGL6xIkkOvh+Yp7E8IbA/z0AvRMyyVYBSuNeyNQ6naNxD0wB5fvhtejDEIbrF72T7rIdzEAsVW5esLf5gnSXvH+22N0C5SfxElFmQkXdggN81EtmLLKUz1hnOW6Mav7N5Z+9HCfmMaABGgp+6uIqcvqCCgXgpwZ+21dbrYhbudteL2V+4R3Xa90BcZsyEy/J4ERm3GfcHmu/se5efDa6vM+5ib84qwff4WRG4HMyr9DHyah6RkbB2jOnU3oIdw3lLfSz4J/BWsghfPrFDmEG+5b255NcgzGf/xB7/zuWIzkaP33xIrj8a+utYXF6wtX+C5sWygV83LRNCGrzQ2MmGVZMyBI5kcnrQr+5nAyMIsrCobKAJcB/ue66bL3BbocgX7ME56N/C04wVi2XjYEaSwUCfm6qe3i7B97aQNeXrS5dlWCFjWwqrSJSVM2mptafMYa9x8jU9bnH8UOXtxR5U9Nz0Dd6tdgX2ZobwDrrzg4xfUqtlqX0fotoWIwe0j4oPaGJ6ceEp1aITULNeTypSj6cl9wIUxB1R75CUFM3hAatHteOrC90QJ+2CVTPw9D4zYa35xNdjp7Iev9huGrw/m9cGfnrEhlneUKeqLwziOK9WZUU9QsqqoMD8w+1vMupJ3+qc9Cy7A3pn0z9opjMyIQqs5k2T0PutYviwVxm4GLiuACT0LdwTnlsbbOz1TBcA2h8kkAcE7LZtCOHebBr2Ut0aj/ncF0mZmOl7uswwfBypCln44xqLgbCDCN6AT/j9/63AbhgSU3MyvzEGe28N1wB8w337F01B+M/Su6e7W3BPdo7NvVCh1Cjfpp36miVb6D4yYy5Mg9gTQ8xmG3uMxYBWlE9Fa+lO4/Y4GQI86dTHNqahlj5nkNFbKE9wAvQ43S6HN7t34pBApLKY/AL/bIFPjbMRatWBWBKSPgNTIrGkHkm0uWXFQfiuOdZ6OLUzurUgaUD+MztvdoKtsh1mc1IdCh179EIAQVCujWRb0MnHMxTkaND14Q7NWSOyg4KZtNCo++TVtgcdVdK0t7kEHevwFyFPuXbxiUEkRJKm6KO4EXh6kRoy4JYRMdUqWMGspmtvjeLL6h/7NAeT9VEXCCn+ffNiz0XebkXhKehgyLIGd0P3fwoQYhmfZXdN8doT8czsvmfoX6VyAnB4+0k2ttNevDo6sAzF2BPmqMuK6H3mraDhr8+XnElFrgIGsy/qhOzWRyfTPd/L5flhpDOFS0N5jAB5WdStRA53AUEWJwnSD8uqTV9myNt4E+NfkMVm319rJY9/+JXAiVK060MEeraoBLmNuBA2kprYQt39NVoEUaINvMSbqHMkgmP55xYVKaYL744dFOrEsPJGF0TfJH6O/qfBc28yOiPyVLNjmUxmkqrLlUtwayHie/SoJtdOL2GfGGUNjxG+YxX264HnrR0MoqvTqYab2JCKLNSwnArZg5Nw5geuZMvqeKqwn1Oh03k2k8ka5EYni1IxiZUYMOImrhP9UFR37SRL0QCr0t0RZJqYCwOpbQNI3Ef11r/C2vZsHnKLZ0V1jDliTZk94AEdTya6CSjl8M5Mix/iwKlvPUPhwWoA6oq7SonhIcHMSE9XeCX5FPc2LlHpohgvBQTdRSeCyd2CM48TFLT1mq0GRW1Id3+LeygNEasmbTkY8wwNjHsc245GT4VmTnIKko4q96qeXCm5/dXhfN0VkboFXgvHXM11wnCGoQbAnZPlvs+zDUiGbSDW72TgjrWS2YvIGw=="}`
})

mockFetch('https://api.entwine.me/curbyq/round/pending', {
  headers: { 'Content-Type': 'application/json' },
  data: [
    {
      "cid": {
        "/": "bafyriqaylgdnxnw4a7uspjjczo5yt73lyl4yn5rpqnwz7efthlv5pubra4xrykwwyqoymf32zn5gjofchxezgbai7dhxvde7cu24f2zyvow4w"
      },
      "data": {
        "content": {
          "chain": {
            "/": "bafyriqhijw5soalbtppuwwjbskfiriqy6swa5qd5trgbzx4nypnu7mp7iyhx7m2iin2nxnglmngvjgirzb7bvlisxq3uygoik7ozbybxnftiw"
          },
          "index": 132,
          "links": [
            {
              "/": "bafyriqahwgiekslfwzyimq2gzgjbgc2zm3wwowitifmdxjmcglzxz2eqv4c3akpdvn7dpcjukdqddpa22jckhxo7xuan5jotphh42ztr6zfny"
            },
            {
              "/": "bafyriqgocskvip3zpzfsrbhexc2i6gfoeyodnhibfwenl4lcjnt6dxyecmqaklkbcpl3hwj2hlbj54f3krfayd3oi7q3yiftg2dod76uamhv4"
            }
          ],
          "mixins": [
            {
              "chain": {
                "/": "bafyriqa5k2d3t3r774geicueaed2wc2fosjwqeexfhwbptfgq7rcn5mwucnhfeuxu2nxbrch3rl6yqjlozhuswo5ln3xwjm35iftt3tpqlcgs"
              },
              "value": {
                "/": "bafyriqbizxghwasfxmi35kvm2f3kia26c6expdngq4s3bjcltm3lyr3ggieudhib35fzom3h5vyoeh4gv4btmslubknrnzxv4ioroxbytsjqi"
              }
            },
            {
              "chain": {
                "/": "bafyriqci6f3st2mg7gq733ho4zvvth32zpy2mtiylixwmhoz6d627eo3jfpmbxepe54u2zdvymonq5sp3armtm4rodxsynsirr5g3xsbd3q4s"
              },
              "value": {
                "/": "bafyriqekui56oqifn5y6cnps4z7x7axyrmjsjlrrjf35vkexrh3npkxqjcmga7wlla65rpvfgl7r2kulg5ttghlrjoa3nd6glzc2gy6juyuzs"
              }
            },
            {
              "chain": {
                "/": "bafyriqgdssb6xcnhimkaosz2rndn4cqwqa4iute5ebyldwcucbk7pgzrrhscaslqc4omaqoqezhqp3r7yi2qcrvu6hwrjce7ccj77ukengwa2"
              },
              "value": {
                "/": "bafyriqdnzmkmkuv6dgmwqsoewggvezdpbojppxxc5xzlrwkuggwdidz2yrb7gupzjyg42cku7tijazaoiovqrtdptskaz7gaimy2bynpbwmn4"
              }
            },
            {
              "chain": {
                "/": "bafyriqei75kvbmjdbw5rixjmmm6nsoc4ik2wnd2vuk62zerd54geirmhewywnirfuzlwub45wgaft44tf3wabzxv6fcursbkgcaqouulhyfsc"
              },
              "value": {
                "/": "bafyriqgpfugyu6tsidv7ghiitfnsneai7r6hx6n6iltrqbqenxocfzj45rofvwufl77myhmm2l2lhfqqynjwpm4msakmygmuj47h6otxtai4u"
              }
            },
            {
              "chain": {
                "/": "bafyriqe3zxf5g4ifgqhea5zozxpdcfi5qcpkfpogtxzbizmmuxdjuzuq44a2cifbr7xplo4kcfsdz2c5pxfxektavrqxxb3nvbmclxz7qiz6e"
              },
              "value": {
                "/": "bafyriqg6asxsqrpc77zw72jcxv2bswktsfmflomp3pvdvkg6pp3eurzp6jyf5cduobunyu2d2noahbye6kwjfvcmmv4no3ngvk7nx2fowfegu"
              }
            }
          ],
          "payload": {
            "parameters": {
              "beta": 0.02588813317054728,
              "epsilonBias": 0.001,
              "errorExtractor": 1.0842021724855042e-20,
              "errorSmoothness": 4.336808689942018e-20,
              "gain": 0.002108530448904805,
              "isQuantum": false,
              "nBitsOut": 512,
              "nBitsThreshold": 820,
              "nTrialsNeeded": 1421185,
              "pefs": [
                [
                  0.9999999999999982,
                  0.8901463959005033,
                  0.8895169121130755,
                  1.0618720583663228
                ],
                [
                  0.9999999999998411,
                  0.9826789025414312,
                  0.8277220147234465,
                  1.0927209401773097
                ],
                [
                  1.0000000000000462,
                  0.8270931762794625,
                  0.9830733605074146,
                  1.0924884272651938
                ],
                [
                  1.0000000000001128,
                  1.01725195136088,
                  1.0168590680776008,
                  0.7516792897487737
                ]
              ],
              "seedLength": 243608,
              "stoppingCriteria": 15000000
            },
            "round": 44,
            "stage": "request",
            "timestamp": "2023-10-26T21:05:40.556Z"
          },
          "source": "random.colorado.edu"
        },
        "signature": "eyJhbGciOiJSUzI1NiJ9.FEAj5SVDA6hl_bA5tQo8jxn-fb0ZofJQIZQx3jtbzlNkkbN8O3fcXwATYM021qCPYDcP1aoSiOLaCK-CZ6q7eUka.eLBiVYEjLkOjVotdsZs43JMXEKolSGSl_VD2YAh-bVhlrCxxHSguguRGHo7-3dm1LGvGVoT-6CKU04vtSdD6FJrveBsyxjRCaOjFoCSOKxBQ3IZfdAtWRcN0w0AtqhTJY5ReSKXoUZPCQDuf935-XfXIY6uFR2SyBlVW3zgbGpKwFzH-LLc68OuVVFuwpmsRUqC2pL0UoFTWRepF3Z8K1sFLDG1Y26agWLADKzyFE2ppjKDjiYD8p-EMHKmgaXeOtjgCw6i0R6Ya__VDqDmbX5zxtlwe_iOiNUOr1-QaroSqDI-ooDL4oF2Ys3AmUlsZQM4WvouhTcePhTDaDH9p1j5dpUixKIG6DZJNXaVdcYbOWpIK_Jh-410WodXhkjCX9O8DZvoSNjwyWuQwgV9nzKvbCYjhjepgtEE0zEbhqy5irdfV2hT_DIu8ucuHrpdrSo0JNfVJUzvw9Rm_ZuMHHc0uUaPuMK6u5MdnOVZZlN2vGeanQZPqvbaoENQLcCC6aB_x2Qry4Z6Z1OOVaRH4qh0dKY40bhG_deTRo7PLP6ngYbL9dOLyAwJonhFbjR4OQDV2XxlN_aZWLUob5dVUEyissa1Im4GE4oKCNuymYz9b_H_2VhUEGcKeKsJsoT7XwFi1aDh3p82mbRwLrVXI7i3qC56x1KuT1Tw4-YHxiYY"
      }
    },
    {
      "cid": {
        "/": "bafyriqcq2tsbm4j445lkcifi5vkhm2mukyhevfxkz5dxs273mjgqbnbpdkny2ezxth7xw7xcbo7gnrkgxnisfd2jxd77s5vtvwhdhshzmngzo"
      },
      "data": {
        "content": {
          "chain": {
            "/": "bafyriqhijw5soalbtppuwwjbskfiriqy6swa5qd5trgbzx4nypnu7mp7iyhx7m2iin2nxnglmngvjgirzb7bvlisxq3uygoik7ozbybxnftiw"
          },
          "index": 133,
          "links": [
            {
              "/": "bafyriqaylgdnxnw4a7uspjjczo5yt73lyl4yn5rpqnwz7efthlv5pubra4xrykwwyqoymf32zn5gjofchxezgbai7dhxvde7cu24f2zyvow4w"
            },
            {
              "/": "bafyriqgocskvip3zpzfsrbhexc2i6gfoeyodnhibfwenl4lcjnt6dxyecmqaklkbcpl3hwj2hlbj54f3krfayd3oi7q3yiftg2dod76uamhv4"
            }
          ],
          "mixins": [
            {
              "chain": {
                "/": "bafyriqa5k2d3t3r774geicueaed2wc2fosjwqeexfhwbptfgq7rcn5mwucnhfeuxu2nxbrch3rl6yqjlozhuswo5ln3xwjm35iftt3tpqlcgs"
              },
              "value": {
                "/": "bafyriqdpfav4cjbskxrgnqex7vfbg7wzzevxua4w35w3tpbbnaikia5lnq2hw5zxynqylzx42nqbzucmeu57s2acf6bmjmxrgmjj5obeqezpm"
              }
            },
            {
              "chain": {
                "/": "bafyriqci6f3st2mg7gq733ho4zvvth32zpy2mtiylixwmhoz6d627eo3jfpmbxepe54u2zdvymonq5sp3armtm4rodxsynsirr5g3xsbd3q4s"
              },
              "value": {
                "/": "bafyriqb74wluhep2brwsnzdfmefmqfpddiutcjx7ajuxaxxv5ftfu5wpe55jg5jtlyj6xsboslor5scytrsnkhkslxedxzu2m5nrw56ilj5fa"
              }
            },
            {
              "chain": {
                "/": "bafyriqgdssb6xcnhimkaosz2rndn4cqwqa4iute5ebyldwcucbk7pgzrrhscaslqc4omaqoqezhqp3r7yi2qcrvu6hwrjce7ccj77ukengwa2"
              },
              "value": {
                "/": "bafyriqh222tvrpffrwltzvshd632q5omkb7xmunlpexph5uxisvcbawe2iajzpq22dpwydkx5v6nbi7du2nqxmwskxp2g6krmdllztzgn66wy"
              }
            },
            {
              "chain": {
                "/": "bafyriqei75kvbmjdbw5rixjmmm6nsoc4ik2wnd2vuk62zerd54geirmhewywnirfuzlwub45wgaft44tf3wabzxv6fcursbkgcaqouulhyfsc"
              },
              "value": {
                "/": "bafyriqd6glkjjnbi76b3jjswzsumsqp53mycleiujifmyrlbn26btdbubiu6y25dil76yi54azfpdtm3yew2t47bfhvpztvj3mxxzsu6vgvxg"
              }
            },
            {
              "chain": {
                "/": "bafyriqe3zxf5g4ifgqhea5zozxpdcfi5qcpkfpogtxzbizmmuxdjuzuq44a2cifbr7xplo4kcfsdz2c5pxfxektavrqxxb3nvbmclxz7qiz6e"
              },
              "value": {
                "/": "bafyriqarf5vrlfmjkyc66ckmrmocixxr4hlshp6lbrfyudeb4eohkimdvmge5liffm3ordgf456byky3bvs2qf5dg3wk2xg5rcxbzn6hhbele"
              }
            }
          ],
          "payload": {
            "dataHash": "a5da3e105c9ad2ce88cc213a8a642432a1f022370e59f1b569324a8cdbe2e288cfb64bde85734fe8afe37892c7d26439eca405391345ec5d3b7568ec227709da",
            "round": 44,
            "rule": {
              "after": "self",
              "count": 1
            },
            "seedAlgorithm": "shake256",
            "seedChain": {
              "/": "bafyriqa5k2d3t3r774geicueaed2wc2fosjwqeexfhwbptfgq7rcn5mwucnhfeuxu2nxbrch3rl6yqjlozhuswo5ln3xwjm35iftt3tpqlcgs"
            },
            "seedLength": 243608,
            "stage": "precommit",
            "timestamp": "2023-10-26T21:08:27.932Z"
          },
          "source": "random.colorado.edu"
        },
        "signature": "eyJhbGciOiJSUzI1NiJ9.FEDUOw8Xp-2L-vAShs6wNShEbRhpcnxxhuey13H3dqX-saUUS6bq-FWYiOCUEWXM-S9uPtIhEB79BJEcj1UY0fcT.k4TH0GpK5cf-MsRaLNP4kQVuSnEx-duSUZfg-lDzxrao1fWtZmyqMybI_tuKiMF8RnyX8H5Hnh5CSvSy6atk6fej4fGEOeNcogIDwinEsDmNoKSZs368koF0W9SZo9JBWMykkwVz1D2tzw5XHa9s9zXQdsNZ6FyWOLHW4HVHhONeIjq8aC2D10GkOx3oQcPLB3c6Bd0Hs8-FQ3M7U-NlvTICOcmLiCxM3CfUAvQUrRpvZWQ1CZQPC1Ni9pAzir9mhs44vfyeUHqocxKCDWQC-6o-zPhKKJb6nmsRXd4lqdwlWM7k5WmrHrZ-vQAwsq8TIFDMybyrodgIlz0IhxV-Pp2T4liX3OOemClfHqjxdAyO6ebKuAsPRtoAqBGcXONlleyDTZYj5FV5-NBAxy3Bubzztd8g0vBfUWLx9vqx4mJ-ognRLarT_8GQWIjf4q8ejcwfrkXjqycD0YL41i_BctD7zvFxHIc015IjPjWPGviWzUrJi1szU_86RSVzajArmDf4r10bApaPtspEg6D7ZK9TrO1rjCj8gxyogiRCeJ-jvQDqs-Cdzc8jmPdCxfMDgQlg-G4_tJQE2bTgUFD0udAbcATUtPYsL5w7EugBVUzbmUHUcfSeCU6u39nSoAlC6AYsyxxDOIJJjpBHgrBJcl8hNPSyQEkMJ9mcdnCWQr4"
      }
    }
  ]
})