title: 'Bootstrap Theme Editor'
author: 'Thomas Coleman'
email: 'tom@ilikeprograms.com'
github:
  username: 'ilikeprograms'
  repo:     'BootstrapThemeEditor'

baseurl: 'BootstrapThemeEditor'
source:      ./gh_pages
destination: ./gh_pages/_site
plugins:     ./gh_pages/_plugins
layouts:     ./gh-pages/_layouts
include:     ['.htaccess']
exclude:     []
keep_files:  ['.git','.svn']
gems:        []
timezone:    nil
encoding:    nil

#future:      true
#show_drafts: false
#limit_posts: nil
#highlighter: pygments
#
#relative_permalinks: true
#
#permalink:     date
#paginate_path: 'page:num'
#paginate:      nil
#
markdown:      kramdown
markdown_ext:  markdown,mkdown,mkdn,mkd,md
textile_ext:   textile

maruku:
  use_tex:    false
  use_divs:   false
  png_engine: blahtex
  png_dir:    images/latex
  png_url:    /images/latex
  fenced_code_blocks: true

kramdown:
  input: GFM
  auto_ids: true
  footnote_nr: 1
  entity_output: as_char
  toc_levels: 1..6
  smart_quotes: lsquo,rsquo,ldquo,rdquo
  use_coderay: false
#markdown_ext:  markdown,mkdown,mkdn,mkd,md
#textile_ext:   textile
#
#excerpt_separator: "\n\n"
#
#safe:        false
#watch:       false    # deprecated
#server:      false    # deprecated
#host:        0.0.0.0
#port:        4000
#baseurl:     ""
#lsi:         false