/****************************************************************************************
VFORM est un script de contrôle de formulaire

Version 1.06

Copyright (C) 2006-2010  Sylvain FATOME

This program is free software; you can redistribute it and/or modify it under the terms
of the GNU General Public License as published by the Free Software Foundation; 
either version 2 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program; 
if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, 
Boston, MA  02110-1301, USA.

Contact : galawa@free.fr

Web : http://smitst.homelinux.com
****************************************************************************************/

// Suppression des espaces en début en fin de chaîne
function RLtrim(texte)
{	
	return texte.replace(/(^\s*)|(\s*$)/g,"");
}

// Convertion caractère accentués en octal
function ConvertAccents(texte)
{
	var texte_ok = '';
	
	for (var i=0; i<texte.length; i++)
	{
		switch(texte.charAt(i))
		{
			case '¢':
				texte_ok=texte_ok+'\242';
				break;
			case '£':
				texte_ok=texte_ok+'\243';
				break;
			case '¥':
				texte_ok=texte_ok+'\245';
				break;
			case '¼':
				texte_ok=texte_ok+'\274';
				break;
			case '½':
				texte_ok=texte_ok+'\275';
				break;
			case '¾':
				texte_ok=texte_ok+'\276';
				break;
			case '¡':
				texte_ok=texte_ok+'\241';
				break;
			case '«':
				texte_ok=texte_ok+'\253';
				break;
			case '»':
				texte_ok=texte_ok+'\273';
				break;
			case '¿':
				texte_ok=texte_ok+'\277';
				break;
			case 'À':
				texte_ok=texte_ok+'\300';
				break;
			case 'Á':
				texte_ok=texte_ok+'\301';
				break;
			case 'Â':
				texte_ok=texte_ok+'\302';
				break;
			case 'Ã':
				texte_ok=texte_ok+'\303';
				break;
			case 'Ä':
				texte_ok=texte_ok+'\304';
				break;
			case 'Å':
				texte_ok=texte_ok+'\305';
				break;
			case 'Æ':
				texte_ok=texte_ok+'\306';
				break;
			case 'Ç':
				texte_ok=texte_ok+'\307';
				break;
			case 'È':
				texte_ok=texte_ok+'\310';
				break;
			case 'É':
				texte_ok=texte_ok+'\311';
				break;
			case 'Ê':
				texte_ok=texte_ok+'\312';
				break;
			case 'Ë':
				texte_ok=texte_ok+'\313';
				break;
			case 'Ì':
				texte_ok=texte_ok+'\314';
				break;
			case 'Í':
				texte_ok=texte_ok+'\315';
				break;
			case 'Î':
				texte_ok=texte_ok+'\316';
				break;
			case 'Ï':
				texte_ok=texte_ok+'\317';
				break;
			case 'Ë':
				texte_ok=texte_ok+'\313';
				break;
			case 'Ð':
				texte_ok=texte_ok+'\320';
				break;
			case 'Ñ':
				texte_ok=texte_ok+'\321';
				break;
			case 'Ë':
				texte_ok=texte_ok+'\313';
				break;
			case 'Ò':
				texte_ok=texte_ok+'\322';
				break;
			case 'Ó':
				texte_ok=texte_ok+'\323';
				break;
			case 'Ô':
				texte_ok=texte_ok+'\324';
				break;
			case 'Õ':
				texte_ok=texte_ok+'\325';
				break;
			case 'Ö':
				texte_ok=texte_ok+'\326';
				break;
			case 'Ø':
				texte_ok=texte_ok+'\330';
				break;
			case 'Ù':
				texte_ok=texte_ok+'\331';
				break;
			case 'Ú':
				texte_ok=texte_ok+'\332';
				break;
			case 'Û':
				texte_ok=texte_ok+'\333';
				break;
			case 'Ü':
				texte_ok=texte_ok+'\334';
				break;
			case 'Ý':
				texte_ok=texte_ok+'\335';
				break;
			case 'Þ':
				texte_ok=texte_ok+'\336';
				break;
			case 'ß':
				texte_ok=texte_ok+'\337';
				break;
			case 'à':
				texte_ok=texte_ok+'\340';
				break;
			case 'á':
				texte_ok=texte_ok+'\341';
				break;
			case 'â':
				texte_ok=texte_ok+'\342';
				break;
			case 'ã':
				texte_ok=texte_ok+'\343';
				break;
			case 'ä':
				texte_ok=texte_ok+'\344';
				break;
			case 'å':
				texte_ok=texte_ok+'\345';
				break;
			case 'æ':
				texte_ok=texte_ok+'\346';
				break;
			case 'ç':
				texte_ok=texte_ok+'\347';
				break;
			case 'è':
				texte_ok=texte_ok+'\350';
				break;
			case 'é':
				texte_ok=texte_ok+'\351';
				break;
			case 'ê':
				texte_ok=texte_ok+'\352';
				break;
			case 'ë':
				texte_ok=texte_ok+'\353';
				break;
			case 'ì':
				texte_ok=texte_ok+'\354';
				break;
			case 'í':
				texte_ok=texte_ok+'\355';
				break;
			case 'î':
				texte_ok=texte_ok+'\356';
				break;
			case 'ï':
				texte_ok=texte_ok+'\357';
				break;
			case 'ð':
				texte_ok=texte_ok+'\360';
				break;
			case 'ñ':
				texte_ok=texte_ok+'\361';
				break;
			case 'ò':
				texte_ok=texte_ok+'\362';
				break;
			case 'ó':
				texte_ok=texte_ok+'\363';
				break;
			case 'ô':
				texte_ok=texte_ok+'\364';
				break;
			case 'õ':
				texte_ok=texte_ok+'\365';
				break;
			case 'ö':
				texte_ok=texte_ok+'\366';
				break;
			case 'ø':
				texte_ok=texte_ok+'\370';
				break;
			case 'ù':
				texte_ok=texte_ok+'\371';
				break;
			case 'ú':
				texte_ok=texte_ok+'\372';
				break;
			case 'û':
				texte_ok=texte_ok+'\373';
				break;
			case 'ü':
				texte_ok=texte_ok+'\374';
				break;
			case 'ý':
				texte_ok=texte_ok+'\375';
				break;
			case 'þ':
				texte_ok=texte_ok+'\376';
				break;
			case 'ÿ':
				texte_ok=texte_ok+'\377';
				break;
			default:
				texte_ok=texte_ok+texte.charAt(i);
				break;
		}
	}
	
	return texte_ok;
}

// Vérifie si une valeur est bien dans une fourchette
function ValInMinMax(valeur,mini,maxi)
{
	if ((typeof(mini)!='undefined') || (typeof(maxi)!='undefined'))
	{
		// On vérifie que min et maxi sont définis. Si oui, on vérifie que mini <= Maxi
		if ((typeof(mini)!='undefined') && (typeof(maxi)!='undefined'))
		{
			if ((!isNaN(mini)) && (!isNaN(maxi)))
				if (mini>maxi)
					return false;
		}
		else
		{
			// Il n'y a que le mini
			if (typeof(mini)!='undefined')
			{
				if (!isNaN(mini))
					if (valeur<mini)
						return false;
			}
			// Il n'y a que le maxi
			if (typeof(maxi)!='undefined')
			{
				if (!isNaN(maxi))
					if (valeur>maxi)
						return false;
			}
		}
	}
	return true;
}

// Vérifie si la chaîne est au format hexadécimal
function IsHexa(str)
{	
	var expr = new RegExp("^[a-f0-9]+$","gi");
	if ( !expr.test(str) )
		return false;

	return true;
}

// Vérifie si la chaîne est au format hexadécimal couleur
function IsHexaCol(str)
{	
	var expr = new RegExp("^[\#][a-f0-9]{6}$","gi");
	if ( !expr.test(str) )
		return false;

	return true;
}

// Vérifie si la chaîne est au format entier non signé
function IsUnsigned(str)
{	
	var expr = new RegExp("^[0-9]*$","gi");
	if ( !expr.test(str) )
		return false;

	return true;
}

// Vérifie si la chaîne est au format entier signé
function IsInteger(str)
{	
	var expr = new RegExp("^[\+\-]?[0-9]*$","gi");
	if ( !expr.test(str) )
		return false;

	return true;
}

// Vérifie si la chaîne est au format réel signé
function IsReal(str)
{	
	var expr = new RegExp("^[\+\-]?[0-9]+(\.[0-9]{0,})?$","gi");
	if ( !expr.test(str) )
		return false;

	return true;
}

// Vérifie si la chaîne est au format réel non signé
function IsRealUnsigned(str)
{	
	var expr = new RegExp("^[0-9]+(\.[0-9]{0,})?$","gi");
	if ( !expr.test(str) )
		return false;

	return true;
}

// Vérifie une date
function IsDate(date,masque)
{	
	if (!date)
		return false;

	var jour,mois,annee;
	switch (masque)
	{
		case "mmddyy":
			var expr = new RegExp("^[0-9]{6}$");
			// On vérifie le format
			if (!expr.test(date))
			{
				return false;
			}
			else
			{
				mois=Number(date.substr(0,2));
				jour=Number(date.substr(2,2));
				annee=Number(date.substr(4,2))+2000;
			}
			break;
		case "mmddyyyy":
			var expr = new RegExp("^[0-9]{8}$");
			// On vérifie le format
			if (!expr.test(date))
			{
				return false;
			}
			else
			{
				mois=Number(date.substr(0,2));
				jour=Number(date.substr(2,2));
				annee=Number(date.substr(4,4));
			}
			break;
		case "jjmmaa":
			var expr = new RegExp("^[0-9]{6}$");
			if (!expr.test(date))
			{
				return false;
			}
			else
			{
				jour=Number(date.substr(0,2));
				mois=Number(date.substr(2,2));
				annee=Number(date.substr(4,2))+2000;
			}
			break;
		case "jjmmaaaa":
			var expr = new RegExp("^[0-9]{8}$");
			if (!expr.test(date))
			{
				return false;
			}
			else
			{
				jour=Number(date.substr(0,2));
				mois=Number(date.substr(2,2));
				annee=Number(date.substr(4,4));
			}
			break;
		case "mm-dd-yy":
			var expr = new RegExp("^[0-9]{2}\-[0-9]{2}\-[0-9]{2}$");
			// On vérifie le format
			if (!expr.test(date))
			{
				return false;
			}
			else
			{
				var tab_date = date.split("-");
				mois=Number(tab_date[0]);
				jour=Number(tab_date[1]);
				annee=Number(tab_date[2])+2000;
			}
			break;
		case "mm/dd/yy":
			var expr = new RegExp("^[0-9]{2}\/[0-9]{2}\/[0-9]{2}$");
			// On vérifie le format
			if (!expr.test(date))
			{
				return false;
			}
			else
			{
				var tab_date = date.split("/");
				mois=Number(tab_date[0]);
				jour=Number(tab_date[1]);
				annee=Number(tab_date[2])+2000;
			}
			break;
		case "mm-dd-yyyy":
			var expr = new RegExp("^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$");
			// On vérifie le format
			if (!expr.test(date))
			{
				return false;
			}
			else
			{
				var tab_date = date.split("-");
				mois=Number(tab_date[0]);
				jour=Number(tab_date[1]);
				annee=Number(tab_date[2]);
			}
			break;
		case "mm/dd/yyyy":
			var expr = new RegExp("^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$");
			// On vérifie le format
			if (!expr.test(date))
			{
				return false;
			}
			else
			{
				var tab_date = date.split("/");
				mois=Number(tab_date[0]);
				jour=Number(tab_date[1]);
				annee=Number(tab_date[2]);
			}
			break;
		case "jj-mm-aa":
			var expr = new RegExp("^[0-9]{2}\-[0-9]{2}\-[0-9]{2}$");
			if (!expr.test(date))
			{
				return false;
			}
			else
			{
				var tab_date = date.split("-");
				jour=Number(tab_date[0]);
				mois=Number(tab_date[1]);
				annee=Number(tab_date[2])+2000;
			}
			break;
		case "jj/mm/aa":
			var expr = new RegExp("^[0-9]{2}\/[0-9]{2}\/[0-9]{2}$");
			if (!expr.test(date))
			{
				return false;
			}
			else
			{
				var tab_date = date.split("/");
				jour=Number(tab_date[0]);
				mois=Number(tab_date[1]);
				annee=Number(tab_date[2])+2000;
			}
			break;
		case "jj-mm-aaaa":
			var expr = new RegExp("^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$");
			if (!expr.test(date))
			{
				return false;
			}
			else
			{
				var tab_date = date.split("-");
				jour=Number(tab_date[0]);
				mois=Number(tab_date[1]);
				annee=Number(tab_date[2]);
			}
			break;
		case "jj/mm/aaaa":
			var expr = new RegExp("^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$");
			if (!expr.test(date))
			{
				return false;
			}
			else
			{
				var tab_date = date.split("/");
				jour=Number(tab_date[0]);
				mois=Number(tab_date[1]);
				annee=Number(tab_date[2]);
			}
			break;
		default :
			return false;
			break;
	}
	// On contrôle la validité du jour
	if ((jour==0) || (jour>31))
	{
		return false;
	}
	else
	{
		// vérification du nombre de jour dans le mois
		var dt_test = new Date(annee, Number(mois-1), jour);
		if (dt_test.getMonth() != Number(mois-1))
			return false;
	}

	// On contrôle la validité du mois
	if ((mois==0) || (mois>12))
	{
		return false;
	}
	
	return true;
}

// Vérifie si une date est bien dans une fourchette
function DateInMinMax(date,dmini,dmaxi,masque)
{
	if ((typeof(dmini)!='undefined') || (typeof(dmaxi)!='undefined'))
	{
		if ((IsDate(date,masque)) && ((IsDate(dmini,masque)) || (typeof(dmini)=='undefined')) && ((IsDate(dmaxi,masque)) || (typeof(dmaxi)=='undefined')))
		{
			var jour,mois,annee,
				jourmn,moismn,anneemn,
				jourmx,moismx,anneemx;
			switch (masque)
			{
				case "mmddyy":
					mois=Number(date.substr(0,2));
					jour=Number(date.substr(2,2));
					annee=Number(date.substr(4,2))+2000;
					if (typeof(dmini)!='undefined')
					{
						moismn=Number(dmini.substr(0,2));
						jourmn=Number(dmini.substr(2,2));
						anneemn=Number(dmini.substr(4,2))+2000;
					}
					if (typeof(dmaxi)!='undefined')
					{
						moismx=Number(dmaxi.substr(0,2));
						jourmx=Number(dmaxi.substr(2,2));
						anneemx=Number(dmaxi.substr(4,2))+2000;
					}
					break;
				case "mmddyyyy":
					mois=Number(date.substr(0,2));
					jour=Number(date.substr(2,2));
					annee=Number(date.substr(4,4));
					if (typeof(dmini)!='undefined')
					{
						moismn=Number(dmini.substr(0,2));
						jourmn=Number(dmini.substr(2,2));
						anneemn=Number(dmini.substr(4,4));
					}
					if (typeof(dmaxi)!='undefined')
					{
						moismx=Number(dmaxi.substr(0,2));
						jourmx=Number(dmaxi.substr(2,2));
						anneemx=Number(dmaxi.substr(4,4));
					}
					break;
				case "jjmmaa":
					jour=Number(date.substr(0,2));
					mois=Number(date.substr(2,2));
					annee=Number(date.substr(4,2))+2000;
					if (typeof(dmini)!='undefined')
					{
						moismn=Number(dmini.substr(0,2));
						jourmn=Number(dmini.substr(2,2));
						anneemn=Number(dmini.substr(4,2))+2000;
					}
					if (typeof(dmaxi)!='undefined')
					{
						moismx=Number(dmaxi.substr(0,2));
						jourmx=Number(dmaxi.substr(2,2));
						anneemx=Number(dmaxi.substr(4,2))+2000;
					}
					break;
				case "jjmmaaaa":
					jour=Number(date.substr(0,2));
					mois=Number(date.substr(2,2));
					annee=Number(date.substr(4,4));
					if (typeof(dmini)!='undefined')
					{
						moismn=Number(dmini.substr(0,2));
						jourmn=Number(dmini.substr(2,2));
						anneemn=Number(dmini.substr(4,4));
					}
					if (typeof(dmaxi)!='undefined')
					{
						moismx=Number(dmaxi.substr(0,2));
						jourmx=Number(dmaxi.substr(2,2));
						anneemx=Number(dmaxi.substr(4,4));
					}
					break;
				case "mm-dd-yy":
				case "mm-dd-yyyy":
					var tab_date = date.split("-");
					mois=Number(tab_date[0]);
					jour=Number(tab_date[1]);
					annee=Number(tab_date[2]);
					if (annee<2000)
						annee=annee+2000;
					var tab_dmini = dmini.split("-");
					if (typeof(dmini)!='undefined')
					{
						moismn=Number(tab_dmini[0]);
						jourmn=Number(tab_dmini[1]);
						anneemn=Number(tab_dmini[2]);
						if (anneemn<2000)
							anneemn=anneemn+2000;
					}
					if (typeof(dmaxi)!='undefined')
					{
						var tab_dmaxi = dmaxi.split("-");
						moismx=Number(tab_dmaxi[0]);
						jourmx=Number(tab_dmaxi[1]);
						anneemx=Number(tab_dmaxi[2]);
						if (anneemx<2000)
							anneemx=anneemx+2000;
					}
					break;
				case "mm/dd/yy":
				case "mm/dd/yyyy":
					var tab_date = date.split("/");
					mois=Number(tab_date[0]);
					jour=Number(tab_date[1]);
					annee=Number(tab_date[2]);
					if (annee<2000)
						annee=annee+2000;
					if (typeof(dmini)!='undefined')
					{
						var tab_dmini = dmini.split("/");
						moismn=Number(tab_dmini[0]);
						jourmn=Number(tab_dmini[1]);
						anneemn=Number(tab_dmini[2]);
						if (anneemn<2000)
							anneemn=anneemn+2000;
					}
					if (typeof(dmaxi)!='undefined')
					{
						var tab_dmaxi = dmaxi.split("/");
						moismx=Number(tab_dmaxi[0]);
						jourmx=Number(tab_dmaxi[1]);
						anneemx=Number(tab_dmaxi[2]);
						if (anneemx<2000)
							anneemx=anneemx+2000;
					}
					break;
				case "jj-mm-aa":
				case "jj-mm-aaaa":
					var tab_date = date.split("-");
					jour=Number(tab_date[0]);
					mois=Number(tab_date[1]);
					annee=Number(tab_date[2]);
					if (annee<2000)
						annee=annee+2000;
					if (typeof(dmini)!='undefined')
					{
						var tab_dmini = dmini.split("-");
						jourmn=Number(tab_dmini[0]);
						moismn=Number(tab_dmini[1]);
						anneemn=Number(tab_dmini[2]);
						if (anneemn<2000)
							anneemn=anneemn+2000;
					}
					if (typeof(dmaxi)!='undefined')
					{
						var tab_dmaxi = dmaxi.split("-");
						jourmx=Number(tab_dmaxi[0]);
						moismx=Number(tab_dmaxi[1]);
						anneemx=Number(tab_dmaxi[2]);
						if (anneemx<2000)
							anneemx=anneemx+2000;
					}
					break;
				case "jj/mm/aa":
				case "jj/mm/aaaa":
					var tab_date = date.split("/");
					jour=Number(tab_date[0]);
					mois=Number(tab_date[1]);
					annee=Number(tab_date[2]);
					if (annee<2000)
						annee=annee+2000;
					if (typeof(dmini)!='undefined')
					{
						var tab_dmini = dmini.split("/");
						jourmn=Number(tab_dmini[0]);
						moismn=Number(tab_dmini[1]);
						anneemn=Number(tab_dmini[2]);
						if (anneemn<2000)
							anneemn=anneemn+2000;
					}
					if (typeof(dmaxi)!='undefined')
					{
						var tab_dmaxi = dmaxi.split("/");
						jourmx=Number(tab_dmaxi[0]);
						moismx=Number(tab_dmaxi[1]);
						anneemx=Number(tab_dmaxi[2]);
						if (anneemx<2000)
							anneemx=anneemx+2000;
					}
					break;
				default :
					return false;
					break;
			}
	
			var datetst = new Date(annee, Number(mois-1), jour);
	
			if ((typeof(dmini)!='undefined') && (typeof(dmaxi)!='undefined'))
			{
				var datemn = new Date(anneemn, Number(moismn-1), jourmn);
				var datemx = new Date(anneemx, Number(moismx-1), jourmx);
				
				if (datemx.getTime()>=datemn.getTime())
				{
					if ((datetst.getTime()<datemn.getTime()) || (datetst.getTime()>datemx.getTime()))
						return false;
				}
				else
				{
					return false;
				}
			}
			else
			{
				// Uniquement date maximum
				if ((typeof(dmini)=='undefined') && (typeof(dmaxi)!='undefined'))
				{
					var datemx = new Date(anneemx, Number(moismx-1), jourmx);
					
					if (datemx.getTime()<datetst.getTime())
						return false;
				}
				// Uniquement date minimum
				if ((typeof(dmini)!='undefined') && (typeof(dmaxi)=='undefined'))
				{
					var datemn = new Date(anneemn, Number(moismn-1), jourmn);
					
					if (datemn.getTime()>datetst.getTime())
						return false;
				}
			}
		}
	}
	return true;
}

// Vérifie si la chaîne est au format heure hh:mm:ss
function IsHeure(str)
{	
	var expr = new RegExp("^[0-9]{1,2}\:[0-9]{1,2}\:[0-9]{1,2}$");
	if ( !expr.test(str) )
		return false;

	// On vérifie les valeurs individuelles
	var tab_duree = str.split(":");
	if ((Number(tab_duree[0]) > 23) || (Number(tab_duree[1]) > 59) || (Number(tab_duree[2]) > 59))
		return false;

	return true;
}

// Convertit une heure en secondes
function ConvertHeureSec(str)
{
	var totalsec =0;
	if (IsHeure(str)) // Si c'est vraiment une heure
	{
		// On calcule la durée totale en secondes
		var tab_duree = str.split(":");
		totalsec = (Number(tab_duree[0])*3600)+(Number(tab_duree[1])*60)+Number(tab_duree[2]);
	}

	return totalsec;
}

// Vérifie si la chaîne est au format heure hh:mm
function IsHeurehhmm(str)
{	
	var expr = new RegExp("^[0-9]{1,2}\:[0-9]{1,2}$");
	if ( !expr.test(str) )
		return false;

	// On vérifie les valeurs individuelles
	var tab_duree = str.split(":");
	if ((Number(tab_duree[0]) > 23) || (Number(tab_duree[1]) > 59))
		return false;

	return true;
}

// Convertit une heure hhmm en secondes
function ConvertHeurehhmmSec(str)
{
	var totalsec =0;
	if (IsHeurehhmm(str)) // Si c'est vraiment une heure hhmm
	{
		// On calcule la durée totale en secondes
		var tab_duree = str.split(":");
		totalsec = (Number(tab_duree[0])*3600)+(Number(tab_duree[1])*60);
	}

	return totalsec;
}

// Vérifie si la chaîne est une durée
function IsDuree(str)
{	
	var expr = new RegExp("^[0-9]{1,}\:[0-9]{1,2}\:[0-9]{1,2}$");
	if ( !expr.test(str) )
		return false;

	// On vérifie les valeurs individuelles
	var tab_duree = str.split(":");
	if ((Number(tab_duree[1]) > 59) || (Number(tab_duree[2]) > 59))
		return false;

	return true;
}

// Vérifie si la chaîne est une durée
function IsDureehhmm(str)
{	
	var expr = new RegExp("^[0-9]{1,}\:[0-9]{1,2}$");
	if ( !expr.test(str) )
		return false;

	// On vérifie les valeurs individuelles
	var tab_duree = str.split(":");
	if (Number(tab_duree[1]) > 59)
		return false;

	return true;
}

// Convertit une durée en secondes
function ConvertDureeSec(str)
{
	var totalsec=0;
	if (IsDuree(str)) // Si c'est vraiment une durée
	{
		// On calcule la durée totale en secondes
		var tab_duree = str.split(":");
		totalsec = (Number(tab_duree[0])*3600)+(Number(tab_duree[1])*60)+Number(tab_duree[2]);
	}

	return totalsec;
}

// Convertit une durée hhmm en secondes
function ConvertDureehhmmSec(str)
{
	var totalsec=0;
	if (IsDureehhmm(str)) // Si c'est vraiment une durée hhmm
	{
		// On calcule la durée totale en secondes
		var tab_duree = str.split(":");
		totalsec = (Number(tab_duree[0])*3600)+(Number(tab_duree[1])*60);
	}

	return totalsec;
}

// Vérifie si un texte est vide
function ChampEstVide(texte)
{
	if (!texte)
	{
		return true;
	}

	if (RLtrim(texte)=="")
	{
		return true;
	}
	
	return false;
}

// Donne le nombre d'éléments sélectionnés dans une liste
function NbElementsSel(liste)
{
	var nbSelected=0;
	for (var nb=0; nb<liste[0].options.length; nb++)
	{
		if (liste[0].options[nb].selected)
		{
			nbSelected++;
		}
	}
	
	return nbSelected;
}

// Donne le nombre d'éléments cochés dans une liste
function NbElementsChk(liste)
{
	var nbChecked=0;
	for (var nb=0; nb<liste.length; nb++)
	{
		if (liste[nb].checked)
		{
			nbChecked++;
		}
	}
	
	return nbChecked;
}

// Fonction de contrôle du SIREN en fonction du code pays
function IsSiren(siren, pays)
{
	var sirenok=false;
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'fr' :
				if ((siren.length != 9) || (isNaN(siren)) )
					break;
				var somme = 0;
				var tmp;
				for (var idx=0; idx<siren.length; idx++) 
				{
					// Les positions paires : 2ème, 4ème, 6ème et 8ème chiffre
					if ((idx % 2) == 1) 
					{ 
						tmp = siren.charAt(idx) * 2; // On le multiplie par 2
						if (tmp > 9)
							tmp -= 9;    // Si le résultat est supérieur à 9, on lui soustrait 9
					}
					else
						tmp = siren.charAt(idx);
			
					somme += parseInt(tmp);
				}
			
				// Si la somme est un multiple de 10 alors le SIREN est valide
				if ((somme % 10) == 0)
					sirenok=true;
				break;
			default :
				break;
		}
	}
	return sirenok;
}

// Fonction de contrôle du SIRET
function IsSiret(siret,pays)
{
	var siretok=false;
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'fr' :
			case 'gf' :
			case 'gp' :
			case 'mq' :
			case 're' :
				if ( (siret.length != 14) || (isNaN(siret)) )
					break;
			
				var somme = 0;
				var tmp;
			
				for (var idx = 0; idx<siret.length; idx++) 
				{
					// Les positions impaires : 1er, 3è, 5è, etc...
					if ((idx % 2) == 0) 
					{ 
						tmp = siret.charAt(idx) * 2; // On le multiplie par 2
						if (tmp > 9)
							tmp -= 9;    // Si le résultat est supérieur à 9, on lui soustrait 9
					}
					else
						tmp = siret.charAt(idx);
					somme += parseInt(tmp);
				}
			
				if ((somme % 10) == 0)
					siretok=true; // Si la somme est un multiple de 10 alors le SIRET est valide
				break;
			default :
				break;
		}
	}
	
	return siretok;
}

// Fonction de contrôle du RIB
function IsRIB(rib,pays)
{
	var ribok=false;
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'fr' :
			case 'gf' :
			case 'gp' :
			case 'mq' :
			case 're' :
				var tab_rib = rib.split(" ");
			
				var banque=tab_rib[0];
				var guichet=tab_rib[1];
				var compte=tab_rib[2];
				var clef=parseInt(tab_rib[3]);
			
				// Conversion du numéro de compte en chiffres
				var tab= "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
				var tab1="123456789123456789234567890123456789";
			
				var cpte="";
				for (var idx = 0; idx<compte.length; idx++) 
				{
					cpte+=tab1.charAt(tab.indexOf(compte.charAt(idx)));
				}
			
				//Calcul clé RIB
				var clefc = 97 - (((parseInt(banque)% 97 * 100000 + parseFloat(guichet)) % 97 * 100000000000 + parseInt(cpte)) % 97) * 100 % 97;
				
				if (clef == clefc)
					ribok=true; 
				break;
			default :
				break;
		}
	}
	
	return ribok;
}

// Fonction de contrôle du code IBAN
function IsIBAN(iban)
{
	var ibanok=false;
	
	var striban=iban;
	var lng= striban.length;

	// On récupère la clef de l'IBAN à tester
	var clefIBAN = striban.substr(2,2);

	// On calcule la clef IBAN
	var IBANverif = striban.substr(4,(lng-4))+striban.substr(0,2)+'00'; 

	// Conversion du numéro de compte en chiffres
	// Avec nettoyage des caractères indésirables
	var tab= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	var IBANnum='';
	for(var idx =0; idx<IBANverif.length; idx++)
    {
		if (IBANverif.charAt(idx).match(/[A-Z]/))
		{
			IBANnum+=tab.indexOf(IBANverif.charAt(idx))+10;
		}
		else
		{
			if (IBANverif.charAt(idx).match(/[0-9]/))
				IBANnum+=IBANverif.charAt(idx);
		}
    }
	
	// On calcule la clef IBAN
	// Découpage par bloc de 9 chiffres pour calculer le modulo (pb de précision)
	var idx=0;
	var str_reste='';
	var clef_calc;
	var str_tmp;
	var nb_tmp;
	while (idx<IBANnum.length)
	{
		str_tmp=str_reste+IBANnum.substring(idx, idx+9);
		nb_tmp=parseFloat(str_tmp);
		clef_calc=nb_tmp % 97;
		str_reste=''+clef_calc;
		
		idx=idx+9;
	}

	var code_final;
	code_final=98-(clef_calc % 97);

	var str_clef_calc;
	if (code_final<10)
	{
		str_clef_calc='0'+code_final;
	}
	else
	{
		str_clef_calc=''+code_final;
	}

	if (clefIBAN == str_clef_calc)
		ibanok=true; 

	return ibanok;
}

// Fonction de contrôle du numéro TVA
function IsTVA(tva,pays)
{
	var tvaok=false;
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'fr' :
				var siren=tva.substr(4,9);
				if (IsSiren(siren,pays)==false)
				{
					errno=1;
				}
				else
					tvaok=true;
				break;
			default :
				tvaok=true;
				break;
		}
	}
	
	return tvaok;
}

// Fonction de contrôle du numéro INSEE
function IsINSEE(insee,pays)
{
	var inseeok=false;
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'fr' :
				var tab_insee = insee.split(" ");
				var clef=parseInt(tab_insee[6]);
			
				var retirer=0;
				if (tab_insee[3]=="2A")
				{
					retirer=1000000;
					tab_insee[3]="20"
				}
				if (tab_insee[3]=="2B")
				{
					retirer=2000000;
					tab_insee[3]="20"
				}
				var tab_pnum = tab_insee.slice(0,6);
				var pnum = tab_pnum.join("");
			
				//Calcul clé INSEE
				var clefc = 97 - (parseInt(pnum)% 97);
			
				if (clef == clefc)
					return true; 
				else
					return false;
				break;
			default :
				inseeok=true;
				break;
		}
	}
	
	return inseeok;
}


// Vérifie si la chaîne est un code EAN-8
function IsEAN8(str)
{	
	var eanok = false;
	
	// Nettoyage de la chaine
	var expr = new RegExp("[ ]|\-","g");
	var str_replace;	
	str_replace = str.replace(expr,'','g');

	if (str_replace.length==8)
	{
		// On récupère la clef du code à tester
		var clefEAN = str_replace.substr(7,1);
		var clef_calc=0;
		for(var idx =1; idx<8; idx++)
		{
			if ((idx%2)!=0)
			{
				clef_calc+= 3 * parseInt(str_replace.substr(idx-1,1));
			}
			else
			{
				clef_calc+= parseInt(str_replace.substr(idx-1,1));
			}
		}

		clef_calc  = clef_calc % 10;
		clef_calc  = 10 - clef_calc;
		if (clef_calc == 10)
			clef_calc = '0';
		else
			clef_calc=''+clef_calc;
		
		if (clefEAN == clef_calc)
			eanok=true; 
	}

	return eanok;
}

// Vérifie si la chaîne est un code EAN-13
function IsEAN13(str)
{	
	var eanok = false;
	
	// Nettoyage de la chaine
	var expr = new RegExp("[ ]|\-","g");
	var str_replace;	
	str_replace = str.replace(expr,'','g');

	if (str_replace.length==13)
	{
		// On récupère la clef du code à tester
		var clefEAN = str_replace.substr(12,1);

		var clef_calc=0;
		for(var idx =1; idx<13; idx++)
		{
			if ((idx%2)!=0)
			{
				clef_calc+= parseInt(str_replace.substr(idx-1,1));
			}
			else
			{
				clef_calc+= 3 * parseInt(str_replace.substr(idx-1,1));
			}
		}

		clef_calc  = clef_calc % 10;
		clef_calc  = 10 - clef_calc;
		if (clef_calc == 10)
			clef_calc = '0';
		else
			clef_calc=''+clef_calc;
		
		if (clefEAN == clef_calc)
			eanok=true; 
	}

	return eanok;
}

// Vérifie si la chaîne est un code GTIN-8
function IsGTIN8(str)
{	
	var gtinok = false;
	
	// Nettoyage de la chaine
	var expr = new RegExp("[ ]|\-","g");
	var str_replace;	
	str_replace = str.replace(expr,'','g');

	if (str_replace.length==8)
	{
		// On récupère la clef du code à tester
		var clefGTIN8 = str_replace.substr(7,1);

		var clef_calc=0;
		for(var idx =1; idx<8; idx++)
		{
			if ((idx%2)!=0)
			{
				clef_calc+= 3 * parseInt(str_replace.substr(idx-1,1));
			}
			else
			{
				clef_calc+= parseInt(str_replace.substr(idx-1,1));
			}
		}
		clef_calc  = clef_calc % 10;
		clef_calc  = 10 - clef_calc;
		if (clef_calc == 10)
			clef_calc = '0';
		else
			clef_calc=''+clef_calc;
		
		if (clefGTIN13 == clef_calc)
			gtinok=true; 
	}

	return gtinok;
}

// Vérifie si la chaîne est un code GTIN-12
function IsGTIN12(str)
{	
	var gtinok = false;
	
	// Nettoyage de la chaine
	var expr = new RegExp("[ ]|\-","g");
	var str_replace;	
	str_replace = str.replace(expr,'','g');

	if (str_replace.length==12)
	{
		// On récupère la clef du code à tester
		var clefGTIN12 = str_replace.substr(11,1);

		var clef_calc=0;
		for(var idx =1; idx<12; idx++)
		{
			if ((idx%2)!=0)
			{
				clef_calc+= 3 * parseInt(str_replace.substr(idx-1,1));
			}
			else
			{
				clef_calc+= parseInt(str_replace.substr(idx-1,1));
			}
		}
		clef_calc  = clef_calc % 10;
		clef_calc  = 10 - clef_calc;
		if (clef_calc == 10)
			clef_calc = '0';
		else
			clef_calc=''+clef_calc;
		
		if (clefGTIN12 == clef_calc)
			gtinok=true; 
	}

	return gtinok;
}

// Vérifie si la chaîne est un code GTIN-13
function IsGTIN13(str)
{	
	var gtinok = false;
	
	// Nettoyage de la chaine
	var expr = new RegExp("[ ]|\-","g");
	var str_replace;	
	str_replace = str.replace(expr,'','g');

	if (str_replace.length==13)
	{
		// On récupère la clef du code à tester
		var clefGTIN13 = str_replace.substr(12,1);

		var clef_calc=0;
		for(var idx =1; idx<13; idx++)
		{
			if ((idx%2)!=0)
			{
				clef_calc+= parseInt(str_replace.substr(idx-1,1));
			}
			else
			{
				clef_calc+= 3 * parseInt(str_replace.substr(idx-1,1));
			}
		}
		clef_calc  = clef_calc % 10;
		clef_calc  = 10 - clef_calc;
		if (clef_calc == 10)
			clef_calc = '0';
		else
			clef_calc=''+clef_calc;
		
		if (clefGTIN13 == clef_calc)
			gtinok=true; 
	}

	return gtinok;
}

// Vérifie si la chaîne est un code GTIN-14
function IsGTIN14(str)
{	
	var gtinok = false;
	
	// Nettoyage de la chaine
	var expr = new RegExp("[ ]|\-","g");
	var str_replace;	
	str_replace = str.replace(expr,'','g');

	if (str_replace.length==14)
	{
		// On récupère la clef du code à tester
		var clefGTIN14 = str_replace.substr(13,1);

		var clef_calc=0;
		for(var idx =1; idx<14; idx++)
		{
			if ((idx%2)!=0)
			{
				clef_calc+= 3 * parseInt(str_replace.substr(idx-1,1));
			}
			else
			{
				clef_calc+= parseInt(str_replace.substr(idx-1,1));
			}
		}
		clef_calc  = clef_calc % 10;
		clef_calc  = 10 - clef_calc;
		if (clef_calc == 10)
			clef_calc = '0';
		else
			clef_calc=''+clef_calc;
		
		if (clefGTIN14 == clef_calc)
			gtinok=true; 
	}

	return gtinok;
}

// Vérifie si la chaîne est un code ISBN-10
function IsISBN10(str)
{	
	var isbnok = false;
	
	// Nettoyage de la chaine
	var expr = new RegExp("[ ]|\-","g");
	var str_replace;	
	str_replace = str.replace(expr,'','g');

	if (str_replace.length==10)
	{
		// On récupère la clef du code à tester
		var clefISBN10 = str_replace.substr(9,1);
	
		var clef_calc=0;
		for(var idx =0; idx<9; idx++)
		{
			clef_calc+= (10-idx) * parseInt(str_replace.substr(idx,1));
		}
		clef_calc  = clef_calc % 11;
		clef_calc  = 11 - clef_calc;
		switch (clef_calc) 
		{
			case 10:
				clef_calc = 'X';
				break;
			case 11:
				clef_calc = '0';
				break;
			default:
		}
		
		if (clefISBN10 == clef_calc)
			isbnok=true; 
	}

	return isbnok;
}

// Vérifie si la chaîne est un code ISBN-13
function IsISBN13(str)
{	
	var isbnok = false;
	
	// Nettoyage de la chaine
	var expr = new RegExp("[ ]|\-","g");
	var str_replace;	
	str_replace = str.replace(expr,'','g');

	if (str_replace.length==13)
	{
		// On récupère la clef du code à tester
		var clefISBN13 = str_replace.substr(12,1);
	
		var clef_calc=0;
		for(var idx =1; idx<13; idx++)
		{
			if ((idx%2)!=0)
			{
				clef_calc+= parseInt(str_replace.substr(idx-1,1));
			}
			else
			{
				clef_calc+= 3 * parseInt(str_replace.substr(idx-1,1));
			}
		}
		clef_calc  = clef_calc % 10;
		clef_calc  = 10 - clef_calc;
		if (clef_calc == 10)
			clef_calc = '0';
		else
			clef_calc=''+clef_calc;
		
		if (clefISBN13 == clef_calc)
			isbnok=true; 
	}

	return isbnok;
}

// Vérifie si la chaîne est un code SSCC
function IsSSCC(str)
{	
	var ssccok = false;
	
	// Nettoyage de la chaine
	var expr = new RegExp("[ ]|\-","g");
	var str_replace;	
	str_replace = str.replace(expr,'','g');

	if (str_replace.length==18)
	{
		// On récupère la clef du code à tester
		var clefSSCC = str_replace.substr(17,1);

		var clef_calc=0;
		for(var idx =1; idx<18; idx++)
		{
			if ((idx%2)!=0)
			{
				clef_calc+= 3 * parseInt(str_replace.substr(idx-1,1));
			}
			else
			{
				clef_calc+= parseInt(str_replace.substr(idx-1,1));
			}
		}
		clef_calc  = clef_calc % 10;
		clef_calc  = 10 - clef_calc;
		if (clef_calc == 10)
			clef_calc = '0';
		else
			clef_calc=''+clef_calc;
		
		if (clefSSCC == clef_calc)
			ssccok=true; 
	}

	return ssccok;
}

// Vérifie si la chaîne est un code ISSN
function IsISSN(str)
{	
	var issnok = false;
	
	// Nettoyage de la chaine
	var expr = new RegExp("[ ]|\-","g");
	var str_replace;	
	str_replace = str.replace(expr,'','g');

	if (str_replace.length==8)
	{
		// On récupère la clef du code à tester
		var clefISSN = str_replace.substr(7,1);
		var clef_calc=0;
		for(var idx =0; idx<7; idx++)
		{
			clef_calc+= (8-idx) * parseInt(str_replace.substr(idx,1));
		}
		clef_calc  = clef_calc % 11;
		clef_calc  = 11 - clef_calc;
		switch (clef_calc) 
		{
			case 10:
				clef_calc = 'X';
				break;
			case 11:
				clef_calc = '0';
				break;
			default:
		}
		
		if (clefISSN == clef_calc)
			issnok=true; 
	}

	return issnok;
}

// Donne la qualité d'un mot de passe
// 9 maximum
function GivePwQ(valpw)
{
	var nivpw=0;	// Niveau calculé

	if ((valpw) && (valpw!=""))
	{
		// Vérification longueur
		if (valpw.length>=7)
		{
			nivpw++;
		}

		// Vérification majuscules
		if (valpw.match(/[A-Z]/))
		{
			nivpw++;
		}

		// Vérification minuscules
		if (valpw.match(/[a-z]/))
		{
			nivpw++;
		}

		// Vérification si caractères numériques
		if (valpw.match(/\d/))
		{
			nivpw++;
		}

		// Vérification présence caractère souligné
		if (valpw.indexOf("_") > -1) 
		{
			nivpw++;
		}

		// Il doit y avoir un caractère spécial
		if (valpw.match(/[\-\#\@\%\!\$\*\&\<\>]/))
		{
			nivpw++;
		}

		// Il doit y avoir une parenthèse spéciale
		if (valpw.match(/[\{\}\[\]]/))
		{
			nivpw++;
		}

		//  Il vaut mieux commencer avec une lettre
		if (valpw.match(/^[a-zA-Z]+/))
		{
			nivpw++;
		}
		
		// Les espaces ne sont pas recommandés
		var invalide = " ";
		if (!(valpw.indexOf(invalide) > -1))
		{
			nivpw++;
		}
	}
	
	return nivpw;
}

// Retourne la string regexp 'téléphone fixe' en fonction du code pays
// Si pas de pays, numéro international
function GiveExpr_tel(pays)
{
	var expr='';

	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'ad' :
				var expr = "^([+]376[ ])?[0-9]{6,9}$";
				break;
			case 'ae' :
				var expr = "^([+]31[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{7,9}$";
				break;
			case 'af' :
				var expr = "^([+]93[ ]|0)[0-9]{2}[ \.\-]?[0-9]{6}$";
				break;
			case 'ag' :
				var expr = "^([+]1[ ])?268[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'ai' :
				var expr = "^([+]1[ ])?264[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'al' :
				var expr = "^([+]355[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{4,6}?$";
				break;
			case 'am' :
				var expr = "^([+]374[ ]|0)[0-9]{2,5}[ \.\-]?[0-9]{3,6}$";
				break;
			case 'an' :
				var expr = "^([+]599[ ]|0)[0-9]{0,1}[ \.\-]?[0-9]{7}$";
				break;
			case 'ao' :
				var expr = "^([+]244[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{5,8}$";
				break;
			case 'ar' :
				var expr = "^([+]54[ ]|0)[0-9]{2,4}[ \.\-]?[0-9]{5,8}$";
				break;
			case 'as' :
				var expr = "^([+]1[ ])?684[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'at' :
				var expr = "^([+]43[ ]|0)[0-9]{1,4}[ \.\-]?[0-9]{3,12}$";
				break;
			case 'au' :
				var expr = "^([+]61[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{5,15}$";
				break;
			case 'aw' :
				var expr = "^([+]297[ ])?[0-9]{1}[ \.\-]?[0-9]{7}$";
				break;
			case 'ax' :
				var expr = "^([+]358[ ])?18[ \.\-]??[0-9]{4}([0-9]{6})?$";
				break;
			case 'az' :
				var expr = "^([+]994[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ba' :
				var expr = "^([+]387[ ]|0)[0-9]{2}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'bb' :
				var expr = "^([+]1[ ])?246[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'bd' :
				var expr = "^([+]880[ ]|0)[0-9]{1,4}[ \.\-]?[0-9]{3,7}$";
				break;
			case 'be' :
				var expr = "^([+]32[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'bf' :
				var expr = "^([+]226[ ])?[0-9]{8}$";
				break;
			case 'bg' :
				var expr = "^([+]359[ ]|0)[0-9]{1,5}[ \.\-]?[0-9]{3,7}$";
				break;
			case 'bh' :
				var expr = "^([+]973[ ])?[0-9]{6,8}$";
				break;
			case 'bi' :
				var expr = "^([+]257[ ])?[0-9]{7}$";
				break;
			case 'bj' :
				var expr = "^([+]229[ ])?[0-9]{8}$";
				break;
			case 'bm' :
				var expr = "^([+]1[ ])?441[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'bn' :
				var expr = "^([+]673[ ])?[0-9]{6,7}$";
				break;
			case 'bo' :
				var expr = "^([+]49[ ]|0)[0-9]{1}[ \.\-]?[0-9]{7}$";
				break;
			case 'br' :
				var expr = "^([+]55[ ]|0)[0-9]{2}[ \.\-]?[0-9]{8}$";
				break;
			case 'bs' :
				var expr = "^([+]1[ ])?242[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'bt' :
				var expr = "^([+]975[ ]|0)?[0-9]{1}[ \.\-]?[0-9]{6}$";
				break;
			case 'bw' :
				var expr = "^([+]267[ ])?[0-9]{6,7}$";
				break;
			case 'by' :
				var expr = "^([+]375[ ]|8)[0-9]{2,4}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'bz' :
				var expr = "^([+]501[ ])?[0-9]{7}$";
				break;
			case 'ca' :
				var expr = "^([+]1[ ])?[0-9]{3}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'cd' :
				var expr = "^([+]243[ ]|0)[0-9]{1}[ \.\-]?[0-9]{7}$";
				break;
			case 'cf' :
				var expr = "^([+]236[ ])?[0-9]{6}$";
				break;
			case 'cg' :
				var expr = "^([+]242[ ])?[0-9]{7}$";
				break;
			case 'ch' :
				var expr = "^([+]41[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'ci' :
				var expr = "^([+]225[ ])?[0-9]{8}$";
				break;
			case 'ck' :
				var expr = "^([+]682[ ])?[0-9]{5}$";
				break;
			case 'cl' :
				var expr = "^([+]56[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'cm' :
				var expr = "^([+]237[ ])?[0-9]{7}$";
				break;
			case 'cn' :
				var expr = "^([+]86[ ]|0)[0-9]{2,4}[ \.\-]?[0-9]{4,8}$";
				break;
			case 'co' :
				var expr = "^([+]57[ ]|09)[0-9]{1,5}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'cr' :
				var expr = "^([+]506[ ])?[0-9]{7}$";
				break;
			case 'cs' :
				var expr = "^([+]381[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'cu' :
				var expr = "^([+]53[ ]|0)[0-9]{1,4}[ \.\-]?[0-9]{4,7}$";
				break;
			case 'cv' :
				var expr = "^([+]238[ ])?[0-9]{7}$";
				break;
			case 'cz' :
				var expr = "^([+]420[ ])?[0-9]{3}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}$";
				break;
			case 'cy' :
				var expr = "^([+]357[ ])?[0-9]{1,2}[ \.\-]?[0-9]{4,6}$";
				break;
			case 'de' :
				var expr = "^([+]49[ ]|0)[0-9]{2,5}[ \.\-]?[0-9]{3,9}$";
				break;
			case 'dj' :
				var expr = "^([+]253[ ])?[0-9]{6}$";
				break;
			case 'dk' :
				var expr = "^([+]45[ ])?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'do' :
				var expr = "^([+]1[ ])?767[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'dz' :
				var expr = "^([+]213[ ]|0)[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'ec' :
				var expr = "^([+]49[ ]|0)[0-9]{1}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'ee' :
				var expr = "^([+]372[ ])?[0-9]{7,8}$";
				break;
			case 'eg' :
				var expr = "^([+]20[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'er' :
				var expr = "^([+]291[ ]|0)[0-9]{1}[ \.\-]?[0-9]{6}$";
				break;
			case 'es' :
				var expr = "^([+]34[ ])?[0-9]{9}$";
				break;
			case 'et' :
				var expr = "^([+]251[ ]|0)[0-9]{2}[ \.\-]?[0-9]{7}$";
				break;
			case 'fi' :
				var expr = "^([+]358[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{4,9}$";
				break;
			case 'fj' :
				var expr = "^([+]679[ ])?[0-9]{7}$";
				break;
			case 'fk' :
				var expr = "^([+]500[ ])?[0-9]{5}$";
				break;
			case 'fm' :
				var expr = "^([+]691[ ]|1)[0-9]{7}$";
				break;
			case 'fo' :
				var expr = "^([+]298[ ])?[0-9]{6}$";
				break;
			case 'fr' :
				var expr = "^([+]33[ ]|0)[1-6,8-9]{1}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'ga' :
				var expr = "^([+]241[ ])?[0-9]{6}$";
				break;
			case 'gb' :
				var expr = "^([+]44[ ]|0)[0-9]{2,6}[ \.\-]?[0-9]{3,8}$";
				break;
			case 'gd' :
				var expr = "^([+]1[ ])?473[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'ge' :
				var expr = "^([+]995[ ]|8)[0-9]{2,3}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'gf' :
				var expr = "^([+]594[ ]594|0594)[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}$";
				break;
			case 'gh' :
				var expr = "^([+]233[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{3,6}$";
				break;
			case 'gi' :
				var expr = "^([+]350[ ])?[0-9]{4,8}$";
				break;
			case 'gl' :
				var expr = "^([+]299[ ])?[0-9]{6}$";
				break;
			case 'gm' :
				var expr = "^([+]220[ ])?[0-9]{7}$";
				break;
			case 'gn' :
				var expr = "^([+]224[ ])?[0-9]{6}$";
				break;
			case 'gp' :
				var expr = "^([+]590|0590)[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}$";
				break;
			case 'gq' :
				var expr = "^([+]240[ ])?[0-9]{0,1}[ \.\-]?[0-9]{6}$";
				break;
			case 'gr' :
				var expr = "^([+]30[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'gt' :
				var expr = "^([+]502[ ])?[0-9]{7,8}$";
				break;
			case 'gu' :
				var expr = "^([+]1[ ])?671[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'gw' :
				var expr = "^([+]245[ ])?[0-9]{6}$";
				break;
			case 'gy' :
				var expr = "^([+]591[ ])?[0-9]{1}[ \.\-]?[0-9]{5}$";
				break;
			case 'hk' :
				var expr = "^([+]852[ ])?[0-9]{8}$";
				break;
			case 'hn' :
				var expr = "^([+]504[ ])?[0-9]{7}$";
				break;
			case 'hr' :
				var expr = "^([+]385[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ht' :
				var expr = "^([+]509[ ])?[0-9]{7}$";
				break;
			case 'hu' :
				var expr = "^([+]36[ ]|06)?[0-9]{1,2}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'id' :
				var expr = "^([+]62[ ]|0)[0-9]{1,4}[ \.\-]?[0-9]{5,11}$";
				break;
			case 'ie' :
				var expr = "^([+]353[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'il' :
				var expr = "^([+]972[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'in' :
				var expr = "^([+]91[ ]|0)[0-9]{2,7}[ \.\-]?[0-9]{4,8}$";
				break;
			case 'iq' :
				var expr = "^([+]964[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{4,9}$";
				break;
			case 'ir' :
				var expr = "^([+]97[ ]|0)[0-9]{3}[ \.\-]?[0-9]{7}$";
				break;
			case 'is' :
				var expr = "^([+]354[ ])?[0-9]{7,9}$";
				break;
			case 'it' :
				var expr = "^([+]39[ ])?[0-9]{1,3}[ \.\-]?[0-9]{5,8}$";
				break;
			case 'jm' :
				var expr = "^([+]1[ ])?876[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'jo' :
				var expr = "^([+]962[ ]|0)[0-9]{1}[ \.\-]?[0-9]{7,8}$";
				break;
			case 'jp' :
				var expr = "^([+]81[ ]|0)[0-9]{1,5}[ \.\-]?[0-9]{4,8}$";
				break;
			case 'ke' :
				var expr = "^([+]254[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'kg' :
				var expr = "^([+]996[ ]|0)[0-9]{3,4}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'kh' :
				var expr = "^([+]855[ ]|0)[0-9]{2}[ \.\-]?[0-9]{6}$";
				break;
			case 'ki' :
				var expr = "^([+]686[ ])?[0-9]{5}$";
				break;
			case 'km' :
				var expr = "^([+]262[ ]|[+]269[ ])?[0-9]{6}$";
				break;
			case 'kn' :
				var expr = "^([+]1[ ])?869[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'kp' :
				var expr = "^([+]82[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'kr' :
				var expr = "^([+]850[ ]|0)?[0-9]{1,2}[ \.\-]?[0-9]{7}$";
				break;
			case 'ky' :
				var expr = "^([+]1[ ])?345[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'kw' :
				var expr = "^([+]965[ ])?[0-9]{7}$";
				break;
			case 'kz' :
				var expr = "^([+]7[ ]|8)[0-9]{3}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'la' :
				var expr = "^([+]856[ ]|0)[0-9]{2}[ \.\-]?[0-9]{6}$";
				break;
			case 'lb' :
				var expr = "^([+]961[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6}$";
				break;
			case 'lc' :
				var expr = "^([+]1[ ])?758[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'li' :
				var expr = "^([+]423[ ])?[0-9]{7}$";
				break;
			case 'lk' :
				var expr = "^([+]94[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{4,6}$";
				break;
			case 'lr' :
				var expr = "^([+]231[ ])?[0-9]{6}$";
				break;
			case 'ls' :
				var expr = "^([+]266[ ])?[0-9]{8}$";
				break;
			case 'lt' :
				var expr = "^([+]370[ ]|0|8)[0-9]{1,2}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'lu' :
				var expr = "^([+]352[ ])?[0-9]{5,11}$";
				break;
			case 'lv' :
				var expr = "^([+]371[ ]|8)?[0-9]{0,2}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ly' :
				var expr = "^([+]218[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ma' :
				var expr = "^([+]212[ ]|0)[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'mc' :
				var expr = "^([+]377[ ])?[0-9]{8,9}$";
				break;
			case 'md' :
				var expr = "^([+]373[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'me' :
				var expr = "^([+]382[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'mg' :
				var expr = "^([+]261[ ])?([0-9]{2})?[0-9]{7}$";
				break;
			case 'mh' :
				var expr = "^([+]692[ ])?[1]{0,1}[ \.\-]?[0-9]{7}$";
				break;
			case 'mk' :
				var expr = "^([+]389[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ml' :
				var expr = "^([+]223[ ])?[0-9]{7}$";
				break;
			case 'mm' :
				var expr = "^([+]95[ ]|0)?[0-9]{1,2}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'mn' :
				var expr = "^([+]976[ ]|01|02)[0-9]{1,4}[ \.\-]?[0-9]{4,6}$";
				break;
			case 'mo' :
				var expr = "^([+]853[ ])?[0-9]{6,7}$";
				break;
			case 'mp' :
				var expr = "^([+]1[ ])?670[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'mq' :
				var expr = "^([+]596|0596)[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}$";
				break;
			case 'mr' :
				var expr = "^([+]222[ ])?[0-9]{7}$";
				break;
			case 'ms' :
				var expr = "^([+]1[ ])?664[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'mt' :
				var expr = "^([+]356[ ])?[0-9]{2}[ \.\-][0-9]{3}[ \.\-][0-9]{3}$";
				break;
			case 'mu' :
				var expr = "^([+]230[ ])?[0-9]{7}$";
				break;
			case 'mv' :
				var expr = "^([+]960[ ])?[0-9]{7}$";
				break;
			case 'mw' :
				var expr = "^([+]265[ ])?[0-9]{8}$";
				break;
			case 'mx' :
				var expr = "^([+]52[ ]|01|02)[0-9]{1,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'my' :
				var expr = "^([+]60[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,8}$";
				break;
			case 'mz' :
				var expr = "^([+]258[ ])?[0-9]{1,2}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'na' :
				var expr = "^([+]264[ ]|0)[0-9]{2,4}[ \.\-]?[0-9]{2,6}$";
				break;
			case 'nc' :
				var expr = "^([+]687[ ])?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'ne' :
				var expr = "^([+]227[ ])?[0-9]{6}$";
				break;
			case 'ng' :
				var expr = "^([+]233[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ni' :
				var expr = "^([+]505[ ])?[0-9]{7}$";
				break;
			case 'nl' :
				var expr = "^([+]31[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'np' :
				var expr = "^([+]977[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'nr' :
				var expr = "^([+]674[ ])?[0-9]{7}$";
				break;
			case 'nu' :
				var expr = "^([+]683[ ])?[0-9]{4}$";
				break;
			case 'pa' :
				var expr = "^([+]507[ ])?[0-9]{7}$";
				break;
			case 'pf' :
				var expr = "^([+]689[ ])?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'pr' :
				var expr = "^([+]1[ ])?[787|939][ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'nf' :
			case 'pn' :
				var expr = "^([+]672[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{3,5}$";
				break;
			case 'nl' :
				var expr = "^([+]31[ ]|0)[0-9]{2}[ \.\-]?[0-9]{7}$";
				break;
			case 'no' :
				var expr = "^([+]47[ ])?[0-9]{8}$";
				break;
			case 'nz' :
				var expr = "^([+]64[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,8}$";
				break;
			case 'om' :
				var expr = "^([+]968[ ])?[0-9]{6,8}$";
				break;
			case 'pe' :
				var expr = "^([+]51[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,8}$";
				break;
			case 'pg' :
				var expr = "^([+]675[ ])?[0-9]{7}$";
				break;
			case 'ph' :
				var expr = "^([+]63[ ]|0)[0-9]{1,4}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'pk' :
				var expr = "^([+]92[ ]|0)[0-9]{2,5}[ \.\-]?[0-9]{4,7}$";
				break;
			case 'pl' :
				var expr = "^([+]48[ ]|0)[0-9]{2}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'pm' :
				var expr = "^([+]508[ ])?[0-9]{6}$";
				break;
			case 'ps' :
				var expr = "^([+]970[ ]|0)[0-9]{1}[ \.\-]?[0-9]{7}$";
				break;
			case 'pt' :
				var expr = "^([+]351[ ])?[0-9]{1,2}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'pw' :
				var expr = "^([+]680[ ])?[0-9]{7}$";
				break;
			case 'py' :
				var expr = "^([+]595[ ]|0)[0-9]{2,4}[ \.\-]?[0-9]{3,7}$";
				break;
			case 'qa' :
				var expr = "^([+]974[ ])?[0-9]{6}$";
				break;
			case 'ro' :
				var expr = "^([+]40[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ru' :
				var expr = "^([+]7[ ]|8)[0-9]{3,5}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'rw' :
				var expr = "^([+]250[ ])?[0-9]{5,8}$";
				break;
			case 'sa' :
				var expr = "^([+]966[ ]|0)[0-9]{1}[ \.\-]?[0-9]{7}$";
				break;
			case 'sc' :
				var expr = "^([+]248[ ])?[0-9]{6}$";
				break;
			case 'sd' :
				var expr = "^([+]249[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'sk' :
				var expr = "^([+]421[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{7,8}$";
				break;
			case 're' :
				var expr = "^([+]262[ ]262|0262)[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}$";
				break;
			case 'sb' :
				var expr = "^([+]677[ ])?[0-9]{5}$";
				break;
			case 'se' :
				var expr = "^([+]46[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{5,8}$";
				break;
			case 'sg' :
				var expr = "^([+]65[ ])?[0-9]{7,8}$";
				break;
			case 'sh' :
				var expr = "^([+]290[ ])?[0-9]{4}$";
				break;
			case 'si' :
				var expr = "^([+]386[ ]|0)[0-9]{1}[ \.\-]?[0-9]{7}$";
				break;
			case 'sl' :
				var expr = "^([+]232[ ]|0)[0-9]{2}[ \.\-]?[0-9]{6}$";
				break;
			case 'sm' :
				var expr = "^([+]378[ ])?[0-9]{10,12}$";
				break;
			case 'sn' :
				var expr = "^([+]221[ ])?[0-9]{7}$";
				break;
			case 'so' :
				var expr = "^([+]252[ ])?[0-9]{7}$";
				break;
			case 'sr' :
				var expr = "^([+]597[ ])?[0-9]{6}$";
				break;
			case 'st' :
				var expr = "^([+]239[ ])?[0-9]{6}$";
				break;
			case 'sv' :
				var expr = "^([+]503[ ])?[0-9]{7}$";
				break;
			case 'sy' :
				var expr = "^([+]963[ ]|0)[0-9]{2}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'sz' :
				var expr = "^([+]268[ ]|0)[0-9]{7}$";
				break;
			case 'tc' :
				var expr = "^([+]1[ ])?649[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'td' :
				var expr = "^([+]235[ ])?[0-9]{6}$";
				break;
			case 'th' :
				var expr = "^([+]66[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'tg' :
				var expr = "^([+]228[ ])?[0-9]{7}$";
				break;
			case 'tj' :
				var expr = "^([+]998[ ]|8)[0-9]{2,4}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'tk' :
				var expr = "^([+]690[ ])?[0-9]{1}[ \.\-]?[0-9]{3}$";
				break;
			case 'tl' :
				var expr = "^([+]670[ ])?[0-9]{7}$";
				break;
			case 'tm' :
				var expr = "^([+]993[ ]|8)[0-9]{2,3}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'tn' :
				var expr = "^([+]216[ ]|0)[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'to' :
				var expr = "^([+]676[ ])?[0-9]{7}$";
				break;
			case 'tr' :
				var expr = "^([+]90[ ]|0)[0-9]{3}[ \.\-]?[0-9]{7}$";
				break;
			case 'tt' :
				var expr = "^([+]1[ ])?868[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'tv' :
				var expr = "^([+]688[ ])?[0-9]{5}$";
				break;
			case 'tw' :
				var expr = "^([+]886[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,8}$";
				break;
			case 'tz' :
				var expr = "^([+]255[ ]|0)[0-9]{2}[ \.\-]?[0-9]{7}$";
				break;
			case 'ua' :
				var expr = "^([+]380[ ]|8)[0-9]{2,4}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ug' :
				var expr = "^([+]256[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{4,7}$";
				break;
			case 'us' :
				var expr = "^([+]1[ ])?[0-9]{3}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				// var expr = "^([+]1[ ])?[0-9]{3}[ \.\-]?(([0-9]{3}[ \.\-]?[0-9]{4})|[a-zA-Z]{7})$";
				break;
			case 'uy' :
				var expr = "^([+]598[ ]|0)[0-9]{1,4}[ \.\-]?[0-9]{4,6}$";
				break;
			case 'uz' :
				var expr = "^([+]998[ ]|8)[0-9]{2}[ \.\-]?[0-9]{7}$";
				break;
			case 'vc' :
				var expr = "^([+]1[ ])?784[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 've' :
				var expr = "^([+]58[ ]|0)[0-9]{3}[ \.\-]?[0-9]{7}$";
				break;
			case 'vg' :
				var expr = "^([+]1[ ])?284[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'vi' :
				var expr = "^([+]1[ ])?340[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'vn' :
				var expr = "^([+]84[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'vu' :
				var expr = "^([+]678[ ])?[0-9]{5}$";
				break;
			case 'wf' :
				var expr = "^([+]681[ ])?[0-9]{6}$";
				break;
			case 'ws' :
				var expr = "^([+]685[ ])?[0-9]{6,7}$";
				break;
			case 'ye' :
				var expr = "^([+]967[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'yt' :
				var expr = "^([+]262[ ]269|0269)[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}$";
				break;
			case 'za' :
				var expr = "^([+]27[ ]|0)[0-9]{2,5}[ \.\-]?[0-9]{3,7}$";
				break;
			case 'zm' :
				var expr = "^([+]260[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'zw' :
				var expr = "^([+]263[ ]|0)[0-9]{1,4}[ \.\-]?[0-9]{3,8}$";
				break;
			default :
				var expr = "^([+][0-9]{2,3}[ ])?[0-9]{6,11}$";
				break;
		}
	}
	else
	{
		var expr = "^([+][0-9]{2,3}[ ])?[0-9]{6,11}$";
	}
	return expr;
}

// Retourne la string regexp 'téléphone portable' en fonction du code pays
// Si pas de pays, numéro international
function GiveExpr_telp(pays)
{
	var expr='';
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'ad' :
				var expr = "^([+]376[ ])?[0-9]{6,9}$";
				break;
			case 'ae' :
				var expr = "^([+]31[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{7,9}$";
				break;
			case 'af' :
				var expr = "^([+]93[ ]|0)[0-9]{2}[ \.\-]?[0-9]{6}$";
				break;
			case 'ag' :
				var expr = "^([+]1[ ])?268[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'ai' :
				var expr = "^([+]1[ ])?264[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'al' :
				var expr = "^([+]355[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{4,6}?$";
				break;
			case 'am' :
				var expr = "^([+]374[ ]|0)[0-9]{2,5}[ \.\-]?[0-9]{3,6}$";
				break;
			case 'an' :
				var expr = "^([+]599[ ]|0)[0-9]{0,1}[ \.\-]?[0-9]{7}$";
				break;
			case 'ao' :
				var expr = "^([+]244[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{5,8}$";
				break;
			case 'ar' :
				var expr = "^([+]54[ ]|0)[0-9]{2,4}[ \.\-]?[0-9]{5,8}$";
				break;
			case 'as' :
				var expr = "^([+]1[ ])?684[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'at' :
				var expr = "^([+]43[ ]|0)[0-9]{1,4}[ \.\-]?[0-9]{3,12}$";
				break;
			case 'au' :
				var expr = "^([+]61[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{5,15}$";
				break;
			case 'aw' :
				var expr = "^([+]297[ ])?[0-9]{1}[ \.\-]?[0-9]{7}$";
				break;
			case 'ax' :
				var expr = "^([+]358[ ])?18[ \.\-]??[0-9]{4}([0-9]{6})?$";
				break;
			case 'az' :
				var expr = "^([+]994[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ba' :
				var expr = "^([+]387[ ]|0)[0-9]{2}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'bb' :
				var expr = "^([+]1[ ])?246[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'bd' :
				var expr = "^([+]880[ ]|0)[0-9]{1,4}[ \.\-]?[0-9]{3,7}$";
				break;
			case 'be' :
				var expr = "^([+]32[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'bf' :
				var expr = "^([+]226[ ])?[0-9]{8}$";
				break;
			case 'bg' :
				var expr = "^([+]359[ ]|0)[0-9]{1,5}[ \.\-]?[0-9]{3,7}$";
				break;
			case 'bh' :
				var expr = "^([+]973[ ])?[0-9]{6,8}$";
				break;
			case 'bi' :
				var expr = "^([+]257[ ])?[0-9]{7}$";
				break;
			case 'bj' :
				var expr = "^([+]229[ ])?[0-9]{8}$";
				break;
			case 'bm' :
				var expr = "^([+]1[ ])?441[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'bn' :
				var expr = "^([+]673[ ])?[0-9]{6,7}$";
				break;
			case 'bo' :
				var expr = "^([+]49[ ]|0)[0-9]{1}[ \.\-]?[0-9]{7}$";
				break;
			case 'br' :
				var expr = "^([+]55[ ]|0)[0-9]{2}[ \.\-]?[0-9]{8}$";
				break;
			case 'bs' :
				var expr = "^([+]1[ ])?242[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'bt' :
				var expr = "^([+]975[ ]|0)?[0-9]{1}[ \.\-]?[0-9]{6}$";
				break;
			case 'bw' :
				var expr = "^([+]267[ ])?[0-9]{6,7}$";
				break;
			case 'by' :
				var expr = "^([+]375[ ]|8)[0-9]{2,4}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'bz' :
				var expr = "^([+]501[ ])?[0-9]{7}$";
				break;
			case 'ca' :
				var expr = "^([+]1[ ])?[0-9]{3}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'cd' :
				var expr = "^([+]243[ ]|0)[0-9]{1}[ \.\-]?[0-9]{7}$";
				break;
			case 'cf' :
				var expr = "^([+]236[ ])?[0-9]{6}$";
				break;
			case 'cg' :
				var expr = "^([+]242[ ])?[0-9]{7}$";
				break;
			case 'ch' :
				var expr = "^([+]41[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'ci' :
				var expr = "^([+]225[ ])?[0-9]{8}$";
				break;
			case 'ck' :
				var expr = "^([+]682[ ])?[0-9]{5}$";
				break;
			case 'cl' :
				var expr = "^([+]56[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'cm' :
				var expr = "^([+]237[ ])?[0-9]{7}$";
				break;
			case 'cn' :
				var expr = "^([+]86[ ]|0)[0-9]{2,4}[ \.\-]?[0-9]{4,8}$";
				break;
			case 'co' :
				var expr = "^([+]57[ ]|09)[0-9]{1,5}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'cr' :
				var expr = "^([+]506[ ])?[0-9]{7}$";
				break;
			case 'cs' :
				var expr = "^([+]381[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'cu' :
				var expr = "^([+]53[ ]|0)[0-9]{1,4}[ \.\-]?[0-9]{4,7}$";
				break;
			case 'cv' :
				var expr = "^([+]238[ ])?[0-9]{7}$";
				break;
			case 'cz' :
				var expr = "^([+]420[ ])?[0-9]{3}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}$";
				break;
			case 'cy' :
				var expr = "^([+]357[ ])?[0-9]{1,2}[ \.\-]?[0-9]{4,6}$";
				break;
			case 'de' :
				var expr = "^([+]49[ ]|0)[0-9]{2,5}[ \.\-]?[0-9]{3,9}$";
				break;
			case 'dj' :
				var expr = "^([+]253[ ])?[0-9]{6}$";
				break;
			case 'dk' :
				var expr = "^([+]45[ ])?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'do' :
				var expr = "^([+]1[ ])?767[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'dz' :
				var expr = "^([+]213[ ]|0)[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'ec' :
				var expr = "^([+]49[ ]|0)[0-9]{1}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'ee' :
				var expr = "^([+]372[ ])?[0-9]{7,8}$";
				break;
			case 'eg' :
				var expr = "^([+]20[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'er' :
				var expr = "^([+]291[ ]|0)[0-9]{1}[ \.\-]?[0-9]{6}$";
				break;
			case 'es' :
				var expr = "^([+]34[ ])?[0-9]{9}$";
				break;
			case 'et' :
				var expr = "^([+]251[ ]|0)[0-9]{2}[ \.\-]?[0-9]{7}$";
				break;
			case 'fi' :
				var expr = "^([+]358[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{4,9}$";
				break;
			case 'fj' :
				var expr = "^([+]679[ ])?[0-9]{7}$";
				break;
			case 'fk' :
				var expr = "^([+]500[ ])?[0-9]{5}$";
				break;
			case 'fm' :
				var expr = "^([+]691[ ]|1)[0-9]{7}$";
				break;
			case 'fo' :
				var expr = "^([+]298[ ])?[0-9]{6}$";
				break;
			case 'fr' :
				var expr = "^([+]33[ ]|0)(6|7)[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'ga' :
				var expr = "^([+]241[ ])?[0-9]{6}$";
				break;
			case 'gb' :
				var expr = "^([+]44[ ]|0)[0-9]{2,6}[ \.\-]?[0-9]{3,8}$";
				break;
			case 'gd' :
				var expr = "^([+]1[ ])?473[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'ge' :
				var expr = "^([+]995[ ]|8)[0-9]{2,3}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'gf' :
				var expr = "^([+]594[ ]694|0694)[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}$";
				break;
			case 'gh' :
				var expr = "^([+]233[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{3,6}$";
				break;
			case 'gi' :
				var expr = "^([+]350[ ])?[0-9]{4,8}$";
				break;
			case 'gl' :
				var expr = "^([+]299[ ])?[0-9]{6}$";
				break;
			case 'gm' :
				var expr = "^([+]220[ ])?[0-9]{7}$";
				break;
			case 'gn' :
				var expr = "^([+]224[ ])?[0-9]{6}$";
				break;
			case 'gp' :
				var expr = "^([+]690|0690)[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}$";
				break;
			case 'gq' :
				var expr = "^([+]240[ ])?[0-9]{0,1}[ \.\-]?[0-9]{6}$";
				break;
			case 'gr' :
				var expr = "^([+]30[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'gt' :
				var expr = "^([+]502[ ])?[0-9]{7,8}$";
				break;
			case 'gu' :
				var expr = "^([+]1[ ])?671[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'gw' :
				var expr = "^([+]245[ ])?[0-9]{6}$";
				break;
			case 'gy' :
				var expr = "^([+]591[ ])?[0-9]{1}[ \.\-]?[0-9]{5}$";
				break;
			case 'hk' :
				var expr = "^([+]852[ ])?[0-9]{8}$";
				break;
			case 'hn' :
				var expr = "^([+]504[ ])?[0-9]{7}$";
				break;
			case 'hr' :
				var expr = "^([+]385[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ht' :
				var expr = "^([+]509[ ])?[0-9]{7}$";
				break;
			case 'hu' :
				var expr = "^([+]36[ ]|06)?[0-9]{1,2}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'id' :
				var expr = "^([+]62[ ]|0)[0-9]{1,4}[ \.\-]?[0-9]{5,11}$";
				break;
			case 'ie' :
				var expr = "^([+]353[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'il' :
				var expr = "^([+]972[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'in' :
				var expr = "^([+]91[ ]|0)[0-9]{2,7}[ \.\-]?[0-9]{4,8}$";
				break;
			case 'iq' :
				var expr = "^([+]964[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{4,9}$";
				break;
			case 'ir' :
				var expr = "^([+]97[ ]|0)[0-9]{3}[ \.\-]?[0-9]{7}$";
				break;

			case 'is' :
				var expr = "^([+]354[ ])?[0-9]{7,9}$";
				break;
			case 'it' :
				var expr = "^([+]39[ ])?[0-9]{1,3}[ \.\-]?[0-9]{5,8}$";
				break;
			case 'jm' :
				var expr = "^([+]1[ ])?876[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'jo' :
				var expr = "^([+]962[ ]|0)[0-9]{1}[ \.\-]?[0-9]{7,8}$";
				break;
			case 'jp' :
				var expr = "^([+]81[ ]|0)[0-9]{1,5}[ \.\-]?[0-9]{4,8}$";
				break;
			case 'ke' :
				var expr = "^([+]254[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'kg' :
				var expr = "^([+]996[ ]|0)[0-9]{3,4}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'kh' :
				var expr = "^([+]855[ ]|0)[0-9]{2}[ \.\-]?[0-9]{6}$";
				break;
			case 'ki' :
				var expr = "^([+]686[ ])?[0-9]{5}$";
				break;
			case 'km' :
				var expr = "^([+]262[ ]|[+]269[ ])?[0-9]{6}$";
				break;
			case 'kn' :
				var expr = "^([+]1[ ])?869[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'kp' :
				var expr = "^([+]82[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'kr' :
				var expr = "^([+]850[ ]|0)?[0-9]{1,2}[ \.\-]?[0-9]{7}$";
				break;
			case 'ky' :
				var expr = "^([+]1[ ])?345[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'kw' :
				var expr = "^([+]965[ ])?[0-9]{7}$";
				break;
			case 'kz' :
				var expr = "^([+]7[ ]|8)[0-9]{3}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'la' :
				var expr = "^([+]856[ ]|0)[0-9]{2}[ \.\-]?[0-9]{6}$";
				break;
			case 'lb' :
				var expr = "^([+]961[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6}$";
				break;
			case 'lc' :
				var expr = "^([+]1[ ])?758[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'li' :
				var expr = "^([+]423[ ])?[0-9]{7}$";
				break;
			case 'lk' :
				var expr = "^([+]94[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{4,6}$";
				break;
			case 'lr' :
				var expr = "^([+]231[ ])?[0-9]{6}$";
				break;
			case 'ls' :
				var expr = "^([+]266[ ])?[0-9]{8}$";
				break;
			case 'lt' :
				var expr = "^([+]370[ ]|0|8)[0-9]{1,2}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'lu' :
				var expr = "^([+]352[ ])?[0-9]{5,11}$";
				break;
			case 'lv' :
				var expr = "^([+]371[ ]|8)?[0-9]{0,2}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ly' :
				var expr = "^([+]218[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ma' :
				var expr = "^([+]212[ ]|0)[0-9]{1}[ \.\-]?[0-9]{7}$";
				break;
			case 'mc' :
				var expr = "^([+]377[ ])?[0-9]{8,9}$";
				break;
			case 'md' :
				var expr = "^([+]373[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'me' :
				var expr = "^([+]382[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'mg' :
				var expr = "^([+]261[ ])?([0-9]{2})?[0-9]{7}$";
				break;
			case 'mh' :
				var expr = "^([+]692[ ])?[1]{0,1}[ \.\-]?[0-9]{7}$";
				break;
			case 'mk' :
				var expr = "^([+]389[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ml' :
				var expr = "^([+]223[ ])?[0-9]{7}$";
				break;
			case 'mm' :
				var expr = "^([+]95[ ]|0)?[0-9]{1,2}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'mn' :
				var expr = "^([+]976[ ]|01|02)[0-9]{1,4}[ \.\-]?[0-9]{4,6}$";
				break;
			case 'mo' :
				var expr = "^([+]853[ ])?[0-9]{6,7}$";
				break;
			case 'mp' :
				var expr = "^([+]1[ ])?670[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'mq' :
				var expr = "^([+]696|0696)[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}$";
				break;
			case 'mr' :
				var expr = "^([+]222[ ])?[0-9]{7}$";
				break;
			case 'ms' :
				var expr = "^([+]1[ ])?664[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'mt' :
				var expr = "^([+]356[ ])?[0-9]{2}[ \.\-][0-9]{3}[ \.\-][0-9]{3}$";
				break;
			case 'mu' :
				var expr = "^([+]230[ ])?[0-9]{7}$";
				break;
			case 'mv' :
				var expr = "^([+]960[ ])?[0-9]{7}$";
				break;
			case 'mw' :
				var expr = "^([+]265[ ])?[0-9]{8}$";
				break;
			case 'mx' :
				var expr = "^([+]52[ ]|01|02)[0-9]{1,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'my' :
				var expr = "^([+]60[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,8}$";
				break;
			case 'mz' :
				var expr = "^([+]258[ ])?[0-9]{1,2}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'na' :
				var expr = "^([+]264[ ]|0)[0-9]{2,4}[ \.\-]?[0-9]{2,6}$";
				break;
			case 'nc' :
				var expr = "^([+]687[ ])?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'ne' :
				var expr = "^([+]227[ ])?[0-9]{6}$";
				break;
			case 'ng' :
				var expr = "^([+]233[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ni' :
				var expr = "^([+]505[ ])?[0-9]{7}$";
				break;
			case 'nl' :
				var expr = "^([+]31[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'np' :
				var expr = "^([+]977[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'nr' :
				var expr = "^([+]674[ ])?[0-9]{7}$";
				break;
			case 'nu' :
				var expr = "^([+]683[ ])?[0-9]{4}$";
				break;
			case 'pa' :
				var expr = "^([+]507[ ])?[0-9]{7}$";
				break;
			case 'pf' :
				var expr = "^([+]689[ ])?[0-9]{2}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'pr' :
				var expr = "^([+]1[ ])?[787|939][ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'nf' :
			case 'pn' :
				var expr = "^([+]672[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{3,5}$";
				break;
			case 'nl' :
				var expr = "^([+]31[ ]|0)[0-9]{2}[ \.\-]?[0-9]{7}$";
				break;
			case 'no' :
				var expr = "^([+]47[ ])?[0-9]{8}$";
				break;
			case 'nz' :
				var expr = "^([+]64[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,8}$";
				break;
			case 'om' :
				var expr = "^([+]968[ ])?[0-9]{6,8}$";
				break;
			case 'pe' :
				var expr = "^([+]51[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,8}$";
				break;
			case 'pg' :
				var expr = "^([+]675[ ])?[0-9]{7}$";
				break;
			case 'ph' :
				var expr = "^([+]63[ ]|0)[0-9]{1,4}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'pk' :
				var expr = "^([+]92[ ]|0)[0-9]{2,5}[ \.\-]?[0-9]{4,7}$";
				break;
			case 'pl' :
				var expr = "^([+]48[ ]|0)[0-9]{2}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{2}[ \.\-]?[0-9]{2}$";
				break;
			case 'pm' :
				var expr = "^([+]508[ ])?[0-9]{6}$";
				break;
			case 'ps' :
				var expr = "^([+]970[ ]|0)[0-9]{1}[ \.\-]?[0-9]{7}$";
				break;
			case 'pt' :
				var expr = "^([+]351[ ])?[0-9]{1,2}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'pw' :
				var expr = "^([+]680[ ])?[0-9]{7}$";
				break;
			case 'py' :
				var expr = "^([+]595[ ]|0)[0-9]{2,4}[ \.\-]?[0-9]{3,7}$";
				break;
			case 'qa' :
				var expr = "^([+]974[ ])?[0-9]{6}$";
				break;
			case 'ro' :
				var expr = "^([+]40[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ru' :
				var expr = "^([+]7[ ]|8)[0-9]{3,5}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'rw' :
				var expr = "^([+]250[ ])?[0-9]{5,8}$";
				break;
			case 'sa' :
				var expr = "^([+]966[ ]|0)[0-9]{1}[ \.\-]?[0-9]{7}$";
				break;
			case 'sc' :
				var expr = "^([+]248[ ])?[0-9]{6}$";
				break;
			case 'sd' :
				var expr = "^([+]249[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'sk' :
				var expr = "^([+]421[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{7,8}$";
				break;
			case 're' :
				var expr = "^([+]262[ ]692|[+]262[ ]693|0692|0693)[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}$";
				break;
			case 'sb' :
				var expr = "^([+]677[ ])?[0-9]{5}$";
				break;
			case 'se' :
				var expr = "^([+]46[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{5,8}$";
				break;
			case 'sg' :
				var expr = "^([+]65[ ])?[0-9]{7,8}$";
				break;
			case 'sh' :
				var expr = "^([+]290[ ])?[0-9]{4}$";
				break;
			case 'si' :
				var expr = "^([+]386[ ]|0)[0-9]{1}[ \.\-]?[0-9]{7}$";
				break;
			case 'sl' :
				var expr = "^([+]232[ ]|0)[0-9]{2}[ \.\-]?[0-9]{6}$";
				break;
			case 'sm' :
				var expr = "^([+]378[ ])?[0-9]{10,12}$";
				break;
			case 'sn' :
				var expr = "^([+]221[ ])?[0-9]{7}$";
				break;
			case 'so' :
				var expr = "^([+]252[ ])?[0-9]{7}$";
				break;
			case 'sr' :
				var expr = "^([+]597[ ])?[0-9]{6}$";
				break;
			case 'st' :
				var expr = "^([+]239[ ])?[0-9]{6}$";
				break;
			case 'sv' :
				var expr = "^([+]503[ ])?[0-9]{7}$";
				break;
			case 'sy' :
				var expr = "^([+]963[ ]|0)[0-9]{2}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'sz' :
				var expr = "^([+]268[ ]|0)[0-9]{7}$";
				break;
			case 'tc' :
				var expr = "^([+]1[ ])?649[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'td' :
				var expr = "^([+]235[ ])?[0-9]{6}$";
				break;
			case 'th' :
				var expr = "^([+]66[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{6,7}$";
				break;
			case 'tg' :
				var expr = "^([+]228[ ])?[0-9]{7}$";
				break;
			case 'tj' :
				var expr = "^([+]998[ ]|8)[0-9]{2,4}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'tk' :
				var expr = "^([+]690[ ])?[0-9]{1}[ \.\-]?[0-9]{3}$";
				break;
			case 'tl' :
				var expr = "^([+]670[ ])?[0-9]{7}$";
				break;
			case 'tm' :
				var expr = "^([+]993[ ]|8)[0-9]{2,3}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'tn' :
				var expr = "^([+]216[ ]|0)[0-9]{8}$";
				break;
			case 'to' :
				var expr = "^([+]676[ ])?[0-9]{7}$";
				break;
			case 'tr' :
				var expr = "^([+]90[ ]|0)[0-9]{3}[ \.\-]?[0-9]{7}$";
				break;
			case 'tt' :
				var expr = "^([+]1[ ])?868[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'tv' :
				var expr = "^([+]688[ ])?[0-9]{5}$";
				break;
			case 'tw' :
				var expr = "^([+]886[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{6,8}$";
				break;
			case 'tz' :
				var expr = "^([+]255[ ]|0)[0-9]{2}[ \.\-]?[0-9]{7}$";
				break;
			case 'ua' :
				var expr = "^([+]380[ ]|8)[0-9]{2,4}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'ug' :
				var expr = "^([+]256[ ]|0)[0-9]{2,3}[ \.\-]?[0-9]{4,7}$";
				break;
			case 'us' :
				var expr = "^([+]1[ ])?[0-9]{3}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'uy' :
				var expr = "^([+]598[ ]|0)[0-9]{1,4}[ \.\-]?[0-9]{4,6}$";
				break;
			case 'uz' :
				var expr = "^([+]998[ ]|8)[0-9]{2}[ \.\-]?[0-9]{7}$";
				break;
			case 'vc' :
				var expr = "^([+]1[ ])?784[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 've' :
				var expr = "^([+]58[ ]|0)[0-9]{3}[ \.\-]?[0-9]{7}$";
				break;
			case 'vg' :
				var expr = "^([+]1[ ])?284[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'vi' :
				var expr = "^([+]1[ ])?340[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{4}$";
				break;
			case 'vn' :
				var expr = "^([+]84[ ]|0)[0-9]{1,3}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'vu' :
				var expr = "^([+]678[ ])?[0-9]{5}$";
				break;
			case 'wf' :
				var expr = "^([+]681[ ])?[0-9]{6}$";
				break;
			case 'ws' :
				var expr = "^([+]685[ ])?[0-9]{6,7}$";
				break;
			case 'ye' :
				var expr = "^([+]967[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{5,7}$";
				break;
			case 'yt' :
				var expr = "^([+]262[ ]639|0639)[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}$";
				break;
			case 'za' :
				var expr = "^([+]27[ ]|0)[0-9]{2,5}[ \.\-]?[0-9]{3,7}$";
				break;
			case 'zm' :
				var expr = "^([+]260[ ]|0)[0-9]{1,2}[ \.\-]?[0-9]{5,6}$";
				break;
			case 'zw' :
				var expr = "^([+]263[ ]|0)[0-9]{1,4}[ \.\-]?[0-9]{3,8}$";
				break;
			default :
				var expr = "^([+][0-9]{2,3}[ ])?[0-9]{6,11}$";
				break;
		}
	}
	else
	{
		var expr = "^([+][0-9]{2,3}[ ])?[0-9]{6,11}$";
	}
	
	return expr;
}

// Retourne la string regexp 'sécurité sociale' en fonction du code pays
// Si pas de pays, rien
function GiveExpr_secu(pays)
{
	var expr='';
	
	if (pays)
	{
		pays=pays.toLowerCase();
		
		switch (pays)
		{
			case 'fr' :
				var expr = "^[1-2]{1}[ ][0-9]{2}[ ][0-9]{2}[ ][0-9]{1}[A-B0-9]{1}[ ][0-9]{3}[ ][0-9]{3}[ ][0-9]{2}$";
				break;
			case 'us' :
				var expr = "^[0-9]{3}[ \-][0-9]{2}[ \-][0-9]{2}[ \-][0-9]{4}$";
				break;
			default :
				break;
		}
	}
	
	return expr;
}

// Retourne la string regexp 'code postal' en fonction du code pays
// Si pas de pays, rien
function GiveExpr_cp(pays)
{
	var expr='';
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'ca' :
				var expr = "^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[ \-][0-9]{1}[a-zA-Z]{1}[0-9]{1}$";
				break;
			case 'au' :
				var expr = "^[2-7]{1}[0-9]{3}$";
				break;
			case 'be' :
			case 'cy' :
			case 'hu' :
				var expr = "^[0-9]{4}$";
				break;
			case 'br' :
				var expr = "^[0-9]{5}[\-][0-9]{3}$";
				break;
			case 'cn' :
			case 'in' :
			case 'ro' :
			case 'ru' :
			case 'sg' :
			case 'in' :
				var expr = "^[0-9]{6}$";
				break;
			case 'jp' :
				var expr = "^[0-9]{7}$";
				break;
			case 'cz' :
			case 'sk' :
				var expr = "^[0-9]{3}[ ][0-9]{2}$";
				break;
			case 'dk' :
				var expr = "^(DK-)?[0-9]{4}$";
				break;
			case 'md' :
				var expr = "^MD-[0-9]{4}$";
				break;
			case 'fo' :
				var expr = "^[0-9]{3}$";
				break;
			case 'gl' :
			case 'no' :
			case 'nz' :
			case 'ph' :
			case 'za' :
				var expr = "^[0-9]{4}$";
				break;
			case 'ch' :
			case 'cs' :
			case 'de' :
			case 'dz' :
			case 'es' :
			case 'fi' :
			case 'fr' :
			case 'il' :
			case 'it' :
			case 'lk' :
			case 'ma' :
			case 'my' :
			case 'tr' :
				var expr = "^[0-9]{5}$";
				break;
			case 'nl' :
				var expr = "^[0-9]{4}[ ][a-zA-Z]{2}([ ][0-9]{2})?$";
				break;
			case 'pl' :
			case 'kr' :
				var expr = "^[0-9]{3}\-[0-9]{3}$";
				break;
			case 'pl' :
				var expr = "^[0-9]{4}\-[0-9]{3}$";
				break;
			case 'gb' :
				var expr = "^[a-zA-Z]{1}[0-9a-zA-Z]{1,3}[ ][0-9]{1}[a-zA-Z]{2}$";
				// ^(GIR ?0AA|(?:[A-PR-UWYZ](?:\d|\d{2}|[A-HK-Y]\d|[A-HK-Y]\d\d|\d[A-HJKSTUW]|[A-HK-Y]\d[ABEHMNPRV-Y])) ?\d[ABD-HJLNP-UW-Z]{2})$
				break;
			case 'nl' :
				var expr = "^[1-9][0-9]{3}[ ]?[a-zA-Z]{2}$";
				break;
			case 'se' :
				var expr = "^(s-|S-){0,1}[0-9]{3}[ ][0-9]{2}$";
				break;
			case 'tw' :
				var expr = "^[0-9]{3}([0-9]{2})?$";
				break;
			case 'us' :
				var expr = "^[0-9]{5}(\-[0-9]{4})?$";
				break;
			default :
				break;
		}
	}
	return expr;
}

// Retourne la string regexp 'siren' en fonction du code pays
// Si pas de pays, rien
function GiveExpr_siren(pays)
{
	var expr='';
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'fr' :
				var expr = "^[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{3}$";
				break;
			default :
				break;
		}
	}
	
	return expr;
}

// Retourne la string regexp 'siret' en fonction du code pays
// Si pas de pays, rien
function GiveExpr_siret(pays)
{
	var expr='';
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'fr' :
			case 'gf' :
			case 'gp' :
			case 'mq' :
			case 're' :
				var expr = "^[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{5}$";
				break;
			default :
				break;
		}
	}
	
	return expr;
}

// Retourne la string regexp 'siren' en fonction du code pays
// Si pas de pays, rien
function GiveExpr_siren(pays)
{
	var expr='';
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'fr' :
			case 'gf' :
			case 'gp' :
			case 'mq' :
			case 're' :
				var expr = "^[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{3}$";
				break;
			default :
				break;
		}
	}
	
	return expr;
}

// Retourne la string regexp 'rib' en fonction du code pays
// Si pas de pays, rien
function GiveExpr_rib(pays)
{
	var expr='';
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'fr' :
				var expr = "^[0-9]{5}[ ][0-9]{5}[ ][a-z0-9]{11}[ ][0-9]{2}$";
				break;
			default :
				break;
		}
	}
	
	return expr;
}

// Retourne la string regexp 'iban' en fonction du code pays
// Si pas de pays, rien
function GiveExpr_iban(pays)
{
	var expr='';
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'no' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{3}|"+pays.toUpperCase()+"[0-9]{13}$";
				break;
			case 'be' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}|"+pays.toUpperCase()+"[0-9]{14}$";
				break;
			case 'dk' :
			case 'fi' :
			case 'fo' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{2}|"+pays.toUpperCase()+"[0-9]{16}$";
				break;
			case 'nl' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9,A-Z]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{2}|"+pays.toUpperCase()+"[0-9]{2}[0-9,A-Z]{4}[0-9]{10}$";
				break;
			case 'mk' :
			case 'si' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{3}|"+pays.toUpperCase()+"[0-9]{17}$";
				break;
			case 'at' :
			case 'ba' :
			case 'ee' :
			case 'lt' :
			case 'lu' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}|"+pays.toUpperCase()+"[0-9]{18}$";
				break;
			case 'ch' :
			case 'cs' :
			case 'de' :
			case 'hr' :
			case 'li' :
			case 'lv' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{1}|"+pays.toUpperCase()+"[0-9]{19}$";
				break;
			case 'bg' :
			case 'me' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{2}|"+pays.toUpperCase()+"[0-9]{20}$";
				break;
			case 'gb' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9,A-Z]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{2}|"+pays.toUpperCase()+"[0-9]{2}[0-9,A-Z]{4}[0-9]{14}$";
				break;
			case 'gi' :
			case 'il' :
			case 'rs' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{3}|"+pays.toUpperCase()+"[0-9]{21}$";
				break;
			case 'ie' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][A-Z]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{3}|"+pays.toUpperCase()+"[0-9]{2}[A-Z]{4}[0-9]{15}$";
				break;
			case 'ad' :
			case 'es' :
			case 'cz' :
			case 'se' :
			case 'sk' :
			case 'tn' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}|"+pays.toUpperCase()+"[0-9]{22}$";
				break;
			case 'ro' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9,A-Z]{4}[ ][0-9,A-Z]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}|"+pays.toUpperCase()+"[0-9]{2}[0-9,A-Z]{8}[0-9]{12}$";
				break;
			case 'pt' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{1}|"+pays.toUpperCase()+"[0-9]{23}$";
				break;
			case 'is' :
			case 'tr' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{2}|"+pays.toUpperCase()+"[0-9]{24}$";
				break;
			case 'fr' :
			case 'gf' :
			case 'gp' :
			case 'gr' :
			case 'it' :
			case 'mq' :
			case 'nc' :
			case 'pm' :
			case 're' :
			case 'tf' :
			case 'wf' :
			case 'yt' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{3}|"+pays.toUpperCase()+"[0-9]{25}$";
				break;
			case 'sm' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9,A-Z]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{3}|"+pays.toUpperCase()+"[0-9]{2}[0-9,A-Z]{4}[0-9]{19}$";
				break;
			case 'mc' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9,A-Z,a-z]{3}|"+pays.toUpperCase()+"[0-9]{22}[0-9,A-Z,a-z]{3}$";
				break;
			case 'hu' :
			case 'cy' :
			case 'pl' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}|"+pays.toUpperCase()+"[0-9]{26}$";
				break;
			case 'mu' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][A-Z]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][A-Z,0-9]{4}[ ][0-9,A-Z]{2}|"+pays.toUpperCase()+"[0-9]{2}[A-Z]{4}[0-9]{16}[0-9,A-Z]{6}$";
				break;
			case 'mt' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{2}[ ][A-Z]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][A-Z,0-9]{4}[ ][A-Z,0-9]{4}[ ][0-9,A-Z]{3}|"+pays.toUpperCase()+"[0-9]{2}[A-Z]{4}[0-9]{12}[0-9,A-Z]{11}$";
				break;
			default :
				var expr = "^[A-Z]{2}[0-9]{2}[0-9]{30}$";
				break;
		}
	}
	
	return expr;
}

// Retourne la string regexp 'naf' en fonction du code pays
// Si pas de pays, rien
function GiveExpr_naf(pays)
{
	var expr='';
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'fr' :
			case 'gf' :
			case 'gp' :
			case 'mq' :
			case 're' :
				var expr = "^[0-9]{3,4}[a-z,A-Z]{1}$";
				break;
			default :
				break;
		}
	}
	
	return expr;
}

// Retourne la string regexp 'tva' en fonction du code pays
// Si pas de pays, rien
function GiveExpr_tva(pays)
{
	var expr='';
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'at' :
				var expr = "^AT[u,U]{1}[0-9]{8}$";
				break;
			case 'be' :
			case 'de' :
			case 'pt' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{9}$";
				break;
			case 'cy' :
			case 'ee' :
			case 'es' :
				var expr = "^"+pays.toUpperCase()+"[0-9,A-Z]{9}$";
				break;
			case 'cz' :
				var expr = "^CZ[0-9,A-Z]{8,10}$";
				break;
			case 'bg' :
				var expr = "^BG[0-9]{9,10}$";
				break;
			case 'dk' :
			case 'fi' :
			case 'lu' :
			case 'si' :
				var expr = "^"+pays.toUpperCase()+"[0-9]{8}$";
				break;
			case 'fr' :
				var expr = "^FR[a-z,A-Z,0-9]{2}[0-9]{9}$";
				break;
			case 'gb' :
				var expr = "^GB([0-9]{9}|[0-9]{12}|[a-z,A-Z,0-9]{2}[0-9]{3})$";
				break;
			case 'gr' :
				var expr = "^(EL|GR)[0-9]{9}$";
				break;
			case 'hu' :
			case 'mt' :
				var expr = "^"+pays.toUpperCase()+"[0-9,A-Z]{8}$";
				break;
			case 'ie' :
				var expr = "^IE[a-z,A-Z,0-9]{8}$";
				break;
			case 'it' :
				var expr = "^IT[0-9]{11}$";
				break;
			case 'lv' :
				var expr = "^LV[A-Z,0-9]{11}$";
				break;
			case 'lt' :
				var expr = "^LV([A-Z,0-9]{9}|[A-Z,0-9]{12})$";
				break;
			case 'nl' :
				var expr = "^NL[0-9]{9}[A-Z]{1}[0-9]{2}$";
				break;
			case 'pl' :
				var expr = "^PL[A-Z,0-9]{10}$";
				break;
			case 'sk' :
				var expr = "^CZ[0-9,A-Z]{9,10}$";
				break;
			case 'se' :
				var expr = "^SE[0-9]{12}$";
				break;
			default :
				break;
		}
	}
	
	return expr;
}

// Retourne la string regexp 'nf' en fonction du code pays
// Si pas de pays, rien
function GiveExpr_nf(pays)
{
	var expr='';
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'fr' :
				var expr = "^[0-9]{2}[ ][0-9]{2}[ ][0-9]{3}[ ][0-9]{3}[ ][0-9]{3}[ ][A-Z]{1}$";
				break;
			default :
				break;
		}
	}
	
	return expr;
}

// Retourne la string regexp 'insee' en fonction du code pays
// Si pas de pays, rien
function GiveExpr_insee(pays)
{
	var expr='';
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'fr' :
				var expr = "^[0-9]{2}[ ][0-9]{2}[ ][0-9]{3}[ ][0-9]{3}[ ][0-9]{3}[ ][A-Z]{1}$";
				break;
			default :
				break;
		}
	}
	
	return expr;
}

// Retourne la string regexp 'immatriculation' en fonction du code pays
// Si pas de pays, rien
function GiveExpr_imt(pays)
{
	var expr='';
	
	if (pays)
	{
		pays=pays.toLowerCase();

		switch (pays)
		{
			case 'ad' :
				var expr = "^([A-Z]{1}[ ][0-9]{4}|[0-9]{5})$";
				break;
			case 'al' :
				var expr = "^[A-Z]{2}[ ][0-9]{4}[ ][A-Z]{1}$";
				break;
			case 'au' :
				var expr = "^([A-Z]{1}[ ][0-9]{4}|[0-9]{5})$";
				break;
			case 'de' :
				var expr = "^([A-Z]{1,3}[ ][A-Z]{1,3}[ ][0-9]{1,4}|[A-Z]{1}[ ][0-9]{1,4}[ ][A-Z]{1}|[A-Z]{1,3}[ ][0-9]{1,4})$";
				break;
			case 'fr' :
				var expr = "^[0-9]{1,4}[ ][A-Z]{1,3}[ ][0-9]{2}$";
				break;
			case 'in' :
				var expr = "^([A-Z|a-z]{2}\s{1}\d{2}\s{1}[A-Z|a-z]{1,2}\s{1}\d{1,4})?([A-Z|a-z]{3}\s{1}\d{1,4})?$";
				break;
			default :
				break;
		}
	}
	
	return expr;
}

// Valide un champ texte sur le format donné
function valide_champ(pays,valeur,format,masque,vmn,vmx,pwq)
{
	var errno=-1;

	valeur=RLtrim(valeur);
	
	// On ne teste que si le champ contient quelque chose
	if (ChampEstVide(valeur)==false)
	{
		var swformat=true;
		
		// Vérification si format de type 'tel_codepays'
		if (format.indexOf("tel_") > -1)
		{
			swformat=false;
			var tab_format = format.split("_");
			if (tab_format.length!=2)
			{
				errno=12;
			}
			else
			{
				var strexpr = GiveExpr_tel(tab_format[1]);
				if (strexpr!='')
				{
					var expr = new RegExp(strexpr,"gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
				}
				else
				{
					errno=12;
				}
			}
		}

		// Vérification si format de type 'telp_codepays'
		if (format.indexOf("telp_") > -1)
		{
			swformat=false;
			var tab_format = format.split("_");
			if (tab_format.length!=2)
			{
				errno=12;
			}
			else
			{
				var strexpr = GiveExpr_telp(tab_format[1]);
				if (strexpr!='')
				{
					var expr = new RegExp(strexpr,"gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
				}
				else
				{
					errno=12;
				}
			}
		}

		// Vérification si format de type 'secu_codepays'
		if (format.indexOf("secu_") > -1)
		{
			swformat=false;
			var tab_format = format.split("_");
			if (tab_format.length!=2)
			{
				errno=12;
			}
			else
			{
				var strexpr = GiveExpr_secu(tab_format[1]);
				if (strexpr!='')
				{
					var expr = new RegExp(strexpr,"gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					else
					{
						if (IsINSEE(valeur,tab_format[1])==false)
						{
							errno=1;
						}
					}
				}
				else
				{
					errno=12;
				}
			}
		}

		// Vérification si format de type 'cp_codepays'
		if (format.indexOf("cp_") > -1)
		{
			swformat=false;
			var tab_format = format.split("_");
			if (tab_format.length!=2)
			{
				errno=12;
			}
			else
			{
				var strexpr = GiveExpr_cp(tab_format[1]);
				if (strexpr!='')
				{
					var expr = new RegExp(strexpr,"gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
				}
				else
				{
					errno=12;
				}
			}
		}

		// Vérification si format de type 'naf_codepays'
		if (format.indexOf("naf_") > -1)
		{
			swformat=false;
			var tab_format = format.split("_");
			if (tab_format.length!=2)
			{
				errno=12;
			}
			else
			{
				var strexpr = GiveExpr_naf(tab_format[1]);
				if (strexpr!='')
				{
					var expr = new RegExp(strexpr,"gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
				}
				else
				{
					errno=12;
				}
			}
		}

		// Vérification si format de type 'nf_codepays'
		if (format.indexOf("nf_") > -1)
		{
			swformat=false;
			var tab_format = format.split("_");
			if (tab_format.length!=2)
			{
				errno=12;
			}
			else
			{
				var strexpr = GiveExpr_nf(tab_format[1]);
				if (strexpr!='')
				{
					var expr = new RegExp(strexpr,"gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
				}
				else
				{
					errno=12;
				}
			}
		}

		// Vérification si format de type 'tva_codepays'
		if (format.indexOf("tva_") > -1)
		{
			swformat=false;
			var tab_format = format.split("_");
			if (tab_format.length!=2)
			{
				errno=12;
			}
			else
			{
				var strexpr = GiveExpr_tva(tab_format[1]);
				if (strexpr!='')
				{
					var expr = new RegExp(strexpr,"gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					else
					{
						if (IsTVA(valeur,tab_format[1])==false)
						{
							errno=1;
						}
					}
				}
				else
				{
					errno=12;
				}
			}
		}

		// Vérification si format de type 'siren_codepays'
		if (format.indexOf("siren_") > -1)
		{
			swformat=false;
			var tab_format = format.split("_");
			if (tab_format.length!=2)
			{
				errno=12;
			}
			else
			{
				var strexpr = GiveExpr_siren(tab_format[1]);
				if (strexpr!='')
				{
					var expr = new RegExp(strexpr,"gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					else
					{
						// On "nettoie" la chaîne puis on vérifie
						var tab_siren=valeur.split(" ");
						var siren=RLtrim(tab_siren.join(""));
						if (IsSiren(siren,tab_format[1])==false)
						{
							errno=1;
						}
					}
				}
				else
				{
					errno=12;
				}
			}
		}

		// Vérification si format de type 'siret_codepays'
		if (format.indexOf("siret_") > -1)
		{
			swformat=false;
			var tab_format = format.split("_");
			if (tab_format.length!=2)
			{
				errno=12;
			}
			else
			{
				var strexpr = GiveExpr_siret(tab_format[1]);
				if (strexpr!='')
				{
					var expr = new RegExp(strexpr,"gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					else
					{
						// On "nettoie" la chaîne puis on vérifie
						var tab_siret=valeur.split(" ");
						var siret=RLtrim(tab_siret.join(""));
						if (IsSiret(siret,tab_format[1])==false)
						{
							errno=1;
						}
					}
				}
				else
				{
					errno=12;
				}
			}
		}

		// Vérification si format de type 'rib_codepays'
		if (format.indexOf("rib_") > -1)
		{
			swformat=false;
			var tab_format = format.split("_");
			if (tab_format.length!=2)
			{
				errno=12;
			}
			else
			{
				var strexpr = GiveExpr_rib(tab_format[1]);
				if (strexpr!='')
				{
					var expr = new RegExp(strexpr,"gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					else
					{
						if (IsRIB(valeur,tab_format[1])==false)
						{
							errno=1;
						}
					}
				}
				else
				{
					errno=12;
				}
			}
		}

		// Vérification si format de type 'iban_codepays'
		if (format.indexOf("iban_") > -1)
		{
			swformat=false;
			var tab_format = format.split("_");
			if (tab_format.length!=2)
			{
				errno=12;
			}
			else
			{
				var strexpr = GiveExpr_iban(tab_format[1]);
				if (strexpr!='')
				{
					var expr = new RegExp(strexpr,"gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					else
					{
						if (IsIBAN(valeur)==false)
						{
							errno=1;
						}
					}
				}
				else
				{
					errno=12;
				}
			}
		}

		// Vérification si format de type 'imt_codepays'
		if (format.indexOf("imt_") > -1)
		{
			swformat=false;
			var tab_format = format.split("_");
			if (tab_format.length!=2)
			{
				errno=12;
			}
			else
			{
				var strexpr = GiveExpr_imt(tab_format[1]);
				if (strexpr!='')
				{
					var expr = new RegExp(strexpr,"gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
				}
				else
				{
					errno=12;
				}
			}
		}

		if (swformat==true)
		{
			switch (format)
			{
				// Date
				case 'date':
					if (IsDate(valeur,masque)==false)
					{
						errno=1;
					}
					else
					{
						if (DateInMinMax(valeur,vmn,vmx,masque)==false)
						{
							errno=4;
						}
					}
					break;
		
				// Email
				case 'mail':
					var expr = new RegExp("^[a-z0-9_\-]+(\.[a-z0-9_\-]+)*@[a-z0-9\-]*[a-z0-9](\.[a-z0-9\-]*[a-z0-9])*[\.][a-z]{2,4}$","gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					break;

				// Téléphone en fonction du pays
				case 'tel':
					var strexpr = GiveExpr_tel(pays);
					if (strexpr!='')
					{
						var expr = new RegExp(strexpr,"gi");
						if ( !expr.test(valeur) )
						{
							errno=1;
						}
					}
					else
					{
						errno=13;
					}
					break;
					
				// Téléphone portable en fonction du pays
				case 'telp':
					var strexpr = GiveExpr_telp(pays);
					if (strexpr!='')
					{
						var expr = new RegExp(strexpr,"gi");
						if ( !expr.test(valeur) )
						{
							errno=1;
						}
					}
					else
					{
						errno=13;
					}
					break;

				// Numéro de sécurité sociale en fonction du pays
				case 'secu':
					var strexpr = GiveExpr_secu(pays);
					if (strexpr!='')
					{
						var expr = new RegExp(strexpr,"gi");
						if ( !expr.test(valeur) )
						{
							errno=1;
						}
					}
					else
					{
						errno=13;
					}
					break;

				// code postal en fonction du pays
				case 'cp':
					var strexpr = GiveExpr_cp(pays);
					if (strexpr!='')
					{
						var expr = new RegExp(strexpr,"gi");
						if ( !expr.test(valeur) )
						{
							errno=1;
						}
					}
					else
					{
						errno=13;
					}
					break;

				// naf en fonction du pays
				case 'naf':
					var strexpr = GiveExpr_naf(pays);
					if (strexpr!='')
					{
						var expr = new RegExp(strexpr,"gi");
						if ( !expr.test(valeur) )
						{
							errno=1;
						}
					}
					else
					{
						errno=13;
					}
					break;

				// numéro fiscal en fonction du pays
				case 'nf':
					var strexpr = GiveExpr_nf(pays);
					if (strexpr!='')
					{
						var expr = new RegExp(strexpr,"gi");
						if ( !expr.test(valeur) )
						{
							errno=1;
						}
					}
					else
					{
						errno=13;
					}
					break;

				// SIREN en fonction du code pays
				case 'siren':
					var strexpr = GiveExpr_siren(pays);
					if (strexpr!='')
					{
						var expr = new RegExp(strexpr,"gi");
						if ( !expr.test(valeur) )
						{
							errno=1;
						}
						else
						{
							// On "nettoie" la chaîne puis on vérifie
							var tab_siren=valeur.split(" ");
							var siren=RLtrim(tab_siren.join(""));
							if (IsSiren(siren,pays)==false)
							{
								errno=1;
							}
						}
					}
					else
					{
						errno=13;
					}
					break;
		
				// SIRET en fonction du code pays
				case 'siret':
					var strexpr = GiveExpr_siret(pays);
					if (strexpr!='')
					{
						var expr = new RegExp(strexpr,"gi");
						if ( !expr.test(valeur) )
						{
							errno=1;
						}
						else
						{
							// On "nettoie" la chaîne puis on vérifie
							var tab_siret=valeur.split(" ");
							var siret=RLtrim(tab_siret.join(""));
							if (IsSiret(siret,pays)==false)
							{
								errno=1;
							}
						}
					}
					else
					{
						errno=13;
					}
					break;
		
				// RIB en fonction du code pays
				case 'rib':
					var strexpr = GiveExpr_rib(pays);
					if (strexpr!='')
					{
						var expr = new RegExp(strexpr,"gi");
						if ( !expr.test(valeur) )
						{
							errno=1;
						}
						else
						{
							if (IsRIB(valeur,pays)==false)
							{
								errno=1;
							}
						}
					}
					else
					{
						errno=13;
					}
					break;
		
				// IBAN en fonction du code pays
				case 'iban':
					var strexpr = GiveExpr_iban(pays);
					if (strexpr!='')
					{
						var expr = new RegExp(strexpr,"gi");
						if ( !expr.test(valeur) )
						{
							errno=1;
						}
						else
						{
							if (IsIBAN(valeur)==false)
							{
								errno=1;
							}
						}
					}
					else
					{
						errno=13;
					}
					break;
		
				// EAN-8
				case 'ean8':
					if (IsEAN8(valeur)==false)
					{
						errno=1;
					}
					break;
		
				// EAN-13
				case 'ean13':
					if (IsEAN13(valeur)==false)
					{
						errno=1;
					}
					break;
		
				// GTIN-8
				case 'gtin8':
					if (IsGTIN8(valeur)==false)
					{
						errno=1;
					}
					break;
		
				// GTIN-12
				case 'gtin12':
					if (IsGTIN12(valeur)==false)
					{
						errno=1;
					}
					break;
		
				// GTIN-13
				case 'gtin13':
					if (IsGTIN13(valeur)==false)
					{
						errno=1;
					}
					break;
		
				// GTIN-14
				case 'gtin14':
					if (IsGTIN14(valeur)==false)
					{
						errno=1;
					}
					break;
		
				// ISBN-10
				case 'isbn10':
					if (IsISBN10(valeur)==false)
					{
						errno=1;
					}
					break;
		
				// ISBN-13
				case 'isbn13':
					if (IsISBN13(valeur)==false)
					{
						errno=1;
					}
					break;
		
				// ISSN
				case 'issn':
					if (IsISSN(valeur)==false)
					{
						errno=1;
					}
					break;
		
				// SSCC
				case 'sscc':
					if (IsSSCC(valeur)==false)
					{
						errno=1;
					}
					break;
		
				// TVA en fonction du code pays
				case 'tva':
					var strexpr = GiveExpr_tva(pays);
					if (strexpr!='')
					{
						var expr = new RegExp(strexpr,"gi");
						if ( !expr.test(valeur) )
						{
							errno=1;
						}
						else
						{
							if (IsTVA(valeur,pays)==false)
							{
								errno=1;
							}
						}
					}
					else
					{
						errno=13;
					}
					break;
		
				// Immatriculation en fonction du code pays
				case 'imt':
					var strexpr = GiveExpr_imt(pays);
					if (strexpr!='')
					{
						var expr = new RegExp(strexpr,"gi");
						if ( !expr.test(valeur) )
						{
							errno=1;
						}
					}
					else
					{
						errno=13;
					}
					break;
		
				// Adresse IP V4
				case 'ip':
					var expr = new RegExp("^[0-9]{1,3}[\.][0-9]{1,3}[\.][0-9]{1,3}[\.][0-9]{1,3}$","gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					else // On vérifie la validité de l'adresse IP saisie
					{
						var tab_ip=valeur.split('.');
						var n=0;
						var tstip=true;
						while ((n<4) && (tstip==true)) 
						{
							if (parseInt(tab_ip[n])>255)
							{
								tstip=false;
							}
							n++;
						}
						if (tstip==false)
						{
							errno=1;
						}
					}
					break;
	
				// Adresse IP V6
				case 'ip6':
					var expr = new RegExp("^(^(([0-9A-F]{1,4}(((:[0-9A-F]{1,4}){5}::[0-9A-F]{1,4})|((:[0-9A-F]{1,4}){4}::[0-9A-F]{1,4}(:[0-9A-F]{1,4}){0,1})|((:[0-9A-F]{1,4}){3}::[0-9A-F]{1,4}(:[0-9A-F]{1,4}){0,2})|((:[0-9A-F]{1,4}){2}::[0-9A-F]{1,4}(:[0-9A-F]{1,4}){0,3})|(:[0-9A-F]{1,4}::[0-9A-F]{1,4}(:[0-9A-F]{1,4}){0,4})|(::[0-9A-F]{1,4}(:[0-9A-F]{1,4}){0,5})|(:[0-9A-F]{1,4}){7}))$|^(::[0-9A-F]{1,4}(:[0-9A-F]{1,4}){0,6})$)|^::$)|^((([0-9A-F]{1,4}(((:[0-9A-F]{1,4}){3}::([0-9A-F]{1,4}){1})|((:[0-9A-F]{1,4}){2}::[0-9A-F]{1,4}(:[0-9A-F]{1,4}){0,1})|((:[0-9A-F]{1,4}){1}::[0-9A-F]{1,4}(:[0-9A-F]{1,4}){0,2})|(::[0-9A-F]{1,4}(:[0-9A-F]{1,4}){0,3})|((:[0-9A-F]{1,4}){0,5})))|([:]{2}[0-9A-F]{1,4}(:[0-9A-F]{1,4}){0,4})):|::)((25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{0,2})\.){3}(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{0,2})$$","gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					break;
	
				// Adresse MAC
				case 'mac':
					var expr = new RegExp("^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$|^([0-9a-fA-F][0-9a-fA-F]-){5}([0-9a-fA-F][0-9a-fA-F])$","gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					break;
	
				// Hexadécimal
				case 'hexa':
					if (IsHexa(valeur)==false)
					{
						errno=1;
					}
					else
					{
						if (ValInMinMax(parseInt(valeur),vmn,vmx)==false)
						{
							errno=4;
						}
					}
					break;
	
				// Hexadécimal couleur
				case 'hexacol':
					if (IsHexaCol(valeur)==false)
					{
						errno=1;
					}
					else
					{
						if (ValInMinMax(parseInt(valeur),vmn,vmx)==false)
						{
							errno=4;
						}
					}
					break;
	
				// Non signé
				case 'unsigned':
					if (IsUnsigned(valeur)==false)
					{
						errno=1;
					}
					else
					{
						if (ValInMinMax(parseInt(valeur),vmn,vmx)==false)
						{
							errno=4;
						}
					}
					break;
	
				// Nombre entier
				case 'entier':
					if (IsInteger(valeur)==false)
					{
						errno=1;
					}
					else
					{
						if (ValInMinMax(parseInt(valeur),vmn,vmx)==false)
						{
							errno=4;
						}
					}
					break;
	
				// Nombre réel
				case 'reel':
					if (IsReal(valeur)==false)
					{
						errno=1;
					}
					else
					{
						if (ValInMinMax(parseFloat(valeur),vmn,vmx)==false)
						{
							errno=4;
						}
					}
					break;
	
				// Nombre réel non signé
				case 'reel_ns':
					if (IsRealUnsigned(valeur)==false)
					{
						errno=1;
					}
					else
					{
						if (ValInMinMax(parseFloat(valeur),vmn,vmx)==false)
						{
							errno=4;
						}
					}
					break;
	
				// Tout texte
				case 'txt':
					break;
	
				// Alphabétique seulement
				case 'alpha':
					var expr = new RegExp("^[a-z]*$","gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					break;
	
				// Alphabétique seulement (minuscules)
				case 'alphamin':
					var expr = new RegExp("^[a-z]*$","g");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					break;
	
				// Alphabétique seulement (majuscules)
				case 'alphamaj':
					var expr = new RegExp("^[A-Z]*$","g");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					break;
	
				// Alphanumérique
				case 'alphanum':
					var expr = new RegExp("^[a-z0-9]*$","gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					break;
	
				// Alphanumérique (minuscules seulement)
				case 'alphanummin':
					var expr = new RegExp("^[a-z0-9]*$","g");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					break;
	
				// Alphanumérique (majuscules seulement)
				case 'alphanummaj':
					var expr = new RegExp("^[A-Z0-9]*$","g");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					break;
	
				// Préfixe
				case 'extens':
					if ((valeur.length>=3) && (valeur.length<=4))
					{
						var val1=valeur.charAt(0);
						if (val1=='.')
						{
							var val2=valeur.substr(1,valeur.length-1);
							var expr = new RegExp("^[a-z0-9]*$","g");
							if ( !expr.test(val2) )
							{
								errno=1;
							}
						}
						else
						{
							errno=1;
						}
					}
					else
					{
						errno=1;
					}
					break;
	
				// Chemin
				case 'chemin':
					var expr = new RegExp("^[a-z0-9_/]*$","gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					break;
	
				// Heure
				case 'heure':
					ok=IsHeure(valeur);
					if (ok==false)
					{
						errno=1;
					}
					else
					{
						if (ValInMinMax(ConvertHeureSec(valeur),vmn,vmx)==false)
						{
							errno=4;
						}
					}
					break;
	
				// Heure hh:mm
				case 'heurehhmm':
					if (IsHeurehhmm(valeur)==false)
					{
						errno=1;
					}
					else
					{
						if (ValInMinMax(ConvertHeurehhmmSec(valeur),vmn,vmx)==false)
						{
							errno=4;
						}
					}
					break;
	
				// Durée
				case 'duree':
					if (IsDuree(valeur)==false)
					{
						errno=1;
					}
					else
					{
						if (ValInMinMax(ConvertDureeSec(valeur),vmn,vmx)==false)
						{
							errno=4;
						}
					}
					break;
		
				// Durée hh:mm
				case 'dureehhmm':
					if (IsDureehhmm(valeur)==false)
					{
						errno=1;
					}
					else
					{
						if (ValInMinMax(ConvertDureehhmmSec(valeur),vmn,vmx)==false)
						{
							errno=4;
						}
					}
					break;
		
				// url (avec préfixe http / https / ftp / ftps / sftp / telnet / gopher)
				case 'url_pref':
					var expr = new RegExp("^(http(s?)|ftp(s?)|sftp|telnet|gopher)\://([a-z0-9_\-]+[\:][a-z0-9_\-]+@)?([0-9]{1,3}[\.][0-9]{1,3}[\.][0-9]{1,3}[\.][0-9]{1,3}|[a-z0-9_\-]+([\.][a-z0-9_\-]+){1,}[\.][a-z]{2,})?([\/][a-zA-Z0-9\-\.\?\,\'\/\\\+=&%\$#_]*)?$","gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					break;
		
				// url (sans préfixe)
				case 'url_npref':
					var expr = new RegExp("^([a-z0-9_\-]+[\:][a-z0-9_\-]+@)?([0-9]{1,3}[\.][0-9]{1,3}[\.][0-9]{1,3}[\.][0-9]{1,3}|[a-z0-9_\-]+([\.][a-z0-9_\-]+){1,}[\.][a-z]{2,})([\:][0-9]{2,})?([\/][a-zA-Z0-9\-\.\?\,\'\/\\\+=&%\$#_]*)?$","gi");
					if ( !expr.test(valeur) )
					{
						errno=1;
					}
					break;
		
				// mot de passe
				case 'pw':
					if (GivePwQ(valeur)<parseInt(pwq))
					{
						errno=11;
					}
					break;
		
				default:
					break;
			}
		}
	}
	
	return errno;
}

// Routine de contrôle du formulaire
function VForm(formulaire,a_champs,pays,lng)
{	
	var txt_pop=''; // Texte du popup d'erreur
	

	if (pays=='')
	{
		pays='fr';
	}
	else
	{
		pays=pays.toLowerCase();
	}
	
	/***********************************/
	/**  Partie à traduire si besoin  **/
	/** To be translated if necessary **/
	/***********************************/
	switch(lng.toLowerCase())
	{
		case 'en' :
			var txttabpasdef = "Parameters array not defined";
			var nchp="Field";
			var txtpw1='Your password has a quality of';
			var txt1enum = "on one of the enumarations";
			var tab_messerr = new Array(
			"Required field",
			"Field is not valid",
			"Field length is less than required",
			"Field length is more than required",
			"Field is not inside required values",
			"Bad number of selected options",
			"Bad selected option",
			"The field to compare si not the same type",
			"The 2 input are not the same",
			"The 2 fields to be compared have different structure",
			"Problem on your password field parameters",
			"Problem on your password entry",
			"Unknown field type",
			"Country not managed");
			var tab_mpop = new Array(
			"Problem on an enumerating char",
			"One of the fiels doesn't exist or is not an input field",
			"Bad definition of the fiels in the array or in the form");
			var hlp_pw = "Important remind about passwords :\n";
			hlp_pw += "-- They must be at least 7 chars length.";
			hlp_pw += "\n-- They must include at least an uppercase letter.";
			hlp_pw += "\n-- They must include at least a lowercase letter.";
			hlp_pw += "\n-- They must include at least one number.";
			hlp_pw += "\n-- They must include à least the underscore ('_') character.";
			hlp_pw += "\n-- They must include at least one special character ('-,#,@,%,!,$,*,&,<,>').";
			hlp_pw += "\n-- They must include at least a special bracket ('[,],{,}').";
			hlp_pw += "\n-- They must start with at least one letter.";
			hlp_pw += "\n-- It is not recommended to input a space.";
			break;
		default : // Français
			var txttabpasdef = "Tableau de paramétrage non défini";
			var nchp="Champ";
			var txtpw1='Votre mot de passe possède un indice de qualité de';
			var txt1enum = "sur une des énumérations";
			var tab_messerr = new Array(
			"Champ obligatoire",
			"Saisie non valide",
			"Saisie inférieure à la longueur minimum demandée",
			"Saisie supérieure à la longueur maximum demandée",
			"Valeur en dehors de la fourchette demandée",
			"Mauvaise quantité d'options sélectionnées",
			"Mauvaise option sélectionnée",
			"Le champ à comparer n'est pas du même type",
			"Les 2 saisies ne sont pas identiques",
			"Structures des 2 champs à comparer différentes",
			"Problème sur les paramètres du mot de passe",
			"Problème sur votre saisie du mot de passe",
			"Type de champ inconnu",
			"Pays non géré");
			var tab_mpop = new Array(
			"Problème sur le caractère d'énumération",
			"Un des champs n'existe pas ou n'est pas un champ de saisie",
			"Mauvaise définition des champs dans le tableau ou le formulaire");
			var hlp_pw = "Rappel important sur les mots de passe :\n";
			hlp_pw += "-- Ils doivent au moins faire 7 caractères.";
			hlp_pw += "\n-- Il doit y avoir au moins une majuscule.";
			hlp_pw += "\n-- Il doit y avoir au moins une minuscule.";
			hlp_pw += "\n-- Il doit y avoir au moins un chiffre.";
			hlp_pw += "\n-- Il doit y avoir au moins le caractère souligné ('_').";
			hlp_pw += "\n-- Il doit y avoir au moins un caractère spécial ('-,#,@,%,!,$,*,&,<,>').";
			hlp_pw += "\n-- Il doit y avoir au moins une parenthèse spéciale ('[,],{,}').";
			hlp_pw += "\n-- Il vaut mieux commencer par une lettre.";
			hlp_pw += "\n-- Il n'est pas recommandé d'entrer des espaces.";
			break;
	}
	/**********************************/
	
	if (a_champs)
	{
		for (var no_champ=0; no_champ<a_champs.length; no_champ++)
		{
			var long_saisie=0;
			// Les champs étant séparés par des ";", on éclate la chaîne
			var tab_prm=RLtrim(a_champs[no_champ]).split(";");
			var	tab_prmchamp=new Array();
			// On contrôle tous les paramètres un par un
			for (var no_prm=0; no_prm<tab_prm.length; no_prm++ )
			{
				// Les paramètres étant de la forme "nom_prm : valeur", on éclate la chaîne
				tab_typeprm=RLtrim(tab_prm[no_prm]).split(":");
				
				if ((tab_typeprm.length)>=2)
				{
					// On reconstruit le paramètre (par exemple s'il est de la format hh:mm:ss, vform l'aura éclaté en tableau)
					var str_prm='';
					for (var idx=1; idx<tab_typeprm.length; idx++)
					{
						str_prm+=RLtrim(tab_typeprm[idx])+':';
					}
					
					// On élimine le dernier ':'
					str_prm=str_prm.substr(0,str_prm.length-1);
					
					// On crée le paramètre final
					tab_prmchamp[RLtrim(tab_typeprm[0].toLowerCase())]=str_prm;
				}
			}

			var ok=true;

			// Contrôle du nom
			if (tab_prmchamp["nom"])
			{
				var nom_champ=RLtrim(tab_prmchamp["nom"]);
				var champ=document.getElementsByName(nom_champ);

				if (champ && champ.length>0) 
				{
					// Contrôle du champ de comparaison (s'il existe...sinon, on ne compare rien)
					if (tab_prmchamp["comp"])
					{
						var nom_champcomp=RLtrim(tab_prmchamp["comp"]);
						var champcomp=document.getElementsByName(nom_champcomp);
		
						if (!champcomp || champcomp.length<=0) 
						{
							delete(tab_prmchamp["comp"]);
						}
						else
						{
							var type_champcomp=champcomp[0].type;
							var val_champcomp=champcomp[0].value;
						}
					}
				
					var type_champ=champ[0].type;
					var val_champ=champ[0].value;

					// On contrôle que les paramètres "minimum" existent, sinon valeur par défaut
		
					// Champ requis ?
					if ( !tab_prmchamp["req"] )
					{
						tab_prmchamp["req"]=false;
					}
					else
					{
						if ((tab_prmchamp["req"]=="Y") || (tab_prmchamp["req"]=="y") || (tab_prmchamp["req"]=="O") || (tab_prmchamp["req"]=="o"))
						{
							tab_prmchamp["req"]=true;
						}
						else
						{
							tab_prmchamp["req"]=false;
						}
					}
		
					// Texte descriptif du champ
					// Si pas existant, on le crée avec le nom du champ
					if ( !tab_prmchamp["txt"] )
					{	
						tab_prmchamp["txt"]=nchp+' '+champ[0].name;
					}

					// Contrôle du cracatère d'énumération (si existe)
					var carenumok=true;
					var avecenum=false;
	
					if (tab_prmchamp["carenum"])
					{
						var carenum=RLtrim(tab_prmchamp["carenum"]);
						
						if (carenum.length!=1)
						{
							delete(tab_prmchamp["carenum"]);
							carenumok=false;
						}
						else
						{
							switch (type_champ.toLowerCase())
							{
							// Dans ces 4 cas, il est inutile de définir une énumération
							case 'select-one':
							case 'select-multiple':
							case 'radio':
							case 'checkbox':
								carenum='';
								avecenum=false;
								delete(tab_prmchamp["carenum"]);
								break;
							default:
								var tab_enum=RLtrim(val_champ).split(carenum);
								avecenum=true;
								break;
							}
						}
						
					}
					
					if (carenumok==true)
					{
						var errno=-1;
						var ok=true;
						
						// Test si champ obligatoire
						// S'il est vide, ce n'est même pas la peine de tester le reste
						if (tab_prmchamp["req"]==true) // le champ est obligatoire
						{
							switch (type_champ.toLowerCase())
							{
								case 'text':
								case 'textarea':
								case 'password':
								case 'file':
									if (avecenum==true)
									{
										var no_enum=0;
										while ((no_enum<tab_enum.length) && (errno==-1))
										{
											if (ChampEstVide(tab_enum[no_enum]))
											{
												errno=0;
											}
											no_enum++;
										}
									}
									else
									{
										if (ChampEstVide(val_champ))
										{
											errno=0;
										}
									}
									break;
								case 'select-one':
									var sel_champ=champ[0].selectedIndex;
									if (parseInt(sel_champ)<0)
									{
										errno=0;
									}
									break;
								case 'select-multiple':
									if (NbElementsSel(champ)==0)
									{
										errno=0;
									}
									break;
								case 'radio':
								case 'checkbox':
									if (NbElementsChk(champ)==0)
									{
										errno=0;
									}
									break;
								default:
									break;
							}
						}
					
						if (errno>=0)
						{
							ok=false;
						}

						// Le test" champ requis" est passé, on vérifie si c'est un mot de passe
						if (ok==true)
						{
							// Format
							if (!tab_prmchamp["format"])
							{
								tab_prmchamp["format"]="";
							}
	
							// Contrôle si mot de passe
							if (tab_prmchamp["format"]=="pw")
							{
								if (tab_prmchamp["pwq"])
								{
									if ((parseInt(tab_prmchamp["pwq"])<0) || (parseInt(tab_prmchamp["pwq"])>8))
									{
										errno=10;
									}
								}
								else
								{
									errno=10;
								}
							}
						}
								
						if (errno>=0)
						{
							ok=false;
						}

						// Le test "mot de passe" est passé, on vérifie maintenant "longueur mini" et "longueur maxi"
						if (ok==true)
						{
							// Longueur Minimum (pour liste : nb minimum de sélectionnés)
							if (tab_prmchamp["lmn"])
							{
								// Défini : on vérifie si c'est bien un entier non signé
								if (IsUnsigned(tab_prmchamp["lmn"]))  // Oui, on converti en entier
								{
									tab_prmchamp["lmn"]=parseInt(tab_prmchamp["lmn"]);
								}
								else // Non, on affecte une longueur mini (puisque d'un minimum a été demandé, mais qu'il est faux)
								{
									tab_prmchamp["lmn"]=0;
								}
								
								// On contrôle la longueur mini de la saisie
								switch (type_champ.toLowerCase())
								{
									case 'text':
									case 'textarea':
									case 'password':
									case 'file':
										if (avecenum==true)
										{
											var no_enum=0;
											while ((no_enum<tab_enum.length) && (errno==-1))
											{
												if (ChampEstVide(tab_enum[no_enum]))
												{
													long_saisie=0;
												}
												else
												{
													long_saisie=parseInt(tab_enum[no_enum].length);
												}
												if (long_saisie<tab_prmchamp["lmn"])
												{
													errno=2;
												}
												no_enum++;
											}
										}
										else
										{
											if (ChampEstVide(val_champ))
											{
												long_saisie=0;
											}
											else
											{
												long_saisie=parseInt(val_champ.length);
											}
											if (long_saisie<tab_prmchamp["lmn"])
											{
												errno=2;
											}
										}
										break;
									case 'select-multiple':
										if (NbElementsSel(champ)<tab_prmchamp["lmn"])
										{
											errno=2;
										}
										break;
									case 'checkbox':
										if (NbElementsChk(champ)<tab_prmchamp["lmn"])
										{
											errno=2;
										}
										break;
									default:
										break;
								}
							}
						
							if (errno>=0)
							{
								ok=false;
							}
		
							// Le test" champ requis" est passé, on vérifie maintenant "longueur mini" et "longueur maxi"
							if (ok==true)
							{
								// Longueur Maximum (pour liste : nb minimum de sélectionnés)
								if (tab_prmchamp["lmx"])
								{
									// Défini : on vérifie si c'est bien un entier non signé
									if (IsUnsigned(tab_prmchamp["lmx"])) // Oui, on converti en entier
									{
										tab_prmchamp["lmx"]=parseInt(tab_prmchamp["lmx"]);
									}
									else // Non, on affecte une longueur maxi (puisque d'un maximum a été demandé, mais qu'il est faux)
									{
										switch (type_champ.toLowerCase())
										{
											case 'text':
											case 'textarea':
											case 'password':
											case 'file':
												max_length=Number(champ.maxlength);
												if (max_length)
												{
													tab_prmchamp["lmx"]=max_length;
												}
												else
												{
													tab_prmchamp["lmx"]=0;
												}
												break;
											case 'select-one':
											case 'select-multiple':
												// Le maxi est le nombre maximum d'éléments de la liste
												tab_prmchamp["lmx"]=champ[0].options.length;
												break;
											case 'radio':
											case 'checkbox':
												// Le maxi est le nombre maximum d'éléments à cocher
												tab_prmchamp["lmx"]=champ.length;
											default:
												break;
										}
									}
									
									// On contrôle la longueur maxi de la saisie
									switch (type_champ.toLowerCase())
									{
										case 'text':
										case 'textarea':
										case 'password':
										case 'file':
											if (avecenum==true)
											{
												var no_enum=0;
												while ((no_enum<tab_enum.length) && (errno==-1))
												{
													if (ChampEstVide(tab_enum[no_enum]))
													{
														long_saisie=0;
													}
													else
													{
														long_saisie=parseInt(tab_enum[no_enum].length);
													}
													if (long_saisie>tab_prmchamp["lmx"])
													{
														errno=3;
													}
													no_enum++;
												}
											}
											else
											{
												if (ChampEstVide(val_champ))
												{
													long_saisie=0;
												}
												else
												{
													long_saisie=parseInt(val_champ.length);
												}
												if (long_saisie>tab_prmchamp["lmx"])
												{
													errno=3;
												}
											}
											break;
										case 'select-multiple':
											if (NbElementsSel(champ)>tab_prmchamp["lmx"])
											{
												errno=3;
											}
											break;
										case 'checkbox':
											if (NbElementsChk(champ)>tab_prmchamp["lmx"])
											{
												errno=3;
											}
											break;
										default:
											break;
									}
								}
							}
		
							if (errno>=0)
							{
								ok=false;
							}
		
							// Si les paramètres "longueur de champ" sont passés, on vérifie maintenant le paramètre
							// "valeur mini" et on le modifie si besoin
							if (ok==true)
							{
								// Valeur Minimum (vérifiée et modifiée que si paramétrée)
								if (tab_prmchamp["vmn"])
								{
									switch (tab_prmchamp["format"])
									{
										case 'date':
											// Défini : on vérifie si c'est bien une date valable au format demandé
											if (IsDate(tab_prmchamp["vmn"],tab_prmchamp["masque"])) // Oui
											{
												break;
											}
											else // Non
											{
												delete(tab_prmchamp["vmn"]);
											}
											break;
										case 'hexa':
											// Défini : on vérifie si c'est bien un héxadécimal
											if (IsHexa(tab_prmchamp["vmn"])) // Oui
											{
												tab_prmchamp["vmn"]=parseInt(tab_prmchamp["vmn"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmn"]);
											}
											break;
										case 'unsigned':
											// Défini : on vérifie si c'est bien un non signé
											if (IsUnsigned(tab_prmchamp["vmn"])) // Oui
											{
												tab_prmchamp["vmn"]=parseInt(tab_prmchamp["vmn"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmn"]);
											}
											break;
										case 'entier':
											// Défini : on vérifie si c'est bien un entier
											if (IsInteger(tab_prmchamp["vmn"])) // Oui
											{
												tab_prmchamp["vmn"]=parseInt(tab_prmchamp["vmn"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmn"]);
											}
											break;
										case 'reel':
											// Défini : on vérifie si c'est bien un réel
											if (IsReal(tab_prmchamp["vmn"])) // Oui
											{
												tab_prmchamp["vmn"]=parseFloat(tab_prmchamp["vmn"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmn"]);
											}
											break;
										case 'reel_ns':
											// Défini : on vérifie si c'est bien un réel non signé
											if (IsRealUnsigned(tab_prmchamp["vmn"])) // Oui
											{
												tab_prmchamp["vmn"]=parseFloat(tab_prmchamp["vmn"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmn"]);
											}
											break;
										case 'heure':
											// Défini : on vérifie si c'est bien une heure
											if (IsHeure(tab_prmchamp["vmn"])) // Oui
											{
												tab_prmchamp["vmn"]=ConvertHeureSec(tab_prmchamp["vmn"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmn"]);
											}
											break;
										case 'heurehhmm':
											// Défini : on vérifie si c'est bien une heure
											if (IsHeurehhmm(tab_prmchamp["vmn"])) // Oui
											{
												tab_prmchamp["vmn"]=ConvertHeurehhmmSec(tab_prmchamp["vmn"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmn"]);
											}
											break;
										case 'duree':
											// Défini : on vérifie si c'est bien une heure
											if (IsDuree(tab_prmchamp["vmn"])) // Oui
											{
												tab_prmchamp["vmn"]=ConvertDureeSec(tab_prmchamp["vmn"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmn"]);
											}
											break;
										case 'dureehhmm':
											// Défini : on vérifie si c'est bien une heure
											if (IsDureehhmm(tab_prmchamp["vmn"])) // Oui
											{
												tab_prmchamp["vmn"]=ConvertDureehhmmSec(tab_prmchamp["vmn"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmn"]);
											}
											break;
										case 'liste':
										case 'listem':
										case'radio':
										case 'checkbox':
											// Défini : on vérifie si c'est bien un entier
											if (IsUnsigned(tab_prmchamp["vmn"])) // Oui
											{
												tab_prmchamp["vmn"]=parseInt(tab_prmchamp["vmn"]);
											}
											else // Non
											{
												tab_prmchamp["vmn"]=0; // Mini = 1er élément de la liste
											}
											break;
										default:
											delete(tab_prmchamp["vmn"]);
											break;
									}
								}
							}
							
							if (errno>=0)
							{
								ok=false;
							}
		
							// On vérifie maintenant le paramètre "valeur maxi" et on le modifie si besoin
							if (ok==true)
							{
								// Valeur Maximum (vérifiée et modifiée que si paramétrée)
								if (tab_prmchamp["vmx"])
								{
									switch (tab_prmchamp["format"] )
									{
										case 'date':
											// Défini : on vérifie si c'est bien une date valable au format demandé
											if (IsDate(tab_prmchamp["vmx"],tab_prmchamp["masque"])) // Oui
											{
												break;
											}
											else // Non
											{
												delete(tab_prmchamp["vmx"]);
											}
											break;
										case 'hexa':
											// Défini : on vérifie si c'est bien un héxadécimal
											if (IsHexa(tab_prmchamp["vmx"])) // Oui
											{
												tab_prmchamp["vmx"]=parseInt(tab_prmchamp["vmx"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmn"]);
											}
											break;
										case 'unsigned':
											// Défini : on vérifie si c'est bien un non signé
											if (IsUnsigned(tab_prmchamp["vmx"])) // Oui
											{
												tab_prmchamp["vmx"]=parseInt(tab_prmchamp["vmx"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmx"]);
											}
											break;
										case 'entier':
											// Défini : on vérifie si c'est bien un entier
											if (IsInteger(tab_prmchamp["vmx"])) // Oui
											{
												tab_prmchamp["vmx"]=parseInt(tab_prmchamp["vmx"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmx"]);
											}
											break;
										case 'reel':
											// Défini : on vérifie si c'est bien un réel
											if (IsReal(tab_prmchamp["vmx"])) // Oui
											{
												tab_prmchamp["vmx"]=parseFloat(tab_prmchamp["vmx"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmx"]);
											}
											break;
										case 'reel_ns':
											// Défini : on vérifie si c'est bien un réel non signé
											if (IsRealUnsigned(tab_prmchamp["vmx"])) // Oui
											{
												tab_prmchamp["vmx"]=parseFloat(tab_prmchamp["vmx"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmx"]);
											}
											break;
										case 'heure':
											// Défini : on vérifie si c'est bien une heure
											if (IsHeure(tab_prmchamp["vmx"])) // Oui
											{
												tab_prmchamp["vmx"]=ConvertHeureSec(tab_prmchamp["vmx"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmx"]);
											}
											break;
										case 'heurehhmm':
											// Défini : on vérifie si c'est bien une heure
											if (IsHeurehhmm(tab_prmchamp["vmx"])) // Oui
											{
												tab_prmchamp["vmx"]=ConvertHeurehhmmSec(tab_prmchamp["vmx"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmx"]);
											}
											break;
										case 'duree':
											// Défini : on vérifie si c'est bien une heure
											if (IsDuree(tab_prmchamp["vmx"])) // Oui
											{
												tab_prmchamp["vmx"]=ConvertDureeSec(tab_prmchamp["vmx"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmx"]);
											}
											break;
										case 'dureehhmm':
											// Défini : on vérifie si c'est bien une heure
											if (IsDureehhmm(tab_prmchamp["vmx"])) // Oui
											{
												tab_prmchamp["vmx"]=ConvertDureehhmmSec(tab_prmchamp["vmx"]);
											}
											else // Non
											{
												delete(tab_prmchamp["vmx"]);
											}
											break;
										case 'liste':
										case 'listem':
										case 'radio':
										case 'checkbox':
											// Défini : on vérifie si c'est bien un entier
											if (IsUnsigned(tab_prmchamp["vmx"])) // Oui
											{
												tab_prmchamp["vmx"]=parseInt(tab_prmchamp["vmx"]);
												if (tab_prmchamp["vmx"]>champ.length-1)
												{
													tab_prmchamp["vmx"]=champ.length-1; // Maxi = dernier élémént de la liste
												}
											}
											else // Non
											{
												tab_prmchamp["vmx"]=champ.length-1; // Maxi = dernier élémént de la liste
											}
											break;
										default:
											delete(tab_prmchamp["vmx"]);
											break;
									}
								}
							}
							
							if (errno>=0)
							{
								ok=false;
							}
										
							// Les paramètres de champs sont ok, 
							// On analyse les différents paramètres du type déclaré en fonction du type de champ
							// uniquement si le champ est rempli
							if (ok==true)
							{
								switch (type_champ.toLowerCase())
								{
									case 'radio':
										var prem_checked=-1;
										var n=0;
										while ((n<champ.length) && (prem_checked<0)) 
										{
											if (champ[n].checked)
											{	
												if (prem_checked==-1)
												{
													prem_checked=n;
												}
											}
											n++;
										}
										// On ne teste que si au moins un bouton est choché
										if (prem_checked!=-1)
										{
											// On vérifie si la valeur de case cochée est bien dans la fourchette mini/maxi
											if (ValInMinMax(prem_checked,tab_prmchamp["vmn"],tab_prmchamp["vmx"])==false)
											{
												errno=6;
											}
										}
										break;
								
									case 'checkbox':
										// Nombre de cases cochées
										var prem_checked=-1;
										var nbChecked=0;
										for (var nb=0; nb<champ.length; nb++)
										{
											if (champ[nb].checked)
											{	
												if (prem_checked==-1)
												{
													prem_checked=nb;
												}
												nbChecked++;
											}
										}
										// On ne teste que si au moins une case est cochée
										if (nbChecked>0)
										{
											// On vérifie si la valeur de la ligne sélectionnée est bien dans la fourchette
											if (ValInMinMax(prem_checked,tab_prmchamp["vmn"],tab_prmchamp["vmx"])==false)
											{
												errno=6;
											}
											else // On vérifie si le nombre de lignes sélectionnées est bien dans la fourchette
											{
												if (ValInMinMax(nbChecked,tab_prmchamp["lmn"],tab_prmchamp["lmx"])==false)
												{
													errno=5;
												}
											}
										}
										break;
								
									case 'select-one':
										var sel_champ=champ[0].selectedIndex;
										if (ValInMinMax(parseInt(sel_champ),tab_prmchamp["vmn"],tab_prmchamp["vmx"])==false)
										{
											errno=6;
										}
										break;
		
									case 'select-multiple':
										// Nombre de sélectionnés
										var prem_select=-1;
										var nbSelected=0;
										for (var nb=0; nb<champ[0].options.length; nb++)
										{
											if (champ[0].options[nb].selected)
											{
												if (prem_select==-1)
												{
													prem_select=nb;
												}
												nbSelected++;
											}
										}
										// On vérifie si la valeur de la ligne sélectionnée est bien dans la fourchette
										if (ValInMinMax(prem_select,tab_prmchamp["vmn"],tab_prmchamp["vmx"])==false)
										{
											errno=6;
										}
										
										// On vérifie si le nombre de lignes sélectionnées est bien dans la fourchette
										if (ValInMinMax(nbSelected,tab_prmchamp["lmn"],tab_prmchamp["lmx"])==false)
										{
											errno=5;
										}
										break;
	
									case 'text':
									case 'textarea':
									case 'password':
									case 'file':
										if (avecenum==true)
										{
											var no_enum=0;
											while ((no_enum<tab_enum.length) && (errno==-1))
											{
												errno=valide_champ(pays,tab_enum[no_enum],tab_prmchamp["format"],tab_prmchamp["masque"],tab_prmchamp["vmn"],tab_prmchamp["vmx"],tab_prmchamp["pwq"]);
												no_enum++;
											}
										}
										else
										{
											errno=valide_champ(pays,val_champ,tab_prmchamp["format"],tab_prmchamp["masque"],tab_prmchamp["vmn"],tab_prmchamp["vmx"],tab_prmchamp["pwq"]);
										}
										break;
							
									default:
										break;
								}
							}
		
							if (errno>=0)
							{
								ok=false;
							}
					
							// On vérifie maintenant s'il y a un champ de comparaison
							if (ok==true)
							{
								if (tab_prmchamp["comp"])
								{
									if ((type_champ.toLowerCase())!=(type_champcomp.toLowerCase()))
									{
										errno=7;
									}
									else
									{
										switch (type_champ.toLowerCase())
										{
											case 'radio':
											case 'checkbox':
												// On vérifie la longueur des champs
												if (champ.length==champcomp.length)
												{
													var tstok=true;
													var n=0;
													while ((n<champ.length) && (tstok)) 
													{
														// On vérifie la valeur des champs
														if (champ[n].value==champcomp[n].value)
														{
															// On vérifie s'il ont un état "coché"/"non coché" identique
															if (champ[n].checked!=champcomp[n].checked)
															{
																errno=8;
																tstok=false;
															}
														}
														else
														{
															errno=9;
															tstok=false;
														}
														n++;
													}
												}
												else
												{
													errno=9;
												}
												break;
											case 'text':
											case 'textarea':
											case 'password':
											case 'file':
												if (val_champ!=val_champcomp)
												{
													errno=8;
												}
												break;
											case 'select-one':
												// On vérifie la longueur des champs
												if (champ[0].options.length==champcomp[0].options.length)
												{
													if (champ[0].selectedIndex!=champcomp[0].selectedIndex)
													{
														errno=8;
													}
												}
												else
												{
													errno=9;
												}
												break;
											case 'select-multiple':
												// On vérifie la longueur des champs
												if (champ[0].options.length==champcomp[0].options.length)
												{
													var tstok=true;
													var n=0;
													while ((n<champ[0].options.length) && (tstok)) 
													{
														// On vérifie la valeur des champs
														if (champ[0].options[n].value==champcomp[0].options[n].value)
														{
															// On vérifie s'il ont un état "coché"/"non coché" identique
															if (champ[0].options[n].selected!=champcomp[0].options[n].selected)
															{
																errno=8;
																tstok=false;
															}
														}
														else
														{
															errno=9;
															tstok=false;
														}
														n++;
													}
												}
												else
												{
													errno=9;
												}
												break;
											default:
												break;
										}
									}
								}
							}
						}
						// Construction du message d'erreur
						if (errno>=0)
						{
							// Si style défini pour l'erreur on l'affiche
							if (tab_prmchamp["stbad"])
							{
								champ[0].className=tab_prmchamp["stbad"]; 
								if (tab_prmchamp["comp"])
								{
									champcomp[0].className=tab_prmchamp["stbad"];
								}
							}
							txt_pop+=ConvertAccents(tab_prmchamp["txt"])+' --> '+ConvertAccents(tab_messerr[errno]);
							if (avecenum==true)
							{
								txt_pop+=ConvertAccents(' '+txt1enum);
							}
							if (errno==11)
							{
								txt_pop+='\n\n'+txtpw1+' '+GivePwQ(val_champ);
								switch (nivpw)
								{
									case 0 :
									case 1 :
									case 2 :
										txt_pop+=' (mauvais) :\n';
										break;
									case 3 :
									case 4 :
									case 5 :
										txt_pop+=' (moyen) :\n';
										break;
									case 6 :
									case 7 :
										txt_pop+=' (correct) :\n';
										break;
									case 8 :
									case 9 :
										txt_pop+=' (bon) :\n';
										break;
								}
								txt_pop+='\n\n'+hlp_pw+'\n';
							}
							txt_pop+='\n';
						}
						else
						{
							// Si style défini pour champ ok on l'affiche
							champ[0].className=tab_prmchamp["stok"];
							if (tab_prmchamp["comp"])
							{
								champcomp[0].className=tab_prmchamp["stok"];
							}
						}
					}
					else
					{
						txt_pop=tab_mpop[0];
						alert(ConvertAccents(txt_pop));
						return false;
					}
					
				}
				else
				{
					txt_pop=tab_mpop[1];
					alert(ConvertAccents(txt_pop)+' :\n'+nom_champ);
					return false;
				}
			}
			else
			{
				txt_pop=tab_mpop[2];
				alert(ConvertAccents(txt_pop));
				return false;
			}
		}
	}
	else
	{
		txt_pop=ConvertAccents(txttabpasdef);
	}
	
	// Si texte pop défini, on l'affiche
	if (txt_pop.length>0)
	{	
		alert(txt_pop);
		return false;
	}
	else
	{
		return true;
	}	
}
