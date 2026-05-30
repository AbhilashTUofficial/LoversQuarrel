# DEVELOPMENT ROADMAP

## Tech Stack

### Phase 1

* Next.js
* TypeScript
* Tailwind CSS
* Redux Toolkit
* OpenAI API
* Local State
* No Database

### Phase 2

* PostgreSQL
* Prisma
* Socket.IO
* Authentication
* Multiplayer Infrastructure

---

# Architecture

## MVP Architecture

User Input

↓

Prompt Builder

↓

OpenAI

↓

Generated Turns

↓

Narrator

↓

Stats Engine

↓

Verdict

---

# State Management

Redux Slices

## gameSlice

Stores:

* Topic
* Context
* Current Turn
* Match State

## characterSlice

Stores:

* BF Configuration
* GF Configuration

## statsSlice

Stores:

* Drama
* Logic
* Toxicity
* Relationship Health

## chaosSlice

Stores:

* Active Chaos Cards
* Event Queue

---

# Folder Structure

src/

components/

* TopicForm
* TagSelector
* SliderControls
* ArgumentArena
* NarratorPanel
* StatsPanel
* ChaosPanel
* VerdictCard

store/

* gameSlice
* characterSlice
* statsSlice
* chaosSlice

services/

* openai.ts
* promptBuilder.ts
* argumentEngine.ts
* statEngine.ts

types/

* game.ts
* character.ts
* stats.ts

app/

* page.tsx

---

# Phase 1 MVP

## Day 1

Project Setup

* [ ] Create Next.js project
* [ ] Configure TypeScript
* [ ] Configure Tailwind
* [ ] Configure Redux Toolkit
* [ ] Setup folder structure
* [ ] Create reusable layout

Deliverable:

Static UI skeleton.

---

## Day 2

Input System

* [ ] Topic input
* [ ] Context input
* [ ] Tag selector
* [ ] Slider controls
* [ ] Redux integration
* [ ] Validation

Deliverable:

Configurable argument setup.

---

## Day 3

Prompt Engine

* [ ] Prompt builder
* [ ] Character profile generation
* [ ] Tag injection
* [ ] Context injection
* [ ] OpenAI integration

Deliverable:

Prompt generated successfully.

---

## Day 4

Argument Generation

* [ ] Generate BF response
* [ ] Generate GF response
* [ ] Generate Narrator response
* [ ] Render turns
* [ ] Auto scroll

Deliverable:

First playable version.

---

## Day 5

Stats Engine

* [ ] Drama calculation
* [ ] Logic calculation
* [ ] Toxicity calculation
* [ ] Relationship health
* [ ] Winner prediction

Deliverable:

Live stat tracking.

---

## Day 6

Chaos System

* [ ] Chaos card UI
* [ ] Pause game
* [ ] Inject events
* [ ] Resume game
* [ ] Event history

Deliverable:

Interactive gameplay.

---

## Day 7

Game Completion

* [ ] Winner generation
* [ ] Verdict screen
* [ ] Share card
* [ ] Restart game
* [ ] Basic polish

Deliverable:

MVP Complete.

---

# Phase 2

Database

* [ ] PostgreSQL
* [ ] Prisma setup
* [ ] User model
* [ ] Match model
* [ ] History model

---

# Multiplayer

* [ ] Create room
* [ ] Join room
* [ ] Invite link
* [ ] Shared argument setup
* [ ] Real-time synchronization

---

# Community Features

* [ ] Public matches
* [ ] Match voting
* [ ] Spectator mode
* [ ] Trending matches
* [ ] Leaderboards

---

# AI Improvements

## Multi-Agent Architecture

Game Master

↓

Boyfriend Agent

↓

Girlfriend Agent

↓

Judge Agent

↓

Narrator Agent

---

# Future Features

* [ ] Relationship Court
* [ ] Voice Arguments
* [ ] AI Couples Tournament
* [ ] Replay System
* [ ] Export Video
* [ ] Shareable Results
* [ ] Character Presets
* [ ] Seasonal Events

---

# Release Checklist

## MVP

* [ ] Stable generation
* [ ] Responsive UI
* [ ] Error handling
* [ ] Loading states
* [ ] Share card
* [ ] Mobile support

## v2

* [ ] Authentication
* [ ] Database
* [ ] Multiplayer
* [ ] Spectators
* [ ] Judge Mode
* [ ] Community Features
