using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GestionEquestre.Ge
{
    public partial class LinkFolderHorseEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GestionEquestre.Ge.LinkFolderHorseEditor";

        public LinkFolderHorseEditorAttribute()
            : base(Key)
        {
        }
    }
}

