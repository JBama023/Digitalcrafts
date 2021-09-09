require('dotenv').config()

const token = process.env['API_TOKEN'];
const {createClient} = require("@supabase/supabase-js")
const supabase = createClient(
    "https://hjmibdafczhoxuaeehrs.supabase.co")

const express = require("express")
app.use(express.json())