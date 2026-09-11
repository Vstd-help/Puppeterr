# Puppeterr TODO Checklist

## 1) Immediate low-effort fixes
- [ ] Fix the `evaluate` wrapper bug that causes `Illegal return statement`
- [ ] Harden `waitForURLChange` so it does not fail when navigation succeeds without a clean URL transition
- [ ] Add a fallback success check based on page content change, not URL change alone
- [ ] Stop treating every Google redirect or search failure as a task failure
- [ ] Prefer direct navigation over Google search when the target site is already known
- [ ] Add a better “page loaded / hydrated” confirmation before extraction
- [ ] Replace brittle single-selector assumptions with selector fallback lists
- [ ] Add a guard to prevent repeated retries of the same non-progress action
- [ ] Tighten completion detection so the agent can stop once the task is clearly done
- [ ] Reduce repetitive self-diagnosis text in task summaries
- [ ] Make error messages state what was expected, what happened, and what to try next
- [ ] Add site-specific timeout tuning for fragile sites
- [ ] Add regression tests for known failures from `log.json`
- [ ] Add unit tests for `goto`, `fill`, `press`, `waitForURLChange`, and `evaluate`
- [ ] Centralize repeated wait and retry logic into shared helpers
- [ ] Centralize selector fallback handling into shared helpers
- [ ] Remove dead debug paths and stale experimental logic
- [ ] Make log output more deterministic and easier to compare between runs

## 2) Low-to-medium effort reliability improvements
- [ ] Add a persistent task memory object
- [ ] Store original goal, last action, last result, and current page state together
- [ ] Add a robust navigation-success detector
- [ ] Verify landing page using URL, title, and text together
- [ ] Handle single-page apps that do not change URL cleanly
- [ ] Add a content-change fallback when URL stays the same
- [ ] Improve extraction on dynamic and JS-heavy pages
- [ ] Add better handling for forms that submit without URL change
- [ ] Add better handling for unknown or generated element IDs
- [ ] Add per-site profiles for Wikipedia, Britannica, NYTimes, Google, and Archive.org
- [ ] Improve screenshot-based fallback when text extraction is ambiguous
- [ ] Add page-state comparison before and after click or submit
- [ ] Add a no-progress detector that stops equivalent repeated actions
- [ ] Add better extraction for headings, tables, infoboxes, and search results
- [ ] Add action-level confidence scores
- [ ] Add retry backoff instead of immediate repeated retries
- [ ] Improve CAPTCHA detection to reduce false positives
- [ ] Improve handling of blocker pages that are not CAPTCHAs
- [ ] Add a clearer “already on target page” branch
- [ ] Add a stronger “find evidence first, answer second” pipeline
- [ ] Improve lazy-load and scroll-triggered content capture
- [ ] Make final answers cite the exact extracted evidence used
- [ ] Add a replay harness for failed runs
- [ ] Add failure classification from raw logs into actionable buckets

## 3) Medium-effort WebArena readiness work
- [ ] Make task memory survive navigation, tabs, retries, and reloads
- [ ] Add explicit task / subtask / evidence state tracking
- [ ] Distinguish wrong page vs not loaded yet vs loaded but blocked
- [ ] Make `goto` verify actual landing success instead of only response success
- [ ] Build a clean recovery path after failed search or redirect
- [ ] Improve click-target selection on complex or crowded pages
- [ ] Improve extraction from search results, tables, and infoboxes
- [ ] Improve handling of asynchronous UI updates
- [ ] Add a planner checkpoint system for long-horizon tasks
- [ ] Add bookmark or return-to-prior-page support
- [ ] Add support for multiple candidate answers and ranking them
- [ ] Add evidence confidence to the final response
- [ ] Add progress estimation so the agent knows when it is stuck
- [ ] Add stronger anti-loop control
- [ ] Add site-type classification so browsing strategy changes by domain
- [ ] Add tests modeled directly on the failing tasks in `log.json`
- [ ] Add a clear blocker state when the site is truly unreachable
- [ ] Add a completion gate that requires both task evidence and page evidence
- [ ] Reduce overuse of search-engine detours for direct lookup tasks
- [ ] Improve detection of when a search form actually submitted successfully

## 4) Harder engineering work
- [ ] Build a real long-term task memory architecture
- [ ] Separate planner, reasoning, and execution more cleanly
- [ ] Add an execution state machine with explicit phases
- [ ] Add stronger cross-page reasoning support
- [ ] Add persistent browser-session memory across restarts
- [ ] Add multi-tab state synchronization
- [ ] Add a better world-model representation of page state
- [ ] Improve DOM-to-action mapping reliability
- [ ] Add hybrid model + heuristic decision-making where useful
- [ ] Add large-scale browser regression testing
- [ ] Add continuous evaluation pipelines
- [ ] Add benchmark harnesses for WebArena-like suites
- [ ] Add better human-in-the-loop intervention tooling
- [ ] Add deeper tracing and observability
- [ ] Add step replay and debugging UI
- [ ] Add site adaptation layers for difficult domains
- [ ] Add safer and more reliable challenge detection
- [ ] Add a browser pool and task queue
- [ ] Add containerized browser environments
- [ ] Add crash recovery across sessions
- [ ] Add artifact storage for screenshots, traces, and extracts
- [ ] Add distributed execution support
- [ ] Add CI for browser-dependent tests

## 5) Very hard / money-heavy / long-term work
- [ ] Run the agent at scale on public benchmark suites
- [ ] Pay for enough compute to support repeated evals and browser runs
- [ ] Pay for model usage during development and testing
- [ ] Build enterprise-grade auth, permissions, and audit logging
- [ ] Build integrations with external workflow tools
- [ ] Collect real user workflow data for improvement
- [ ] Validate the agent with third-party benchmark runs
- [ ] Build a polished product layer on top of the agent core
- [ ] Add support and onboarding tooling
- [ ] Hire engineering help for infra, browser systems, frontend, and evals
- [ ] Improve compliance-friendly challenge handling rather than brute force approaches
- [ ] Turn the agent into a platform rather than just a prototype
- [ ] Prove adoption in real use cases
- [ ] Build a defensible moat through data, workflows, reliability, and distribution
- [ ] Scale toward production-grade, benchmark-backed browser automation

## 6) Explicit bugs / gaps from `log.json`
- [ ] Fix URL-change wait failures on pages that actually navigated successfully
- [ ] Fix invalid `evaluate` execution that throws `Illegal return statement`
- [ ] Reduce dependence on Google when Google returns `sorry/index` or challenge pages
- [ ] Improve brittle search-box handling on archive.org and similar sites
- [ ] Improve search-submit detection on Britannica and Wikipedia
- [ ] Improve extraction after redirects so the agent does not keep probing after the answer is already visible
- [ ] Reduce repeated failed probe actions after a successful navigation
- [ ] Make the agent stop re-trying the same path when the page is already correct
- [ ] Add better handling for sites that submit a search but do not visibly change URL in time
- [ ] Replace autogenerated selector dependence with more stable region/role/text targeting

## 7) Stretch goals
- [ ] Reach consistent success on WebArena-style tasks
- [ ] Raise benchmark performance into publicly impressive territory
- [ ] Make task memory and navigation reliability strong enough for hard sites
- [ ] Build a clear, reproducible benchmark story for the project
- [ ] Make Puppeterr reliably outperform typical GitHub browser-agent demos
