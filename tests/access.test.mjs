import test from 'node:test';
import assert from 'node:assert/strict';
import {ownerMatches} from '../app/access.mjs';
test('anonymous visitors cannot manage the studio',()=>assert.equal(ownerMatches(null,'owner@example.com'),false));
test('a signed-in visitor is not automatically an admin',()=>assert.equal(ownerMatches({email:'visitor@example.com'},'owner@example.com'),false));
test('missing owner configuration denies administration',()=>{assert.equal(ownerMatches({email:'owner@example.com'},undefined),false);assert.equal(ownerMatches({email:''},''),false)});
test('the configured owner can manage the studio',()=>assert.equal(ownerMatches({email:'Owner@Example.com'},'owner@example.com'),true));
