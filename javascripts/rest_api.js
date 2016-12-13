var apiData = {
  auth : [
    {
      verb : "POST",
      path : "auth",
      desc : "Registers a user and returns a JWT",
      params : [
        {
          name : "email",
          desc : ""
        },
        {
          name : "password",
          desc : ""
        },
        {
          name : "password_confirmation",
          desc : ""
        }
      ],
      responses : [
        {
          status : "200",
          body : "{\"jwt\" : \"...\"}"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },

    {
      verb : "PATCH",
      path : "auth",
      desc : "Updates a user's password.",
      params : [
        {
          name : "email",
          desc : ""
        },
        {
          name : "password",
          desc : ""
        },
        {
          name : "password_confirmation",
          desc : ""
        },
        {
          name : "current_password",
          desc : ""
        }
      ],
      responses : [
        {
          status : "204",
          body : "No Content"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },


    {
      verb : "POST",
      path : "auth/sign_in",
      desc : "Authenticates a user and returns a JWT.",
      params : [
        {
          name : "email",
          desc : ""
        },
        {
          name : "password",
          desc : ""
        }
      ],
      responses : [
        {
          status : "200",
          body : "{\"jwt\" : \"...\"}"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
  ],

  users: [
    {
      verb : "GET",
      path : "users/me",
      desc : "Returns the current user as well as all the user's notes (with nested presentations) and groups (with nested presentations).",
      params : [],
      responses : [
        {
          status : "200",
          body : "{\"email\" : \"...\", \"notes\" : [], \"groups\" : []}"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
  ],



  groups : [
    {
      verb : "GET",
      path : "groups",
      desc : "Gets all groups for current user.",
      params : [],
      responses : [
        {
          status : "200",
          body : "{\"groups\" : []}"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
    {
      verb : "GET",
      path : "groups/:id",
      desc : "Gets a particular group.",
      params : [],
      responses : [
        {
          status : "200",
          body : "{\"group\" : {}}"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
    {
      verb : "POST",
      path : "groups",
      desc : "Creates a new group.",
      params : [],
      responses : [
        {
          status : "200",
          body : "{\"group\" : {}}"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
    {
      verb : "PATCH",
      path : "groups/:id",
      desc : "Updates a group.",
      params : [],
      responses : [
        {
          status : "204",
          body : "No Content"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
    {
      verb : "DELETE",
      path : "groups/:id",
      desc : "Deletes a group.",
      params : [],
      responses : [
        {
          status : "204",
          body : "No Content"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
    {
      verb : "POST",
      path : "groups/:id/presentation",
      desc : "Associates a presentation object with this group.",
      params : [],
      responses : [
        {
          status : "200",
          body : "{\"presentation\" : {}}"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
    {
      verb : "PATCH",
      path : "groups/:id/presentation",
      desc : "Updates the group's presentation.",
      params : [
        {
          name : "relative_path",
          desc : ""
        }
      ],
      responses : [
        {
          status : "204",
          body : "No Content"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
    {
      verb : "DELETE",
      path : "groups/:id/presentation",
      desc : "Deletes the group's presentation.",
      params : [],
      responses : [
        {
          status : "204",
          body : "No Content"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    }
  ],



  notes : [
    {
      verb : "GET",
      path : "notes",
      desc : "Gets all notes for current user.",
      params : [
        {
          name: "modified_after",
          desc: "Optional. Return only notes modified after a certain date."
        }
      ],
      responses : [
        {
          status : "200",
          body : "{\"notes\" : []}"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
    {
      verb : "GET",
      path : "notes/:id",
      desc : "Gets a particular note.",
      params : [],
      responses : [
        {
          status : "200",
          body : "{\"note\" : {}}"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
    {
      verb : "POST",
      path : "notes",
      desc : "Creates a new note.",
      params : [],
      responses : [
        {
          status : "200",
          body : "{\"note\" : {}}"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
    {
      verb : "PATCH",
      path : "notes/:id",
      desc : "Updates a note.",
      params : [],
      responses : [
        {
          status : "204",
          body : "No Content"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
    {
      verb : "DELETE",
      path : "notes/:id",
      desc : "Deletes a note.",
      params : [],
      responses : [
        {
          status : "204",
          body : "No Content"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
    {
      verb : "POST",
      path : "notes/:id/presentation",
      desc : "Associates a presentation object with this note.",
      params : [],
      responses : [
        {
          status : "200",
          body : "{\"presentation\" : {}}"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
    {
      verb : "PATCH",
      path : "notes/:id/presentation",
      desc : "Updates the note's presentation.",
      params : [
        {
          name : "relative_path",
          desc : ""
        }
      ],
      responses : [
        {
          status : "204",
          body : "No Content"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    },
    {
      verb : "DELETE",
      path : "notes/:id/presentation",
      desc : "Deletes the note's presentation.",
      params : [],
      responses : [
        {
          status : "204",
          body : "No Content"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    }
  ],


  import : [
    {
      verb : "POST",
      path : "import",
      desc : "Imports JSON data. The server must preserve the relationships between groups, notes, and presentations. See {link} for a reference implementation.",
      params : [
        {
          name : "data",
          desc : "the JSON data as specified above"
        }
      ],
      responses : [
        {
          status : "204",
          body : "No Content"
        },
        {
          status : "5xx",
          body : "{\"errors\" : []}"
        }
      ]
    }
  ]
}
