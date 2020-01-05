using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GestionEquestre.Ge
{
    public partial class ManPersonLookupEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "GestionEquestre.Ge.ManPersonLookupEditor";

        public ManPersonLookupEditorAttribute()
            : base(Key)
        {
        }
    }
}

