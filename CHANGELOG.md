# Changelog

## [1.1.0](https://github.com/buff-beacon-project/curby-js-client/compare/v1.0.0...v1.1.0) (2024-11-07)


### Features

* Add optional data field to round validations ([979ca3b](https://github.com/buff-beacon-project/curby-js-client/commit/979ca3b27988c715e9f0f0325b7bfff97262fdf1))


### Bug Fixes

* fetchRoundData incorrectly fetched data ([c88b0ac](https://github.com/buff-beacon-project/curby-js-client/commit/c88b0ac41fbe846eca3754fc1c536c37f9a9da61))
* isComplete was reporting not complete if precommit pulse missing ([ef02d37](https://github.com/buff-beacon-project/curby-js-client/commit/ef02d375d38b83cf16bf02afe434d760dd58bc94))
* type declarations corrected for hasher ([54db2bf](https://github.com/buff-beacon-project/curby-js-client/commit/54db2bfee312db8b956a31c60744d9382b2f0f16))

## 1.0.0 (2024-11-02)


### ⚠ BREAKING CHANGES

* change rng client watch and waitFor return value
* refactor client class and rename Randomness to ByteHelper
* change client to remember current pulse

### Features

* change rng client watch and waitFor return value ([179a6f8](https://github.com/buff-beacon-project/curby-js-client/commit/179a6f814788f0ada8e6bb5b0649566a76d5997b))
* refactor client class and rename Randomness to ByteHelper ([10ad325](https://github.com/buff-beacon-project/curby-js-client/commit/10ad325de21eb537e4a2b1c1dca3513d394293b3))


### Bug Fixes

* getPulsePair attempts to fetch pulse -1 for first ([5f7abb5](https://github.com/buff-beacon-project/curby-js-client/commit/5f7abb5e034010c015a2d89ab8678bdd462381f5))
* handle pending rounds with no data ([c388e34](https://github.com/buff-beacon-project/curby-js-client/commit/c388e34153eb889868e0e446fc633fa89d281995))
* incorrect time to next pulse ([242bfd4](https://github.com/buff-beacon-project/curby-js-client/commit/242bfd4b7c47eaea96603cfd2dd5318253accdbf))
* module exports ([c8afd01](https://github.com/buff-beacon-project/curby-js-client/commit/c8afd011972b47b77ce595338a8fd468f735257e))
* move over to new twine library ([8297381](https://github.com/buff-beacon-project/curby-js-client/commit/82973818f9500382cfb57dd8b9491dba0ceb5685))
* next pulse timing ([84cb684](https://github.com/buff-beacon-project/curby-js-client/commit/84cb6849adc5a2e9d975362db221f15058877438))
* passthrough fetch options ([f638ca3](https://github.com/buff-beacon-project/curby-js-client/commit/f638ca385cc4e8ec936de086e8345c3353409038))
* **test:** mock the http requests ([2cf2598](https://github.com/buff-beacon-project/curby-js-client/commit/2cf2598789e56a20c1157005712545c12cb67e85))
* timing ([0eb240c](https://github.com/buff-beacon-project/curby-js-client/commit/0eb240cd65e1a87bd370ab61dcdd443522d1cbf0))
* undefined error if round errors. check ok ([e2c918f](https://github.com/buff-beacon-project/curby-js-client/commit/e2c918f923e214ffac3f3cd1b1733e9ef65cb985))


### Code Refactoring

* change client to remember current pulse ([3ed5b66](https://github.com/buff-beacon-project/curby-js-client/commit/3ed5b66e7507ec5e3b1cb4ab3c1f0cdfb07f704c))
