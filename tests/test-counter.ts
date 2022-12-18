
import { get_account, set_mockup, set_mockup_now, set_quiet } from "@completium/experiment-ts";

import { counter } from './binding/counter'

const assert = require('assert')

/* Accounts ---------------------------------------------------------------- */

const alice = get_account('alice');

/* Verbose mode ------------------------------------------------------------ */

set_quiet(true);

/* Endpoint ---------------------------------------------------------------- */

set_mockup()

/* Now --------------------------------------------------------------------- */

set_mockup_now(new Date(Date.now()))

/* Scenario ---------------------------------------------------------------- */

describe('[COUNTER] Contract deployment', async () => {
  it('Deploy test_binding', async () => {
    await counter.deploy({ as: alice })
  });
})

describe('[COUNTER] Call entry', async () => {
  it("Call 'myentry'", async () => {
    const s_before = await counter.get_count()
  })
})
